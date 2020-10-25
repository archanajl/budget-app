import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';

const demoState = {
    expenses : [{
        id: 'qwa',
        description : 'January Rent',
        note:'Indian address',
        amount : 6000,
        createdAt : 0
    }],
    filters:{
        text: 'rent',
        sortBy:'amount', //amount or date
        startDate: undefined,
        endDate : undefined
    }
}

//Action Generator for expense

const addExpense = ({description = '',note='',amount=0,createdAt =0}={}) =>({
        type:'ADD_EXPENSE',
        expense: {
            id:uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
    }
    )

const removeExpense = ({id} = {}) => ({
    type:'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//Action Generators for Filters

const setTextFilter = (changeText = '') =>({
    type: 'SET_TEXT_FILTER',
    text: changeText
})

const sortByAmount =() =>({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate =() =>({
    type: 'SORT_BY_DATE'
})

const setStartDate =(startDate) =>({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate =(endDate) =>({
    type: 'SET_END_DATE',
    endDate
})


const getVisibleExpense = (expenses, {text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = (expense.description).toLowerCase().includes(text.toLowerCase()) ;
        return  startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })

}
//Expense Reducer

const expenseReducerDefaultState =[];

const expenseReducer = (state = expenseReducerDefaultState,action) =>{
    switch (action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense] ;
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => (id !== action.id))
        case 'EDIT_EXPENSE' :
            return state.map((expense) =>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense
                }
            })
        default:
            return state;
    }
    
}

//Filter Reducer

const filterReducerDefaultState ={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const filterReducer = (state = filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return { 
                    ...state, 
                    text: action.text
                    }
        case 'SORT_BY_DATE':
            return {...state,sortBy:'date'}
        case 'SORT_BY_AMOUNT':
            return {...state,sortBy:'amount'}  
        case 'SET_START_DATE':
            return {...state,startDate:action.startDate}      
            case 'SET_END_DATE':
            return {...state,endDate:action.endDate}     
        default: return state;
    }
}


const store = createStore(
        combineReducers({
            expenses:expenseReducer,
            filters:filterReducer
        })
)

store.subscribe(()=>{
    const stateNow = store.getState();
    console.log(stateNow)
    const expenses = getVisibleExpense(stateNow.expenses,stateNow.filters);
    console.log("Filtered");
    console.log(expenses);
});

const expenseOne = store.dispatch(addExpense({
    description :'books',
    note:'kids',
    amount:100,
    createdAt : -2100
}))

const expenseTwo = store.dispatch(addExpense({
    description :'stationary',
    note:'kids',
    amount:30,
    createdAt : -1000
}))

//store.dispatch(removeExpense({id: expenseOne.expense.id}))

//store.dispatch(editExpense(expenseTwo.expense.id,{amount: 50}))

//store.dispatch(setTextFilter('books'));

//store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());

//store.dispatch(sortByDate());

//store.dispatch(setStartDate(700));

//store.dispatch(setStartDate());

//store.dispatch(setEndDate(200));

//store.dispatch(setEndDate());

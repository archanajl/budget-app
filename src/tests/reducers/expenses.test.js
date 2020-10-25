import expenseReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';


test('should return default state',()=>{
    const state = expenseReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([]);
})

test('should add new expense to state',()=>{
    const expense ={id:'4',description : 'food bill',note: 'bill',amount:600,createdAt : moment(0).valueOf()}
    const state = expenseReducer(expenses,{type:'ADD_EXPENSE',expense})
    expect(state).toEqual([
        expenses[0],
        expenses[1],
        expenses[2],
        expense
    ]);
})

test('should remove valid expense from state',()=>{
    const state = expenseReducer(expenses,{type:'REMOVE_EXPENSE',id:expenses[2].id})
    expect(state).toEqual([
        expenses[0],
        expenses[1]
    ]);
})

test('should not remove invalid expense from state',()=>{
    const state = expenseReducer(expenses,{type:'REMOVE_EXPENSE',id:'4'})
    expect(state).toEqual(expenses);
})

test('should edit expense with valid expense id to state',()=>{
    const updates ={amount:500}
    const state = expenseReducer(expenses,{type:'EDIT_EXPENSE',updates,id:expenses[0].id})
    expect(state[0].amount).toBe(500);
})


test('should not edit expense with invalid expense id to state',()=>{
    const updates ={amount:500}
    const state = expenseReducer(expenses,{type:'EDIT_EXPENSE',updates,id:'5'})
    expect(state).toEqual(expenses);
    
})
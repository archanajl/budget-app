import {createStore} from 'redux';

//Action generators
const incrementCount = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    incrementBy 
}
)
const decrementCount = ({decrementBy = 1}={})=>({
    type:'DECREMENT',
    decrementBy
})
const resetCount = () => ({
    type:'RESET'
}
)
const setCount = ({count} ) => ({
    type:'SET',
    count
})
//Reducers

const countReducer = (state={count : 0}, action)=>{
    switch (action.type){
        case 'INCREMENT' :{
            return {count : state.count + action.incrementBy}
        }
        case 'DECREMENT':{
            return {count : state.count - action.decrementBy}
        }
        case 'SET':{
            return {count : action.count}
        }
        case 'RESET':{
            return {count : 0}
        }
        default :
            return state;
    }
}

const store = createStore(countReducer);

store.subscribe(()=>{
    console.log("State Changed" , store.getState().count)
})

store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 3}));

store.dispatch(resetCount());

store.dispatch(setCount({count:10}));

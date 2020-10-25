import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpense from './selectors/expenses';

const store = configureStore();

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(addExpense({
    description :'water',
    note:'bill',
    amount:4500,
    createdAt : 0
}))
store.dispatch(addExpense({
    description :'gas',
    note:'bill',
    amount:1000,
    createdAt : 1000
}))
store.dispatch(addExpense({
    description :'rent',
    note:'bill',
    amount:10950
}))


const stateNow = store.getState();
const expenses = getVisibleExpense(stateNow.expenses,stateNow.filters);


const jsx = (
    <Provider store ={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));

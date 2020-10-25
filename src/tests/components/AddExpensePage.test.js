import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';
import { TestScheduler } from 'jest';


let addExpense, history, wrapper; 

beforeEach(() => {
    addExpense = jest.fn();
    history = {push : jest.fn()};
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history ={history} />);
    
})

test('should render AddExpensePage correctly',()=>{
    expect(wrapper).toMatchSnapshot();

})

test('should render AddExpensePage correctly with data',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
})

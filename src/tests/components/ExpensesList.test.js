import React from 'react';
import {render, shallow} from 'enzyme';
import {ExpensesList} from '../../components/ExpensesList';
import expenses from '../fixtures/expenses';

test('should render the expenses List with expenses',()=>{
    const wrapper = shallow(<ExpensesList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot();
})

test('should render the expenses List with empty expenses',()=>{
    const wrapper = shallow(<ExpensesList expenses={[]} />)
    expect(wrapper).toMatchSnapshot();
})
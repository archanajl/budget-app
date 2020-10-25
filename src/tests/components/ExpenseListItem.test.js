import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import { TestScheduler } from 'jest';


test('should render Expense Item',()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
})


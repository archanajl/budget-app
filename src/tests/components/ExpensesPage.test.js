import React from 'react';
import {shallow} from 'enzyme'
import ExpensesPage from '../../components/ExpensesPage';

test('should render the expensesPage',()=>{
    const wrapper = shallow(<ExpensesPage />)
    expect(wrapper).toMatchSnapshot();
})
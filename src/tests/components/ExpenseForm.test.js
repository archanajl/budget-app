import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import ExpenseForm from '../../components/ExpenseForm';
import { TestScheduler } from 'jest';
import expenses from '../fixtures/expenses'

test('should render the expense form' ,() => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
})

test('should render the expense form with expense data' ,() => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render error on invalid data',()=>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit',{
        preventDefault : ()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
})

test('should set description for input change of description',() =>{
    const value = 'New Description'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target : {value}
    });
    expect(wrapper.state('description')).toBe(value)
})

test('should set note for textarea change of note',()=>{
    const value = 'New Note'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value);
})

test('should set amount for valid change of amount',()=>{
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target : {value}
    });
    expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount for invalid change of amount',()=>{
    const value = '23.150';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target : {value}
    });
    expect(wrapper.state('amount')).toBe('');
})

test('should call onSubmit prop for valid form submission',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault : ()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description : expenses[0].description,
        amount : expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })

})

test('should set new date on data change' ,() =>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set calendar focussed on focus change' ,() =>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toEqual(focused);
})
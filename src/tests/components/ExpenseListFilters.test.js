import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import { TestScheduler } from 'jest';
import {filters,sampleFilters} from '../fixtures/filters';
import {DateRangePicker} from 'react-dates';
import moment from 'moment';

let setTextFilter, sortByDate,sortByAmount,setStartDate,setEndDate,wrapper ;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
                            filters={filters}
                            setTextFilter ={setTextFilter}
                            sortByAmount = {sortByAmount}
                            sortByDate ={sortByDate}
                            setStartDate = {setStartDate}
                            setEndDate = {setEndDate}
                        />)

})

test('should set Text filter with filters',()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should set Text filter with sample filters',()=>{
    wrapper.setProps( {filters:sampleFilters}  )
    expect(wrapper).toMatchSnapshot();
})

test('should handle Text change',()=>{
    const value = 'rent';
    wrapper.find('input').simulate('change',{target : {value}})
    expect(setTextFilter).toHaveBeenCalledWith(value)
})

test('should sort  By date',()=>{
    const value = 'date';
    wrapper.find('select').simulate('change',{target : {value}})
    expect(sortByDate).toHaveBeenCalledWith()
})

test('should sort  By amount',()=>{
    const value = 'amount';
    wrapper.find('select').simulate('change',{target : {value}})
    expect(sortByAmount).toHaveBeenCalledWith()
})

test('should handle date change',()=>{
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,'years');
    wrapper.find(DateRangePicker).prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenCalledWith(startDate)
    expect(setEndDate).toHaveBeenCalledWith(endDate)
})

test('should handle date focus',()=>{
    const focussed = true;
    wrapper.find(DateRangePicker).prop('onFocusChange')(focussed)
    expect(wrapper.state('calendarFocused')).toBe(focussed)
    
})

import { TestScheduler } from 'jest'
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters'
import moment from 'moment';

test('should set up setTextFilter action object with provided value',()=>{
    const action = setTextFilter('text');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'text'
    })
})

test('should set up setTextFilter action object with default value',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should set up sortByAmount action object',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should set up sortByDate action object',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should set up setStartDAte action object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate : moment(0)
    })
})

test('should set up setEndDAte action object',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate : moment(0)
    })
})
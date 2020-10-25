import { TestScheduler } from 'jest'
import selectExpenses from '../../selectors/expenses'
import moment from 'moment';
import expenses from '../fixtures/expenses';


test('should filter by text value',() => {
    const filters ={
        text:'water',
        sortBy:'date',
        startDate : undefined,
        endDate : undefined
    }
    const action = selectExpenses(expenses,filters)
    expect(action).toEqual([ 
        expenses[0]
    ])
})

test('should sort by date',() => {
    const filters ={
        sortBy:'date',
        startDate : undefined,
        endDate : undefined
    }
    const action = selectExpenses(expenses, filters)
    expect(action).toEqual([ 
        expenses[2],
        expenses[0],
        expenses[1]
    ])
})

test('should sort by Amount',() => {
    const filters ={
        sortBy:'amount',
        startDate : undefined,
        endDate : undefined
    }
    const action = selectExpenses(expenses, filters)
    expect(action).toEqual([ 
        expenses[2],
        expenses[1],
        expenses[0]
    ])
})


test('should filter by Start Date',() => {
    const filters ={
        sortBy:'date',
        startDate : moment(0),
        endDate : undefined
    }
    const action = selectExpenses(expenses, filters)
    expect(action).toEqual([ 
        
        expenses[2],
        expenses[0]
    ])
})

test('should filter by End Date',() => {
    const filters ={
        sortBy:'date',
        startDate : undefined,
        endDate : moment(0)
    }
    const action = selectExpenses(expenses, filters)
    expect(action).toEqual([ 
        
        expenses[0],
        expenses[1]
    ])
})
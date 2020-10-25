import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should return default state',()=>{
    const state = filtersReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
        })
    })


test('should return state with text filter',()=>{
    const state = filtersReducer(undefined,{type:'SET_TEXT_FILTER',text:'water'})
        expect(state).toEqual({
            text:'water',
            sortBy:'date',
            startDate:moment().startOf('month'),
            endDate:moment().endOf('month')
            })
        })

test('should return state with sort by amount',()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
        expect(state.sortBy).toBe('amount')
})


test('should return state with sort by date',()=>{
    const currentState = {
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }
    const state = filtersReducer(currentState,{type:'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})


test('should return state with start date',()=>{
    const state = filtersReducer(undefined,{type:'SET_START_DATE',startDate:moment(0)})
        expect(state.startDate.toString()).toBe(moment(0).toString())
})


test('should return state with end date',()=>{
    const state = filtersReducer(undefined,{type:'SET_END_DATE',endDate:moment(0)})
        expect(state.endDate.toString()).toBe(moment(0).toString())
})
import 'react-dates/initialize';
import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate,sortByAmount,setStartDate,setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilters extends React.Component{

    state = {
        calendarFocused : null
    };

    onDatesChange =({startDate,endDate}) =>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (focused) => {
        this.setState(()=>({calendarFocused : focused}))
    }

    onTextChange=(e) =>{
        this.props.setTextFilter(e.target.value);
    }

    onSelectChange= (e)=>{
        if (e.target.value==="date"){
            this.props.sortByDate();
        }
        else{
            this.props.sortByAmount();
        }
    }

    render(){
        return (
            <div>
                <div className="container">
                    <h4>Filter Text :</h4>
                    <input type ="text" value={this.props.filters.text} onChange={this.onTextChange}></input>
                    <h4>Sort By : </h4>
                    <select value={this.props.filters.sortBy} onChange={this.onSelectChange}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    onDatesChange = {this.onDatesChange}
                    focusedInput ={this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    showClearDates = {true}
                    numberOfMonths ={1}
                    isOutsideRange ={()=>false}
                />
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setStartDate : (startDate) => dispatch(setStartDate(startDate)),
    setEndDate : (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter : (textValue) => dispatch(setTextFilter(textValue)),
    sortByDate : () => dispatch(sortByDate()),
    sortByAmount : () => dispatch(sortByAmount())

})

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);
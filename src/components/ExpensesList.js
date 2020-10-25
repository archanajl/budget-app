import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpensesList = (props) =>(
    <div>
        <h1>
            {props.expenses.map((expense) => <ExpenseListItem key = {expense.id} {...expense}/>)}
        </h1>
    </div>
)

const mapToStateProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapToStateProps)(ExpensesList);
import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';


const ExpensesPage = () => (
    <div>
        <ExpenseListFilters/> 
        <ExpensesSummary />
        <ExpensesList/>
    </div>
)

export default ExpensesPage;
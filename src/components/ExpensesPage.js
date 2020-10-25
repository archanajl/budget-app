import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';


const ExpensesPage = () => (
    <div>
        <ExpenseListFilters/> 
        <ExpensesList/>
    </div>
)

export default ExpensesPage;
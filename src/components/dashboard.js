import React from 'react';
import expenseList from './expenseList';
import ExpenseList from './expenseList';
import ExpenseListFilters from './expenseListFilters';

const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;
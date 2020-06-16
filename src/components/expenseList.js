import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
);

const mapStateProp = (state) => {
    // console.log(state.filters)
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateProp)(ExpenseList);

// export default ConnectedExpenseList;

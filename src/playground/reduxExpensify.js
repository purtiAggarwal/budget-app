import { createStore, combineReducers } from 'redux'
import uuid from 'uuid';

const addExpenses = ({
description ='',
note = '',
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
})

const setFilterText = (text) => ({
    type: 'SET_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

const expenseReducerDefaultState = []

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id != action.id);
        case 'EDIT_EXPENSE': 
            return state.map((expense) => {
                if(expense.id == action.id) {
                    return {
                        ...expense,
                        ...action.update
                    }
                }else{
                    return expense
                }
            })
        
        default:
            return state;
    }
};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
...state,
text: action.text
            }
        case 'SORT_BY_AMOUNT': 
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);



store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
  });



const expenseOne = store.dispatch(addExpenses({description: "medical", amount: 200}))
const expenseTwo = store.dispatch(addExpenses({ description: 'Rent', amount: 100 }));

// console.log(expenseOne.expense.id)

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 200}))
// store.dispatch(setFilterText('Rent'))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(12))
// store.dispatch(setEndDate(1))
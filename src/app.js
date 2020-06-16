import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { addExpenses } from './actions/expenses';
import { setFilterText } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import expenseReducer from './reducers/expenses';
import filterReducer from './reducers/filters';
import 'normalize.css/normalize.css'
import './styles/styles.scss';


const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });


store.dispatch(addExpenses({ description: 'Water bill', amount: 20000, createdAt: 1000 }));
store.dispatch(addExpenses({ description: 'rent', amount: 20, createdAt:20000 }));
store.dispatch(addExpenses({ description: 'gas bill', amount: 2000, createdAt:3000 }));

 

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );

ReactDOM.render(jsx, document.querySelector("#app"))


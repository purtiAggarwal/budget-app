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




const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );

ReactDOM.render(jsx, document.querySelector("#app"))


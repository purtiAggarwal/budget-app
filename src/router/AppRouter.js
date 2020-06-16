import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashBoardPage from '../components/dashboard';
import AddExpensePage from '../components/addExpense';
import HelpPage from '../components/help';
import Header from '../components/header';
import NotFound from '../components/notfound';
import EditExpensePage from '../components/edit';


const AppRouter = () => (
        <BrowserRouter> 
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} exact={true}/>
                <Route path="/edit/:id" component={EditExpensePage} exact={true}/>
                <Route path="/help" component={HelpPage} exact={true}/>
                <Route component={NotFound} exact={true}/>
            </Switch>
        </BrowserRouter>
)

export default AppRouter;
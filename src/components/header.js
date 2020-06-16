import React from 'react';
import {  NavLink } from 'react-router-dom';


const Header = () => (
    <div>
        <NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
)

export default Header;

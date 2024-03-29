import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () =>(
    <header>
        <NavLink to="/" exact={true} activeClassName="is-active">Home  </NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense  </NavLink>
        <NavLink to="/help" activeClassName="is-active">Help  </NavLink>
    </header>
)

export default Header;
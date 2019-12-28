import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/" exact>Задача</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/task" exact>Решение</NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;
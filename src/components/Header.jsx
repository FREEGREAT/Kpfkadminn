
import {NavLink} from 'react-router-dom';
import React, { useContext } from 'react';



const Header = () => {



return(
    <header>
        <nav className='nav-header'>
        <NavLink className="NavLink" to='/'>
            Home
        </NavLink>
        <NavLink className="NavLink" to='/list'>
            ListGroups
        </NavLink>
        <NavLink className="NavLink" to='/login'>
            Login
        </NavLink>
        </nav>
    </header>
 
)

}

export default Header
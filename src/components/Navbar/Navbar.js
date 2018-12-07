import React from 'react';
//import Auxillary from '../../hoc/Auxillary/Auxillary';
import classes from './Navbar.module.css';
import Navitem from './Navitem/Navitem';
import Logo from '../Logo/Logo';

const navbar = (props) => {
    return (
        <nav className={classes.Navbar}>            
            <ul> 
                <Logo />
                <Navitem link="#"> Individual Leagues </Navitem>
                <Navitem link="#"> Combined Leagues </Navitem>
            </ul>
        </nav>
    );
};

export default navbar;
import React from 'react';
import classes from './Searchbar.module.css';
import Searchicon from '../../assets/images/search.png';

const searchbar = (props) => {
    return (
        <div className={classes.Searchbar}>
            <img src={Searchicon} alt="Search Icon" />
            <input type="text" placeholder="Enter nation ... " /> 
        </div>
    );
};

export default searchbar;



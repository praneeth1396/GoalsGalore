import React from 'react';
import Img from '../../assets/images/football.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={Img} alt="Football"/>
        </div>
    );
};

export default logo;
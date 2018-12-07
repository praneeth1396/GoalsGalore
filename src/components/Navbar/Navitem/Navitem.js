import React from 'react';
import classes from './Navitem.module.css';

const navitem = (props) => {
    let currentClass = '';
    if(props.active)
        currentClass = classes.Active;
    return (
        <li className={classes.Navitem}>
            <a className={currentClass} href={props.link}>
                {props.children}
            </a>
        </li>
    );
};

export default navitem;
import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
    return (
        <div className={classes.Backdrop} onClick={props.close} />
    );
}

export default backdrop;
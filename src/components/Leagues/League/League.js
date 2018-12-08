import React from 'react';
import classes from './League.module.css';

const league = (props) => {
    return (
        <div className = {classes.League}>
            <h4> {props.name} </h4>
            <hr />
            <ol>
                <li> One </li>
                <li> Two </li>
                <li> Three </li>
                <li> Four </li>
                <li> Five </li>
            </ol>
        </div> 
    );
};

export default league;
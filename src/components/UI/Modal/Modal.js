import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary/Auxillary';

const modal =  (props) => {
    return (
        <Auxillary>
            <Backdrop close={props.closeModal} />
            <div className={classes.Modal}>
                <div>
                    <h4> {props.comp} </h4>
                    <hr />
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th> Player </th>
                                <th> Club </th>
                                <th> Goals (Penalties) </th>
                                <th> Matches </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </Auxillary>
    );
};

export default modal;
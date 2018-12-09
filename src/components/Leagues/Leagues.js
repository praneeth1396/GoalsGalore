import React, { Component } from 'react';
import League from './League/League';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import classes from './Leagues.module.css';
import Modal from '../UI/Modal/Modal';

class Leagues extends Component{

    viewCompDetailsHandler = (leagueName) => {
        console.log("LEAGUES "+leagueName);
        this.setState({"showComprehensive":true});
    }

    closeModalHandler = () => {
        this.setState({"showComprehensive":false});
    }

    render(){
        let modal = null;
        if(this.state.showComprehensive)
            modal = <Modal closeModal={this.closeModalHandler} />;
        return (
            <Auxillary>
                <div className={classes.Leagues}>
                    {modal}  
                </div>
            </Auxillary>
        );
    }
}

export default Leagues;
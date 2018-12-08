import React, { Component } from 'react';
import League from './League/League';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import classes from './Leagues.module.css';

class Leagues extends Component{
    
    render(){
        const all_leagues = this.props.allleagues.map((league,index) => {
            return <League key={league.name+"_"+index} name={league.name} link={league.link} />
        });
        return (
            <div className={classes.Leagues}>
                {all_leagues}
            </div>
        );
    }
}

export default Leagues;
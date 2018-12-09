import React, { Component } from 'react';
import classes from './League.module.css';
import axios from 'axios'
import Scorer from './Scorer/Scorer';

class League extends Component {
    
    render(){
        this.topscorers = this.props.topscorers.map((scorer,index)=>{
            return <Scorer key={scorer.player+"_"+(index+1)} scorer_info={scorer} />
        }).slice(0,5); 
        console.log("RENDER "+this.props.name);
        let content = (
            <div className = {classes.League}>
                <h4> {this.props.name} </h4>
                <hr />
                <p> Loading ... </p>
            </div>
        );
        content = (
            <div className = {classes.League} onClick={this.props.clicked}>
                <h4> {this.props.name} </h4>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th> Player </th>
                            <th> Club </th>
                            <th> Goals </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.topscorers}
                    </tbody>
                </table>
            </div> 
        );
        
        return content;
    }
}

export default League;
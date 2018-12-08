import React, { Component } from 'react';
import classes from './League.module.css';
import axios from 'axios'

class League extends Component {
    constructor(props){
        super(props);
        this.state = {
            "scorers":[
                    {
                    "name":null,
                    "apps":null,
                    "goals":null
                    }
                ]
        }
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:5000/')
            .then((response) => {
                console.log(response.data);
            });
    }
    render(){
        return (
            <div className = {classes.League}>
                <h4> {this.props.name} </h4>
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
    }
}

export default League;
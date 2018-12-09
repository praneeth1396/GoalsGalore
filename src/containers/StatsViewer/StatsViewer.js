import React, { Component } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Leagues from '../../components/Leagues/Leagues';
import axios from 'axios';

class StatsViewer extends Component{
    constructor(props){
        super(props);
        this.state = {
            "leagues":[
                    {
                        "nation":null,
                        "comp_name":null,
                        "scorers":[
                            {
                            "player":null,
                            "matches":null,
                            "goals":null,
                            "club":null,
                            "penalties":null
                            }
                        ]
                    }
            ]
        };

    }
    componentDidMount(){
        axios.get('http://localhost:5000/')
            .then(response => {
                console.log(response.data);
            });
        
    }

    render(){
        return (
            <Auxillary>
                <Searchbar />
                
            </Auxillary>
        );
    }
}

export default StatsViewer;
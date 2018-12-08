import React, { Component } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Leagues from '../../components/Leagues/Leagues';

class StatsViewer extends Component{
    state = {
        "leagues":[
                {
                    "name":"England",
                    "link":"www.premierleague.com"
                },
                {
                    "name":"Spain",
                    "link":"www.laliga.com"
                },
                {
                    "name":"Germany",
                    "link":"www.bundesliga.com"
                }
            ]
    };

    render(){
        return (
            <Auxillary>
                <Searchbar />
                <Leagues allleagues={this.state.leagues} />
            </Auxillary>
        );
    }
}

export default StatsViewer;
import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Searchbar from '../../components/Searchbar/Searchbar';
import Auxillary from '../../hoc/Auxillary/Auxillary';

class Layout extends Component{
    render(){
        return (
            <Auxillary> 
                <Navbar />
                <Searchbar />
            </Auxillary>
        ); 
    }
}

export default Layout;
import React, { Component } from 'react';
import './App.module.css';
import Layout from '../../components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout />
          <div> Stats View </div>        
      </div>
    );
  }
}

export default App;

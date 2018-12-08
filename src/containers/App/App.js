import React, { Component } from 'react';
import './App.module.css';
import Layout from '../../components/Layout/Layout';
import StatsViewer from '../StatsViewer/StatsViewer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout />
          <StatsViewer />     
      </div>
    );
  }
}

export default App;

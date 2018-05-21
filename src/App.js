import React, { Component } from 'react';
import './App.css';
import SocialCard from './containers/SocialCard/SocialCard';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SocialCard />
      </div>
    );
  }
}

export default App;

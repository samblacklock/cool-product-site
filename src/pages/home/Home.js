import React, { Component } from 'react';
import Hero from '../../components/hero/Hero';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Hero />
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;

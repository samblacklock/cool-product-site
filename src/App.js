import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Product from './pages/product/Product';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
        </div>
      </Router>
    );
  }
}

export default App;

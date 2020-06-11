import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import ColorFlip from './ColorFlip/ColorFlip';
import Counter from './Counter/Counter';
import Reviews from './Reviews/Reviews';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <div className="main-wrapper">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/color-flipper" component={ColorFlip}/>
              <Route exact path="/counter" component={Counter}/>
              <Route exact path="/reviews" component={Reviews}/>
            </Switch>
          </div>
        </Router>
      </>
    )
  }
};

export default App;


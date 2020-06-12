import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import ColorFlip from './ColorFlip/ColorFlip';
import Counter from './Counter/Counter';
import Reviews from './Reviews/Reviews';
import NavExample from './NavExample/NavExample';
import SidebarExample from './SidebarExample/SidebarExample';
import Modal from './Modal/Modal';
import Questions from './Questions/Questions';
import Menu from './Menu/Menu';

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
              <Route exact path="/navbar" component={NavExample}/>
              <Route exact path="/sidebar" component={SidebarExample}/>
              <Route exact path="/modal" component={Modal}/>
              <Route exact path="/questions" component={Questions}/>
              <Route exact path="/menu" component={Menu}/>


              {/* 404 page */}
              <Route render={() => 
                <div className="fourOfour">
                  <h1>Lost? Me too...</h1>
                </div>
              }/>

            </Switch>
          </div>
        </Router>
      </>
    )
  }
};

export default App;


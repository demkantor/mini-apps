import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Home from './Home/Home';
import Nav from './Nav/Nav';

import ColorFlip from './ColorFlip/ColorFlip';
import Counter from './Counter/Counter';
import LoremIpsum from './LoremIpsum/LoremIpsum';
import Menu from './Menu/Menu';
import Modal from './Modal/Modal';
import NavExample from './NavExample/NavExample';
import Questions from './Questions/Questions';
import Reviews from './Reviews/Reviews';
import Scroll from './Scroll/Scroll';
import Shop from './Shop/Shop';
import SidebarExample from './SidebarExample/SidebarExample';
import Tabs from './Tabs/Tabs';
import Timer from './Timer/Timer';
import Video from './Video/Video';


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
              <Route exact path="/lorem" component={LoremIpsum}/>
              <Route exact path="/menu" component={Menu}/>
              <Route exact path="/modal" component={Modal}/>
              <Route exact path="/navbar" component={NavExample}/>
              <Route exact path="/questions" component={Questions}/>
              <Route exact path="/reviews" component={Reviews}/>
              <Route exact path="/scroll" component={Scroll}/>
              <Route exact path="/shop" component={Shop}/>
              <Route exact path="/sidebar" component={SidebarExample}/>
              <Route exact path="/tabs" component={Tabs}/>
              <Route exact path="/timer" component={Timer}/>
              <Route exact path="/video" component={Video}/>

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


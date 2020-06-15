import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {

    state = {
        open: false
    };

    close = () => {
        this.setState({ open: false });
        document.querySelector('.navbar').classList.remove('nav-open');
    };

    toggleOpen = () => {
        this.setState({ open: !this.state.open });
        document.querySelector('.navbar').classList.toggle('nav-open');
    };


    render() {
        return (
            <div className="navbar">
                <button className="nav-menu" onClick={this.toggleOpen}>

                    {this.state.open
                    ?
                    <span className="material-icons">
                        menu
                    </span> 
                    :
                    <span className="material-icons">
                        menu_open
                    </span> 
                    }
                    
                </button>
                <Link to="/" className="navbar__link" onClick={this.close}>
                    Home
                    <span className="material-icons">
                        home
                    </span>   
                </Link>
                <Link to="/slider" className="navbar__link" onClick={this.close}>
                    Carousel Slider
                    <span className="material-icons">
                        linear_scale
                    </span> 
                </Link>
                <Link to="/color-flipper" className="navbar__link" onClick={this.close}>
                    Color Flipper
                    <span className="material-icons">
                        invert_colors
                    </span> 
                </Link>
                <Link to="/timer" className="navbar__link" onClick={this.close}>
                    Countdown Timer
                    <span className="material-icons">
                        timer
                    </span> 
                </Link>
                <Link to="/counter" className="navbar__link" onClick={this.close}>
                    Simple Counter
                    <span className="material-icons">
                        addchart
                    </span> 
                </Link>
                <Link to="/login" className="navbar__link" onClick={this.close}>
                    Login Form
                    <span className="material-icons">
                        login
                    </span> 
                </Link>
                <Link to="/lorem" className="navbar__link" onClick={this.close}>
                    Lorem Ipsum
                    <span className="material-icons">
                        create
                    </span> 
                </Link>
                <Link to="/modal" className="navbar__link" onClick={this.close}>
                    Modal Project
                    <span className="material-icons">
                        launch
                    </span> 
                </Link>
                <Link to="/navbar" className="navbar__link" onClick={this.close}>
                    Navbar Demo
                    <span className="material-icons">
                        more_horiz
                    </span> 
                </Link>
                <Link to="/sidebar" className="navbar__link" onClick={this.close}>
                    Sidebar Demo
                    <span className="material-icons">
                        more_vert
                    </span> 
                </Link>
                <Link to="/questions" className="navbar__link" onClick={this.close}>
                    General Questions
                    <span className="material-icons">
                        contact_support
                    </span> 
                </Link>
                <Link to="/menu" className="navbar__link" onClick={this.close}>
                    Restraunt Menu
                    <span className="material-icons">
                        menu_book
                    </span> 
                </Link>
                <Link to="/reviews" className="navbar__link" onClick={this.close}>
                    Review Cards
                    <span className="material-icons">
                        rate_review
                    </span> 
                </Link>
                <Link to="/scroll" className="navbar__link" onClick={this.close}>
                    Scrolling Demo
                    <span className="material-icons">
                        control_camera
                    </span> 
                </Link>
                <Link to="/tabs" className="navbar__link" onClick={this.close}>
                    Tabs Demo Project
                    <span className="material-icons">
                        tab
                    </span> 
                </Link>
                <Link to="/video" className="navbar__link" onClick={this.close}>
                    Video Project
                    <span className="material-icons">
                        movie
                    </span> 
                </Link>
                <Link to="/shop" className="navbar__link" onClick={this.close}>
                    Shopping List
                    <span className="material-icons">
                        add_shopping_cart
                    </span> 
                </Link>
            </div>
        )
    }
};

export default Nav;

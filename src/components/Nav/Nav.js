import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {

    state = {
        open: false
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
                <Link to="/" className="navbar__link">
                    Home
                    <span className="material-icons">
                        home
                    </span>   
                </Link>
                <Link to="/color-flipper" className="navbar__link">
                    Color Flipper
                    <span className="material-icons">
                        invert_colors
                    </span> 
                </Link>
                <Link to="/counter" className="navbar__link">
                    Counter
                    <span className="material-icons">
                        addchart
                    </span> 
                </Link>
                <Link to="/reviews" className="navbar__link">
                    Reviews
                    <span className="material-icons">
                        rate_review
                    </span> 
                </Link>
                <Link to="/navbar" className="navbar__link">
                    Navbar
                    <span className="material-icons">
                        more_horiz
                    </span> 
                </Link>
                <Link to="/sidebar" className="navbar__link">
                    Sidebar
                    <span className="material-icons">
                        more_vert
                    </span> 
                </Link>
                <Link to="/modal" className="navbar__link">
                    Modal Project
                    <span className="material-icons">
                        launch
                    </span> 
                </Link>
                <Link to="/questions" className="navbar__link">
                    General Questions
                    <span className="material-icons">
                        contact_support
                    </span> 
                </Link>
                <Link to="/menu" className="navbar__link">
                    Restraunt Menu
                    <span className="material-icons">
                        menu_book
                    </span> 
                </Link>
                <Link to="/video" className="navbar__link">
                    Video Project
                    <span className="material-icons">
                        movie
                    </span> 
                </Link>
                <Link to="/scroll" className="navbar__link">
                    Scrolling Project
                    <span className="material-icons">
                        control_camera
                    </span> 
                </Link>
                <Link to="/tab" className="navbar__link">
                    Tab Project
                    <span className="material-icons">
                        tab
                    </span> 
                </Link>
                <Link to="/timer" className="navbar__link">
                    Timer
                    <span className="material-icons">
                        timer
                    </span> 
                </Link>
                <Link to="/lorem" className="navbar__link">
                    Lorem Ipsum
                    <span className="material-icons">
                        create
                    </span> 
                </Link>
                <Link to="/to-do" className="navbar__link">
                    To Do List
                    <span className="material-icons">
                        list_alt
                    </span> 
                </Link>
                <Link to="/slider" className="navbar__link">
                    Slider
                    <span className="material-icons">
                        linear_scale
                    </span> 
                </Link>
            </div>
        )
    }
};

export default Nav;

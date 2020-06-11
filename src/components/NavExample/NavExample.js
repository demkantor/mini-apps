import React, { Component } from 'react';
import './NavExample.css';

class NavExample extends Component {

    showLinks = () => {
        const links = document.querySelector('.links');
        links.classList.toggle('show-links');
    };

    render() {
        return (
            // <div className="example-container">
                <nav>
                    <div className="nav-center">
                        <div className="nav-header">
                            <img src="images/logo.svg" alt="logo" className="logo" />
                            <button className="nav-toggle" onClick={this.showLinks}>
                                <i className="fas fa-bars"/>
                            </button>
                        </div>
                        <ul className="links">
                            <li>
                                <a href="/navbar">home</a>
                            </li>
                            <li>
                                <a href="/navbar">about</a>
                            </li>
                            <li>
                                <a href="/navbar">projects</a>
                            </li>
                            <li>
                                <a href="/navbar">contact</a>
                            </li>
                        </ul>
                        <ul className="social-icons">
                            <li>
                                <a href="https://www.facebook.com">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.behance.com">
                                    <i className="fab fa-behance"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sketch.com">
                                    <i className="fab fa-sketch"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            // </div>
            
        )
    }
};

export default NavExample;

import React, { Component } from 'react';
import './SidebarExample.css';



class SidebarExample extends Component {

    toggleSide = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('show-sidebar');
    };

    render() {
        return (
            <div className="side-example-container">
                <button className="sidebar-toggle" onClick={this.toggleSide}>
                    <i className="fas fa-bars"/>
                </button>
                <aside className="sidebar">
                    <div className="sidebar-header">
                        <img src="images/logo.svg" alt="logo" className="logo-side" />
                        <button className="close-btn" onClick={this.toggleSide}>
                            <i className="fas fa-times"/>
                        </button>
                    </div>
                    <ul className="links-side">
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
                    <ul className="social-icons-side">
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
                </aside>
            </div>
        )
    }
};

export default SidebarExample;

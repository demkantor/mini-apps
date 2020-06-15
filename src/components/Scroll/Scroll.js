import React, { Component } from 'react';
import './Scroll.css';

class Scroll extends Component {

    state = {
        year: 2020
    };

    componentDidMount = () => {
        // set current year in footer
        const date = new Date().getFullYear();
        this.setState({ year: date });

        // set navbar to dynamically turn fixed upon scrolling past its height
        const navbar = document.getElementById("nav");
        const topLink = document.querySelector(".top-link");
        window.addEventListener(("scroll"), () => {
            const scrollHeight = window.pageYOffset;
            const navHeight = navbar.getBoundingClientRect().height;
            if (scrollHeight > navHeight) {
                navbar.classList.add("fixed-nav");
            } else {
                navbar.classList.remove("fixed-nav");
            };
            // add back to home button after 500px scroll
            if (scrollHeight > 500) {
                topLink.classList.add("scroll-show-link");
            } else {
                topLink.classList.remove("scroll-show-link");
            };
        });
    };

    toggleNav = () => {
        const linksContainer = document.querySelector(".links-container");
        linksContainer.classList.toggle('scroll-show-links');

        // dynamically grow navbar size depending on number of links
        // const links = document.querySelector(".scroll-links");
        // const containerHeight = linksContainer.getBoundingClientRect();
        // const linksHeight = links.getBoundingClientRect().height;
        // if (containerHeight === 0) {
        //     linksContainer.style.height = `${linksHeight}px`;
        // } else {
        //     linksContainer.style.height = 0;
        // }
    };


    render() {
        return (
            <>
                <header id="home"className="scroll-header">
                    <nav id="nav" className="scroll-nav">
                        <div className="scroll-nav-center">
                            <div className="scroll-nav-header">
                                <img src="images/logo2.svg" alt="logo" className="scroll-logo" />
                                <button className="scroll-nav-toggle" onClick={this.toggleNav}>
                                    <i className="fas fa-bars" />
                                </button>
                            </div>
                            <div className="links-container">
                                <ul className="scroll-links">
                                    <li>
                                        <a href="#home" className="scroll-link">home</a>
                                    </li>
                                    <li>
                                        <a href="#about" className="scroll-link">about</a>
                                    </li>
                                    <li>
                                        <a href="#services" className="scroll-link">services</a>
                                    </li>
                                    <li>
                                        <a href="#tours" className="scroll-link">tours</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="scroll-banner">
                        <div className="scroll-container">
                            <h1>Scroll Demo Project</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Est dolore illo dolores quia nemo doloribus quaerat, 
                                magni numquam repellat reprehenderit.
                            </p>
                            <a href="#tours" className="scroll-link btn btn-white">
                                explore tours
                            </a>
                        </div>
                    </div>
                </header>
                <section id="about" className="section">
                    <div className="scroll-title">
                        <h2>about <span>us</span></h2>
                    </div>
                </section>
                <section id="services" className="section">
                    <div className="scroll-title">
                        <h2>our <span>services</span></h2>
                        <br/>
                        <br/>
                        <div className="underline"></div>
                        <br/>
                        <p className="section-center">
                            This opera's as lousy as it is brilliant! Your lyrics lack subtlety. 
                            You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them. 
                            I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. 
                            Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.
                        </p>
                    </div>
                </section>
                <section id="tours" className="section">
                    <div className="scroll-title">
                        <h2>featured <span>tours</span></h2>
                    </div>
                </section>
                <footer className="section">
                    <p>
                        copyright &copy; backroads travel tours company
                        <span id="date">
                            {" "}{this.state.year}
                        </span>. all rights reserved
                    </p>
                </footer>
                <a className="scroll-link top-link" href="#home">
                    <i className="fas fa-arrow-up" />
                </a>
            </>
        )
    }
};

export default Scroll;

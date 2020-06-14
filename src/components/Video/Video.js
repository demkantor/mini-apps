import React, { Component } from 'react';
import './Video.css';

class Video extends Component {

    componentDidMount = () => {
        // give a short preloader before video starts
        const preloader = document.querySelector('.preloader');
        setTimeout(() => preloader.classList.add('hide-preloader'), 300);
    };

    togglePlay = () => {
        const video = document.querySelector('.video-container');
        const btn = document.querySelector('.switch-btn');
        if (!btn.classList.contains('slide')) {
            btn.classList.add('slide');
            video.pause();
        } else {
            btn.classList.remove('slide');
            video.play();
        };
    };

    render() {
        return (
            <>
                <div className="preloader">
                    <img src="images/preloader.gif" alt="preloader" />
                </div>
                <header className="header">
                    <video 
                        className="video-container"
                        // controls
                        muted
                        autoPlay
                        loop>
                            <source src="images/video.mp4" type="video/mp4" />
                    </video>
                    <h1 className="video-title">video project</h1>
                    <button className="switch-btn" onClick={this.togglePlay}>
                        <span>play</span>
                        <span>pause</span>
                        <span className="switch"></span>
                    </button>
                </header>
                
            </>
        )
    }
};

export default Video;

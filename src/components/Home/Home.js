import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {

    state = {
        projects: [
            {name: 'color flipper', img: 'images/flip.png', gif: 'images/flip.gif', link: 'color-flipper'},
            {name: 'countdown timer', img: 'images/timer.png', gif: 'images/timer.gif', link: 'timer'},
            {name: 'counter demo', img: 'images/count.png', gif: 'images/count.gif', link: 'counter'},
            {name: 'image slider', img: 'images/slide.png', gif: 'images/slide.gif', link: 'slider'},
            {name: 'login form', img: 'images/slide.png', gif: 'images/slide.gif', link: 'login'},
            {name: 'Lorem ipsum generator', img: 'images/ipsum.png', gif: 'images/ipsum.gif', link: 'lorem'},
            {name: 'modal demo', img: 'images/modal.png', gif: 'images/modal.gif', link: 'modal'},
            {name: 'navbar demo', img: 'images/navbar.png', gif: 'images/navbar.gif', link: 'navbar'},
            {name: 'questions page', img: 'images/question.png', gif: 'images/question.gif', link: 'questions'},
            {name: 'restraunt menu', img: 'images/menu.png', gif: 'images/menu.gif', link: 'menu'},
            {name: 'review cards', img: 'images/review.png', gif: 'images/review.gif', link: 'reviews'},
            {name: 'scroll demo', img: 'images/scroll.png', gif: 'images/scroll.gif', link: 'scroll'},
            {name: 'shopping list', img: 'images/shop.png', gif: 'images/shop.gif', link: 'shop'},
            {name: 'sidebar demo', img: 'images/sidebar.png', gif: 'images/sidebar.gif', link: 'sidebar'},
            {name: 'tabs project', img: 'images/tab.png', gif: 'images/tab.gif', link: 'tabs'},
            {name: 'video project', img: 'images/video.png', gif: 'images/video.gif', link: 'video'},
        ]
    };

    render() {
        return (
            <>
                <div className="home-title">
                    <h1>Click on a project to navigate</h1>
                </div>
                <div className="home-section-center">
                    {this.state.projects.map((project, index) => (
                        <Link to={project.link}>
                            <div className="item-info" key={index}>
                                <h4 className="home-title">{project.name}</h4>
                                <div className="home-image-container">
                                    <img src={project.img} alt={project.name} className="static-img" />
                                    <img src={project.gif} alt={project.name} className="active-img"/>
                                </div> 
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        )
    }
};

export default Home;

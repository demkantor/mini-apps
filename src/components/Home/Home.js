import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {

    state = {
        projects: [
            {name: 'color flipper', img: 'images/flip.png', gif: 'images/flip.gif', link: 'color-flipper'},
            {name: 'counter demo', img: 'images/count.png', gif: 'images/count.gif', link: 'counter'},
            {name: 'review cards', img: 'images/review.png', gif: 'images/review.gif', link: 'reviews'},
            {name: 'navbar demo', img: 'images/navbar.png', gif: 'images/navbar.gif', link: 'navbar'},
            {name: 'sidebar demo', img: 'images/sidebar.png', gif: 'images/sidebar.gif', link: 'sidebar'},
            {name: 'modal demo', img: 'images/modal.png', gif: 'images/modal.gif', link: 'modal'},
            {name: 'questions page', img: 'images/item-9.jpeg', gif: 'images/question.gif', link: 'questions'},
            {name: 'restraunt menu', img: 'images/item-9.jpeg', gif: 'images/menu.gif', link: 'menu'},
            {name: 'video project', img: 'images/item-9.jpeg', gif: 'images/video.gif', link: 'video'},
            {name: 'scroll demo', img: 'images/item-9.jpeg', gif: 'images/scroll.gif', link: 'scroll'},
            {name: 'tabs project', img: 'images/item-9.jpeg', gif: 'images/tab.gif', link: 'tabs'},
            {name: 'countdown timer', img: 'images/item-9.jpeg', gif: 'images/timer.gif', link: 'timer'},
            {name: 'Lorem ipsum generator', img: 'images/ipsum.png', gif: 'images/ipsum.gif', link: 'lorem'},
            {name: 'shopping list', img: 'images/item-9.jpeg', gif: 'images/shop.gif', link: 'shop'},
            {name: 'image slider', img: 'images/item-9.jpeg', gif: 'images/slide.gif', link: 'slider'}
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

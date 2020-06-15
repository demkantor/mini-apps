import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {

    state = {
        counter: 0
    };

    carousel = () => {
        const slides = document.querySelectorAll('.slide');
        // const nextBtn = document.querySelector(".nextBtn");
        // const prevBtn = document.querySelector(".prevBtn");
        // let counter = this.state.counter;

        slides.forEach((slide, index) => {
            slide.style.left = `${index * 100}%`
        });

        if (this.state.counter === slides.length) {
            this.setState({ counter: 0 });
        };

        if (this.state.counter < 0) {
            this.setState({ counter: slides.length - 1 });
        };

        // uncomment out below and comment out above to have slides stop at the end 

        // hide next button when we reach the end of the carousel
        // if (counter < slides.length - 1) {
        //     nextBtn.style.display = "block";
        // } else {
        //     nextBtn.style.display = "none";
        // };

        // // hide the previous button at the beginning of the carousel
        // if (this.state.counter > 0) {
        //     prevBtn.style.display = "block";
        // } else {
        //     prevBtn.style.display = "none";
        // };


        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${this.state.counter * 100}%)`;
        });
    };

    next = () => {
       this.setState({ counter: this.state.counter + 1 });
       this.carousel();
    };

    previous = () => {
        this.setState({ counter: this.state.counter - 1 });
        this.carousel();
    };

    render() {
        return (
            <>
                <div className="slider-container">
                    <div className="slide">
                        <img src="images/img-1.jpeg" alt="beach" className="slide-img" />
                        <h1>1</h1>
                    </div>
                    <div className="slide">
                        
                        <h1>2</h1>
                    </div>
                    <div className="slide">
                        {/* <img src="images/img-2.jpeg" alt="" className="slide-img" /> */}
                        <h1>3</h1>
                    </div>
                    <div className="slide">
                        <img src="images/person-1.jpeg" alt="person" className="person-img" />
                        <h4>Jane Doe</h4>
                        <h1>4</h1>
                    </div>
                    <div className="section-center">
                        <h3>just playing about with various options</h3>
                        <p>see code comments</p>
                    </div>
                </div>
                <div className="slide-btn-container">
                    <button type="button" className="prevBtn" onClick={this.previous}>
                        Prev
                    </button>
                    <button type="button" className="nextBtn" onClick={this.next}>
                        next
                    </button>
                </div>
            </>
        )
    }
};

export default Slider;

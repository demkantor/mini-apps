import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ColorFlip.css';


class ColorFlip extends Component {

    state = {
        colors: ["green", "red", "rgba(133,122,200)", "#f15025"],
        current: '#f1f5f8',
        hex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"],
        simple: true
    };

    changeColor = () => {
        const randomNumber = Math.floor(Math.random() * this.state.colors.length);
        document.body.style.backgroundColor = this.state.colors[randomNumber];
        this.setState({ current: this.state.colors[randomNumber] });
    };

    changeHexColor = () => {
        let hexValue = '#';
        for(let i = 0; i<6; i++) {
            hexValue += this.state.hex[this.getRandom()];
        };
        document.body.style.backgroundColor = hexValue;
        this.setState({ current: hexValue });
    };

    getRandom = () => {
        const randomNumber = Math.floor(Math.random() * this.state.hex.length);
        return randomNumber;
    };

    openHex = () => {
        this.setState({ simple: false });
    };

    openSimple = () => {
        this.setState({ simple: true });
    };

    render() {

        return (
            <>
                <nav className="nav">
                    <div className="nav-centered">
                        <h4>Color Flipper</h4>
                        <ul className="nav-links">
                            <li onClick={this.openSimple}>
                                <Link to="/color-flipper">simple</Link>
                            </li>
                            <li onClick={this.openHex}>
                                <Link to="/color-flipper">hex</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
                <main className="main">
                    <div className="container">
                        <h2 className="container2">
                            Background Color: &nbsp;
                            <span className="color">
                                {this.state.current}
                            </span>
                        </h2>
                        {this.state.simple
                        ?
                        <button className="btn btn-hero" onClick={this.changeColor}>
                            Click Me!
                        </button>
                        :
                        <button className="btn btn-hero" onClick={this.changeHexColor}>
                            Click Me!
                        </button>
                        }
                    </div>
                </main>
            </>
        )
    }
};

export default ColorFlip;

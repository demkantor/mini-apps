import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {

    state = {
        count: 0
    };

    checkValue = () => {
        const value = document.querySelector('#value');
        if (this.state.count > 0) {
            value.style.color = 'green';
        } else if (this.state.count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        };
    };

    counter = (event) => {
        if(event.target.name === 'increase') {
            this.setState({ count: this.state.count + 1 });
        } else if(event.target.name === 'decrease') {
            this.setState({ count: this.state.count - 1 });
        } else {
            this.setState({ count: 0 });
        };
        this.checkValue();
    };

    render() {
        return (
            <main>
                <div className="container">
                    <h1>
                        Counter
                    </h1>
                    <span id="value">
                        {this.state.count}
                    </span>
                    <div className="button-container">
                        <button className="btn decrease" name="decrease" onClick={this.counter}>decrease</button>
                        <button className="btn reset" name="reset" onClick={this.counter}>reset</button>
                        <button className="btn increase" name="increase" onClick={this.counter}>increase</button>
                    </div>
                </div>
            </main>
        )
    }
};

export default Counter;

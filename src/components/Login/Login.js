import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    strengthText = ["", "bad 💩", "ok 😐", "decent 🙂", "solid 💪"];
    validations = [];

    state = {
        showPassword: false,
        strength: 0
    };

    submit = () => {
        this.setState({ strength: 0 });
        this.validations = [];
    };

    validatePassword = (event) => {
        const password = event.target.value;

        this.validations = [
            (password.length > 5), 
            (password.search(/[A-Z]/) > -1), 
            (password.search(/[0-9]/) > -1), 
            (password.search(/[$&+,:;=?@#]/) > -1) 
        ]

        this.setState({ strength: this.validations.reduce((acc, cur) => acc + cur, 0) });
    };


    render() {
        return (
            <div className="form-wrapper">
                <h1 className="login-title">Sign Up</h1>
                <main className="form-container section-center">
                    <form className="form" onSubmit={this.submit}>
                        <div className="field">
                            <input type="email" name="email" className="login-input" placeholder=""/>
                            <label htmlFor="email" className="label">Email</label>
                        </div>
                        <div className="field">
                            <input
                                type={this.state.showPassword ? 'text' : 'password'}
                                name="password"
                                className="login-input"
                                placeholder=""
                                onChange={this.validatePassword}
                                valid={this.state.strength > 3} />
                            <label htmlFor="password" className="label">Password</label>
                            <span
                                className="toggle-password"
                                onMouseEnter={() => this.setState({ showPassword: true })}
                                onMouseLeave={() => this.setState({ showPassword: false })}>
                                {this.state.showPassword ? '🙈' : '👁️'}
                            </span>
                        </div>
                        <div className="strength">
                            {this.state.strength > 0 &&
                                <span className="bar bar-1" />
                            }
                            {this.state.strength > 1 &&
                                <span className="bar bar-2" />
                            }
                            {this.state.strength > 2 &&
                                <span className="bar bar-3" />
                            }
                            {this.state.strength > 3 &&
                                <span className="bar bar-4" />
                            }
                        </div>

                        {this.validations.length > 0 &&
                            <ul className="bar-list">
                                <li> {this.validations[0] ? '✔️' : '❌'} must be at least 5 characters</li>
                                <li> {this.validations[1] ? '✔️' : '❌'} must contain a capital letter</li>
                                <li> {this.validations[2] ? '✔️' : '❌'} must contain a number</li>
                                <li> {this.validations[3] ? '✔️' : '❌'} must contain one of $&+,:;=?@#</li>
                            </ul>
                        }

                        <div className="strength-text">{this.strengthText[this.state.strength]}</div>
                        <button type="submit" className="sign-in-btn" disabled={this.state.strength < 4}>Sign Up</button>
                    </form>
                </main>
            </div>
        )
    }
};

export default Login;

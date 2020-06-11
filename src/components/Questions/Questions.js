import React, { Component } from 'react';
import './Questions.css';

class Questions extends Component {

    toggleText = (event) => {
        // closes a question upon opening another one, comment out if multiple question should be opened
        const questions = document.querySelectorAll(".question");
        questions.forEach(function (item) {
            item.classList.remove("show-text");
        });

        // if above is commented out only one question will open at a time
        const question = event.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    };

    render() {
        return (
            <section className="questions">
                <div className="q-title">
                    <h2>General questions</h2>
                </div>
                <div className="section-center">
                    <article className="question">
                        <div className="question-title">
                            <p>Do accecpt all major credit cards?</p>
                            <button type="button" className="question-btn" onClick={this.toggleText}>
                                <span className="plus-icon">
                                    <i className="far fa-plus-square" />
                                </span>
                                <span className="minus-icon">
                                    <i className="far fa-minus-square" />
                                </span>
                            </button>
                        </div>
                        <div className="question-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                                dolore illo dolores quia nemo doloribus quaerat, magni numquam
                                repellat reprehenderit.
                            </p>
                        </div>
                    </article>
                    <article className="question">
                        <div className="question-title">
                            <p>Do you source from local farmers?</p>
                            <button type="button" className="question-btn" onClick={this.toggleText}>
                                <span className="plus-icon">
                                    <i className="far fa-plus-square" />
                                </span>
                                <span className="minus-icon">
                                    <i className="far fa-minus-square" />
                                </span>
                            </button>
                        </div>
                        <div className="question-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                                dolore illo dolores quia nemo doloribus quaerat, magni numquam
                                repellat reprehenderit.
                            </p>
                        </div>
                    </article>
                    <article className="question">
                        <div className="question-title">
                            <p>Do you have gluten free items?</p>
                            <button type="button" className="question-btn" onClick={this.toggleText}>
                                <span className="plus-icon">
                                    <i className="far fa-plus-square" />
                                </span>
                                <span className="minus-icon">
                                    <i className="far fa-minus-square" />
                                </span>
                            </button>
                        </div>
                        <div className="question-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                                dolore illo dolores quia nemo doloribus quaerat, magni numquam
                                repellat reprehenderit.
                            </p>
                        </div>
                    </article>
                    <article className="question">
                        <div className="question-title">
                            <p>Do you use organic ingredients?</p>
                            <button type="button" className="question-btn" onClick={this.toggleText}>
                                <span className="plus-icon">
                                    <i className="far fa-plus-square" />
                                </span>
                                <span className="minus-icon">
                                    <i className="far fa-minus-square" />
                                </span>
                            </button>
                        </div>
                        <div className="question-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                                dolore illo dolores quia nemo doloribus quaerat, magni numquam
                                repellat reprehenderit.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        )
    }
};

export default Questions;

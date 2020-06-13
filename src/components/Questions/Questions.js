import React, { Component } from 'react';
import './Questions.css';

class Questions extends Component {

    state = {
        questions: [
            {text: 'Do accecpt all major credit cards?'},
            {text: 'Do you source from local farmers?'},
            {text: 'Do you have gluten free items?'},
            {text: 'Do you use organic ingredients?'}
        ],
        lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.'
    };

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
                <div className="q-section-center">
                    {this.state.questions.map((question, i) => (
                        <article className="question" key={i}>
                            <div className="question-title">
                                <p>{question.text}</p>
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
                                    {this.state.lorem}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        )
    }
};

export default Questions;

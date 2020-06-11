import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {

    toggleModal = () => {
        const modal = document.querySelector('.modal-overlay');
        modal.classList.toggle('open-modal');
    };

    render() {
        return (
            <>
                <header className="hero">
                    <div className="banner">
                        <h1>modal project</h1>
                        <button className="btn modal-btn" onClick={this.toggleModal}>
                            open modal
                        </button>
                    </div>
                </header>
                <div className="modal-overlay">
                    <div className="modal-container">
                        <h3>Modal content</h3>
                        <button className="modal-close-btn" onClick={this.toggleModal}>
                            <i className="fas fa-times" />
                        </button>
                    </div>
                </div>
            </>
        )
    }
};

export default Modal;

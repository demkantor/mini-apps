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
                        <p>
                            Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. 
                            Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. 
                            You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.,
                        </p>
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

import React, { Component } from 'react';
import './Tabs.css';

class Tabs extends Component {

    state = {
        history: true,
        vision: false,
        goals: false
    };

    activate = (event) => {
        this.setState({ 
            history: false,
            vision: false,
            goals: false
        });
        this.setState({ [event.target.dataset.id]: true });
    };


    render() {
        return (
            <>
                <section className="section">
                    <div className="tab-title">
                        <h2>about</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore.
                        </p>
                    </div>
                    <div className="about-center section-center">
                        <article className="about-img">
                            <img src='images/hero-bcg.jpeg' alt='about' />
                        </article>
                        <article className="about">
                            <div className="tab-btn-container">
                                <button className={`tab-btn ${this.state.history ? "active" : ""}`} data-id="history" onClick={this.activate}>
                                    history
                                </button>
                                <button className={`tab-btn ${this.state.vision ? "active" : ""}`} data-id="vision" onClick={this.activate}>
                                    vision
                                </button>
                                <button className={`tab-btn ${this.state.goals ? "active" : ""}`} data-id="goals" onClick={this.activate}>
                                    goals
                                </button>
                            </div>
                            <article className="about-content">
                                <div className={`content ${this.state.history ? "active" : ""}`} id="history">
                                    <h4>history</h4>
                                    <p>
                                        I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice
                                        pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean
                                        shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small
                                        batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral
                                        direct trade hoodie ugh chambray, craft beer pork belly flannel tacos
                                        single-origin coffee art party migas plaid pop-up.
                                    </p>
                                </div>
                                <div className={`content ${this.state.vision ? "active" : ""}`} id="vision">
                                    <h4>vision</h4>
                                    <p>
                                        Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal
                                        deep v hella biodiesel. Church-key listicle polaroid put a bird on it
                                        chillwave palo santo enamel pin, tattooed meggings franzen la croix cray.
                                        Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu
                                        mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof
                                        party hammock master cleanse pop-up truffaut, bicycle rights skateboard
                                        affogato readymade sustainable deep v live-edge schlitz narwhal.
                                    </p>
                                    <ul>
                                        <li>list item 1</li>
                                        <li>list item 2</li>
                                        <li>list item 3</li>
                                    </ul>
                                </div>
                                <div className={`content ${this.state.goals ? "active" : ""}`} id="goals">
                                    <h4>goals</h4>
                                    <p>
                                        Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four
                                        dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred
                                        fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel
                                        sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid
                                        cold-pressed roof party. Small batch adaptogen coloring book heirloom.
                                        Letterpress food truck hammock literally hell of wolf beard adaptogen everyday
                                        carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa
                                        chicharrones.
                                    </p>
                                </div>
                            </article>
                        </article>
                    </div>
                </section>
            </>
        )
    }
};

export default Tabs;
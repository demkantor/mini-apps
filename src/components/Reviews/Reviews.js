import React, { Component } from 'react';
import './Reviews.css'

class Reviews extends Component {

    state = {
        reviews: [
            {
              id: 1,
              name: "susan smith",
              job: "web developer",
              img:
                "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
              text:
                "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
            },
            {
              id: 2,
              name: "anna johnson",
              job: "web designer",
              img:
                "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
              text:
                "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
            },
            {
              id: 3,
              name: "peter jones",
              job: "intern",
              img:
                "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
              text:
                "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
            },
            {
              id: 4,
              name: "bill anderson",
              job: "the boss",
              img:
                "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
              text:
                "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
            },
        ],
        current: 0
    }

    next = () => {
        if(this.state.current !== (this.state.reviews.length - 1)){
            this.setState({ current: this.state.current + 1 });
        } else {
            this.setState({ current: 0 });
        };
    };

    previous = () => {
        if(this.state.current === 0){
            this.setState({ current: (this.state.reviews.length - 1) });
        } else {
            this.setState({ current: this.state.current - 1 });
        };
    };

    random = () => {
        const randomNumber = Math.floor(Math.random() * this.state.reviews.length);
        this.setState({ current: randomNumber });
    };

    render() {
        return (
            <main>
                <section className="container">
                    {/* title */}
                    <div className="title">
                        <h2>our reviews</h2>
                        <div className="underline"></div>
                    </div>
                    {/* review */}
                    <article className="review">
                        <div className="img-container">
                            <img src={this.state.reviews[this.state.current].img} id="person-img" alt={this.state.reviews[this.state.current].name}/>
                        </div>
                        <h4 id="author">
                            {this.state.reviews[this.state.current].name}
                        </h4>
                        <p id="job">
                            {this.state.reviews[this.state.current].job}
                        </p>
                        <p id="info">
                            {this.state.reviews[this.state.current].text}
                        </p>
                        <div className="button-container">
                            <button className="prev-btn" onClick={this.previous}>
                                <i className="fas fa-chevron-left" />
                            </button>
                            <button className="next-btn" onClick={this.next}>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <button className="random-btn" onClick={this.random}>
                            Random Review
                        </button>
                    </article>
                </section>
            </main>
        )
    }
};

export default Reviews;

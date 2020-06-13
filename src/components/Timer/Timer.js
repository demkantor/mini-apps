import React, { Component } from 'react';
import './Timer.css';

// these arrays are used to get days from the getDay/month() method
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];


class Timer extends Component {

    timer;

    state = {
        expired: false,
        giveaway: 'giveway ends on Sunday, sept 30, 2020 *:00am',
        days: 34,
        hours: 6,
        mins: 22,
        secs: 12
    };

    componentDidMount = () => {
        // set countdown date
        let futureDate = new Date(2020,8,25,12,30,0);
        const year = futureDate.getFullYear();
        const hours = futureDate.getHours();
        const mins = futureDate.getMinutes();
        let month = futureDate.getMonth();
        let date = futureDate.getDate();
        let day = futureDate.getDay();

        // set string for date giveaway ends
        this.setState({ giveaway: `giveaway ends on ${weekdays[day]} ${months[month]}, ${date} ${year} ${hours}:${mins}pm UTC` });
    
        const futureTime = futureDate.getTime();
        this.timer = setInterval(()=>this.setCountdown(futureTime), 1000);
    };

    componentWillUnmount = () => {
        clearInterval(this.timer);
    };

    setCountdown = (future) => {

        // get the difference of time left, set to state
        const today = new Date().getTime();
        const dif = future - today;

        const oneDay = 24*60*60*1000;
        const oneHour = 60*60*1000;
        const oneMin = 60*1000;

        let days = Math.floor(dif / oneDay);
        let hours = Math.floor((dif % oneDay ) / oneHour);
        let mins = Math.floor((dif % oneHour) / oneMin);
        let secs = Math.floor((dif % oneMin) / 1000);
        this.setState({
            days,
            hours,
            mins,
            secs
        });

        // When time is up change the message...
        if (dif < 0) {
            clearInterval(this.timer);
            this.setState({
                expired: true
            });
        };
    };


    render() {
        return (
            <section className="time-section-center">
                <article className="gift-img">
                    <img src="images/gift.jpeg" alt="gift" />
                </article>
                <article className="gift-info">
                    <h3>old iphone giveaway</h3>
                    <h4 className="giveaway">
                        {this.state.giveaway}
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Est dolore illo dolores quia nemo doloribus quaerat, 
                        magni numquam repellat reprehenderit. 
                        I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice
                        pop-up XOXO lomo kombucha glossier bicycle rights. 
                        Umami kinfolk salvia jean shorts offal venmo.
                    </p>
                    <div className="deadline">
                        {this.state.expired 
                        ?
                            <h4 className="expired">sorry, this giveaway has expired!</h4>
                        :
                        <>
                            <div className="deadline-format">
                                <div>
                                    <h4 className="days">
                                        {this.state.days}
                                    </h4>
                                    <span>days</span>
                                </div>
                            </div>
                            <div className="deadline-format">
                                <div>
                                    <h4 className="hours">
                                    {this.state.hours}
                                    </h4>
                                    <span>hours</span>
                                </div>
                            </div>
                            <div className="deadline-format">
                                <div>
                                    <h4 className="mins">
                                    {this.state.mins}
                                    </h4>
                                    <span>mins</span>
                                </div>
                            </div>
                            <div className="deadline-format">
                                <div>
                                    <h4 className="secs">
                                    {this.state.secs}
                                    </h4>
                                    <span>secs</span>
                                </div>
                            </div>
                        </>
                        }
                    </div>
                </article>
            </section>
        )
    }
};

export default Timer;

import React, { useEffect, useState } from 'react';
import './Homepage.css';

const Homepage = () => {
    const backgroundImage = 'url("./bg.jpg")'; 
    const targetDate = new Date('January 18, 2025 00:00:00').getTime();

    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="homepage" style={{ backgroundImage }}>
            <div className="overlay">
                <h1 className="heading" title="SDV 6.0">SDV 6.0</h1>
                <p className="paragraph">Self-Driving Vehicle Workshop 6.0 is here!</p>
                <p className='paragraph'>The Workshop goes live in</p>
                <div id="countdown">
                    <ul>
                        <li id="days">
                            <div className="number">{String(countdown.days).padStart(2, '0')}</div>
                            <div className="label">Days</div>
                        </li>
                        <li id="hours">
                            <div className="number">{String(countdown.hours).padStart(2, '0')}</div>
                            <div className="label">Hours</div>
                        </li>
                        <li id="minutes">
                            <div className="number">{String(countdown.minutes).padStart(2, '0')}</div>
                            <div className="label">Mins</div>
                        </li>
                        <li id="seconds">
                            <div className="number">{String(countdown.seconds).padStart(2, '0')}</div>
                            <div className="label">Sec</div>
                        </li>
                    </ul>
                </div>
                <button className="register-button">Register Now</button>
                
            </div>
        </div>
    );
};

export default Homepage;

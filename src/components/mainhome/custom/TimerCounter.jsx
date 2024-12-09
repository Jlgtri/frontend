import React, { useEffect, useState } from 'react';
import './Timer.css'


const TimerCounter = () => {
    const calculateTimeLeft = () => {
        const targetDate = 1726498800000;
        const now = Math.floor(Date.now());
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div className="text-white text-center">
            <div className='flex items-center gap-2 justify-center my-6'>
                {Object.keys(timeLeft).length ? (
                    <>
                        <div className="timer-box">
                            <div className="time-number">{timeLeft.days}</div>
                            <span className="time-label">Days </span>
                        </div>
                        <div className="timer-box">
                            <div className="time-number">{timeLeft.hours}</div>
                            <span className="time-label">Hours </span>
                        </div>
                        <div className="timer-box">
                            <div className="time-number">{timeLeft.minutes}</div>
                            <span className="time-label">Minutes </span>
                        </div>
                        <div className="timer-box">
                            <div className="time-number">{timeLeft.seconds}</div>
                            <span className="time-label">Seconds</span>
                        </div>
                    </>
                ) : (
                    <span>Time's up!</span>
                )}
            </div>
        </div>
    );
};

export default TimerCounter;

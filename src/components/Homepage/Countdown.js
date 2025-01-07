import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Countdown = () => {
    const targetDate = "2025-01-18T00:00:00"; // Set the target date to January 18, 2025.
    
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = moment();
            const end = moment(targetDate);
            const diff = end.diff(now);
            const duration = moment.duration(diff);

            setTimeLeft({
                days: duration.days(),
                hours: duration.hours(),
                minutes: duration.minutes(),
                seconds: duration.seconds()
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    // Helper function to calculate the progress percentage
    const calculateProgress = (value, max) => (value / max) * 100;

    return (
        <div className="h-auto flex flex-col items-center p-16">
            <h2 className="font-antons text-3xl md:text-6xl  text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 text-center">
                Workshop goes live in
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-[#C10000] mt-8">
                {/* Render a countdown part for each time unit */}
                {[
                    { label: "Days", value: timeLeft.days, max: 30 },
                    { label: "Hours", value: timeLeft.hours, max: 24 },
                    { label: "Minutes", value: timeLeft.minutes, max: 60 },
                    { label: "Seconds", value: timeLeft.seconds, max: 60 },
                ].map(({ label, value, max }) => (
                    <div
                        key={label}
                        className="countdown-part relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex flex-col items-center justify-center"
                    >
                        {/* SVG Circular Progress */}
                        <svg
                            className="absolute inset-0 w-full h-full"
                            viewBox="0 0 100 100"
                        >
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="rgba(193, 0, 0, 0.3)" // Lighter shade of the provided color
                                strokeWidth="10"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#C10000" // Provided color
                                strokeWidth="10"
                                strokeDasharray="282.743" // Circumference of the circle (2πr)
                                strokeDashoffset={`${
                                    282.743 - (282.743 * calculateProgress(value, max)) / 100
                                }`}
                                strokeLinecap="round"
                                className="animate-progress"
                            />
                        </svg>
                        <div className="number text-xl sm:text-2xl md:text-3xl font-semibold z-10 text-white">
                            {value}
                        </div>
                        <div className="text-xs sm:text-sm md:text-base z-10 text-white">
                            {label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Countdown;

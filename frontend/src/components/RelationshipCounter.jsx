import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RelationshipCounter = () => {
    const startDate = new Date('2024-04-16T00:00:00');
    const [timeElapsed, setTimeElapsed] = useState({});

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const diff = now - startDate;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeElapsed({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Días', value: timeElapsed.days },
        { label: 'Horas', value: timeElapsed.hours },
        { label: 'Minutos', value: timeElapsed.minutes },
        { label: 'Segundos', value: timeElapsed.seconds }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="w-full max-w-5xl mx-auto mt-16 px-4"
        >
            <div className="bg-[#7e097e]/10 backdrop-blur-xl rounded-[2rem] p-6 md:p-10 border border-[#b646b3]/30 shadow-[0_0_40px_rgba(126,9,126,0.2)] hover:shadow-[0_0_60px_rgba(163,50,161,0.3)] transition-shadow duration-500">
                <h3 className="text-center text-2xl md:text-3xl font-serif text-[#c85bc4] mb-8 tracking-wide">
                    Tiempo Juntos
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                    {timeUnits.map((item, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="relative">
                                <span className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-[#c85bc4] font-mono drop-shadow-lg">
                                    {item.value !== undefined ? item.value.toString().padStart(2, '0') : '00'}
                                </span>
                                <div className="absolute -inset-4 bg-[#c85bc4]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <span className="text-sm md:text-lg text-[#b646b3] mt-4 uppercase tracking-[0.2em] font-light">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default RelationshipCounter;

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import MessageBoard from './components/MessageBoard';
import LoveMessages from './components/LoveMessages';
import FallingFlowers from './components/FallingFlowers';
import ValentineCard from './components/ValentineCard';
import confetti from 'canvas-confetti';

function App() {
    const [showCard, setShowCard] = useState(true);

    const handlePanic = () => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // Heart shaped confetti
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                shapes: ['heart'],
                colors: ['#c3b9e3', '#eab8e3', '#ffffff']
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                shapes: ['heart'],
                colors: ['#c3b9e3', '#eab8e3', '#ffffff']
            });
        }, 250);
    };

    return (
        <div className="min-h-screen text-text-primary selection:bg-accent-primary selection:text-white relative font-poppins bg-bg-primary transition-colors duration-500 overflow-x-hidden">
            <AnimatePresence mode="wait">
                {showCard ? (
                    <ValentineCard key="card" onOpen={() => setShowCard(false)} />
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <FallingFlowers />
                        <Hero />

                        <div className="max-w-3xl mx-auto px-4 mb-20 relative z-10">
                            <div className="bg-card-bg rounded-[2.5rem] p-8 border border-card-border shadow-none hover:scale-[1.01] transition-transform duration-500">
                                <iframe
                                    style={{ borderRadius: '20px' }}
                                    src="https://open.spotify.com/embed/track/5bi0gh89wRuH2OgjdAKFsb?utm_source=generator&theme=0"
                                    width="100%"
                                    height="152"
                                    frameBorder="0"
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy">
                                </iframe>
                            </div>
                        </div>

                        <Timeline />
                        <Gallery />
                        <LoveMessages />
                        <MessageBoard />

                        <footer className="py-12 text-center pb-20">
                            <motion.button
                                onClick={handlePanic}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group bg-transparent border-none p-0 cursor-pointer focus:outline-none focus:ring-0 outline-none flex items-center justify-center mx-auto"
                            >
                                <div className="relative">
                                    <Heart
                                        className="w-48 h-40 text-[#ff0a54] fill-[#ff0a54] filter drop-shadow-2xl animate-pulse"
                                        strokeWidth={1}
                                        stroke="#ffffff"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center -mt-2">
                                        <span className="text-white font-serif font-bold text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] tracking-wide">
                                            Celebrar
                                        </span>
                                        <span className="text-white font-serif font-bold text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] tracking-wide">
                                            Amor
                                        </span>
                                    </div>
                                </div>
                            </motion.button>

                        </footer>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;

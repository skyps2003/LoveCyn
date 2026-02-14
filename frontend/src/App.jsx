import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import MessageBoard from './components/MessageBoard';
import LoveTree from './components/LoveTree';
import FallingFlowers from './components/FallingFlowers';
import confetti from 'canvas-confetti';

function App() {
    const handlePanic = () => {
        // ... existing code ...
    };

    return (
        <div className="min-h-screen text-white selection:bg-violet-500 selection:text-white relative">
            <FallingFlowers />
            <Hero />

            <div className="max-w-md mx-auto px-6 mb-12">
                <div className="glass p-4 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform">
                    <iframe
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/track/5bi0gh89wRuH2OgjdAKFsb?utm_source=generator&theme=0"
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy">
                    </iframe>
                </div>
            </div>

            <Timeline />
            <Gallery />
            <LoveTree />
            <MessageBoard />

            <footer className="py-12 text-center pb-20">
                <button
                    onClick={handlePanic}
                    className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full font-bold text-xl shadow-[0_0_30px_rgba(167,139,250,0.6)] animate-pulse hover:animate-none hover:scale-110 transition-transform"
                >
                    🎉 Celebrar Amor 🎉
                </button>
                <p className="mt-8 text-violet-400/50 text-sm">Hecho con 💜 para ti</p>
            </footer>
        </div>
    );
}

export default App;

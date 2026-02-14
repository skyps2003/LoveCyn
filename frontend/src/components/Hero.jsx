import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import RelationshipCounter from './RelationshipCounter';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 3;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                // Updated particle color to match new palette
                this.color = `rgba(200, 91, 196, ${Math.random() * 0.5})`; // #c85bc4
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > width) this.x = 0;
                else if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                else if (this.y < 0) this.y = height;
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < 100; i++) particles.push(new Particle());
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        };

        init();
        animate();
        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-7xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c85bc4] via-white to-[#b646b3] drop-shadow-[0_0_25px_rgba(163,50,161,0.6)]"
                >
                    Cynthia
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-6 text-xl md:text-3xl text-[#c85bc4] tracking-[0.3em] font-light uppercase"
                >
                    El Amor de mi Vida
                </motion.p>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="mt-10 mb-8 inline-block px-8 py-3 rounded-full border border-[#a332a1]/40 bg-[#7e097e]/20 backdrop-blur-md shadow-[0_0_20px_rgba(126,9,126,0.3)]"
                >
                    <span className="text-[#c85bc4] font-semibold tracking-widest">16 . ABR . 2024</span>
                </motion.div>

                <RelationshipCounter />
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <span className="text-[#a332a1] text-3xl">↓</span>
            </div>
        </section>
    );
};

export default Hero;

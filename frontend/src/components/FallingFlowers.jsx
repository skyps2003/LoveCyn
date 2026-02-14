import React, { useEffect, useRef } from 'react';

const FallingFlowers = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        // Flower emojis
        const flowers = ['🌸', '🌹', '🌺', '🌷', '🌻'];

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
                this.y = Math.random() * -height; // Start above screen
                this.size = Math.random() * 15 + 10; // Size 10-25px
                this.speedY = Math.random() * 1 + 0.5;
                this.speedX = Math.random() * 1 - 0.5;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 2 - 1;
                this.flower = flowers[Math.floor(Math.random() * flowers.length)];
            }
            update() {
                this.y += this.speedY;
                this.x += Math.sin(this.y * 0.01) + this.speedX; // Sway motion
                this.rotation += this.rotationSpeed;

                if (this.y > height) {
                    this.y = -50;
                    this.x = Math.random() * width;
                }
            }
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);
                ctx.font = `${this.size}px serif`;
                ctx.fillText(this.flower, 0, 0);
                ctx.restore();
            }
        }

        const init = () => {
            particles = [];
            // Create 30 flowers
            for (let i = 0; i < 30; i++) particles.push(new Particle());
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
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        />
    );
};

export default FallingFlowers;

import React, { useEffect, useRef } from 'react';

const LoveTree = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            drawTree();
        };
        window.addEventListener('resize', resize);

        const drawHeart = (x, y, size, color, angle) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-size / 2, -size / 2, -size, size / 3, 0, size);
            ctx.bezierCurveTo(size, size / 3, size / 2, -size / 2, 0, 0);
            ctx.fill();
            ctx.restore();
        };

        const drawBranch = (startX, startY, length, angle, depth, branchWidth) => {
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            const endX = startX + length * Math.cos(angle);
            const endY = startY + length * Math.sin(angle);

            // Branch styling
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + depth * 0.1})`;
            ctx.lineWidth = branchWidth;
            ctx.lineTo(endX, endY);
            ctx.stroke();

            if (depth < 10) { // Limit recursion depth
                // Recursive branches
                drawBranch(endX, endY, length * 0.8, angle - 0.25, depth + 1, branchWidth * 0.7);
                drawBranch(endX, endY, length * 0.8, angle + 0.25, depth + 1, branchWidth * 0.7);
            } else {
                // Draw leaves (hearts) at the end
                const colors = ['#c85bc4', '#b646b3', '#a332a1', '#7e097e'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                drawHeart(endX, endY, Math.random() * 10 + 5, color, angle - Math.PI / 2);
            }
        };

        const drawTree = () => {
            ctx.clearRect(0, 0, width, height);
            // Draw text
            ctx.font = "italic bold 40px serif";
            ctx.fillStyle = "#c85bc4";
            ctx.textAlign = "center";
            ctx.fillText("Amor de mi Vida", width / 2, height - 50);

            // Start tree from bottom center
            drawBranch(width / 2, height, 120, -Math.PI / 2, 0, 15);
        };

        drawTree();

        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0f0518]">
            <canvas ref={canvasRef} className="absolute top-0 left-0" />
        </section>
    );
};

export default LoveTree;

'use client';

import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    color: string;
    size: number;
    vx: number;
    vy: number;
    ease: number;
    dx: number;
    dy: number;
    distance: number;
    force: number;
    angle: number;
    friction: number;
}

export function ParticleHero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleGap = 10; // Gap between particles
        const mouse = { x: 0, y: 0, radius: 80 }; // Significantly reduced interaction radius (was 250)

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const rows = Math.ceil(canvas.height / particleGap);
            const cols = Math.ceil(canvas.width / particleGap);

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    // Only add particles occasionally to create "space dust" effect or specific pattern
                    // For a dense grid matrix:
                    // if (x % 5 === 0 && y % 5 === 0) { ... }

                    // For random space dust:
                    if (Math.random() < 0.05) {
                        const pX = Math.random() * canvas.width;
                        const pY = Math.random() * canvas.height;
                        particles.push({
                            x: pX,
                            y: pY,
                            originX: pX,
                            originY: pY,
                            color: 'rgba(255, 255, 255, ' + (Math.random() * 0.5 + 0.1) + ')',
                            size: Math.random() * 2,
                            vx: 0,
                            vy: 0,
                            ease: 0.1, // Return speed
                            dx: 0,
                            dy: 0,
                            distance: 0,
                            force: 0,
                            angle: 0,
                            friction: 0.95
                        });
                    }
                }
            }

            // OR fill with a grid for the "Anti-Gravity" solid feel
            // A grid looks more like a "simulation"
            particles = [];
            // Drastically reduced density for performance (was 30)
            const spacing = 70;
            for (let y = 0; y < canvas.height; y += spacing) {
                for (let x = 0; x < canvas.width; x += spacing) {
                    particles.push({
                        x: x,
                        y: y,
                        originX: x,
                        originY: y,
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 1.5,
                        vx: 0,
                        vy: 0,
                        ease: 0.05,
                        dx: 0,
                        dy: 0,
                        distance: 0,
                        force: 0,
                        angle: 0,
                        friction: 0.90
                    });
                }
            }
        };

        const drawParticles = () => {
            const width = canvas.width;
            const height = canvas.height;
            ctx.clearRect(0, 0, width, height);

            // Optimization: Cache mouse position/radius squares
            const mouseX = mouse.x;
            const mouseY = mouse.y;
            const mouseRadius = mouse.radius;
            const mouseRadiusSq = mouseRadius * mouseRadius;

            // Use simple for loop for speed
            const len = particles.length;
            for (let i = 0; i < len; i++) {
                const particle = particles[i];

                const dx = mouseX - particle.x;
                const dy = mouseY - particle.y;

                // Fast bounding box check before sqrt
                if (dx > -mouseRadius && dx < mouseRadius && dy > -mouseRadius && dy < mouseRadius) {
                    const distanceSq = dx * dx + dy * dy;

                    if (distanceSq < mouseRadiusSq) {
                        const distance = Math.sqrt(distanceSq);
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;

                        const force = (mouseRadius - distance) / mouseRadius;
                        // Reduced strength for subtle effect
                        const directionX = forceDirectionX * force * 5;
                        const directionY = forceDirectionY * force * 5;

                        particle.vx -= directionX;
                        particle.vy -= directionY;
                        particle.color = 'rgba(200, 200, 255, 0.8)';
                    }
                } else {
                    // Only calculate return physics if needed
                    if (Math.abs(particle.x - particle.originX) > 0.1 || Math.abs(particle.y - particle.originY) > 0.1) {
                        const dx = particle.x - particle.originX;
                        const dy = particle.y - particle.originY;
                        particle.vx -= dx * particle.ease;
                        particle.vy -= dy * particle.ease;
                        particle.color = 'rgba(255, 255, 255, 0.3)';
                    } else {
                        // Snap to grid if very close to stop micro-calculations
                        particle.x = particle.originX;
                        particle.y = particle.originY;
                        particle.vx = 0;
                        particle.vy = 0;
                        particle.color = 'rgba(255, 255, 255, 0.3)';
                    }
                }

                if (particle.vx !== 0 || particle.vy !== 0) {
                    particle.vx *= particle.friction;
                    particle.vy *= particle.friction;
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                }

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
                // ClosePath not strictly needed for fill but good practice
            };

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        const handleMouseMove = (event: MouseEvent) => {
            // Get canvas bounds to handle scrolling offset if needed
            // Assuming canvas is fixed background for now or full screen
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);

        resizeCanvas();
        drawParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-black"
        />
    );
}

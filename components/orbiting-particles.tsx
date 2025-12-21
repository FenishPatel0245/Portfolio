'use client';
import { useEffect, useRef } from 'react';

interface OrbitingParticlesProps {
    className?: string;
    density?: number;
    minRadius?: number;
    maxRadius?: number;
    speed?: number;
}

export function OrbitingParticles({
    className,
    density = 40,
    minRadius = 100,
    maxRadius = 200,
    speed = 1
}: OrbitingParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];
        const center = { x: canvas.width / 2, y: canvas.height / 2 };

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            center.x = canvas.width / 2;
            center.y = canvas.height / 2;
            init();
        };

        const init = () => {
            particles = [];
            for (let i = 0; i < density; i++) {
                particles.push({
                    angle: Math.random() * Math.PI * 2,
                    radius: minRadius + Math.random() * (maxRadius - minRadius),
                    baseSpeed: (0.002 + Math.random() * 0.005) * speed,
                    wobble: Math.random() * 20, // Add organic deviation
                    wobbleSpeed: 0.02 + Math.random() * 0.03,
                    size: Math.random() * 2,
                    color: 'rgba(255, 255, 255, ' + (Math.random() * 0.4 + 0.1) + ')',
                    t: Math.random() * 100
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.angle += p.baseSpeed;
                p.t += p.wobbleSpeed;

                // Add organic wobble to radius
                const currentRadius = p.radius + Math.sin(p.t) * p.wobble;

                const x = center.x + Math.cos(p.angle) * currentRadius;
                const y = center.y + Math.sin(p.angle) * currentRadius * 0.6; // Flattened ellipse

                ctx.beginPath();
                ctx.arc(x, y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [density, minRadius, maxRadius, speed]);

    return <canvas ref={canvasRef} className={className} />;
}

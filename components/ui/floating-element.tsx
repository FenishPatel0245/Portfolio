'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface FloatingElementProps {
    children: React.ReactNode;
    depth?: number; // 1 = normal, 2 = twice as fast, 0.5 = half speed
    className?: string;
}

export function FloatingElement({ children, depth = 1, className }: FloatingElementProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 40, damping: 25 });
    const mouseY = useSpring(y, { stiffness: 40, damping: 25 });

    // Transform mouse movement into element offset
    // Assume window center is 0,0

    useEffect(() => {
        let animationFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            // Use rAF to decouple from mouse frequency (1000Hz gaming mice)
            // Cancel previous frame if it hasn't run yet
            if (animationFrameId) cancelAnimationFrame(animationFrameId);

            animationFrameId = requestAnimationFrame(() => {
                const { innerWidth, innerHeight } = window;
                const cx = innerWidth / 2;
                const cy = innerHeight / 2;
                const dx = (e.clientX - cx) / cx;
                const dy = (e.clientY - cy) / cy;

                x.set(dx * 20 * depth);
                y.set(dy * 20 * depth);
            });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [depth, x, y]);

    return (
        <motion.div
            ref={ref}
            style={{ x: mouseX, y: mouseY }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

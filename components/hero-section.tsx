'use client'

import { SplineScene } from "@/components/ui/splite";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { Spotlight } from "@/components/ui/spotlight"
import { FloatingElement } from "@/components/ui/floating-element";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
    // Parallax logic for the robot, now simple offset
    const yGraphic = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <section
            ref={ref}
            className="relative w-full min-h-[75vh] flex items-center overflow-visible bg-transparent pt-20"
        >
            {/* LAYER 1: Atmospheric Glow - EXTREMELY SUBTLE */}
            <div
                className="absolute top-1/2 right-[0%] -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.1] z-[1] mix-blend-screen"
                style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 60%)',
                }}
            />

            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative h-full flex flex-col md:flex-row items-center">

                {/* LAYER 30: Left side Text Block */}
                <motion.div
                    style={{ y: yText }}
                    className="w-full md:w-[45%] text-center md:text-left pt-12 md:pt-0 relative z-[50] flex flex-col justify-center will-change-transform"
                >
                    <FloatingElement depth={0.1}>
                        <div className="flex flex-col items-center md:items-start mb-6 w-full">
                            <div className="flex flex-nowrap justify-center md:justify-start gap-0 w-full">
                                <GradualSpacing
                                    text="Fenish"
                                    className="text-5xl md:text-8xl font-bold tracking-tight text-white !justify-start shrink-0"
                                    startDelay={0}
                                />
                                <GradualSpacing
                                    text="Patel"
                                    className="text-5xl md:text-8xl font-bold tracking-tight text-zinc-500 !justify-start shrink-0"
                                    startDelay={0.5}
                                />
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-start w-full mb-8">
                            <GradualSpacing
                                text="Computer Science (Honours) Student"
                                className="text-xl md:text-2xl text-zinc-400 font-normal leading-relaxed text-center md:text-left !justify-start"
                                startDelay={1.0}
                                delayMultiple={0.03}
                            />
                        </div>

                        <div className="flex justify-center md:justify-start w-full mb-10">
                            <GradualSpacing
                                text="Computer Science student with hands-on experience in programming, databases, version control, and team-based development. Interested in building reliable software and learning through real-world engineering challenges."
                                className="text-base md:text-lg text-zinc-500 max-w-xl text-center md:text-left leading-relaxed font-light flex-wrap !justify-center md:!justify-start"
                                startDelay={2.5}
                                delayMultiple={0.01}
                            />
                        </div>
                    </FloatingElement>
                </motion.div>

                {/* LAYER 40: Right side Spline Scene - Visual Support Only */}
                <motion.div
                    style={{ y: yGraphic }}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="absolute top-1/2 right-[-15%] md:right-[-20%] -translate-y-1/2 w-full md:w-[80%] h-[120vh] z-[10] pointer-events-none flex items-center justify-center mix-blend-normal will-change-transform overflow-visible"
                >
                    {/* Robot Container - Wider container + Extra Height to prevent clipping */}
                    <FloatingElement depth={1.0} className="w-full h-full relative scale-[1.0] md:scale-[0.9] origin-center">
                        <div className="w-full h-full relative flex items-center justify-center pointer-events-auto">
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>
                    </FloatingElement>
                </motion.div>
            </div>

        </section >
    )
}

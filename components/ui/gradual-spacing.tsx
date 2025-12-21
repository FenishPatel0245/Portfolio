"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
    text: string;
    duration?: number;
    delayMultiple?: number;
    framerProps?: Variants;
    className?: string;
    startDelay?: number;
}

export function GradualSpacing({
    text,
    duration = 0.5,
    delayMultiple = 0.04,
    framerProps = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    },
    className,
    startDelay = 0,
}: GradualSpacingProps) {
    const words = text.split(" ");
    let charIndex = 0;

    return (
        <div className={cn("flex flex-wrap", className)}>
            <AnimatePresence>
                {words.map((word, i) => {
                    const wordJsx = (
                        <div key={i} className="flex whitespace-nowrap" style={{ marginRight: '0.25em' }}>
                            {word.split("").map((char, j) => {
                                const currentDelay = startDelay + (charIndex * delayMultiple);
                                charIndex++;
                                return (
                                    <motion.span
                                        key={j}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={framerProps}
                                        transition={{ duration, delay: currentDelay }}
                                        className={cn("drop-shadow-sm inline-block")}
                                    >
                                        {char}
                                    </motion.span>
                                );
                            })}
                        </div>
                    );
                    charIndex++; // Increment for the space
                    return wordJsx;
                })}
            </AnimatePresence>
        </div>
    );
}

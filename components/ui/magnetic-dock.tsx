"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export function MagneticDock() {
    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 mb-4 block w-max max-w-[90vw]">
            <div className="flex items-end gap-2 p-3 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 shadow-xl">
                <DockIcon href="https://github.com/FenishPatel0245" icon={Github} label="GitHub" />
                <DockIcon href="https://www.linkedin.com/in/fenish-patel-865662243" icon={Linkedin} label="LinkedIn" />
                <DockIcon href="https://twitter.com" icon={Twitter} label="Twitter" />
                <DockIcon href="mailto:fenishpatel0245@gmail.com" icon={Mail} label="Email" />
            </div>
        </div>
    );
}

function DockIcon({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <motion.div
                ref={ref}
                className="relative group p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.2, y: -5 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <Icon className="w-6 h-6 text-white/80 group-hover:text-white" />

                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 backdrop-blur-sm border border-white/10 rounded-md text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {label}
                </div>
            </motion.div>
        </Link>
    );
}

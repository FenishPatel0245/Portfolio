'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function ContactSection() {
    return (
        <section id="contact" className="py-32 relative z-10 container mx-auto px-4 mb-12">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center will-change-transform"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-12 text-white">Let's <span className="text-zinc-500">Connect</span></h2>

                <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
                    <Link href="mailto:fenishpatel00245@gmail.com" className="group">
                        <span className="text-xl md:text-2xl text-zinc-400 group-hover:text-white transition-colors flex items-center gap-2">
                            fenishpatel00245@gmail.com
                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </span>
                    </Link>

                    <Link href="https://github.com/FenishPatel0245" target="_blank" className="group">
                        <span className="text-xl md:text-2xl text-zinc-400 group-hover:text-white transition-colors flex items-center gap-2">
                            GitHub
                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </span>
                    </Link>

                    <Link href="https://linkedin.com/in/fenishpatel" target="_blank" className="group">
                        <span className="text-xl md:text-2xl text-zinc-400 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                            LinkedIn
                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </span>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}

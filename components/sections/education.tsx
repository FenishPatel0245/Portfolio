'use client';
import { motion } from 'framer-motion';

export function EducationSection() {
    return (
        <section id="education" className="py-32 relative z-10 container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-20 text-white text-center">
                    Education <span className="text-zinc-500">& Certifications</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-white/40 uppercase tracking-widest text-center md:text-left">
                            Education
                        </h3>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="will-change-transform"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Bachelor of Computer Science (Honours)</h3>
                            <p className="text-xl text-zinc-400 mb-2">Conestoga College</p>
                            <p className="text-zinc-600 font-mono">Jan 2025 – Aug 2028</p>
                        </motion.div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-white/40 uppercase tracking-widest text-center md:text-left">
                            Certifications
                        </h3>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="will-change-transform"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">CC Certified in Cybersecurity</h3>
                            <ul className="space-y-4">
                                {[
                                    "Security Principles",
                                    "Access Control",
                                    "Incident Response",
                                    "Business Continuity & Disaster Recovery",
                                    "Security Operations"
                                ].map((item, i) => (
                                    <li key={i} className="text-zinc-400 text-lg border-b border-white/5 pb-2">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function AboutSection() {
    return (
        <section id="about" className="relative z-10 bg-transparent">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-white/50 mb-2">
                            Get to know
                        </h1>
                        <h2 className="text-7xl md:text-9xl font-bold mb-10 text-white tracking-tighter">
                            About <span className="text-zinc-500">Me</span>
                        </h2>
                    </>
                }
            >
                <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center p-8 text-center border-none">
                    <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white/10">
                        {/* Placeholder for profile image - using a generic avatar or code symbol for now */}
                        <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-500">
                            <span className="text-4xl">FP</span>
                        </div>
                    </div>

                    <div className="space-y-4 text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl">
                        <p>
                            I am <span className="text-white font-medium">Fenish Patel</span>, a Computer Science (Honours) student based in <span className="text-white font-medium">Kitchener / Waterloo, Ontario</span>, currently seeking software engineering internship or co-op opportunities.
                        </p>
                        <p>
                            I have hands-on experience in programming, databases, version control, and team-based development, with a strong foundation in object-oriented programming and data structures. I enjoy building clean, reliable software and learning through real-world engineering challenges.
                        </p>
                        <p>
                            I am motivated by problem-solving, continuous improvement, and contributing to practical software solutions in collaborative environments.
                        </p>
                    </div>
                </div>
            </ContainerScroll>
        </section>
    );
}

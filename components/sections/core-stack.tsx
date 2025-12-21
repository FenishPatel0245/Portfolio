'use client';
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import {
    Code2,
    Database,
    Network,
    Terminal,
    Cpu,
    Layers,
    GitBranch,
    Box,
    Settings,
    FileCode,
    Globe,
    Layout,
    Server,
    Workflow,
    PenTool,
    Users
} from "lucide-react";

type SkillItem = {
    name: string;
    icon?: React.ElementType;
};

const languages: SkillItem[] = [
    { name: "C", icon: Icons.C },
    { name: "C++", icon: Icons.Cpp },
    { name: "C#", icon: Icons.CSharp },
    { name: "Python", icon: Icons.Python },
    { name: "JavaScript", icon: Icons.JavaScript },
    { name: "HTML", icon: Icons.HTML },
    { name: "CSS", icon: Icons.CSS },
    { name: "SQL", icon: Icons.SQL }
];

const foundations: SkillItem[] = [
    { name: "OOP", icon: Box },
    { name: "Data Structures", icon: Layers },
    { name: "Algorithms", icon: Code2 },
    { name: "SDLC", icon: Workflow },
    { name: "System Analysis", icon: Settings },
    { name: "Systems Design", icon: Layout },
    { name: "Quality Control", icon: Settings },
    { name: "Unit Testing", icon: FileCode },
    { name: "Applied Math", icon: Code2 },
    { name: "CPU Architecture", icon: Cpu }
];

const systems: SkillItem[] = [
    { name: "DBMS", icon: Database },
    { name: "Intro to DB", icon: Database },
    { name: "Networking", icon: Network },
    { name: "Cisco", icon: Server },
    { name: "Wireshark", icon: Network },
    { name: "Query Design", icon: Database }
];

const tools: SkillItem[] = [
    { name: "Git", icon: Icons.Git },
    { name: "GitHub", icon: Icons.GitHub },
    { name: "Visual Studio Code", icon: Icons.VSCode },
    { name: "Visual Studio", icon: Icons.VSCode },
    { name: "Figma", icon: PenTool },
    { name: "Bash", icon: Terminal },
    { name: "Agile / Scrum", icon: Users },
    { name: "Team Dev", icon: Users }
];

function TechPill({ item, className }: { item: SkillItem, className?: string }) {
    const Icon = item.icon;
    return (
        <div className={cn(
            "flex items-center gap-3 px-4 py-2 mx-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 cursor-default group",
            className
        )}>
            {Icon && (
                <div className="text-zinc-400 group-hover:text-white transition-colors">
                    {/* Render Lucide icon or Custom SVG */}
                    <Icon className="w-4 h-4 md:w-5 md:h-5" fill={item.icon === Icons.GitHub ? "currentColor" : undefined} />
                </div>
            )}
            <span className="text-zinc-300 text-sm font-medium whitespace-nowrap group-hover:text-white transition-colors">
                {item.name}
            </span>
        </div>
    );
}

export function CoreStack() {
    return (
        <section id="skills" className="py-4 relative z-10 w-full overflow-hidden">
            {/* Background Gradient for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 mb-20 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Core <span className="text-zinc-500">Stack</span>
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                    A comprehensive overview of my technical proficiency, from low-level systems to modern web development.
                </p>
            </div>

            <div className="flex flex-col gap-6 relative z-10 h-full">
                {/* Row 1: Languages */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-center text-sm md:text-base font-semibold text-zinc-500 uppercase tracking-widest mb-2">Languages & Web Fundamentals</h3>
                    <Marquee speed={50} direction="left" pauseOnHover className="mt-0 sm:mt-0">
                        {languages.map((skill) => (
                            <TechPill key={skill.name} item={skill} />
                        ))}
                    </Marquee>
                </div>

                {/* Row 2: Foundations */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-center text-sm md:text-base font-semibold text-cyan-500/70 uppercase tracking-widest mb-2">Engineering Foundations</h3>
                    <Marquee speed={100} direction="right" pauseOnHover className="mt-0 sm:mt-0">
                        {foundations.map((skill) => (
                            <TechPill key={skill.name} item={skill} className="border-cyan-500/20 bg-cyan-500/5" />
                        ))}
                    </Marquee>
                </div>

                {/* Row 3: Systems & Networking */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-center text-sm md:text-base font-semibold text-zinc-500 uppercase tracking-widest mb-2">Systems, Databases & Networking</h3>
                    <Marquee speed={70} direction="left" pauseOnHover className="mt-0 sm:mt-0">
                        {systems.map((skill) => (
                            <TechPill key={skill.name} item={skill} />
                        ))}
                    </Marquee>
                </div>

                {/* Row 4: Tools */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-center text-sm md:text-base font-semibold text-zinc-500 uppercase tracking-widest mb-2">Tools, Platforms & Workflow</h3>
                    <Marquee speed={60} direction="right" pauseOnHover className="mt-0 sm:mt-0">
                        {tools.map((skill) => (
                            <TechPill key={skill.name} item={skill} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}

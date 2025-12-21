import { ProjectCard } from "@/components/ui/project-card";

export function ProjectsSection() {
    return (
        <section id="projects" className="py-12 relative z-10 container mx-auto px-6 w-full">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white text-center">
                    Featured <span className="text-zinc-500">Projects</span>
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <ProjectCard
                        title="Smart Parking Lot System"
                        description="A comprehensive, real-time monitoring and management system for modern smart parking facilities. Features role-based access, device control, and smart alerts."
                        imgSrc="/smart-parking.png"
                        link="https://github.com/FenishPatel0245/smart_parking_.git"
                        tags={["C#", ".NET 8", "Blazor Server", "Clean Architecture", "SignalR", "SQLite"]}
                    />
                    <ProjectCard
                        title="Driver Analytics App"
                        description="A smartphone-based vehicle tracking solution replacing physical hardware. Features real-time driving metrics, GPS route tracking, and automated driver scoring."
                        imgSrc="/driver-analytics-v4.png"
                        link="https://github.com/Shumroz2002/Group19F25.git"
                        tags={["React Native", "Firebase", "Mobile SaaS", "Analytics"]}
                    />
                    <ProjectCard
                        title="Car Racing Game"
                        description="A fullscreen, console-based racing game featuring dynamic enemy spawning, adaptive difficulty, and a file-based leaderboard system."
                        imgSrc="/ascii-racing.png"
                        link="https://github.com/FenishPatel0245/Car_Game.git"
                        tags={["C++", "Windows API", "OOP", "Game Dev"]}
                    />
                    <ProjectCard
                        title="To-Do List Manager"
                        description="A robust, menu-driven console application consisting of task management features like priority sorting, recurring tasks, and persistent file storage."
                        imgSrc="/c-todo-simple.png"
                        link="https://github.com/FenishPatel0245/to-do-list-manager.git"
                        tags={["C", "Data Structures", "File I/O", "Algorithms"]}
                    />
                    <ProjectCard
                        title="Orientation Classifier"
                        description="A C++ OOP application that uses gravity sensor vectors and Nearest Neighbour classification to detect mobile phone orientation."
                        imgSrc="/gravity-sensor.png"
                        link="https://github.com/FenishPatel0245/phone-orientation-detector-cpp.git"
                        tags={["C++", "OOP", "Machine Learning", "Math"]}
                    />
                    <ProjectCard
                        title="Shape Finder Tool"
                        description="A C-based console application for identifying geometric shapes. Features input validation, conditional logic, and mathematical problem-solving."
                        imgSrc="/shape-finder.svg"
                        link="https://github.com/Shumroz2002/CSCN71020_Group3.git"
                        tags={["C", "Geometry", "Logic", "Validation"]}
                    />


                </div>
            </div>
        </section>
    );
}

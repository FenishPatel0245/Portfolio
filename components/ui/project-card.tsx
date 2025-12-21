'use client';
import * as React from "react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the props interface for type safety and clarity
export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
    imgSrc: string;
    title: string;
    description: string;
    link: string;
    linkText?: string;
    tags?: string[];
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
    ({ className, imgSrc, title, description, link, linkText = "View Project", tags, ...props }, ref) => {
        return (
            <GlowCard
                className={cn(
                    "group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border-none bg-zinc-900 text-card-foreground shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl p-0 gap-0 block",
                    className
                )}
                customSize={true}
                glowColor="blue"
                {...props}
            >
                {/* Card Image Section */}
                <div className="aspect-video overflow-hidden border-b border-white/10">
                    <img
                        src={imgSrc}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        loading="lazy"
                    />
                </div>

                {/* Card Content Section */}
                <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                        {title}
                    </h3>
                    <p className="mt-3 flex-1 text-zinc-400 leading-relaxed text-sm mb-4">{description}</p>

                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 text-xs font-medium rounded-full bg-white/10 text-zinc-300 border border-white/5"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Card Link/CTA */}
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/button mt-auto inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-all duration-300 hover:text-blue-300 hover:underline"
                        onClick={(e) => e.stopPropagation()} // Prevent card's onClick if it has one
                    >
                        {linkText}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </a>
                </div>
            </GlowCard>
        );
    }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };

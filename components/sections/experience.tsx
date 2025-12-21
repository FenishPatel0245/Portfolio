'use client';
import { Timeline } from "@/components/ui/timeline";

export function ExperienceSection() {
    const data = [
        {
            title: "Aug 2025 – Present",
            content: (
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">E-commerce Associate</h3>
                    <p className="text-zinc-400 font-medium mb-4">Walmart • Fergus • ON, Canada</p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-400/80 text-sm md:text-base">
                        <li>Managed end-to-end digital fulfillment processes using proprietary inventory management software to ensure timely order processing.</li>
                        <li>Optimized inventory accuracy by conducting rigorous quality checks and reconciling system data with physical stock levels.</li>
                        <li>Enhanced omnichannel operations by coordinating seamless handoffs between online orders and in-store pickup logistics.</li>
                        <li>Maintained strict process compliance and data integrity standards while handling high-volume transaction periods.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Apr 2025 – Aug 2025",
            content: (
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Coffee Clerk</h3>
                    <p className="text-zinc-400 font-medium mb-4">Loblaw Companies • Cambridge • ON, Canada</p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-400/80 text-sm md:text-base">
                        <li>Delivered exceptional customer service in a high-paced environment, handling inquiries and resolving issues with efficiency.</li>
                        <li>Balanced multiple responsibilities including order preparation, inventory monitoring, and point-of-sale transactions.</li>
                        <li>Adhered to strict food safety protocols and hygiene standards, ensuring a safe and compliant workspace.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Jul 2023 – Sep 2024",
            content: (
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Junior Administrative Assistant</h3>
                    <p className="text-zinc-400 font-medium mb-6">JSM Software Solutions • Gujarat, India</p>

                    <div className="mb-8 relative border-l border-zinc-700 pl-4 ml-1">
                        <div className="absolute w-2 h-2 bg-zinc-700 rounded-full -left-[5px] top-1.5"></div>
                        <h4 className="text-lg font-semibold text-white">Junior Administrative Assistant</h4>
                        <p className="text-sm text-zinc-500 mb-2">Permanent Part-time • Dec 2023 - Sep 2024</p>
                        <ul className="list-disc pl-5 space-y-2 text-zinc-400/80 text-sm md:text-base">
                            <li>Proficient in software tools and detail-oriented for accurate task completion.</li>
                            <li>Adaptable problem-solver with strong communication skills (written and verbal).</li>
                            <li>Demonstrated strong teamwork and time management capabilities in a professional setting.</li>
                        </ul>
                    </div>

                    <div className="relative border-l border-zinc-700 pl-4 ml-1">
                        <div className="absolute w-2 h-2 bg-zinc-700 rounded-full -left-[5px] top-1.5"></div>
                        <h4 className="text-lg font-semibold text-white">Administrative Assistant</h4>
                        <p className="text-sm text-zinc-500 mb-2">Internship • Jul 2023 - Dec 2023</p>
                        <ul className="list-disc pl-5 space-y-2 text-zinc-400/80 text-sm md:text-base">
                            <li>Demonstrated resourcefulness in finding effective solutions to administrative challenges.</li>
                            <li>Utilized multitasking capabilities to handle concurrent responsibilities efficiently.</li>
                            <li>Applied strong prioritization skills to ensure timely completion of critical tasks.</li>
                        </ul>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="experience" className="w-full relative z-10">
            <Timeline data={data} />
        </section>
    );
}

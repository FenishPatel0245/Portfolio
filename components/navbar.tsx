'use client';
import Link from 'next/link';

export function Navbar() {
    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none">
            <div className="flex gap-4 md:gap-8 px-6 md:px-8 py-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/5 pointer-events-auto transition-all hover:bg-black/40 hover:border-white/10 max-w-[90vw] overflow-x-auto scrollbar-hide">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

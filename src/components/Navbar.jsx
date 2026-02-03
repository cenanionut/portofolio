import React from 'react';
import { Home, Folder, Briefcase, Wrench, Send } from 'lucide-react';

const Navbar = () => {
    const navItems = [
        { id: 'home', icon: Home, label: 'Home', href: '#' }, // Home usually scrolls to top
        { id: 'projects', icon: Folder, label: 'Projects', href: '#projects' },
        { id: 'experience', icon: Briefcase, label: 'Experience', href: '#experience' },
        { id: 'skills', icon: Wrench, label: 'Skills', href: '#skills' },
        { id: 'contact', icon: Send, label: 'Contact', href: '#contact' },
    ];

    return (
        <div className="w-full flex justify-center py-8 z-50 relative">
            <nav className="flex items-center gap-1 bg-transparent px-6 py-3">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        className="p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                        aria-label={item.label}
                    >
                        <item.icon size={20} strokeWidth={2} />
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;

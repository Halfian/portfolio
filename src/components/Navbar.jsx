import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > window.innerHeight * 0.7); 
        // toggles after ~70% of hero height
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
                    scrolled ? "bg-[var(--app-bg)]/90 backdrop-blur-md shadow-md" : "bg-transparent backdrop-blur-md"
                }`}
            >
                <div className="flex items-center justify-between px-6 py-4 md:px-12">
                    <div className="flex items-center gap-2">
                        <img src="/favicon.png" alt="H logo" className="w-8 h-8 bg-gradient-to-r 
                            from-[var(--app-accent)] to-[var(--app-line)] p-1 shadow-md rounded-full" />
                        <h1 className="text-2xl font-[var(--font-poppins)] font-bold bg-gradient-to-r 
                            from-[var(--app-accent)] to-[var(--app-accent-alt)] bg-clip-text text-transparent 
                            drop-shadow-sm"
                        >
                                Halfian
                        </h1>
                    </div>                
                    <ul className="hidden md:flex gap-8 font-[var(--font-inter)] font-semibold text-[var(--app-fg)] transition-colors duration-200">
                        <li><a href="#hero" className="hover:text-[var(--app-accent)]">Home</a></li>
                        <li><a href="#techstack" className="hover:text-[var(--app-accent)]">Tech Stack</a></li>
                        <li><a href="#projects" className="hover:text-[var(--app-accent)]">Projects</a></li>
                        <li><a href="#about" className="hover:text-[var(--app-accent)]">About</a></li>
                        <li><a href="#contact" className="hover:text-[var(--app-accent)]">Contact</a></li>
                    </ul>
                    <div className="flex items-center gap-4">
                        <ThemeToggle /> 
                        <button
                            className="md:hidden text-2xl text-[var(--app-accent)] cursor-pointer transition"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-[var(--app-accent)]/80 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="flex justify-end p-4">
                        <button className="text-[var(--app-fg)] text-2xl"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaTimes />
                        </button>
                    </div>

                    <div className="flex flex-col items-center gap-6 py-20 font-[var(--font-inter)] font-medium text-[var(--app-accent)]">
                        <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#techstack" onClick={() => setIsOpen(false)}>Tech Stack</a>
                        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                    </div>
                </div>         
            </nav>
            <div className={`fixed inset-0 bg-[var(--app-bg)]/60 backdrop-blur-lg transition-opacity duration-300 ease-in-out z-30 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                        onClick={() => setIsOpen(false)}
            ></div>
        </>
        
    );
}
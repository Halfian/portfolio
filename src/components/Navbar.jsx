import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#007FFF] shadow-md z-50">
            <div className="flex items-center justify-between px-6 py-4 md:px-12">
                <div className="flex items-center gap-2">
                    <img src="/favicon.png" alt="H logo" className="w-8 h-8 bg-white rounded-full" />
                    <h1 className="text-2xl font-poppins font-bold text-white">Halfian</h1>
                </div>
                <ul className="hidden md:flex gap-8 font-inter font-semibold text-white transition-colors duration-200">
                    <li><a href="#hero" className="hover:text-gray-200">Home</a></li>
                    <li><a href="#techstack" className="hover:text-gray-200">Tech Stack</a></li>
                    <li><a href="#projects" className="hover:text-gray-200">Projects</a></li>
                    <li><a href="#about" className="hover:text-gray-200">About</a></li>
                    <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
                </ul>
                <button
                    className="md:hidden text-2xl text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-[#007FFF] shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex justify-end p-4">
                    <button className="text-white text-2xl"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className="flex flex-col items-center gap-6 py-20 font-inter font-medium text-white">
                    <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#techstack" onClick={() => setIsOpen(false)}>Tech Stack</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
            </div>
            
            <div className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out z-30 ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
                    onClick={() => setIsOpen(false)}
            ></div>
        </nav>
    );
}
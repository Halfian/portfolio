export default function About() {
    return (
        <section
            id="about"
            className="scroll-mt-28 bg-white py-20 px-6 md:px-12 relative flex flex-col items-center justify-center text-center md:text-left md:flex-row md:gap-12"
        >
            {/* Background line texture */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#f0f9ff,#f0f9ff_3px,transparent_5px,transparent_60px)] opacity-70"></div>

            {/* About content */}
            <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden shadow-lg mb-8 md:mb-0">
                <img src="/IMG_4311.webp" alt="Halfian photo" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 max-w-xl">
                <h2 className="text-4xl font-poppins font-bold text-[#007FFF] mb-6">
                    About Me
                </h2>
                <p className="text-gray-600 font-inter leading-relaxed mb-4">
                    I'm Halfian, a frontend developer passionate about building clean,
                    scalable, and user friendly web apps. With expertise in React, Zustand,
                    Vite, and TailwindCSS, I focus on crafting modern interfaces that
                    balance originality with professionalism.
                </p>
                <p className="text-gray-600 font-inter leading-relaxed mb-4">
                    Beyond coding, I enjoy iterating on design details — from font pairings
                    to subtle background patterns — to ensure every project feels polished
                    and approachable.
                </p>
                <a href="#contact"
                    className="inline-block mt-6 px-6 py-3 bg-[#007FFF] text-white rounded-lg font-poppins font-semibold hover:bg-[#005FCC] transition-colors duration-200"
                >Get in Touch</a>
            </div>
        </section>
    )
}
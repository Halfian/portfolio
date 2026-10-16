export default function About() {
    return (
        <section
            id="about"
            className="scroll-mt-28 bg-(--app-bg) py-20 px-6 md:px-12 relative flex flex-col items-center 
            justify-center text-center md:text-left md:flex-row md:gap-12"
        >
            {/* Background line texture */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,var(--app-line),var(--app-line)_3px,transparent_5px,transparent_60px) opacity-40"></div>

            {/* About content */}
            <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden shadow-lg mb-8 md:mb-0
                ring-4 ring-transparent bg-linear-to-r from-(--app-accent) to-(--app-accent-alt) p-1"
            >
                <img src="/IMG_4311.webp" alt="Halfian photo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="relative z-10 max-w-xl">
                <h2 className="text-4xl font-bold font-poppins bg-linear-to-r 
                    from-(--app-accent) to-(--app-bg) text-transparent bg-clip-text drop-shadow-sm mb-6">
                    About Me
                </h2>
                <p className="text-(--app-fg)/80 font-inter leading-relaxed max-w-2xl text-base md:text-lg mb-6">
                    I'm Halfian, a frontend developer passionate about building clean,
                    scalable, and user friendly web apps. With expertise in React, Zustand,
                    Vite, and TailwindCSS, I focus on crafting modern interfaces that
                    balance originality with professionalism.
                </p>
                <p className="text-(--app-fg)/80 font-inter leading-relaxed max-w-2xl text-base md:text-lg mb-6">
                    Beyond coding, I enjoy iterating on design details — from font pairings
                    to subtle background patterns — to ensure every project feels polished
                    and approachable.
                </p>
                <a href="#contact"
                    className="inline-block mt-6 px-6 py-3 bg-linear-to-r from-(--app-accent) to-(--app-bg) text-(--app-fg) rounded-lg font-bold font-poppins hover:from-(--app-bg) hover:to-(--app-accent) transition-colors duration-200"
                >Get in Touch</a>
            </div>
        </section>
    )
}
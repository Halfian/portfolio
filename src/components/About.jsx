export default function About() {
    return (
        <section
            id="about"
            className="scroll-mt-28 bg-[var(--app-bg)] py-20 px-6 md:px-12 relative flex flex-col items-center 
            justify-center text-center md:text-left md:flex-row md:gap-12"
        >
            {/* Background line texture */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,var(--app-line),var(--app-line)_3px,transparent_5px,transparent_60px)] opacity-40"></div>

            {/* About content */}
            <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden shadow-lg mb-8 md:mb-0
                ring-4 ring-transparent bg-gradient-to-r from-[var(--app-accent)] to-[var(--app-accent-alt)] p-1"
            >
                <img src="/IMG_4311.webp" alt="Halfian photo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="relative z-10 max-w-xl">
                <h2 className="text-4xl font-[var(--font-poppins)] font-bold bg-gradient-to-r 
                    from-[var(--app-accent)] to-[var(--app-bg)] text-transparent bg-clip-text drop-shadow-sm mb-6">
                    About Me
                </h2>
                <p className="text-[var(--app-fg)] font-[var(--font-inter)] leading-relaxed mb-4">
                    I'm Halfian, a frontend developer passionate about building clean,
                    scalable, and user friendly web apps. With expertise in React, Zustand,
                    Vite, and TailwindCSS, I focus on crafting modern interfaces that
                    balance originality with professionalism.
                </p>
                <p className="text-[var(--app-fg)] font-[var(--font-inter)] leading-relaxed mb-4">
                    Beyond coding, I enjoy iterating on design details — from font pairings
                    to subtle background patterns — to ensure every project feels polished
                    and approachable.
                </p>
                <a href="#contact"
                    className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-[var(--app-accent)] to-[var(--app-bg)] text-[var(--app-fg)] rounded-lg font-[var(--font-poppins)] font-semibold hover:from-[var(--app-bg)] hover:to-[var(--app-accent)] transition-colors duration-200"
                >Get in Touch</a>
            </div>
        </section>
    )
}
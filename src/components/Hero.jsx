import { useEffect, useRef } from "react";

export default function Hero() {
    return (
        <section 
            id="hero" 
            className="scroll-mt-28 relative min-h-screen flex flex-col items-center 
                        justify-center text-center pt-35 pb-10 px-6 md:flex-row 
                        md:items-center md:justify-center md:px-32"
            >      
            {/* Sky gradient background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--hero-top)] 
                via-[var(--hero-mid)] to-[var(--hero-bottom)] backdrop-blur-sm"></div>

            {/* Cloud layer */}
            <div className="absolute inset-0 z-10">
                {/* Left cloud */}
                <div className="absolute top-20 left-10 w-64 h-32 bg-white/60 rounded-full 
                    blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.3)] 
                    animate-[cloudMove_12s_ease-in-out_infinite]"
                ></div>
                {/* Right cloud */}
                <div className="absolute top-40 right-20 w-48 h-24 bg-sky-100/50 rounded-full 
                    blur-2xl shadow-[0_0_30px_rgba(255,255,255,0.25)] 
                    animate-[cloudMove_12s_ease-in-out_infinite] delay-2000"
                ></div>
                {/* Center cloud */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-36 bg-white/55 
                    rounded-full blur-3xl shadow-[0_0_50px_rgba(255,255,255,0.4)] 
                    animate-[cloudMove_14s_ease-in-out_infinite] delay-4000"
                ></div>

                {/* Stars (dark mode only) */}
                <div className="absolute top-24 left-16 w-20 h-20 bg-yellow-400/30 rounded-full 
                    blur-xl animate-[starPulse_6s_ease-in-out_infinite] dark:block hidden"
                ></div>
                <div className="absolute top-1/2 right-24 w-16 h-16 bg-cyan-300/40 rounded-full 
                    blur-xl animate-[starPulse_6s_ease-in-out_infinite] delay-1500 dark:block hidden"
                ></div>
            </div>

            {/* Foreground photo */}
            <div className="relative z-20 md:order-first flex items-center justify-center w-[20rem] 
                h-[20rem] md:w-[22rem] md:h-[22rem] lg:w-[24rem] lg:h-[24rem] cursor-pointer">
                <img
                src="/IMG_3519.webp"
                alt="Photo of Halfian, frontend developer"
                className="w-full h-full rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] 
                    object-cover object-top border-4 border-white"
                />
            </div>            

            {/* Text block */}
            <div className="text-center mt-20 md:text-left max-w-xl relative z-20 md:ml-40 md:mt-10">
                <h1 className="text-5xl font-[var(--font-poppins)] font-bold bg-gradient-to-r from-[var(--app-accent)] to-[var(--app-fg)] bg-clip-text text-transparent drop-shadow-md">
                Hi, I'm Halfian
                </h1>
                <h2 className="text-2xl text-[var(--app-fg)] font-[var(--font-poppins)] font-bold tracking-wide mt-3 drop-shadow-sm">
                Frontend Developer
                </h2>
                <p className="text-gray-500 italic mt-4 font-[var(--font-inter)]">
                Web developer passionate about building clean, scalable, and responsive web apps.
                </p>
                <a href="#projects" 
                className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-[var(--app-accent)] to-[var(--app-accent-alt)] text-white rounded-lg font-semibold font-[var(--font-poppins)] hover:from-[var(--app-accent-alt)] hover:to-[var(--app-accent)] hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--app-accent)] transition-all duration-300 ease-in-out"
                aria-label="View my projects"
                >
                View My Work
                </a>
            </div>                     
        </section>
    );
}
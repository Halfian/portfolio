import { useEffect, useRef } from "react";

export default function Hero() {
    const circlesRef = useRef([]);

    useEffect(() => {
        circlesRef.current.forEach((circle, i) => {
            let angle = 0;
            let speed = i === 0 ? 6 : i === 1 ? -3 : 1;

            const update = () => {
                angle = (angle + speed) % 360;
                if (circle) circle.style.transform = `rotate(${angle}deg)`;
            };

            const interval = setInterval(update, 1000);

            // On hover, temporarily increase speed
            circle?.parentElement?.addEventListener("mouseenter", () => {
            speed *= 8;
            });
            circle?.parentElement?.addEventListener("mouseleave", () => {
            speed = i === 0 ? 6 : i === 1 ? -3 : 1;
            });

            return () => clearInterval(interval);
        });
        }, []);

    return (
        <section 
            id="hero" 
            className="scroll-mt-28 relative min-h-screen flex flex-col items-center justify-center text-center bg-slate-100 pt-35 px-6 md:flex-row md:items-center md:justify-center md:px-32  max-w-6xl mx-auto"
        >      
            {/* Background line texture */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#f0f9ff,#f0f9ff_3px,transparent_5px,transparent_60px)] opacity-50"></div>    
            {/* Photo + circles */}
            <div className="relative md:order-first z-10 flex items-center justify-center w-[20rem] md:ml-20 cursor-pointer">
                <div
                    ref={(el) => (circlesRef.current[0] = el)}
                    className="absolute w-64 h-64 rounded-full opacity-60 
                            bg-[conic-gradient(#1e90ff_0deg_180deg,#00bfff_180deg_360deg)]"
                ></div>
                <div
                    ref={(el) => (circlesRef.current[1] = el)}
                    className="absolute w-[21rem] h-[21rem] rounded-full opacity-50 
                            bg-[conic-gradient(#6a5acd_0deg_180deg,#9370db_180deg_360deg)]"
                ></div>
                <div
                    ref={(el) => (circlesRef.current[2] = el)}
                    className="absolute w-[26rem] h-[26rem] rounded-full opacity-40 
                            bg-[conic-gradient(#87cefa_0deg_180deg,#e6e6fa_180deg_360deg)] hidden md:block"
                ></div>

                {/* Foreground photo */}
                <img
                    src="/IMG_3519.webp"
                    alt="Photo of Halfian, frontend developer"
                    className="w-48 h-48 rounded-full shadow-lg object-cover object-top border-4 border-white relative z-10"
                />
            </div>

            {/* Text block */}
            <div className="text-center mt-20 md:text-left max-w-xl relative z-10 md:ml-40 md:mt-10">
                <h1 className="text-5xl font-poppins font-bold bg-gradient-to-r from-[#007FFF] to-sky-400 bg-clip-text text-transparent drop-shadow-md">
                    Hi, I'm Halfian
                </h1>
                <h2 className="text-2xl text-gray-700 font-poppins font-bold tracking-wide mt-3 drop-shadow-sm">
                    Frontend Developer
                </h2>
                <p className="text-gray-500 italic mt-4 font-inter">
                    Web developer passionate about building clean, scalable, and responsive web apps.
                </p>
                <a href="#projects" 
                    className="mt-6 inline-block px-6 py-3 bg-[#007FFF] text-white rounded-lg font-semibold font-poppins hover:bg-[#005FCC] hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#007FFF] transition"
                    aria-label="View my projects"
                >
                    View My Work
                </a>
            </div>            
        </section>
    );
}
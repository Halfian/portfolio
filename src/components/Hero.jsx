export default function Hero() {
    return (
        <section 
            id="hero" 
            className="scroll-mt-28 relative min-h-screen flex flex-col items-center justify-center text-center bg-white pt-20 px-6 md:flex-row md:items-center md:justify-center md:gap-12 md:px-12 overflow-hidden"
        >            
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#f0f9ff,#f0f9ff_3px,transparent_5px,transparent_50px)] opacity-70"></div>
            <div className="relative md:order-first">
                <div className="absolute inset-0 w-40 h-40 rounded-full bg-[#007FFF] blur-xl opacity-20"></div>
                <img
                    src="/IMG_3519.webp"
                    alt="Photo of Halfian, frontend developer"
                    className="w-48 h-48 rounded-full shadow-lg mb-6 md:mb-0 object-cover object-top border-4 border-white relative z-10"
                />
            </div>
            <div className="text-center md:text-left max-w-xl relative z-10">
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
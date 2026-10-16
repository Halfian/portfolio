export default function TechStack() {
    const skills = [
    { name: "HTML5", logo: "https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white", type: "img" },
    { name: "CSS3", logo: "https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white", type: "img" },
    { name: "JavaScript", logo: "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black", type: "img" },
    { name: "TypeScript", logo: "https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white", type: "img" },
    { name: "React", logo: "⚛️", type: "emoji" },
    { name: "Vite", logo: "🚀", type: "emoji" },
    { name: "Zustand", logo: "🐻", type: "emoji" },
    { name: "TailwindCSS", logo: "https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white", type: "img" },
    { name: "Firebase", logo: "🔥", type: "emoji" },
    { name: "Express", logo: "https://img.shields.io/badge/Express-000000?logo=express&logoColor=white", type: "img" },
    { name: "Supabase", logo: "https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white", type: "img" }
  ];


    return (
        <section id="techstack" className="px-25 py-20 bg-(--app-card) text-center scroll-mt-28">
            <h2 className="text-3xl text-(--app-fg) mb-8 font-bold font-poppins">
                Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex items-center gap-2 bg-linear-to-r from-(--app-accent) 
                        to-(--app-accent-alt) px-4 py-2 rounded-lg shadow-md hover:scale-105 
                        hover:shadow-lg hover:from-(--app-accent-alt) hover:to-(--app-accent) 
                        transition-all duration-300 ease-in-out cursor-default select-none"
                    >
                        {skill.type === "img" ? (
                            <div className="flex items-center justify-center h-7">
                                <img src={skill.logo} alt={skill.name} className="h-full object-contain" />
                            </div>
                        ) : (
                            <div className="flex items-center gap-3 w-full">
                                <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-(--app-card) shadow-sm">
                                    <span className="text-lg">{skill.logo}</span>
                                </div>
                                <span className="font-inter font-medium text-white tracking-wide text-sm md:text-base">
                                    {skill.name}
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
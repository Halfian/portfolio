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
        <section id="techstack" className="px-25 py-20 bg-[var(--app-card)] text-center scroll-mt-28">
            <h2 className="text-3xl font-bold text-[var(--app-fg)] mb-8 font-[var(--font-poppins)]">
                Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex items-center gap-2 bg-gradient-to-r from-[var(--app-accent)] 
                        to-[var(--app-accent-alt)] px-4 py-2 rounded-lg shadow-md hover:scale-105 
                        hover:shadow-lg hover:from-[var(--app-accent-alt)] hover:to-[var(--app-accent)] 
                        transition-all duration-300 ease-in-out"
                    >
                        {skill.type === "img" ? (
                            <img src={skill.logo} alt={skill.name} className="h-6" />
                        ) : (
                            <span className="text-xl flex items-center justify-center w-8 h-8 rounded-full 
                            bg-[var(--app-card)] shadow">{skill.logo}</span>
                        )}
                        <span className="font-[var(--font-inter)] font-medium text-white">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
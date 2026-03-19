export default function TechStack() {
    const skills = [
    { name: "HTML5", logo: "https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white", type: "img" },
    { name: "CSS3", logo: "https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white", type: "img" },
    { name: "JavaScript", logo: "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black", type: "img" },
    { name: "React", logo: "⚛️", type: "emoji" },
    { name: "Vite", logo: "🚀", type: "emoji" },
    { name: "Zustand", logo: "🐻", type: "emoji" },
    { name: "TailwindCSS", logo: "https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white", type: "img" },
    { name: "Firebase", logo: "🔥", type: "emoji" },
    { name: "Express", logo: "https://img.shields.io/badge/Express-000000?logo=express&logoColor=white", type: "img" },
    { name: "Supabase", logo: "https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white", type: "img" }
  ];


    return (
        <section id="techstack" className="py-16 bg-white text-center scroll-mt-28">
            <h2 className="text-3xl font-bold text-[#007FFF] mb-8 font-poppins">
                Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg shadow hover:border-2 hover:border-[#007FFF] transition"
                    >
                        {skill.type === "img" ? (
                            <img src={skill.logo} alt={skill.name} className="h-6" />
                        ) : (
                            <span className="text-xl">{skill.logo}</span>
                        )}
                        <span className="font-inter font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
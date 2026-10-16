import { projects } from '../data/projects';
import useInView from '../hooks/useInView'

export default function Projects() {
    const [ref, isVisible] = useInView({ threshold: 0.2 });
    return (
        <section id="projects" ref={ref} className="scroll-mt-28 bg-(--app-bg) py-20 px-6 md:px-12">
            <h2 className="text-4xl font-bold font-poppins text-center text-(--app-fg) mb-12">
                Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
                    <div key={index} 
                        className={`bg-(--app-card) rounded-xl shadow-lg p-6 flex flex-col justify-between border 
                        border-(--app-line) hover:border-(--app-accent) hover:shadow-xl hover:scale-[1.02 transition-all 
                        duration-300 ease-in-out ${isVisible ? 'fadeInUp' : ''}`}
                        style={{ animationDelay: `${index * 0.5}s` }}
                    >
                        <div>
                            <img 
                                src={project.image} 
                                alt={`${project.title} screenshot`}
                                className="w-full aspect-video object-cover rounded-lg mb-4 transition-transform
                                duration-300 hover:scale-105 hover:brightness-110"
                            />
                            <h3 className="text-2xl font-bold font-poppins bg-linear-to-r from-(--app-accent) to-(--app-accent-alt) text-transparent bg-clip-text mb-3 text-center">
                                {project.title}
                            </h3>
                            <p className="text-(--app-fg) font-inter mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap justify-center gap-2 mb-4 text-center">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-linear-to-r from-(--app-accent) to-(--app-line) 
                                    text-(--app-fg) rounded-full text-sm font-inter shadow-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-auto flex gap-3 justify-center">
                            <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-linear-to-b from-(--app-accent) to-(--app-accent-alt) 
                                text-(--app-fg) rounded-lg font-semibold font-poppins
                                hover:from-(--app-accent-alt) hover:to-(--app-accent) hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                                View Project
                            </a>
                            <a 
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-linear-to-b from-(--app-accent) to-(--app-accent-alt) 
                                text-(--app-fg) rounded-lg font-semibold font-poppins
                                hover:from-(--app-accent-alt) hover:to-(--app-accent)  hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
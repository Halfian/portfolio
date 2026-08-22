import { projects } from '../data/projects';
import useInView from '../hooks/useInView'

export default function Projects() {
    const [ref, isVisible] = useInView({ threshold: 0.2 });
    return (
        <section id="projects" ref={ref} className="scroll-mt-28 bg-[var(--app-bg)] py-20 px-6 md:px-12">
            <h2 className="text-4xl font-[var(--font-poppins)] font-bold text-center text-[var(--app-fg)] mb-12">
                Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
                    <div key={index} 
                        className={`bg-[var(--app-card)] rounded-xl shadow-lg p-6 flex flex-col justify-between border 
                        border-[var(--app-line)] hover:border-[var(--app-accent)] hover:shadow-xl hover:scale-[1.02] transition-all 
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
                            <h3 className="text-2xl font-[var(--font-poppins)] font-bold bg-gradient-to-r from-[var(--app-accent)] to-[var(--app-accent-alt)] text-transparent bg-clip-text mb-3 text-center">
                                {project.title}
                            </h3>
                            <p className="text-[var(--app-fg)] font-[var(--font-inter)] mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap justify-center gap-2 mb-4 text-center">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-[var(--app-accent)] to-[var(--app-line)] 
                                    text-[var(--app-fg)] rounded-full text-sm font-[var(--font-inter)] font-medium shadow-sm">
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
                                className="px-4 py-2 bg-gradient-to-b from-[var(--app-accent)] to-[var(--app-accent-alt)] 
                                text-[var(--app-fg)] rounded-lg font-[var(--font-poppins)] font-semibold 
                                hover:from-[var(--app-accent-alt)] hover:to-[var(--app-accent)] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                                View Project
                            </a>
                            <a 
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-gradient-to-b from-[var(--app-accent)] to-[var(--app-accent-alt)] 
                                text-[var(--app-fg)] rounded-lg font-[var(--font-poppins)] font-semibold 
                                hover:from-[var(--app-accent-alt)] hover:to-[var(--app-accent)]  hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
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
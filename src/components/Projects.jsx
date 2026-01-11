import { projects } from '../data/projects';

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-28 bg-gray-50 py-20 px-6 md:px-12">
            <h2 className="text-4xl font-poppins font-bold text-center text-[#007FFF] mb-12">
                Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl hover:scale-[1.02] transition-transform transition-colors duration-200 border border-gray-200 hover:border-[#007FFF]">
                        <div>
                            <img 
                                src={project.image} 
                                alt={`${project.title} screenshot`}
                                className="w-full aspect-video object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-3 text-center">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 font-inter mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap justify-center gap-2 mb-4 text-center">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-[#f0f9ff] text-[#007FFF] rounded-full text-sm font-inter font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto inline-block px-4 py-2 bg-[#007FFF] text-white rounded-lg font-poppins font-semibold hover:bg-[#005FCC] transition-colors duration-200 text-center"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}
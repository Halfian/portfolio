import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
    return (
        <section
            id="contact"
            className="scroll-mt-28 bg-[var(--app-bg)] py-20 px-6 md:px-12 text-center"
        >
            <h2 className="text-4xl font-[var(--font-poppins)] font-bold bg-gradient-to-r 
                from-[var(--app-accent)] to-[var(--app-accent-alt)] text-transparent bg-clip-text drop-shadow-md mb-6">
                Contact Me
            </h2>
            <p className="text-[var(--app-fg)] font-[var(--font-inter)] mb-8 max-w-xl mx-auto">
                Whether you're a recruiter, collaborator, or fellow developer, feel free to reach out. I'm always open to new opportunities and creative projects.
            </p>
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-8">
                <a href="https://github.com/halfian"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r 
                    from-[var(--app-accent)] to-[var(--app-accent-alt)] text-[var(--app-fg)] shadow-md
                    hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
                >
                    <FaGithub size={22} />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=halfihalfian182@gmail.com&su=Lets%20Connect&body=Hi%20Halfian,%0D%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email Me"
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r
                    from-[var(--app-accent)] to-[var(--app-accent-alt)] text-[var(--app-fg)] shadow-md 
                    hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
                >
                   <FaEnvelope size={22} />
                </a>
                <a href="https://www.linkedin.com/in/halfian-376424bb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r 
                    from-[var(--app-accent)] to-[var(--app-accent-alt)] text-[var(--app-fg)] shadow-md 
                    hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
                >
                   <FaLinkedin size={22} />
                </a>                
            </div>
            <p className="mt-8 text-sm text-gray-500 italic">
                    Let’s build something amazing together ✨
            </p>
        </section>
    )
}
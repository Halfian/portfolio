import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
    return (
        <section
            id="contact"
            className="scroll-mt-28 bg-gray-50 py-20 px-6 md:px-12 text-center"
        >
            <h2 className="text-4xl font-poppins font-bold text-[#007FFF] mb-6">
                Contact Me
            </h2>
            <p className="text-gray-600 font-inter mb-8 max-w-xl mx-auto">
                Whether you're a recruiter, collaborator, or fellow developer, feel free to reach out. I'm always open to new opportunities and creative projects.
            </p>
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-8">
                <a href="https://github.com/halfian"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#007FFF] text-white hover:bg-[#005FCC] transition-colors duration-200"
                >
                    <FaGithub size={22} />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=halfihalfian182@gmail.com&su=Lets%20Connect&body=Hi%20Halfian,%0D%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email Me"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#007FFF] text-white hover:bg-[#005FCC] transition-colors duration-200"
                >
                   <FaEnvelope size={22} />
                </a>
                <a href="https://www.linkedin.com/in/halfian-376424bb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#007FFF] text-white hover:bg-[#005FCC] transition-colors duration-200"
                >
                   <FaLinkedin size={22} />
                </a>
            </div>
        </section>
    )
}
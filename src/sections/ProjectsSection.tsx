import { projectsData } from "../data/projectsData";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="
        bg-gray-900 text-white
        py-20
        md:py-14
        lg:py-24
        px-4 sm:px-6
        hover:bg-gray-800
      "
    >
      <div
        className="
          max-w-6xl mx-auto border rounded-2xl
          px-6 md:px-8
          py-12 md:py-10 lg:py-16
          bg-gray-900/60
        "
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-500">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl p-6 md:p-7 border
                         transition-transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* TEXT */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">
                    {project.name}
                  </h3>

                  <p className="mb-5 text-gray-300 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                    {project.tech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1
                                   rounded-full text-xs border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center md:justify-start gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="px-4 py-2 border border-blue-500 text-blue-400
                                 rounded-md hover:bg-blue-500 hover:text-white transition"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.demoLink}
                      target="_blank"
                      className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
                    >
                      Demo
                    </a>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="md:w-1/2 flex flex-col items-center">
                  <p className="mb-3 text-xs uppercase tracking-wider text-gray-400">
                    Preview
                  </p>

                  <div
                    className="relative rounded-xl p-1
                                  bg-gradient-to-br from-blue-500/40 to-purple-500/40"
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full max-w-xs md:max-w-sm
                                 h-48 md:h-52 lg:h-56
                                 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

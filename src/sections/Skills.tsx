const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen
    md:min-h-0
    xl:min-h-screen
    bg-gray-900 text-white
    px-6 py-20
    hover:bg-gray-800
  "
    >
      <div className="max-w-6xl mx-auto border  rounded-2xl px-8 py-16 bg-gray-900/60">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-16">
          Skills
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="bg-gray-800 rounded-xl p-8 hover:scale-[1.02] transition border">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 hover:scale-[1.02] transition border">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Java", "Python", "JDBC"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 hover:scale-[1.02] transition border">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Database
            </h3>
            <div className="flex flex-wrap gap-3">
              {["MySQL"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 hover:scale-[1.02] transition border">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Tools</h3>
            <div className="flex flex-wrap gap-3">
              {["Git", "GitHub", "VS Code"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

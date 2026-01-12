import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white px-6 py-16 hover:bg-gray-800">
      <div className="max-w-6xl mx-auto border rounded-2xl px-8 py-16 bg-gray-900/60">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-4">
          Let’s Connect
        </h2>

        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
          Have a project idea, internship opportunity, or just want to say hi?
          I’m always open to meaningful conversations.
        </p>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3 ">
          <a
            href="arunareddy3144@gmail.com"
            className="group bg-gray-800 rounded-xl p-6 text-center hover:bg-blue-600 transition-all duration-300 border"
          >
            <Mail className="mx-auto mb-4 h-8 w-8 text-blue-400 group-hover:text-white " />
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <p className="text-sm text-gray-400 group-hover:text-white">
              Upgrade together
            </p>
          </a>

          <a
            href="https://github.com/Arunasettipalli"
            target="_blank"
            className="group bg-gray-800 rounded-xl p-6 text-center hover:bg-blue-600 transition-all duration-300 border"
          >
            <Github className="mx-auto mb-4 h-8 w-8 text-blue-400 group-hover:text-white" />
            <h3 className="text-lg font-semibold mb-1">GitHub</h3>
            <p className="text-sm text-gray-400 group-hover:text-white">
              View my projects
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/settipalliaruna"
            target="_blank"
            className="group bg-gray-800 rounded-xl p-6 text-center hover:bg-blue-600 transition-all duration-300 border"
          >
            <Linkedin className="mx-auto mb-4 h-8 w-8 text-blue-400 group-hover:text-white" />
            <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
            <p className="text-sm text-gray-400 group-hover:text-white">
              Let’s network
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

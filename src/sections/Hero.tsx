import photo from "../assets/Photo.png"; // adjust relative path if Hero.tsx is nested

const Hero = () => {
  return (
    <section
      id="home"
      className="
        bg-gray-900 text-white flex items-center
        min-h-screen
        md:min-h-0
        py-20
        md:py-16
        lg:py-28    
        hover:bg-gray-800    
      "
    >
      <div
        className="
          max-w-6xl mx-auto border rounded-2xl
          px-6 md:px-8
          py-12 md:py-10 lg:py-16
          bg-gray-900/60 w-full          
        "
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Hi, I’m{" "}
              <span className="text-blue-500">
                Aruna
                <sub className="text-xl text-pink-400">Settipalli</sub>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Full Stack Developer passionate about building clean, scalable,
              and user-friendly web applications.
            </p>

            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition"
            >
              View Projects
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end md:pr-6">
            <img
              src={photo} // imported image
              alt="Aru"
              className="w-52 md:w-60 lg:w-64 rounded-b-[999px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

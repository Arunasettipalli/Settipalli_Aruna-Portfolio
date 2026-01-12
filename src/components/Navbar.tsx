import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["home", "projects", "skills", "contact"];

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-blue-400">S</span>
          <span className="text-pink-500">A</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`relative text-sm font-medium transition-all
                  ${
                    activeSection === item
                      ? "text-white after:w-full"
                      : "text-gray-400 hover:text-white"
                  }
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:bg-pink-500
                  after:transition-all after:duration-300
                  after:w-0
                `}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900/95 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium
                ${activeSection === item ? "text-pink-400" : "text-gray-300"}
              `}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

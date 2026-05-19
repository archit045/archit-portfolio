import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-xl border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        <div
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer"
        >
          <h1 className="text-2xl font-bold tracking-wide">
            Archit
            <span className="text-cyan-400">.</span>
          </h1>
        </div>

        <ul className="hidden md:flex items-center gap-10">

          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`cursor-pointer text-sm tracking-wide transition relative ${
                active === link.id
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}

              {active === link.id && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-cyan-400 rounded-full" />
              )}
            </li>
          ))}

        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden mt-5 px-6 pb-6">

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex flex-col gap-6">

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left transition ${
                  active === link.id
                    ? "text-cyan-400"
                    : "text-gray-300"
                }`}
              >
                {link.name}
              </button>
            ))}

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
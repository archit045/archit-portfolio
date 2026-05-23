import {
  Mail,
  Phone
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h3 className="text-xl font-semibold">
            Archit<span className="text-cyan-400">Portfolio</span>
          </h3>

          <p className="text-gray-400 mt-2 text-sm">
            Frontend Developer crafting scalable &
            modern web experiences.
          </p>
        </div>

        <div className="flex items-center gap-5">


          <a
            href="tel:+919893055240"
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <Phone size={18} />
          </a>
          <a
            href="mailto:architthakur90@gmail.com"
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <Mail size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/archit-thakur-7b2195280/"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
          >
          <FaLinkedin size={18} />
          </a>

          

        </div>

      </div>

      <div className="border-t border-white/5 py-5 text-center text-sm text-gray-500">

        © 2026 Archit Thakur. Built with React.js, Tailwind CSS,
          Framer Motion, GSAP & React Three Fiber.

      </div>

    </footer>
  );
};

export default Footer;
const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <h2 className="text-xl font-semibold">
          Archit
          <span className="text-cyan-400">.</span>
        </h2>

        <p className="text-gray-500 text-sm text-center">
          © 2026 Archit Thakur. Built with React.js, Tailwind CSS,
          Framer Motion, GSAP & React Three Fiber.
        </p>

        

      </div>
    </footer>
  );
};

export default Footer;
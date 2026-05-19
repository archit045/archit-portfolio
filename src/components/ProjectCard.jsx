import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-cyan-400 transition-all duration-500"
    >
      <div className="flex items-start justify-between gap-4">

        <div>
          <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
            {project.title}
          </h3>

          <p className="text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </div>


      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        {project.tech.map((item) => (
          <span
            key={item}
            className="px-4 py-2 text-sm rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5 mt-10">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
        >
          <ArrowUpRight size={18} />
          Live Project
        </a>

      </div>
    </motion.div>
  );
};

export default ProjectCard;
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "Redux Toolkit",
  "REST APIs",
  "Axios",
  "Git & GitHub",
  "Material UI",
  "PrimeNG",
  "Responsive Web Design",
  "React Testing Library",
  "Framer Motion",
  "GSAP",
  "CI/CD Pipeline Basics",
  "Postman",
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 px-2">
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Technologies"
          title="Skills & Tools"
        />

        <div className="flex flex-wrap gap-5">

          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400 transition"
            >
              {skill}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
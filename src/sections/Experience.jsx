import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { experiences } from "../constants/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          subtitle="Career Journey"
          title="Experience"
        />

        <div className="relative border-l border-white/10 ml-4">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="mb-20 ml-10 relative"
            >

              <div className="absolute -left-[54px] top-2 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-cyan-400 transition duration-500">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                  <div>
                    <h3 className="text-2xl font-semibold">
                      {exp.role}
                    </h3>

                    <p className="text-cyan-400 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-gray-400 text-sm">
                    {exp.duration}
                  </span>

                </div>

                <ul className="mt-6 space-y-4">

                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-gray-400 leading-relaxed flex gap-3"
                    >
                      <span className="text-cyan-400 mt-1">▹</span>
                      {point}
                    </li>
                  ))}

                </ul>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
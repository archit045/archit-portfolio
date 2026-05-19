import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import TechSphere from "../components/TechSphere";

const TechStack = () => {
  return (
    <section
      className="py-10 px-6 relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Frontend Engineering"
          title="Modern Tech Stack"
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-semibold leading-snug">
              Building scalable frontend applications with modern
              React ecosystem and production-ready architecture.
            </h3>

            <p className="text-gray-400 mt-8 leading-relaxed text-lg">
              Experienced in creating responsive, reusable, and
              scalable frontend systems using React.js,
              Tailwind CSS, Redux Toolkit, REST APIs,
              Framer Motion, GSAP, and modern frontend tooling.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              {[
                "React.js",
                "Tailwind CSS",
                "Redux Toolkit",
                "GSAP",
                "Framer Motion",
                "REST APIs",
              ].map((item) => (
                <span
                  key={item}
                  className="px-5 py-3 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300"
                >
                  {item}
                </span>
              ))}

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TechSphere />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default TechStack;
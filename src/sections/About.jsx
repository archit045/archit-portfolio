import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section  id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Introduction"
          title="About Me"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              I’m a React Frontend Developer with 1+ year of experience
              building scalable, responsive, and production-ready web
              applications.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg mt-6">
              I specialize in React.js, reusable component architecture,
              REST API integration, and modern frontend development
              practices. I enjoy building clean user experiences and
              solving real-world frontend challenges.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-cyan-400">
                  1+
                </h3>

                <p className="text-gray-400 mt-2">
                  Years Experience
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-cyan-400">
                  5+
                </h3>

                <p className="text-gray-400 mt-2">
                  Projects Completed
                </p>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/10 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

              <h3 className="text-2xl font-semibold mb-6">
                Frontend Focus
              </h3>

              <div className="space-y-5">

                <div>
                  <p className="mb-2 text-gray-300">
                    React.js Development
                  </p>

                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[90%] h-full bg-cyan-400 rounded-full" />
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-gray-300">
                    API Integration
                  </p>

                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-cyan-400 rounded-full" />
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-gray-300">
                    Responsive UI Development
                  </p>

                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[92%] h-full bg-cyan-400 rounded-full" />
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
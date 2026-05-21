import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const educationData = [
  {
    icon: <GraduationCap size={34} />,
    degree: "Bachelor of Computer Application (BCA)",
    institute: "Makhanlal Chaturvedi University, Bhopal",
    duration: "2022 - 2025",
    percentage: "71.17%",
  },

  {
    icon: <School size={34} />,
    degree: "Higher Secondary Education",
    institute: "Residential Sports Institution, Sehore",
    duration: "2021 - 2022",
    percentage: "74%",
  },

  //  {
  //   icon: <School size={34} />,
  //   degree: "High S86chool Education",
  //   institute: "ST Paul School, Jawar",
  //   duration: "2019 - 2020",
  //   percentage: "74%",
  // },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-10 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Academic Background"
          title="Education"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="relative group"
            >

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 h-full overflow-hidden">

                <div className="flex items-center justify-between">

                  <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                    {item.icon}
                  </div>

                  <span className="text-sm text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
                    {item.duration}
                  </span>

                </div>

                <h3 className="text-2xl font-bold mt-8 leading-snug">
                  {item.degree}
                </h3>

                <p className="text-gray-400 mt-3 text-lg">
                  {item.institute}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <div>
                    <p className="text-gray-500 text-sm">
                      Percentage
                    </p>

                    <h4 className="text-cyan-400 text-2xl font-bold mt-1">
                      {item.percentage}
                    </h4>
                  </div>

                  

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;
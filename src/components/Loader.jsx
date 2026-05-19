import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[99999] bg-[#050816] flex items-center justify-center">

      <div className="flex flex-col items-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
          className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full"
        />

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
          className="mt-8 text-cyan-400 tracking-[6px] uppercase text-sm"
        >
          Loading Portfolio
        </motion.h2>

      </div>

    </div>
  );
};

export default Loader;
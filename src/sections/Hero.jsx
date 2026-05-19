import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-text", {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            });

            gsap.to(".hero-glow", {
                y: 80,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    scrub: true,
                },
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="min-h-screen flex items-center justify-center relative px-6 pt-28 overflow-hidden"
        >

            <div className="hero-glow w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[120px] absolute top-20 right-20" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">

                <div>

                    <p className="hero-text text-cyan-400 uppercase tracking-[4px] mb-5">
                        React Frontend Developer
                    </p>

                    <h1 className="hero-text text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        Building <span className="text-cyan-400">scalable</span>,
                        modern & production-ready frontend applications.
                    </h1>

                    <p className="hero-text text-gray-400 mt-8 text-base sm:text-lg leading-relaxed max-w-2xl">

                        React Frontend Developer specializing in scalable web
                        applications, reusable component architecture, API
                        integration, and modern frontend development.
                    </p>

                    <div className="hero-text mt-10 flex flex-wrap gap-5">

                        <button
                            onClick={() => {
                                document
                                    .getElementById("projects")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                            className="bg-cyan-400 text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition cursor-pointer"
                        >
                            View Projects
                        </button>

                        <a
                            href="/Archit-Thakur-Frontend-resume-1.pdf"
                            download
                            className="border border-white/10 px-7 py-3 rounded-full hover:bg-white/5 transition cursor-pointer inline-flex items-center"
                        >
                            Download Resume
                        </a>

                    </div>

                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center"
                >

                    <div className="w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-[40px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 backdrop-blur-xl flex items-center justify-center">

                        <div className="w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] rounded-[30px] overflow-hidden border border-white/10">
                            <img
                                src="/HeroSectionImage.jpg"
                                alt="Archit"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                    </div>

                </motion.div>

            </div>
        </section >
    );
};

export default Hero;
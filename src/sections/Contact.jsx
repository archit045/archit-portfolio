import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { FaLinkedin } from "react-icons/fa";
import {
  Mail,
  Phone
} from "lucide-react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-10 px-6 relative overflow-hidden"
        >

            <div className="max-w-5xl mx-auto">

                <SectionTitle
                    subtitle="Get In Touch"
                    title="Let's Connect"
                />

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl"
                >

                    <div className="grid md:grid-cols-2 gap-12">

                        <div>

                            <h3 className="text-3xl font-semibold leading-snug">
                                Let’s build scalable and modern frontend experiences together.
                            </h3>

                            <p className="text-gray-400 mt-6 leading-relaxed">
                                Open to frontend development opportunities,
                                React.js roles, freelance work, and
                                collaboration on modern web applications.
                            </p>

                            <div className="mt-10 space-y-5">
                                <div>
                                    <p className="text-gray-500 text-sm flex items-center gap-2 transition">
                                        <Mail size={18}/>
                                        EMAIL
                                    </p>
                                    <a
                                        href="mailto:architthakur90@gmail.com"
                                        target="_blank"
                                        className="text-lg hover:text-cyan-400 transition"
                                    >
                                        architthakur90@gmail.com
                                    </a>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm flex items-center gap-2 transition">
                                         <FaLinkedin size={18} />
                                        LINKEDIN
                                    </p>

                                    <a
                                        href="https://www.linkedin.com/in/archit-thakur-7b2195280/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-lg hover:text-cyan-400 transition"
                                    >
                                        View Profile
                                    </a>
                                </div>

                                <div>
                                    <div>
                                        <p className="text-gray-500 text-sm flex items-center gap-2 transitionc">
                                            <Phone size={18}/>
                                            Mobile Number
                                        </p>
                                        <a
                                            href="tel:+919893055240"
                                            className="text-lg hover:text-cyan-400 transition"
                                        >
                                            +91 9893055240
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();

                                const name = e.target.name.value;
                                const email = e.target.email.value;
                                const message = e.target.message.value;

                                const text = `Hello Archit,%0A%0AName: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

                                window.open(
                                    `https://wa.me/919893055240?text=${text}`,
                                    "_blank"
                                );
                            }}
                            className="space-y-6"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                            />

                            <textarea
                                rows="5"
                                name="message"
                                placeholder="Your Message"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
                            />

                            <button
                                type="submit"
                                className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
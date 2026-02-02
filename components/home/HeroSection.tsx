"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent-200/20 to-deep-200/20 rounded-full blur-3xl"
                />
            </div>

            <div className="section-container relative z-10 py-32">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div variants={fadeInUp} className="mb-8 inline-block">
                        <span className="inline-flex items-center px-6 py-2 rounded-full bg-white shadow-soft text-sm font-medium text-brand-dark">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                            Trusted by Government, Hospitals & Industries
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        variants={fadeInUp}
                        className="text-display-lg font-display mb-6 text-brand-dark"
                    >
                        Transform Hard Water Into{" "}
                        <span className="gradient-text">Pure Excellence</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        E-SOFT Electro Hydro Enhancer delivers chemical-free, eco-friendly
                        water treatment solutions for agriculture, industrial, healthcare,
                        and residential applications.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >
                        <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                            Get Free Consultation
                        </Link>
                        <Link
                            href="/technology"
                            className="btn-outline text-lg px-8 py-4"
                        >
                            How It Works
                        </Link>
                    </motion.div>

                    {/* Trust Stats */}
                    <motion.div
                        variants={fadeInUp}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                    >
                        {[
                            { value: "15+", label: "Years Experience" },
                            { value: "500+", label: "Installations" },
                            { value: "50+", label: "Government Projects" },
                            { value: "99%", label: "Client Satisfaction" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft"
                            >
                                <div className="text-4xl font-display font-bold gradient-text mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="w-6 h-10 border-2 border-primary-500 rounded-full flex items-start justify-center p-2"
                        >
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

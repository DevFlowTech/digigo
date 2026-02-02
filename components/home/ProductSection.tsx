"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const features = [
    {
        icon: "⚡",
        title: "Electro-Magnetic Technology",
        description:
            "Advanced electromagnetic fields alter the molecular structure of hard water minerals, preventing scale formation.",
    },
    {
        icon: "🔬",
        title: "Chemical-Free Process",
        description:
            "100% eco-friendly solution with no chemicals, salts, or additives required for water treatment.",
    },
    {
        icon: "💧",
        title: "Zero Maintenance",
        description:
            "Self-sustaining system with minimal maintenance requirements and no consumables to replace.",
    },
    {
        icon: "⚙️",
        title: "Easy Installation",
        description:
            "Non-invasive installation process that integrates seamlessly with existing water systems.",
    },
    {
        icon: "🌍",
        title: "Environmentally Safe",
        description:
            "Reduces environmental impact by eliminating chemical discharge and water wastage.",
    },
    {
        icon: "💰",
        title: "Cost-Effective",
        description:
            "Significant ROI through reduced operational costs, energy savings, and extended equipment life.",
    },
];

const applications = [
    {
        name: "Agriculture",
        icon: "🌾",
        href: "/applications/agriculture",
        color: "bg-green-500",
    },
    {
        name: "Industrial",
        icon: "🏭",
        href: "/applications/industrial",
        color: "bg-blue-500",
    },
    {
        name: "Hospitals",
        icon: "🏥",
        href: "/applications/hospitals",
        color: "bg-red-500",
    },
    {
        name: "Residential",
        icon: "🏠",
        href: "/applications/residential",
        color: "bg-purple-500",
    },
    {
        name: "Commercial",
        icon: "🏢",
        href: "/applications/commercial",
        color: "bg-orange-500",
    },
];

export default function ProductSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding bg-white">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-display-sm font-display mb-4">
                        E-SOFT: Revolutionary Water Treatment
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our Electro Hydro Enhancer uses cutting-edge technology to transform
                        hard water without chemicals, providing sustainable solutions across
                        all sectors.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card-hover p-8 group"
                        >
                            <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-heading-md mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Applications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-12"
                >
                    <h3 className="text-heading-xl font-display text-center mb-4">
                        Applications Across Industries
                    </h3>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        E-SOFT technology is versatile and proven effective across diverse
                        sectors, each with unique water treatment challenges.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {applications.map((app, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                            >
                                <Link
                                    href={app.href}
                                    className="block bg-white rounded-xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 group"
                                >
                                    <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                                        {app.icon}
                                    </div>
                                    <h4 className="font-semibold text-brand-dark group-hover:text-primary-600 transition-colors">
                                        {app.name}
                                    </h4>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/technology" className="btn-primary">
                            Learn How E-SOFT Works
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

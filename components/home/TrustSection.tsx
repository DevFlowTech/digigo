"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
    {
        title: "ISO Certified",
        description: "ISO 9001:2015 Quality Management",
        icon: "🏆",
    },
    {
        title: "Government Approved",
        description: "Certified for Public Sector Projects",
        icon: "✓",
    },
    {
        title: "Eco-Friendly",
        description: "100% Chemical-Free Technology",
        icon: "🌱",
    },
    {
        title: "Proven Results",
        description: "15+ Years Track Record",
        icon: "📊",
    },
];

const clients = [
    "Government of India",
    "AIIMS Hospital",
    "Tata Steel",
    "Reliance Industries",
    "Indian Railways",
    "State Agriculture Dept",
];

export default function TrustSection() {
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
                        Trusted by Leading Organizations
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our E-SOFT technology is the preferred choice for government
                        institutions, hospitals, and major industries across India.
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card-hover p-6 text-center"
                        >
                            <div className="text-5xl mb-4">{cert.icon}</div>
                            <h3 className="text-heading-sm mb-2">{cert.title}</h3>
                            <p className="text-sm text-gray-600">{cert.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Client Logos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-brand-subtle rounded-2xl p-12"
                >
                    <h3 className="text-heading-md text-center mb-8 text-brand-dark">
                        Our Prestigious Clients
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                className="flex items-center justify-center"
                            >
                                <div className="bg-white rounded-lg p-4 shadow-soft hover:shadow-medium transition-shadow duration-300 w-full h-24 flex items-center justify-center">
                                    <span className="text-sm font-semibold text-brand-dark text-center">
                                        {client}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

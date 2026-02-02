"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const impactStats = [
    {
        value: 75,
        suffix: "%",
        label: "Cost Savings",
        description: "Reduce operational costs significantly",
        color: "from-primary-500 to-secondary-500",
    },
    {
        value: 90,
        suffix: "%",
        label: "Scale Reduction",
        description: "Eliminate hard water scale buildup",
        color: "from-secondary-500 to-danger-500",
    },
    {
        value: 100,
        suffix: "%",
        label: "Chemical-Free",
        description: "Eco-friendly water treatment",
        color: "from-accent-500 to-deep-500",
    },
    {
        value: 50,
        suffix: "%",
        label: "Energy Savings",
        description: "Lower energy consumption",
        color: "from-deep-500 to-primary-500",
    },
];

function Counter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const increment = end / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [isInView, value, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}
            {suffix}
        </span>
    );
}

export default function ImpactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding bg-gradient-to-br from-gray-50 to-white">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-display-sm font-display mb-4">
                        Measurable Impact & Savings
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        E-SOFT delivers quantifiable results that directly impact your
                        bottom line and environmental footprint.
                    </p>
                </motion.div>

                {/* Impact Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {impactStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="card-hover p-8 text-center h-full">
                                {/* Gradient Background */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`text-6xl font-display font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <h3 className="text-heading-sm mb-2">{stat.label}</h3>
                                    <p className="text-sm text-gray-600">{stat.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ROI Calculator CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-gradient-brand rounded-2xl p-12 text-center text-white shadow-brand"
                >
                    <h3 className="text-heading-xl font-display mb-4">
                        Calculate Your Potential Savings
                    </h3>
                    <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
                        See how much you can save with E-SOFT technology. Our ROI calculator
                        provides instant estimates based on your specific requirements.
                    </p>
                    <Link
                        href="/impact"
                        className="inline-flex items-center px-8 py-4 bg-white text-brand-dark rounded-lg font-semibold hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
                    >
                        Calculate ROI Now
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

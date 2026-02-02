import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Applications - E-SOFT Solutions for All Sectors",
    description:
        "E-SOFT water treatment solutions for agriculture, residential, commercial, industrial, and healthcare sectors.",
};

const applications = [
    {
        name: "Agriculture",
        slug: "agriculture",
        icon: "🌾",
        description:
            "Enhance crop yield and irrigation efficiency with treated water that improves soil penetration and nutrient absorption.",
        benefits: [
            "Improved crop yield",
            "Better soil penetration",
            "Reduced fertilizer costs",
            "Extended equipment life",
        ],
        color: "from-green-500 to-emerald-600",
    },
    {
        name: "Residential",
        slug: "residential",
        icon: "🏠",
        description:
            "Protect your home appliances, reduce cleaning time, and enjoy softer water for your family's daily needs.",
        benefits: [
            "Softer skin and hair",
            "Cleaner dishes and laundry",
            "Extended appliance life",
            "Reduced soap usage",
        ],
        color: "from-purple-500 to-violet-600",
    },
    {
        name: "Commercial",
        slug: "commercial",
        icon: "🏢",
        description:
            "Reduce operational costs in hotels, restaurants, laundries, and other commercial establishments.",
        benefits: [
            "Lower maintenance costs",
            "Improved customer satisfaction",
            "Energy savings",
            "Better equipment performance",
        ],
        color: "from-orange-500 to-amber-600",
    },
    {
        name: "Industrial",
        slug: "industrial",
        icon: "🏭",
        description:
            "Optimize manufacturing processes, protect expensive equipment, and reduce downtime in industrial operations.",
        benefits: [
            "Reduced scale buildup",
            "Lower energy consumption",
            "Minimal downtime",
            "Extended equipment life",
        ],
        color: "from-blue-500 to-cyan-600",
    },
    {
        name: "Hospitals",
        slug: "hospitals",
        icon: "🏥",
        description:
            "Ensure pure water quality for medical equipment, patient care, and hospital operations with chemical-free treatment.",
        benefits: [
            "Medical equipment protection",
            "Patient safety",
            "Reduced contamination risk",
            "Lower operational costs",
        ],
        color: "from-red-500 to-rose-600",
    },
];

export default function ApplicationsPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-display-md font-display mb-6">
                            E-SOFT Applications Across Industries
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Our versatile water treatment technology serves diverse sectors,
                            each with unique challenges and requirements. Discover how E-SOFT
                            can transform your operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Applications Grid */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {applications.map((app, index) => (
                            <div
                                key={index}
                                className="card-hover p-8 group relative overflow-hidden"
                            >
                                {/* Gradient Background on Hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                />

                                <div className="relative z-10">
                                    {/* Icon and Title */}
                                    <div className="flex items-center mb-4">
                                        <div className="text-6xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {app.icon}
                                        </div>
                                        <h2 className="text-heading-xl font-display">
                                            {app.name}
                                        </h2>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        {app.description}
                                    </p>

                                    {/* Benefits */}
                                    <div className="mb-6">
                                        <h3 className="text-heading-sm mb-3">Key Benefits:</h3>
                                        <ul className="space-y-2">
                                            {app.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <svg
                                                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    <span className="text-gray-700">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href={`/applications/${app.slug}`}
                                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                                    >
                                        Learn More
                                        <svg
                                            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-brand text-white">
                <div className="section-container text-center">
                    <h2 className="text-display-sm font-display mb-6">
                        Find the Right Solution for Your Sector
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
                        Our experts will help you identify the perfect E-SOFT configuration
                        for your specific needs.
                    </p>
                    <Link
                        href="/contact"
                        className="btn bg-white text-brand-dark hover:shadow-strong"
                    >
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}

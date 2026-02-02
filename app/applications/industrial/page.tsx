import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Industrial Water Treatment - E-SOFT Solutions",
    description:
        "E-SOFT industrial water treatment: optimize manufacturing, protect equipment, reduce downtime, and lower operational costs.",
};

export default function IndustrialPage() {
    return (
        <div className="pt-32">
            <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-cyan-50">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-blue-50 text-blue-600">
                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h1 className="text-display-md font-display mb-6">
                            Industrial Water Solutions
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Maximize efficiency and minimize downtime with E-SOFT industrial
                            water treatment. Protect critical equipment, reduce energy
                            consumption, and optimize manufacturing processes.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="section-container">
                    <h2 className="text-display-sm font-display text-center mb-16">
                        Industrial Applications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Cooling Towers",
                                description:
                                    "Prevent scale formation in cooling systems, improving heat transfer efficiency and reducing maintenance.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Boilers & Heat Exchangers",
                                description:
                                    "Eliminate scale buildup to maintain optimal heat transfer and prevent costly equipment failures.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Manufacturing Processes",
                                description:
                                    "Ensure consistent water quality for production processes, reducing defects and improving output.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Textile Industry",
                                description:
                                    "Achieve better dye absorption, brighter colors, and softer fabrics with treated water.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Food & Beverage",
                                description:
                                    "Meet strict quality standards while protecting processing equipment and improving product quality.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Chemical Processing",
                                description:
                                    "Maintain precise water chemistry for chemical reactions and protect sensitive equipment.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                ),
                            },
                        ].map((app, index) => (
                            <div key={index} className="card-hover p-8 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-blue-50 text-blue-600">
                                    {app.icon}
                                </div>
                                <h3 className="text-heading-md mb-3">{app.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {app.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="section-container">
                    <h2 className="text-display-sm font-display text-center mb-16">
                        Industrial Benefits
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Operational Efficiency",
                                benefits: [
                                    "Reduced equipment downtime",
                                    "Improved heat transfer efficiency",
                                    "Lower energy consumption",
                                    "Consistent production quality",
                                    "Extended equipment lifespan",
                                ],
                            },
                            {
                                title: "Cost Savings",
                                benefits: [
                                    "Reduced maintenance costs",
                                    "Lower chemical usage",
                                    "Decreased water consumption",
                                    "Minimized equipment replacement",
                                    "Energy bill reduction",
                                ],
                            },
                            {
                                title: "Environmental Compliance",
                                benefits: [
                                    "No chemical discharge",
                                    "Reduced water wastage",
                                    "Lower carbon footprint",
                                    "Sustainable operations",
                                    "Green certification support",
                                ],
                            },
                            {
                                title: "Safety & Reliability",
                                benefits: [
                                    "Reduced corrosion risk",
                                    "Improved system reliability",
                                    "Lower failure rates",
                                    "Enhanced safety standards",
                                    "Predictable maintenance schedules",
                                ],
                            },
                        ].map((category, index) => (
                            <div key={index} className="card p-8">
                                <h3 className="text-heading-lg mb-6 text-blue-600">
                                    {category.title}
                                </h3>
                                <ul className="space-y-3">
                                    {category.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5"
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
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-display-sm font-display text-center mb-12">
                            Industrial ROI
                        </h2>

                        <div className="card p-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                {[
                                    { value: "45%", label: "Energy Cost Reduction" },
                                    { value: "70%", label: "Maintenance Savings" },
                                    { value: "60%", label: "Equipment Life Extension" },
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-5xl font-display font-bold text-blue-600 mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-700 font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-gray-600 text-lg">
                                Typical payback period: <strong>6-12 months</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-700 text-white">
                <div className="section-container text-center">
                    <h2 className="text-display-sm font-display mb-6">
                        Optimize Your Industrial Operations
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
                        Get a customized E-SOFT solution engineered for your specific
                        industrial requirements and see immediate improvements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="btn bg-white text-blue-700 hover:shadow-strong"
                        >
                            Request Industrial Assessment
                        </Link>
                        <Link
                            href="/government-projects"
                            className="btn border-2 border-white text-white hover:bg-white/10"
                        >
                            View Industrial Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

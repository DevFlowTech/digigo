import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Agriculture Water Treatment - E-SOFT Solutions",
    description:
        "E-SOFT water treatment solutions for agriculture: improve crop yield, enhance irrigation efficiency, and reduce operational costs.",
};

export default function AgriculturePage() {
    return (
        <div className="pt-32">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-green-50 via-white to-emerald-50">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-green-50 text-green-600">
                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                        </div>
                        <h1 className="text-display-md font-display mb-6">
                            Agriculture Water Solutions
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Transform your agricultural operations with E-SOFT technology.
                            Improve crop yield, enhance soil penetration, and reduce costs
                            with chemical-free water treatment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <h2 className="text-display-sm font-display text-center mb-16">
                        Benefits for Agriculture
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Increased Crop Yield",
                                description:
                                    "Treated water improves nutrient absorption and soil penetration, leading to healthier crops and higher yields.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Better Soil Penetration",
                                description:
                                    "Reduced surface tension allows water to penetrate deeper into soil, reaching root systems more effectively.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Reduced Fertilizer Costs",
                                description:
                                    "Improved water quality enhances fertilizer efficiency, reducing the amount needed for optimal growth.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Extended Equipment Life",
                                description:
                                    "Eliminate scale buildup in irrigation systems, pumps, and sprinklers, reducing maintenance and replacement costs.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Water Conservation",
                                description:
                                    "More efficient water usage means less wastage and lower water bills for your agricultural operations.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Eco-Friendly Farming",
                                description:
                                    "100% chemical-free treatment aligns with organic and sustainable farming practices.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                            },
                        ].map((benefit, index) => (
                            <div key={index} className="card-hover p-8 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-green-50 text-green-600">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-heading-md mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="section-container">
                    <h2 className="text-display-sm font-display text-center mb-16">
                        Agricultural Applications
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Drip Irrigation Systems",
                                description:
                                    "Prevent clogging in drip emitters and maintain consistent water flow for precision agriculture.",
                                features: [
                                    "No emitter clogging",
                                    "Uniform water distribution",
                                    "Extended system life",
                                    "Reduced maintenance",
                                ],
                            },
                            {
                                title: "Sprinkler Systems",
                                description:
                                    "Keep sprinkler heads clean and functioning optimally for even coverage across your fields.",
                                features: [
                                    "No scale buildup",
                                    "Consistent spray patterns",
                                    "Lower energy costs",
                                    "Better coverage",
                                ],
                            },
                            {
                                title: "Greenhouse Operations",
                                description:
                                    "Protect sensitive greenhouse equipment and provide optimal water quality for controlled environments.",
                                features: [
                                    "Equipment protection",
                                    "Better plant health",
                                    "Reduced contamination",
                                    "Improved yields",
                                ],
                            },
                            {
                                title: "Livestock Farming",
                                description:
                                    "Provide cleaner water for livestock, improving animal health and reducing veterinary costs.",
                                features: [
                                    "Healthier livestock",
                                    "Better hydration",
                                    "Reduced health issues",
                                    "Lower vet costs",
                                ],
                            },
                        ].map((useCase, index) => (
                            <div key={index} className="card p-8">
                                <h3 className="text-heading-lg mb-4 text-green-600">
                                    {useCase.title}
                                </h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {useCase.description}
                                </p>
                                <ul className="space-y-3">
                                    {useCase.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5"
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
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI Section */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-display-sm font-display text-center mb-12">
                            Return on Investment
                        </h2>

                        <div className="card p-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                {[
                                    { value: "30-50%", label: "Yield Increase" },
                                    { value: "40%", label: "Water Savings" },
                                    { value: "60%", label: "Equipment Life Extension" },
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-5xl font-display font-bold text-green-600 mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-700 font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-gray-600 text-lg">
                                Typical payback period: <strong>12-18 months</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-700 text-white">
                <div className="section-container text-center">
                    <h2 className="text-display-sm font-display mb-6">
                        Transform Your Agricultural Operations
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
                        Get a customized E-SOFT solution designed for your specific
                        agricultural needs and see the difference in your next harvest.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="btn bg-white text-green-700 hover:shadow-strong"
                        >
                            Request Agricultural Consultation
                        </Link>
                        <Link
                            href="/projects"
                            className="btn border-2 border-white text-white hover:bg-white/10"
                        >
                            View Agriculture Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

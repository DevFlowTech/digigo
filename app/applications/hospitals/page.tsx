import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Hospital Water Treatment - E-SOFT Solutions",
    description:
        "E-SOFT hospital water treatment: protect medical equipment, ensure patient safety, and maintain hygiene standards with chemical-free technology.",
};

export default function HospitalsPage() {
    return (
        <div className="pt-32">
            <section className="section-padding bg-gradient-to-br from-red-50 via-white to-rose-50">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-red-50 text-red-600">
                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2" />
                            </svg>
                        </div>
                        <h1 className="text-display-md font-display mb-6">
                            Hospital Water Solutions
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Ensure the highest water quality standards for patient care and
                            medical operations. E-SOFT provides chemical-free treatment that
                            protects sensitive equipment and maintains hygiene.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="section-container">
                    <h2 className="text-display-sm font-display text-center mb-16">
                        Critical Hospital Applications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Medical Equipment Protection",
                                description:
                                    "Protect expensive diagnostic and treatment equipment from scale damage and ensure optimal performance.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Sterilization Systems",
                                description:
                                    "Maintain autoclave efficiency and prevent scale buildup in sterilization equipment.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Dialysis Units",
                                description:
                                    "Ensure pure water quality for dialysis treatments, critical for patient safety and treatment efficacy.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Laundry Services",
                                description:
                                    "Achieve superior hygiene standards for hospital linens while reducing detergent and energy costs.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                    </svg>
                                ),
                            },
                            {
                                title: "HVAC Systems",
                                description:
                                    "Maintain clean air handling systems and prevent bacterial growth in cooling towers.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Kitchen & Cafeteria",
                                description:
                                    "Ensure food safety with clean water for cooking, dishwashing, and beverage preparation.",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
                                    </svg>
                                ),
                            },
                        ].map((app, index) => (
                            <div key={index} className="card-hover p-8 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-red-50 text-red-600">
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
                        Healthcare Benefits
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Patient Safety & Care",
                                benefits: [
                                    "Chemical-free water treatment",
                                    "Reduced contamination risk",
                                    "Better dialysis water quality",
                                    "Improved patient outcomes",
                                    "Enhanced hygiene standards",
                                ],
                            },
                            {
                                title: "Equipment Reliability",
                                benefits: [
                                    "Protected medical devices",
                                    "Extended equipment lifespan",
                                    "Reduced maintenance downtime",
                                    "Optimal equipment performance",
                                    "Lower replacement costs",
                                ],
                            },
                            {
                                title: "Operational Efficiency",
                                benefits: [
                                    "Reduced energy consumption",
                                    "Lower water usage",
                                    "Decreased chemical costs",
                                    "Minimal system maintenance",
                                    "Improved workflow efficiency",
                                ],
                            },
                            {
                                title: "Compliance & Standards",
                                benefits: [
                                    "Meets healthcare regulations",
                                    "Supports accreditation",
                                    "Environmental compliance",
                                    "Quality assurance support",
                                    "Documentation assistance",
                                ],
                            },
                        ].map((category, index) => (
                            <div key={index} className="card p-8">
                                <h3 className="text-heading-lg mb-6 text-red-600">
                                    {category.title}
                                </h3>
                                <ul className="space-y-3">
                                    {category.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5"
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
                    <h2 className="text-display-sm font-display text-center mb-12">
                        Why Hospitals Choose E-SOFT
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "No Chemical Contamination",
                                description:
                                    "Unlike traditional softeners, E-SOFT uses no salt or chemicals, eliminating any risk of chemical contamination in hospital water systems.",
                            },
                            {
                                title: "Proven in Healthcare",
                                description:
                                    "Successfully installed in major hospitals including AIIMS and other leading healthcare facilities across India.",
                            },
                            {
                                title: "24/7 Reliability",
                                description:
                                    "Zero maintenance requirements ensure continuous operation critical for hospital environments.",
                            },
                            {
                                title: "Cost-Effective",
                                description:
                                    "Significant reduction in operational costs while maintaining the highest water quality standards.",
                            },
                        ].map((reason, index) => (
                            <div key={index} className="card p-8">
                                <h3 className="text-heading-md mb-4 text-red-600">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-red-600 to-rose-700 text-white">
                <div className="section-container text-center">
                    <h2 className="text-display-sm font-display mb-6">
                        Elevate Your Hospital's Water Quality
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
                        Join leading hospitals in providing the best water quality for
                        patient care and medical operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="btn bg-white text-red-700 hover:shadow-strong"
                        >
                            Request Healthcare Consultation
                        </Link>
                        <Link
                            href="/projects"
                            className="btn border-2 border-white text-white hover:bg-white/10"
                        >
                            View Hospital Installations
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

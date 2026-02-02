import type { Metadata } from "next";
import GovProjectGallery from "@/components/GovProjectGallery";
import governmentProjects from "@/data/government-projects.json";

export const metadata: Metadata = {
    title: "Government Projects - DIGIGO E-SOFT Solutions",
    description:
        "E-SOFT water treatment installations in government institutions including Rajbhavan, Civil Hospitals, and Sachivalaya across Gujarat.",
};

export default function GovernmentProjectsPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Trusted by Government Institutions
                        </div>
                        <h1 className="text-display-md font-display mb-6">
                            Government Projects
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Delivering world-class water treatment solutions to government
                            institutions, hospitals, and public facilities across Gujarat.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {[
                            { value: "50+", label: "Government Projects" },
                            { value: "15+", label: "Hospitals Served" },
                            { value: "100%", label: "Uptime Guarantee" },
                            { value: "24/7", label: "Support Available" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-700 font-medium text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Gallery */}
            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <h2 className="text-display-sm font-display mb-4">
                            Featured Installations
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore our successful implementations across major government
                            facilities in Gujarat
                        </p>
                    </div>

                    <GovProjectGallery projects={governmentProjects.projects} />
                </div>
            </section>

            {/* Certifications */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <h2 className="text-display-sm font-display text-center mb-12">
                        Certifications & Compliance
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "ISO 9001:2015",
                                description: "Quality management system certified",
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                                title: "GeM Registered",
                                description: "Government e-Marketplace approved vendor",
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                ),
                                title: "NSIC Certified",
                                description: "National Small Industries Corporation approved",
                            },
                        ].map((cert, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 text-center border border-gray-200 hover:border-primary-500 transition-colors duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-primary-50 text-primary-600">
                                    {cert.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                                    {cert.title}
                                </h3>
                                <p className="text-gray-600">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-brand text-white">
                <div className="section-container text-center">
                    <h2 className="text-display-sm font-display mb-6">
                        Partner with a Trusted Government Vendor
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
                        Contact us for government tenders, bulk installations, and long-term
                        maintenance contracts.
                    </p>
                    <a
                        href="/contact"
                        className="btn bg-white text-brand-dark hover:shadow-strong text-lg px-8 py-4 inline-block"
                    >
                        Request Government Quote
                    </a>
                </div>
            </section>
        </div>
    );
}

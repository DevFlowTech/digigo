import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projects.json";

export const metadata: Metadata = {
    title: "Our Projects - DIGIGO E-SOFT Solutions",
    description:
        "Explore E-SOFT water treatment installations across agriculture, residential, commercial, and industrial sectors.",
};

export default function ProjectsPage() {
    return (
        <div className="pt-32">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                <div className="section-container px-4 sm:px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-4 sm:mb-6">
                            Our Projects
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                            Delivering excellence across diverse sectors with proven E-SOFT
                            technology installations nationwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects by Sector */}
            {projectsData.sectors.map((sector, index) => (
                <section
                    key={sector.id}
                    className={`section-padding ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                >
                    <div className="section-container px-4 sm:px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Image */}
                            <div
                                className={`${index % 2 === 1 ? "lg:order-2" : ""
                                    } relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-strong`}
                            >
                                <Image
                                    src={sector.image}
                                    alt={`${sector.name} water treatment projects`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                                            {sector.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="whitespace-nowrap">{sector.name} Sector</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-dark mb-3 sm:mb-4">
                                    {sector.description}
                                </h2>

                                {/* Project List */}
                                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                                    {sector.projects.map((project, idx) => (
                                        <div
                                            key={idx}
                                            className="border-l-4 border-primary-500 pl-4 sm:pl-6 py-2"
                                        >
                                            <h4 className="text-lg sm:text-xl font-semibold text-brand-dark mb-2">
                                                {project.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-gray-600 mb-2">
                                                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-sm font-medium">{project.location}</span>
                                            </div>
                                            <p className="text-sm sm:text-base text-gray-700">{project.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={`/applications/${sector.id}`}
                                    className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
                                >
                                    <span className="whitespace-nowrap">Learn More About {sector.name}</span>
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Stats */}
            <section className="section-padding bg-gradient-brand text-white">
                <div className="section-container px-4 sm:px-6 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
                        {[
                            { value: "500+", label: "Projects Completed" },
                            { value: "98%", label: "Client Satisfaction" },
                            { value: "15+", label: "Years Experience" },
                            { value: "24/7", label: "Support Available" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm sm:text-base text-white/90 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-white">
                <div className="section-container px-4 sm:px-6 lg:px-12 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-4 sm:mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
                        Get a free consultation and customized solution for your water
                        treatment needs.
                    </p>
                    <Link href="/contact" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-block w-full sm:w-auto">
                        Request Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}

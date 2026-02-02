import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "E-SOFT Technology - How It Works",
    description:
        "Discover how DIGIGO's E-SOFT Electro Hydro Enhancer uses advanced electromagnetic technology to treat hard water without chemicals.",
};

export default function TechnologyPage() {
    return (
        <div className="pt-32">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-display-md font-display mb-6">
                            How E-SOFT Technology Works
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            E-SOFT (Electro Hydro Enhancer) revolutionizes water treatment
                            using advanced electromagnetic technology to alter the molecular
                            structure of hard water minerals without chemicals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technology Process */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <h2 className="text-display-sm font-display text-center mb-16">
                        The E-SOFT Process
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                step: "01",
                                title: "Electromagnetic Field Generation",
                                description:
                                    "E-SOFT generates precise electromagnetic fields that interact with water molecules as they pass through the system.",
                                icon: (
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ),
                            },
                            {
                                step: "02",
                                title: "Molecular Restructuring",
                                description:
                                    "The electromagnetic fields alter the crystalline structure of calcium and magnesium, preventing scale formation.",
                                icon: (
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                ),
                            },
                            {
                                step: "03",
                                title: "Continuous Protection",
                                description:
                                    "Treated water maintains its properties throughout your entire system, providing lasting protection.",
                                icon: (
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                            },
                        ].map((process, index) => (
                            <div key={index} className="card-hover p-8 text-center">
                                <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-primary-50 text-primary-600">
                                    {process.icon}
                                </div>
                                <div className="text-4xl font-display font-bold text-primary-500 mb-3">
                                    {process.step}
                                </div>
                                <h3 className="text-heading-md mb-4">{process.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {process.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="section-container">
                    <h2 className="text-display-sm font-display text-center mb-16">
                        Why E-SOFT is Superior
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {[
                            {
                                title: "Chemical-Free Solution",
                                description:
                                    "Unlike traditional water softeners, E-SOFT requires no salt, chemicals, or additives. This makes it environmentally friendly and safe for all applications.",
                                benefits: [
                                    "No chemical discharge",
                                    "Safe for drinking water",
                                    "Eco-friendly operation",
                                    "No harmful byproducts",
                                ],
                            },
                            {
                                title: "Zero Maintenance",
                                description:
                                    "E-SOFT systems are self-sustaining with no moving parts, no filters to replace, and no consumables required.",
                                benefits: [
                                    "No salt refills",
                                    "No filter replacements",
                                    "No backwashing required",
                                    "Minimal operational costs",
                                ],
                            },
                            {
                                title: "Energy Efficient",
                                description:
                                    "Consumes minimal power while delivering maximum results, reducing your energy bills and carbon footprint.",
                                benefits: [
                                    "Low power consumption",
                                    "Reduced equipment wear",
                                    "Lower heating costs",
                                    "Extended appliance life",
                                ],
                            },
                            {
                                title: "Versatile Applications",
                                description:
                                    "Suitable for all sectors from residential homes to large industrial facilities, hospitals, and agricultural operations.",
                                benefits: [
                                    "Scalable solutions",
                                    "Custom configurations",
                                    "All water sources",
                                    "Any flow rate",
                                ],
                            },
                        ].map((benefit, index) => (
                            <div key={index} className="card p-8">
                                <h3 className="text-heading-lg mb-4 text-primary-600">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {benefit.description}
                                </p>
                                <ul className="space-y-3">
                                    {benefit.benefits.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg
                                                className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
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
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <h2 className="text-display-sm font-display text-center mb-16">
                        E-SOFT vs Traditional Softeners
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full max-w-5xl mx-auto">
                            <thead>
                                <tr className="bg-gradient-brand text-white">
                                    <th className="px-6 py-4 text-left rounded-tl-xl">
                                        Feature
                                    </th>
                                    <th className="px-6 py-4 text-center">E-SOFT</th>
                                    <th className="px-6 py-4 text-center rounded-tr-xl">
                                        Traditional Softeners
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    {
                                        feature: "Chemical Usage",
                                        esoft: "None",
                                        traditional: "Salt/Chemicals Required",
                                    },
                                    {
                                        feature: "Maintenance",
                                        esoft: "Zero",
                                        traditional: "Regular Servicing",
                                    },
                                    {
                                        feature: "Environmental Impact",
                                        esoft: "Eco-Friendly",
                                        traditional: "Chemical Discharge",
                                    },
                                    {
                                        feature: "Installation",
                                        esoft: "Non-Invasive",
                                        traditional: "Complex Plumbing",
                                    },
                                    {
                                        feature: "Operating Cost",
                                        esoft: "Minimal",
                                        traditional: "High (Salt + Energy)",
                                    },
                                    {
                                        feature: "Water Wastage",
                                        esoft: "None",
                                        traditional: "Backwash Required",
                                    },
                                    {
                                        feature: "Drinking Water Safe",
                                        esoft: "Yes",
                                        traditional: "High Sodium Content",
                                    },
                                ].map((row, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-200 hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 font-semibold text-brand-dark">
                                            {row.feature}
                                        </td>
                                        <td className="px-6 py-4 text-center text-green-600 font-medium">
                                            {row.esoft}
                                        </td>
                                        <td className="px-6 py-4 text-center text-gray-600">
                                            {row.traditional}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-brand text-white">
                <div className="section-container text-center">
                    <h2 className="text-display-sm font-display mb-6">
                        Ready to Experience E-SOFT?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
                        Discover how E-SOFT can transform your water quality and reduce
                        operational costs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="btn bg-white text-brand-dark hover:shadow-strong"
                        >
                            Request Consultation
                        </Link>
                        <Link
                            href="/applications"
                            className="btn border-2 border-white text-white hover:bg-white/10"
                        >
                            View Applications
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

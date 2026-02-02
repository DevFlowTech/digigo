import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Commercial Water Treatment - E-SOFT Solutions",
    description:
        "E-SOFT commercial water solutions for hotels, restaurants, laundries, and businesses. Reduce costs and improve operations.",
};

export default function CommercialPage() {
    return (
        <div className="pt-32">
            <section className="section-padding bg-gradient-to-br from-orange-50 via-white to-amber-50">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-orange-50 text-orange-600">
                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h1 className="text-display-md font-display mb-6">
                            Commercial Water Solutions
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Optimize your commercial operations with E-SOFT. Reduce
                            maintenance costs, improve customer satisfaction, and enhance
                            equipment performance across all business types.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="section-container">
                    <h2 className="text-display-sm font-display text-center mb-16">
                        Commercial Applications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Hotels & Resorts",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4\" />
                                    </svg>
                                ),
                                description:
                                    "Enhance guest experience with spotless fixtures, softer linens, and better water quality throughout your property.",
                                benefits: [
                                    "Improved guest satisfaction",
                                    "Reduced linen replacement costs",
                                    "Lower energy bills",
                                    "Extended equipment life",
                                ],
                            },
                            {
                                title: "Restaurants & Cafes",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
                                    </svg>
                                ),
                                description:
                                    "Ensure pristine glassware, spot-free dishes, and better-tasting beverages for your customers.",
                                benefits: [
                                    "Sparkling clean dishes",
                                    "Better coffee and tea quality",
                                    "Reduced dishwasher maintenance",
                                    "Lower detergent costs",
                                ],
                            },
                            {
                                title: "Commercial Laundries",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                    </svg>
                                ),
                                description:
                                    "Achieve superior cleaning results while reducing detergent usage and equipment wear.",
                                benefits: [
                                    "Brighter, cleaner fabrics",
                                    "40% less detergent needed",
                                    "Extended machine life",
                                    "Faster drying times",
                                ],
                            },
                            {
                                title: "Car Wash Facilities",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                ),
                                description:
                                    "Deliver spot-free finishes and protect expensive equipment from scale buildup.",
                                benefits: [
                                    "Spot-free vehicle finishes",
                                    "Reduced chemical usage",
                                    "Equipment protection",
                                    "Better customer results",
                                ],
                            },
                            {
                                title: "Gyms & Spas",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                description:
                                    "Provide premium water quality for showers, pools, and spa facilities.",
                                benefits: [
                                    "Enhanced member experience",
                                    "Cleaner facilities",
                                    "Reduced maintenance",
                                    "Better pool chemistry",
                                ],
                            },
                            {
                                title: "Office Buildings",
                                icon: (
                                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4\" />
                                    </svg>
                                ),
                                description:
                                    "Protect HVAC systems, water coolers, and restroom facilities from hard water damage.",
                                benefits: [
                                    "Lower HVAC maintenance",
                                    "Cleaner restrooms",
                                    "Reduced plumbing issues",
                                    "Better water cooler performance",
                                ],
                            },
                        ].map((sector, index) => (
                            <div key={index} className="card-hover p-8">
                                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-orange-50 text-orange-600">
                                    {sector.icon}
                                </div>
                                <h3 className="text-heading-lg mb-3">{sector.title}</h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {sector.description}
                                </p>
                                <ul className="space-y-2">
                                    {sector.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5"
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

            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="section-container">
                    <h2 className="text-display-sm font-display text-center mb-16">
                        Business Impact
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { value: "35%", label: "Cost Reduction" },
                            { value: "50%", label: "Equipment Life Extension" },
                            { value: "25%", label: "Energy Savings" },
                            { value: "90%", label: "Customer Satisfaction" },
                        ].map((stat, index) => (
                            <div key={index} className="card p-8 text-center">
                                <div className="text-5xl font-display font-bold text-orange-600 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-700 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-orange-600 to-amber-700 text-white">
                <div className="section-container text-center">
                    <h2 className="text-display-sm font-display mb-6">
                        Boost Your Business Performance
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
                        Join hundreds of successful businesses using E-SOFT to reduce costs
                        and improve operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="btn bg-white text-orange-700 hover:shadow-strong"
                        >
                            Request Business Consultation
                        </Link>
                        <Link
                            href="/clients"
                            className="btn border-2 border-white text-white hover:bg-white/10"
                        >
                            View Client Success Stories
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

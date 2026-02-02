"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export default function ImpactPage() {
    const [sector, setSector] = useState("industrial");
    const [waterUsage, setWaterUsage] = useState(100000);
    const [currentCost, setCurrentCost] = useState(50000);

    // Calculate savings based on inputs
    const calculateSavings = () => {
        const energySavings = currentCost * 0.3;
        const maintenanceSavings = currentCost * 0.4;
        const chemicalSavings = currentCost * 0.25;
        const totalAnnualSavings = energySavings + maintenanceSavings + chemicalSavings;
        const fiveYearSavings = totalAnnualSavings * 5;

        return {
            energySavings,
            maintenanceSavings,
            chemicalSavings,
            totalAnnualSavings,
            fiveYearSavings,
        };
    };

    const savings = calculateSavings();

    return (
        <div className="pt-32">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-4 sm:mb-6">
                            Impact & Savings Calculator
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                            Discover how much you can save with E-SOFT technology. Calculate
                            your potential ROI and environmental impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* ROI Calculator */}
            <section className="section-padding bg-white">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-5xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-center mb-8 sm:mb-12">
                            Calculate Your Savings
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                            {/* Input Form */}
                            <div className="w-full overflow-hidden">
                                <div className="card p-6 sm:p-8">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Your Details</h3>

                                    <div className="w-full grid grid-cols-1 gap-4 sm:gap-6">
                                        <div className="w-full">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Sector
                                            </label>
                                            <select
                                                value={sector}
                                                onChange={(e) => setSector(e.target.value)}
                                                className="input w-full min-w-0"
                                            >
                                                <option value="industrial">Industrial</option>
                                                <option value="hospital">Hospital</option>
                                                <option value="commercial">Commercial</option>
                                                <option value="agriculture">Agriculture</option>
                                                <option value="residential">Residential</option>
                                            </select>
                                        </div>

                                        <div className="w-full">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Monthly Water Usage (Liters)
                                            </label>
                                            <input
                                                type="number"
                                                value={waterUsage}
                                                onChange={(e) => setWaterUsage(Number(e.target.value))}
                                                className="input w-full min-w-0"
                                                min="1000"
                                                step="1000"
                                            />
                                        </div>

                                        <div className="w-full">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Current Monthly Water Treatment Cost (₹)
                                            </label>
                                            <input
                                                type="number"
                                                value={currentCost}
                                                onChange={(e) => setCurrentCost(Number(e.target.value))}
                                                className="input w-full min-w-0"
                                                min="1000"
                                                step="1000"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="w-full space-y-4 sm:space-y-6 overflow-hidden">
                                <div className="w-full overflow-hidden rounded-xl">
                                    <div className="card p-6 sm:p-8 bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
                                        <h3 className="text-lg sm:text-xl font-bold mb-2">Total Annual Savings</h3>
                                        <div className="text-[clamp(1.75rem,5vw,3rem)] font-display font-bold mb-2 sm:mb-4 break-words">
                                            ₹{savings.totalAnnualSavings.toLocaleString("en-IN")}
                                        </div>
                                        <p className="opacity-90 text-sm sm:text-base break-words">
                                            5-Year Savings: ₹
                                            {savings.fiveYearSavings.toLocaleString("en-IN")}
                                        </p>
                                    </div>
                                </div>


                                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                                    <div className="w-full overflow-hidden">
                                        <div className="border-2 border-gray-200 rounded-xl p-4 sm:p-6 hover:border-yellow-400 transition-colors duration-300 h-full">
                                            <div className="flex flex-col items-center text-center gap-3">
                                                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                                                </svg>
                                                <div>
                                                    <div className="text-xs sm:text-sm text-gray-600 mb-1">
                                                        Energy Savings
                                                    </div>
                                                    <div className="text-xl sm:text-2xl font-bold text-green-600 break-words">
                                                        ₹{savings.energySavings.toLocaleString("en-IN")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full overflow-hidden">
                                        <div className="border-2 border-gray-200 rounded-xl p-4 sm:p-6 hover:border-blue-400 transition-colors duration-300 h-full">
                                            <div className="flex flex-col items-center text-center gap-3">
                                                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <div>
                                                    <div className="text-xs sm:text-sm text-gray-600 mb-1">
                                                        Maintenance Savings
                                                    </div>
                                                    <div className="text-xl sm:text-2xl font-bold text-blue-600 break-words">
                                                        ₹{savings.maintenanceSavings.toLocaleString("en-IN")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full overflow-hidden">
                                        <div className="border-2 border-gray-200 rounded-xl p-4 sm:p-6 hover:border-purple-400 transition-colors duration-300 h-full">
                                            <div className="flex flex-col items-center text-center gap-3">
                                                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                </svg>
                                                <div>
                                                    <div className="text-xs sm:text-sm text-gray-600 mb-1">
                                                        Chemical Savings
                                                    </div>
                                                    <div className="text-xl sm:text-2xl font-bold text-purple-600 break-words">
                                                        ₹{savings.chemicalSavings.toLocaleString("en-IN")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Environmental Impact */}
            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-center mb-10 sm:mb-16">
                        Environmental Impact
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                                    </svg>
                                ),
                                value: "0 Liters",
                                label: "Water Wastage",
                                description: "No backwashing required",
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                ),
                                value: "0 kg",
                                label: "Chemical Discharge",
                                description: "100% chemical-free process",
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                ),
                                value: "30%",
                                label: "Carbon Reduction",
                                description: "Lower energy consumption",
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                ),
                                value: "100%",
                                label: "Eco-Friendly",
                                description: "Sustainable operation",
                            },
                        ].map((impact, index) => (
                            <div key={index} className="w-full max-w-full overflow-hidden break-words">
                                <div className="card-hover p-6 sm:p-8 text-center h-full">
                                    <div className="flex justify-center mb-3 sm:mb-4">{impact.icon}</div>
                                    <div className="text-2xl sm:text-3xl font-display font-bold text-green-600 mb-2 break-words">
                                        {impact.value}
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold mb-2">{impact.label}</h3>
                                    <p className="text-xs sm:text-sm text-gray-600">{impact.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section-padding bg-white">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-center mb-10 sm:mb-16">
                        Cost Comparison Over 5 Years
                    </h2>

                    <div className="w-full overflow-x-auto max-w-4xl mx-auto">
                        <table className="w-full min-w-[600px]">
                            <thead>
                                <tr className="bg-gradient-brand text-white">
                                    <th className="px-6 py-4 text-left rounded-tl-xl">
                                        Cost Factor
                                    </th>
                                    <th className="px-6 py-4 text-center">E-SOFT</th>
                                    <th className="px-6 py-4 text-center rounded-tr-xl">
                                        Traditional Softener
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    {
                                        factor: "Initial Investment",
                                        esoft: "₹2,50,000",
                                        traditional: "₹2,00,000",
                                    },
                                    {
                                        factor: "Annual Maintenance",
                                        esoft: "₹5,000",
                                        traditional: "₹50,000",
                                    },
                                    {
                                        factor: "Chemical Costs (5 years)",
                                        esoft: "₹0",
                                        traditional: "₹3,00,000",
                                    },
                                    {
                                        factor: "Energy Costs (5 years)",
                                        esoft: "₹50,000",
                                        traditional: "₹1,50,000",
                                    },
                                    {
                                        factor: "Total 5-Year Cost",
                                        esoft: "₹2,75,000",
                                        traditional: "₹7,00,000",
                                        highlight: true,
                                    },
                                ].map((row, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b border-gray-200 ${row.highlight ? "bg-green-50 font-bold" : ""
                                            }`}
                                    >
                                        <td className="px-6 py-4 text-brand-dark">
                                            {row.factor}
                                        </td>
                                        <td className="px-6 py-4 text-center text-green-600">
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

                    <div className="text-center mt-6 sm:mt-8 px-4">
                        <p className="text-xl sm:text-2xl font-bold text-green-600 break-words">
                            Save ₹4,25,000 over 5 years with E-SOFT!
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-4 sm:mb-6">
                        Ready to Start Saving?
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-95">
                        Get a detailed ROI analysis customized for your specific needs and
                        see how E-SOFT can transform your operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
                        <Link
                            href="/contact"
                            className="btn bg-white text-brand-dark hover:shadow-strong w-full sm:w-auto"
                        >
                            Get Detailed ROI Report
                        </Link>
                        <Link
                            href="/projects"
                            className="btn border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto"
                        >
                            View Success Stories
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

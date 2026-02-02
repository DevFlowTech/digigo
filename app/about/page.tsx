import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About DIGIGO - E-SOFT Water Treatment Solutions",
  description:
    "Founded in 2012, DIGIGO pioneered the world's only 6th-generation electronic water softening system. Made in India, designed for Indian water conditions.",
};

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 opacity-70"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary-200 text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              Our Story & Mission
            </div>
            <h1 className="text-display-md md:text-display-lg font-display mb-8 tracking-tight">
              About <span className="gradient-text">DIGIGO</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-medium">
              Pioneering intelligent water treatment solutions for a sustainable
              and chemical-free future.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                DIGIGO was founded in 2012 with a mission to eliminate the
                harmful effects of hard water while conserving energy, water,
                and the environment. Its flagship innovation, E-SOFT (Electro
                Hydro Enhancer), is the world's only 6th-generation electronic
                water softening system that works without chemicals, salt, or
                water wastage, while retaining essential minerals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Designed and manufactured in India, E-SOFT uses advanced digital
                signal technology to break scale at the molecular level and is
                successfully deployed across residential, commercial,
                industrial, and agricultural sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Vision */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 relative group flex flex-col">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg
                  className="w-24 h-24 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-bold mb-6 w-fit">
                Our Vision
              </div>
              <h2 className="text-3xl font-display font-bold text-brand-dark mb-6">
                Global Leadership in Smart Water
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed font-medium">
                  To establish DIGIGO and E-SOFT as global leaders in smart
                  water systems by delivering eco-friendly, energy-saving
                  solutions across industrial, agricultural, residential, and
                  commercial sectors.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As India's first company to develop an advanced electronic
                  water softening system, we strive to reduce energy loss,
                  control air, water, and land pollution, support India's fight
                  against global warming, and position the nation as a global
                  hub for sustainable innovation.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 relative group flex flex-col">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg
                  className="w-24 h-24 text-secondary-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
                </svg>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary-100 text-secondary-700 text-sm font-bold mb-6 w-fit">
                Our Mission
              </div>
              <h2 className="text-3xl font-display font-bold text-brand-dark mb-6">
                Scale-Free & Water-Secure India
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed font-medium">
                  Our mission is to make India scale-free, energy-efficient, and
                  water-secure through large-scale adoption of E-SOFT
                  technology.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to spreading awareness, conserving
                  groundwater, improving agricultural efficiency, reducing
                  environmental damage, and delivering affordable, world-class
                  smart water solutions to every city and village in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-display-sm font-display font-bold gradient-text">
              Our Core Values
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The principles that guide every solution we build and every
              relationship we nurture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100 rounded-3xl overflow-hidden shadow-soft">
            {[
              { title: "Water quality & health first", icon: "✓" },
              { title: "Performance & reliability", icon: "✓" },
              { title: "Innovation & improvement", icon: "✓" },
              { title: "Customer trust & transparency", icon: "✓" },
              { title: "Sustainability & responsibility", icon: "✓" },
              { title: "Energy & cost efficiency", icon: "✓" },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-8 bg-white hover:bg-primary-50 transition-colors border-b md:border-r border-gray-100 last:border-0 group"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-gradient-brand text-white flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-transform">
                    {value.icon}
                  </span>
                  <span className="text-lg font-semibold text-brand-dark">
                    {value.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DIGIGO Stands Apart */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container">
          <h2 className="text-display-sm font-display text-center mb-16">
            Why DIGIGO Stands Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Made in India Intelligent Innovation",
                description:
                  "Proudly designed and manufactured in India with world-class standards",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Technology for Every Indian",
                description:
                  "Accessible and affordable solutions with mass-market focus, bringing convenience and comfort across all sectors",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Environment Responsible",
                description:
                  "Eco-conscious vision with people-centric and planet-friendly impact",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                ),
                title: "R&D Expertise",
                description:
                  "International pioneer technologies backed by continuous research and development",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                title: "Customized for Indian Needs",
                description:
                  "Localized solutions specifically designed for Indian water conditions",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                title: "Complete Production Control",
                description:
                  "Japanese quality production standards maintained within India",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-strong relative overflow-hidden"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-brand shadow-lg text-white transform group-hover:rotate-6 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-2xl font-display font-bold gradient-text">
              Experience What the Future of Indian Innovation Looks Like!
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-display-sm font-display text-center mb-16">
            E-SOFT Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "No chemicals and salts",
              "Maintenance-free",
              "Longer life expectancy",
              "Zero wastage of water",
              "Change in taste of water up to 25%",
              "Environment friendly",
              "Does not remove minerals & micronutrients",
              "Made in India",
              "Cleans choked plumbing lines",
              "Conserve environment",
              "Designed for Indian water conditions",
              "Control pollution",
              "100% Japanese electronic standard",
              "Easy to install",
            ].map((advantage, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-semibold text-sm md:text-base group-hover:text-brand-dark transition-colors">
                  {advantage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Timeline */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container">
          <h2 className="text-display-sm font-display text-center mb-12">
            Our Journey to Success
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-4">
              {[
                { year: "2012", milestone: "Idea" },
                { year: "2014", milestone: "1st Prototype" },
                { year: "2016", milestone: "Research" },
                { year: "2018", milestone: "Design" },
                { year: "2020", milestone: "Modifications" },
                { year: "2022", milestone: "Awareness" },
                { year: "2023", milestone: "Growth" },
                { year: "2024", milestone: "Success" },
                { year: "2025", milestone: "Scale-Up" },
              ].map((item, index) => (
                <div key={index} className="relative text-center group">
                  {/* Circle */}
                  <div className="bg-gradient-brand text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 font-display font-bold text-lg shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10">
                    {item.year}
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-brand-dark px-2">
                    {item.milestone}
                  </p>

                  {/* Connecting Line logic */}
                  {/* Desktop Line (5 columns) */}
                  {index < 8 && (index + 1) % 5 !== 0 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 -z-0 opacity-30"></div>
                  )}

                  {/* Tablet Line (3 columns) */}
                  {index < 8 && (index + 1) % 3 !== 0 && (
                    <div className="hidden md:block lg:hidden absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 -z-0 opacity-30"></div>
                  )}

                  {/* Mobile Line (2 columns) */}
                  {index < 8 && (index + 1) % 2 !== 0 && (
                    <div className="block md:hidden absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 -z-0 opacity-30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types of E-SOFT */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-display-sm font-display text-center mb-16">
            Types of E-SOFT
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-brand text-white">
                  <th className="px-6 py-4 text-left font-semibold">Grade</th>
                  <th className="px-6 py-4 text-left font-semibold">Duty</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Power Range
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    grade: "Domestic Grade",
                    duty: "Low Duty",
                    power: "40 to 100 Watt",
                  },
                  {
                    grade: "Medium Grade",
                    duty: "Medium Duty",
                    power: "100 to 250 Watt",
                  },
                  {
                    grade: "Industrial Grade",
                    duty: "Heavy Duty",
                    power: "250 Watt & Above",
                  },
                ].map((type, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-primary-50 transition-colors`}
                  >
                    <td className="px-6 py-4 font-semibold text-brand-dark">
                      {type.grade}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{type.duty}</td>
                    <td className="px-6 py-4 text-gray-700">{type.power}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-brand text-white">
        <div className="section-container text-center">
          <h2 className="text-display-sm font-display mb-6">
            Ready to Experience the DIGIGO Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Join thousands of satisfied customers across India who have
            transformed their water quality with E-SOFT.
          </p>
          <a
            href="/contact"
            className="btn bg-white text-brand-dark hover:shadow-strong text-lg px-8 py-4 inline-block"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

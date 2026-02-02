import Link from "next/link";

export default function HomePage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="section-container relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-display-lg font-display mb-8 gradient-text tracking-tight">
              Transform Your Water Quality with E-SOFT
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              Revolutionary electromagnetic water treatment technology. No
              chemicals, no salt, no maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-lg px-10 py-5 rounded-full"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/technology"
                className="btn-secondary glass text-lg px-10 py-5 rounded-full"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white relative">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto glass rounded-3xl p-10 shadow-strong">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "15+", label: "Years Experience" },
              { value: "50+", label: "Gov. Projects" },
              { value: "99%", label: "Retention" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-bold text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why E-SOFT is the Smarter Choice */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-display-sm font-display mb-6">
              Why E-SOFT is the Smarter Choice
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-medium">
              The Evolution in Water Softening Technology!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Free of Hard Water Issues",
                points: [
                  "Unmatched efficiency (100%)",
                  "Better cleanliness & hygiene",
                ],
              },
              {
                icon: (
                  <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Save Money",
                points: [
                  "Zero operating cost",
                  "No appliance repair / pipe cleaning",
                ],
              },
              {
                icon: (
                  <svg
                    className="w-16 h-16"
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
                title: "Green Water Revolution",
                points: [
                  "Prevent land, air & water pollution",
                  "Save water & electricity",
                  "Sustainable use of non-renewables",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card-glass p-10 border border-primary-100 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-bl-full -translate-y-8 translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-brand transform group-hover:rotate-6 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-dark mb-6 text-center group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <ul className="space-y-4">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-primary-600"
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
                        <span className="text-gray-700 font-medium">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(247,198,0,0.05),transparent_50%)]"></div>
        <div className="section-container relative z-10">
          <h2 className="text-display-sm font-display text-center mb-20 tracking-tight">
            Why Choose <span className="gradient-text">E-SOFT?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
                title: "Chemical-Free",
                description:
                  "100% eco-friendly solution with no salt or chemicals required",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: "Energy Efficient",
                description:
                  "Reduce energy costs by up to 30% with scale-free equipment",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                title: "Zero Maintenance",
                description:
                  "No filters to replace, no consumables, no ongoing costs",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Cost Savings",
                description:
                  "ROI within 12-18 months through reduced operational costs",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Proven Technology",
                description:
                  "15+ years of successful installations across India",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Eco-Friendly",
                description:
                  "Sustainable water treatment with zero environmental impact",
              },
            ].map((benefit, index) => (
              <div key={index} className="group card-glass p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-primary-50 text-primary-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-100 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4 transition-colors group-hover:text-primary-600">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-display-sm font-display text-center mb-16 tracking-tight">
            Applications Across{" "}
            <span className="gradient-text">Industries</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                name: "Agriculture",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                ),
                link: "/applications/agriculture",
              },
              {
                name: "Residential",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                ),
                link: "/applications/residential",
              },
              {
                name: "Commercial",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
                link: "/applications/commercial",
              },
              {
                name: "Industrial",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                ),
                link: "/applications/industrial",
              },
              {
                name: "Hospitals",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m-3-3h6"
                    />
                  </svg>
                ),
                link: "/applications/hospitals",
              },
            ].map((app, index) => (
              <Link
                key={index}
                href={app.link}
                className="group card-glass p-8 text-center border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-50 text-primary-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white">
                  {app.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-dark group-hover:text-primary-600 transition-colors">
                  {app.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Money Savings */}
      <section className="section-padding bg-gray-50/50">
        <div className="section-container">
          <h2 className="text-display-sm font-display text-center mb-20 tracking-tight">
            Money Savings with <span className="gradient-text">E-SOFT</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Stats Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  ),
                  label: "Soap Savings",
                  value: "50%",
                  description: "Reduce soap and detergent usage by half",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                  label: "Energy Reduction",
                  value: "35%",
                  description: "Lower energy consumption for water heating",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  label: "Equipment Life",
                  value: "3X",
                  description: "Triple the lifespan of appliances and pipes",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 card-glass p-6 text-left"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-brand">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <div className="text-4xl font-display font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="card-glass p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/5 rounded-bl-full translate-x-10 -translate-y-10"></div>
              <h3 className="text-2xl font-display font-bold text-brand-dark mb-8 relative z-10 text-center">
                Annual Cost Comparison
              </h3>
              <div className="space-y-4 relative z-10">
                {[
                  {
                    item: "Soap/Detergent",
                    without: "₹12,000",
                    with: "₹6,000",
                  },
                  { item: "Energy Bills", without: "₹24,000", with: "₹15,600" },
                  { item: "Repairs", without: "₹8,000", with: "₹2,000" },
                ].map((row, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-white/50 transition-colors"
                  >
                    <span className="font-bold text-gray-700">{row.item}</span>
                    <div className="text-right">
                      <div className="text-xs font-medium text-gray-400 line-through">
                        {row.without}
                      </div>
                      <div className="text-lg font-bold text-primary-600">
                        {row.with}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-8 p-6 bg-brand-dark text-white rounded-2xl flex items-center justify-between shadow-strong">
                  <div>
                    <div className="text-sm font-bold text-white/60 uppercase tracking-wider mb-1">
                      Total Annual Savings
                    </div>
                    <div className="text-3xl font-display font-bold">
                      ₹20,400
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark"></div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-primary-400 text-sm font-bold mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            Trusted by 500+ Clients
          </div>
          <h2 className="text-display-sm md:text-display-md font-display text-white mb-8 tracking-tight">
            Ready to Transform Your <br className="hidden md:block" />
            <span className="text-primary-400">Water Quality?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get a free consultation and discover how E-SOFT can reduce your
            costs and improve your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="btn-primary text-lg px-10 py-5 rounded-full"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/impact"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all font-bold text-lg px-10 py-5 rounded-full"
            >
              Impact Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

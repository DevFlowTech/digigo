import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Residential Water Treatment - E-SOFT Solutions",
  description:
    "E-SOFT residential water treatment: protect appliances, enjoy softer water, and reduce household costs with chemical-free technology.",
};

export default function ResidentialPage() {
  return (
    <div className="pt-32">
      <section className="section-padding bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-purple-50 text-purple-600">
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h1 className="text-display-md font-display mb-6">
              Residential Water Solutions
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Enjoy the benefits of soft water throughout your home without
              chemicals, salt, or maintenance. E-SOFT protects your appliances
              and improves your family&apos;s quality of life.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-display-sm font-display text-center mb-16">
            Benefits for Your Home
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Softer Skin & Hair",
                description:
                  "Treated water is gentler on skin and hair, reducing dryness and irritation for the whole family.",
                icon: (
                  <svg
                    className="w-14 h-14"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                ),
              },
              {
                title: "Cleaner Dishes & Laundry",
                description:
                  "No more water spots on dishes or dingy laundry. Clothes stay brighter and dishes sparkle.",
                icon: (
                  <svg
                    className="w-14 h-14"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
              },
              {
                title: "Extended Appliance Life",
                description:
                  "Protect water heaters, washing machines, dishwashers, and other appliances from scale damage.",
                icon: (
                  <svg
                    className="w-14 h-14"
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
              },
              {
                title: "Reduced Soap Usage",
                description:
                  "Soft water lathers better, meaning you'll use less soap, shampoo, and detergent.",
                icon: (
                  <svg
                    className="w-14 h-14"
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
              },
              {
                title: "Lower Energy Bills",
                description:
                  "Scale-free water heaters operate more efficiently, reducing energy consumption by up to 30%.",
                icon: (
                  <svg
                    className="w-14 h-14"
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
              },
              {
                title: "Eco-Friendly Home",
                description:
                  "No salt discharge, no chemicals, and reduced water wastage for a greener household.",
                icon: (
                  <svg
                    className="w-14 h-14"
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
              },
            ].map((benefit, index) => (
              <div key={index} className="card-hover p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-purple-50 text-purple-600">
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

      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container">
          <h2 className="text-display-sm font-display text-center mb-16">
            What You&apos;ll Notice
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "In Your Bathroom",
                items: [
                  "No soap scum on shower doors",
                  "Cleaner, shinier fixtures",
                  "Softer towels and linens",
                  "Better lathering soap and shampoo",
                ],
              },
              {
                title: "In Your Kitchen",
                items: [
                  "Spot-free dishes and glassware",
                  "Cleaner coffee makers and kettles",
                  "Better-tasting water and beverages",
                  "Longer-lasting appliances",
                ],
              },
              {
                title: "In Your Laundry Room",
                items: [
                  "Brighter, softer clothes",
                  "Reduced detergent usage",
                  "Extended washing machine life",
                  "Faster drying times",
                ],
              },
              {
                title: "Throughout Your Home",
                items: [
                  "Lower water heating costs",
                  "Reduced plumbing maintenance",
                  "Cleaner pipes and fixtures",
                  "Improved water pressure",
                ],
              },
            ].map((area, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-heading-lg mb-4 text-purple-600">
                  {area.title}
                </h3>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5"
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

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display-sm font-display text-center mb-12">
              Annual Savings
            </h2>

            <div className="card p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[
                  { value: "₹15,000", label: "Energy Savings" },
                  { value: "₹8,000", label: "Soap & Detergent" },
                  { value: "₹12,000", label: "Appliance Repairs" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl font-display font-bold text-purple-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-700 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-600 text-lg">
                Average household savings: <strong>₹35,000+ per year</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-purple-600 to-violet-700 text-white">
        <div className="section-container text-center">
          <h2 className="text-display-sm font-display mb-6">
            Upgrade Your Home Water Quality
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Experience the difference of E-SOFT treated water in every tap.
            Simple installation, zero maintenance, lifetime benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn bg-white text-purple-700 hover:shadow-strong"
            >
              Get Home Assessment
            </Link>
            <Link
              href="/impact"
              className="btn border-2 border-white text-white hover:bg-white/10"
            >
              Calculate Your Savings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

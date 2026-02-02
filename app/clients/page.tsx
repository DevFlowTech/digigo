import type { Metadata } from "next";
import Image from "next/image";
import clientsData from "@/data/clients.json";

export const metadata: Metadata = {
  title: "Our Clients - DIGIGO E-SOFT Solutions",
  description:
    "Trusted by leading organizations across government, healthcare, industrial, and commercial sectors.",
};

export default function ClientsPage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="section-container px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
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
              <span className="whitespace-nowrap">
                Trusted by Industry Leaders
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-4 sm:mb-6">
              Our Valued Clients
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Partnering with leading organizations across sectors to deliver
              world-class water treatment solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="section-padding bg-white">
        <div className="section-container px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "50+", label: "Government Projects" },
              { value: "99%", label: "Client Retention" },
              { value: "15+", label: "Years of Trust" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos by Category */}
      {clientsData.categories.map((category, catIndex) => (
        <section
          key={catIndex}
          className={`section-padding ${
            catIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <div className="section-container px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-dark mb-3">
                {category.name}
              </h2>
              <div className="w-20 h-1 bg-gradient-brand mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {category.clients.map((client, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200 hover:border-primary-500 transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                >
                  <div className="relative w-full h-20 sm:h-24">
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-center mb-10 sm:mb-16">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote:
                  "E-SOFT has transformed our water quality. The system is maintenance-free and has significantly reduced our operational costs.",
                author: "Dr. Rajesh Kumar",
                position: "Director, Civil Hospital Ahmedabad",
                rating: 5,
              },
              {
                quote:
                  "Excellent service and professional installation. The E-SOFT system has been running flawlessly for 3 years without any issues.",
                author: "Amit Patel",
                position: "Facility Manager, Sachivalaya",
                rating: 5,
              },
              {
                quote:
                  "DIGIGO's support team is exceptional. They provided comprehensive training and ongoing support for our facility.",
                author: "Priya Sharma",
                position: "Operations Head, Taj Hotels",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary-500 transition-colors duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-brand-dark">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-brand text-white">
        <div className="section-container px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-4 sm:mb-6">
            Join Our Growing Family of Satisfied Clients
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-95">
            Experience the DIGIGO difference. Get a free consultation and
            discover why leading organizations trust us.
          </p>
          <a
            href="/contact"
            className="btn bg-white text-brand-dark hover:shadow-strong text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}

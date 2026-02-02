"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    category: "Technical",
    questions: [
      {
        q: "How does E-SOFT technology work?",
        a: "E-SOFT uses advanced electromagnetic fields to alter the molecular structure of hard water minerals (calcium and magnesium). This prevents scale formation without removing minerals or using chemicals, maintaining water quality while protecting your equipment.",
      },
      {
        q: "Is E-SOFT effective on all types of hard water?",
        a: "Yes, E-SOFT is effective on all levels of water hardness. Our systems are designed to handle varying degrees of hardness and can be customized based on your specific water quality parameters.",
      },
      {
        q: "Does E-SOFT remove minerals from water?",
        a: "No, E-SOFT does not remove beneficial minerals from water. Instead, it changes their crystalline structure to prevent scale buildup while keeping the minerals in the water, which is healthier than traditional softeners.",
      },
      {
        q: "What is the lifespan of an E-SOFT system?",
        a: "E-SOFT systems are designed to last 15-20 years with minimal maintenance. The system has no moving parts and requires no consumables, ensuring long-term reliability.",
      },
    ],
  },
  {
    category: "Installation",
    questions: [
      {
        q: "How long does installation take?",
        a: "Installation typically takes 2-4 hours for residential systems and 1-2 days for commercial/industrial installations, depending on the complexity and size of the system.",
      },
      {
        q: "Is installation invasive?",
        a: "No, E-SOFT installation is non-invasive. The system is installed externally on your water pipes without cutting or modifying your existing plumbing infrastructure.",
      },
      {
        q: "Can E-SOFT be installed on existing systems?",
        a: "Yes, E-SOFT can be easily retrofitted to existing water systems without any major modifications. It works seamlessly with your current infrastructure.",
      },
    ],
  },
  {
    category: "Maintenance",
    questions: [
      {
        q: "Does E-SOFT require regular maintenance?",
        a: "E-SOFT requires virtually zero maintenance. There are no filters to replace, no salt to refill, and no chemicals to add. An annual inspection is recommended but not mandatory.",
      },
      {
        q: "What happens if the system fails?",
        a: "E-SOFT systems are extremely reliable with a failure rate of less than 1%. In the rare event of a malfunction, we provide comprehensive warranty coverage and 24/7 support.",
      },
      {
        q: "Do I need to clean the E-SOFT unit?",
        a: "No cleaning is required. The E-SOFT unit is self-sustaining and operates continuously without any user intervention.",
      },
    ],
  },
  {
    category: "Pricing",
    questions: [
      {
        q: "What is the cost of an E-SOFT system?",
        a: "Pricing varies based on your water usage, flow rate, and specific requirements. Residential systems typically start from ₹50,000, while commercial and industrial systems are customized. Contact us for a detailed quote.",
      },
      {
        q: "What is the ROI period?",
        a: "Most clients achieve ROI within 12-18 months through reduced energy costs, lower maintenance expenses, and eliminated chemical purchases. Industrial clients often see ROI in 6-12 months.",
      },
      {
        q: "Are there any hidden costs?",
        a: "No, E-SOFT has no hidden costs. The initial investment includes installation, and there are no ongoing costs for chemicals, salt, or regular maintenance.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
      >
        <span className="text-heading-sm pr-8">{question}</span>
        <svg
          className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-gray-700 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFAQs = faqs.filter((category) => {
    if (activeCategory !== "all" && category.category !== activeCategory) {
      return false;
    }
    if (searchQuery === "") return true;

    return category.questions.some(
      (item) =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display-md font-display mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Find answers to common questions about E-SOFT technology,
              installation, maintenance, and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input pl-12"
                />
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === "all"
                    ? "bg-primary-500 text-white shadow-brand"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Questions
              </button>
              {faqs.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.category
                      ? "bg-primary-500 text-white shadow-brand"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>

            {/* FAQ Sections */}
            {filteredFAQs.length > 0 ? (
              <div className="space-y-12">
                {filteredFAQs.map((category, index) => (
                  <div key={index}>
                    <h2 className="text-heading-xl mb-6 text-primary-600">
                      {category.category}
                    </h2>
                    <div>
                      {category.questions
                        .filter((item) => {
                          if (searchQuery === "") return true;
                          return (
                            item.q
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase()) ||
                            item.a
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase())
                          );
                        })
                        .map((item, idx) => (
                          <FAQItem
                            key={idx}
                            question={item.q}
                            answer={item.a}
                          />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                  No questions found matching your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gradient-brand text-white">
        <div className="section-container text-center">
          <h2 className="text-display-sm font-display mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Our team is here to help. Get in touch and we&apos;ll answer all
            your questions about E-SOFT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn bg-white text-brand-dark hover:shadow-strong"
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-2 border-white text-white hover:bg-white/10"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

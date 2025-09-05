"use client";
import Link from 'next/link';
import React from 'react';
import { Code, Server, Zap, Shield } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            At Syntax Six, we deliver innovative technology solutions tailored to empower your business and drive success.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Code className="text-blue-600" size={40} />,
              title: "Custom Software Development",
              description: "Craft bespoke web and mobile applications tailored to your unique business needs, ensuring scalability and performance.",
            },
            {
              icon: <Server className="text-blue-600" size={40} />,
              title: "Cloud Solutions",
              description: "Optimize your operations with scalable, secure cloud infrastructure for enhanced efficiency and flexibility.",
            },
            {
              icon: <Zap className="text-blue-600" size={40} />,
              title: "AI & Machine Learning",
              description: "Leverage AI to automate processes, gain actionable insights, and enhance decision-making with intelligent solutions.",
            },
            {
              icon: <Shield className="text-blue-600" size={40} />,
              title: "Cybersecurity Services",
              description: "Protect your business with comprehensive security solutions, including audits, threat detection, and mitigation.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose Syntax Six?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Expertise & Innovation
              </h3>
              <p className="text-gray-600">
                Our team combines deep technical expertise with innovative approaches to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Client-Centric Approach
              </h3>
              <p className="text-gray-600">
                We prioritize your goals, offering tailored solutions and dedicated support to ensure your success.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Transform Your Business Today
          </h2>
          <p className="text-gray-200 mb-6 max-w-xl mx-auto">
            Ready to elevate your business with our innovative services? Let’s connect and make it happen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center border border-white text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
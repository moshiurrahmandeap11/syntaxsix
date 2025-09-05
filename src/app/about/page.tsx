"use client";
import Link from 'next/link';
import React from 'react';
import { Users, Rocket, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            About Syntax Six
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We are a team passionate about driving innovation through cutting-edge technology solutions, empowering businesses to shape the future.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Rocket className="text-blue-600 mb-4" size={40} />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To deliver innovative, reliable, and scalable technology solutions that empower businesses to achieve their full potential and lead in their industries.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Lightbulb className="text-blue-600 mb-4" size={40} />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be a global leader in technology innovation, fostering a world where businesses thrive through creativity, collaboration, and cutting-edge solutions.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation",
                description: "We push boundaries to create groundbreaking solutions.",
                icon: <Lightbulb className="text-blue-600" size={32} />,
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork to achieve greatness.",
                icon: <Users className="text-blue-600" size={32} />,
              },
              {
                title: "Excellence",
                description: "We strive for the highest standards in everything we do.",
                icon: <Rocket className="text-blue-600" size={32} />,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {value.icon}
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Highlight */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our diverse team of experts brings together creativity, technical expertise, and a passion for innovation to deliver exceptional results.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            Meet the Team
          </Link>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-200 mb-6 max-w-xl mx-auto">
            Let’s work together to build innovative solutions that drive your success.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center border border-white text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
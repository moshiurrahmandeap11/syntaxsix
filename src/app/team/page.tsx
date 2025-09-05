"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "CEO & Founder",
      image: "https://plus.unsplash.com/premium_photo-1688705098584-50f9a39176e3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Visionary leader with over 15 years of experience in tech innovation.",
      social: {
        linkedin: "https://linkedin.com/in/janedoe",
        twitter: "https://twitter.com/janedoe",
        github: "https://github.com/janedoe",
      },
    },
    {
      name: "John Smith",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1731530577719-c2a0f14b38fa?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Expert in building scalable web and mobile applications.",
      social: {
        linkedin: "https://linkedin.com/in/johnsmith",
        twitter: "https://twitter.com/johnsmith",
        github: "https://github.com/johnsmith",
      },
    },
    {
      name: "Emily Chen",
      role: "AI Specialist",
      image: "https://images.unsplash.com/photo-1731530567076-f904cfed4584?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Pioneering AI-driven solutions for business intelligence.",
      social: {
        linkedin: "https://linkedin.com/in/emilychen",
        twitter: "https://twitter.com/emilychen",
        github: "https://github.com/emilychen",
      },
    },
    {
      name: "Michael Brown",
      role: "Cybersecurity Expert",
      image: "https://images.unsplash.com/photo-1683710806939-112c3f04068d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Ensuring robust security for all our digital solutions.",
      social: {
        linkedin: "https://linkedin.com/in/michaelbrown",
        twitter: "https://twitter.com/michaelbrown",
        github: "https://github.com/michaelbrown",
      },
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Meet Our Team
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Our diverse team of experts brings creativity, technical expertise, and passion to deliver innovative solutions for your business.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      aria-label={`Twitter profile of ${member.name}`}
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      aria-label={`GitHub profile of ${member.name}`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-gray-200 mb-6 max-w-xl mx-auto">
            Let’s collaborate to bring your ideas to life with our expert team.
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

export default Team;
"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A scalable, responsive e-commerce solution with advanced payment integration and user-friendly design.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/projects/ecommerce",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "A real-time analytics dashboard leveraging AI to provide actionable business insights.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/projects/analytics",
    },
    {
      title: "Cloud-Based CRM System",
      description: "A secure, cloud-native CRM system designed to streamline customer relationship management.",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/projects/crm",
    },
    {
      title: "Mobile Health App",
      description: "A cross-platform health app with real-time monitoring and personalized recommendations.",
      image: "https://plus.unsplash.com/premium_photo-1683120974913-1ef17fdec2a8?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/projects/healthapp",
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Our Projects
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of innovative technology solutions that empower businesses to achieve their goals.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                >
                  View Project <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-200 mb-6 max-w-xl mx-auto">
            Let’s collaborate to bring your ideas to life with cutting-edge technology solutions.
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

export default Projects;
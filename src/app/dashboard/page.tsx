"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Briefcase, FileText, Settings } from 'lucide-react';


const UserDashboard: React.FC = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-100">
        {/* Welcome Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Welcome to Your Dashboard
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Manage your projects, track progress, and explore our services from one place.
            </p>
          </div>
        </section>

        {/* User Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12" data-aos="fade-up" data-aos-delay="100">
              Your Stats
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Active Projects', value: '3', icon: <Briefcase className="text-blue-600" size={40} /> },
                { title: 'Completed Tasks', value: '24', icon: <FileText className="text-blue-600" size={40} /> },
                { title: 'Account Settings', value: 'Manage', icon: <Settings className="text-blue-600" size={40} /> },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={`${200 + index * 100}`}
                >
                  {stat.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{stat.title}</h3>
                  <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12" data-aos="fade-up" data-aos-delay="100">
              Recent Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'E-Commerce Platform', image: '/images/project1.jpg', link: '/projects/ecommerce' },
                { title: 'AI Dashboard', image: '/images/project2.jpg', link: '/projects/ai-dashboard' },
                { title: 'Mobile App', image: '/images/project3.jpg', link: '/projects/mobile-app' },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={`${200 + index * 100}`}
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                      aria-label={`View details for ${project.title}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="400">
              <Link
                href="/projects"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                aria-label="View all projects"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in" data-aos-delay="100">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Start a New Project?
            </h2>
            <p className="text-gray-200 mb-6 max-w-xl mx-auto">
              Explore our services or contact us to bring your next idea to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
                aria-label="Explore services"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-colors duration-300"
                aria-label="Contact us"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;
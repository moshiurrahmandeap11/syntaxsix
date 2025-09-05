"use client";
import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Innovate Today, <br /> Shape Tomorrow
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-lg">
              Syntax Six delivers cutting-edge technology solutions to empower your business. Join us in building the future.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/get-started"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center border border-gray-300 text-gray-300 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-blue-600 opacity-20 rounded-full blur-3xl transform scale-125" />
            <Image
              src="https://img.freepik.com/free-vector/abstract-background-gradient-modern-design_677411-3056.jpg?t=st=1757097958~exp=1757101558~hmac=37a7d624edf0dc340cc2692eb16883f63545381c3760bb27385a97543f2c42e7&w=1480"
              alt="Technology innovation illustration"
              width={600}  
              height={400}  
              className="relative w-full max-w-md mx-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-700 opacity-10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
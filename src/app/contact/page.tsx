"use client";
import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000); 
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you! Reach out with your questions, ideas, or projects, and let’s build something amazing together.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
              {submitted && (
                <p className="text-green-600 text-center mt-4">
                  Thank you for your message! We’ll get back to you soon.
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-blue-600" size={24} />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <a
                    href="mailto:contact@syntaxsix.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    contact@syntaxsix.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-blue-600" size={24} />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600" size={24} />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    123 Innovation Drive, Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[
                  { href: 'https://instagram.com', icon: <Instagram size={24} />, label: 'Instagram' },
                  { href: 'https://twitter.com', icon: <Twitter size={24} />, label: 'Twitter' },
                  { href: 'https://linkedin.com', icon: <Linkedin size={24} />, label: 'LinkedIn' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-200 mb-6 max-w-xl mx-auto">
            Let’s collaborate to bring your ideas to life with innovative technology solutions.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center border border-white text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-300"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
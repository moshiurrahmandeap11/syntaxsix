"use client";
import Link from 'next/link';
import React, { useState, FormEvent } from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://instagram.com", icon: <Instagram size={20} />, label: "Instagram" },
    { href: "https://twitter.com", icon: <Twitter size={20} />, label: "Twitter" },
    { href: "https://linkedin.com", icon: <Linkedin size={20} />, label: "LinkedIn" },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000); // Reset subscription message after 3s
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">Syntax Six</h2>
            <p className="text-gray-400 text-sm">
              Empowering innovation through cutting-edge technology solutions. Join us in shaping the future.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Stay Connected</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <div className="flex items-center border border-gray-700 rounded-full overflow-hidden">
                <span className="pl-4 text-gray-400">
                  <Mail size={20} />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-transparent text-white p-2 w-full focus:outline-none text-sm"
                  required
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="text-green-400 text-sm">Thank you for subscribing!</p>
              )}
            </form>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Syntax Six. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
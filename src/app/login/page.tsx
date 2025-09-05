"use client";
import React, { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Lock, LogIn } from 'lucide-react';
import Footer from '@/components/Footer';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';

const Login: React.FC = () => {
    const {loginUser, loading} = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      offset: 100,
    });
  }, []);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Validate and submit form
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { email: '', password: '' };

    // Basic validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Simulate API call (replace with your auth endpoint)
      try {
        await loginUser(formData.email, formData.password);
        setSubmitted(true);
        setFormData({ email: '', password: '' });
        toast.success('Login successful!');
        setTimeout(() => setSubmitted(false), 3000);
      } catch {
        setErrors({ email: '', password: 'Login failed. Please try again.' });
      }
    }
  };

  if(loading){
    return <div className="flex items-center justify-center min-h-screen"><div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div></div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-100">
        <section className="py-16 md:py-24">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="bg-white p-8 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
                Login to Your Account
              </h1>
              <p className="text-gray-600 text-center mb-8">
                Access your Syntax Six dashboard to manage your projects and services.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="relative mt-1">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <Mail size={20} />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 p-3 text-black border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                      placeholder="Your Email"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="text-red-600 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative mt-1">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <Lock size={20} />
                    </span>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 p-3 border text-black border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                      placeholder="Your Password"
                      aria-describedby={errors.password ? 'password-error' : undefined}
                    />
                  </div>
                  {errors.password && (
                    <p id="password-error" className="text-red-600 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>
                <button
                onClick={handleSubmit}
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Login <LogIn size={20} />
                </button>
                {submitted && (
                  <p className="text-green-600 text-center mt-4">
                    Login successful! Redirecting...
                  </p>
                )}
              </form>
              <div className="text-center mt-6">
                <p className="text-gray-600 text-sm">
                  Don’t have an account?{' '}
                  <Link
                    href="/signup"
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                  >
                    Sign Up
                  </Link>
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Forgot your password?{' '}
                  <Link
                    href="/forgot-password"
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                  >
                    Reset Password
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
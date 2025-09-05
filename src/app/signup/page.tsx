"use client";

import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AOS from "aos";
import { Mail, Lock, User, Chrome } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({ name: "", email: "", password: "", authError: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { createUser, loading, googleLogin } = useAuth();
  const router = useRouter();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
      offset: 100,
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", authError: "" }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple Validation
    let valid = true;
    const newErrors = { name: "", email: "", password: "", authError: "" };
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) {
      setIsSubmitting(false);
      return;
    }

    try {
      await createUser(formData.email, formData.password);
      router.push("/dashboard");
    } catch {
      setErrors((prev) => ({ ...prev, authError: "Signup failed" }));
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    try {
      await googleLogin();
      router.push("/dashboard");
    } catch {
      setErrors((prev) => ({ ...prev, authError: "Google signup failed" }));
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-100">
        <section className="py-16 md:py-24">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">Create Your Account</h1>
              <p className="text-gray-600 text-center mb-8">
                Join Syntax Six to manage your projects and access our services.
              </p>

              <button
                onClick={handleGoogleSignIn}
                disabled={isSubmitting || loading}
                className="w-full bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2 mb-6 disabled:bg-gray-200 disabled:cursor-not-allowed"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Chrome size={20} />
                Sign Up with Google
              </button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Or sign up with email</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative mt-1">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <User size={20} />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 focus:outline-none transition-colors duration-300"
                      placeholder="Your Full Name"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                  </div>
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 focus:outline-none transition-colors duration-300"
                      placeholder="Your Email"
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                  </div>
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 focus:outline-none transition-colors duration-300"
                      placeholder="Your Password"
                      aria-describedby={errors.password ? "password-error" : undefined}
                    />
                  </div>
                  {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
                  {errors.authError && <p className="text-red-600 text-sm mt-1">{errors.authError}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || loading}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {isSubmitting || loading ? "Signing Up..." : "Sign Up"}
                </button>
              </form>

              <div className="text-center mt-6">
                <p className="text-gray-600 text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
                    Log In
                  </Link>
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Forgot your password?{" "}
                  <Link href="/forgot-password" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
                    Reset Password
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignUp;

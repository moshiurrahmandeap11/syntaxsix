import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
import { AuthProviders } from "@/contexts/AuthProviders";
import {  Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syntax Six",
  description:
    "Empowering innovation through cutting-edge technology solutions.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProviders>
          <nav className="bg-gray-100 top-0 z-50 sticky shadow-md">
            <Navbar />
          </nav>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </AuthProviders>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}


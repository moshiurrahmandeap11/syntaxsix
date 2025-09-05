# Syntax Six

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-green)]()

**Syntax Six** is a modern, full-stack web application built to manage courses, blogs, and interactive content. It provides a seamless experience for admins, moderators, and users to collaborate, learn, and manage content efficiently.

---

## 🚀 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributors](#contributors)
- [License](#license)

---

## 🌟 Project Overview
Syntax Six is designed to provide a robust platform for:
- Course management with enrollment restrictions
- Interactive blog management
- Secure authentication with JWT and Firebase
- Stripe subscription integration for premium features
- Real-time notifications and analytics for admins

The project is built using **Next.js**, **React**, **Express**, **MongoDB**, **Firebase**, and **Stripe**, ensuring scalability and maintainability.

---

## ⚡ Features
### User Features:
- User registration & login (email/password & Google login)
- Course enrollment with seat limitation (max 3 concurrent courses)
- Blog reading & commenting
- Track course progress

### Admin & Moderator Features:
- Add/Edit/Delete courses & blogs
- Manage users and moderators
- View analytics and payments
- Moderate comments and user activities

### Technical Features:
- JWT authentication with HTTP-only cookies
- Full-stack TypeScript support
- File uploads with Imgbb integration
- Stripe subscription & payment webhook handling
- Conditional navbar logic and responsive design
- Account snooze & moderation system

---

## 🛠 Tech Stack
| Frontend | Backend | Database | Auth | Payments |
|----------|---------|----------|------|---------|
| React + Next.js | Express.js | MongoDB | Firebase Auth | Stripe |

Other Libraries:
- Tailwind CSS & DaisyUI
- Framer Motion for animations
- React Router
- Axios for API requests
- React Hot Toast for notifications

---

## 🏗 Getting Started

### Prerequisites
- Node.js >= 18.x
- MongoDB (local or Atlas)
- Firebase Project
- Imgbb API key (for file uploads)
- Stripe account (for payments)

### Installation
```bash
# Clone the repo
git clone https://github.com/YourUsername/syntax-six.git
cd syntax-six

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
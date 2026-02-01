import React from 'react'
import FeatureCard from '../component/common/featureCard'
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div>

            <div className="bg-[var(--color-light-gray)] text-[var(--color-primary-text)] font-[var(--font-inter)] min-h-screen">

      {/* 🔹 Navbar */}
      <header className="bg-[var(--color-surface)] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold font-[var(--font-popins)]">
            VisitorERP
          </h1>

          <div className="flex gap-3">
            <Link to='/login' className="px-4 py-2 text-sm rounded-md border border-[var(--color-primary-color)] text-[var(--color-primary-color)] hover:bg-[var(--color-primary-color)] hover:text-white transition">
              Login
            </Link>
            <Link to='/register' className="px-4 py-2 text-sm rounded-md bg-[var(--color-primary-color)] text-white hover:bg-[var(--color-primary-hover)] transition">
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* 🔹 Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold font-[var(--font-popins)] mb-4">
            Smart Visitor Management for Modern Enterprises
          </h2>
          <p className="text-[var(--color-secondry-text)] mb-6">
            Digitize visitor check-ins, approvals, and security with our ERP-powered visitor management solution.
          </p>
          <button className="px-6 py-3 rounded-md bg-[var(--color-secondary-color)] text-white hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-sm text-[var(--color-muted-text)] mb-2">
            Visitor Flow
          </p>
          <p className="font-semibold">
            Register → Approve → Track → Report
          </p>
        </div>
      </section>

      {/* 🔹 Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-semibold font-[var(--font-popins)] mb-10 text-center">
            Key Features
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="Visitor Pre-Registration"
              description="Allow visitors to register before arrival for faster check-ins."
            />
            <FeatureCard
              title="Approval Workflow"
              description="Automated approval system for hosts and security teams."
            />
            <FeatureCard
              title="Reports & Analytics"
              description="Track visitor history, peak hours, and compliance reports."
            />
          </div>
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-[var(--color-primary-color)] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-xl font-semibold mb-3">
            Ready to modernize your visitor management?
          </h4>
          <button className="px-6 py-3 rounded-md bg-white text-[var(--color-primary-color)] font-medium hover:opacity-90">
            Create Account
          </button>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Home
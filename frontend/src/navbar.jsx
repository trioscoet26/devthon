import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <header
        id="header"
        className="bg-neutral-900 text-white fixed w-full z-50"
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="#hero" className="text-2xl font-bold text-primary-500">
                <span className="text-[#1E8449]">Smart</span>
                <span className="text-[#3498DB]">Waste</span>
              </a>
            </div>
            {/* Mobile menu button */}
            <button
              id="mobile-menu-button"
              className="md:hidden flex items-center"
              aria-label="Toggle navigation menu"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Desktop navigation */}
            <ul className="hidden md:flex space-x-6">
              <Link
                to="/"
                className="hover:text-[#F39C12] transition-colors duration-300"
              >
                Home
              </Link>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#F39C12] transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-[#F39C12] transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-[#F39C12] transition-colors duration-300"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="hover:text-[#F39C12] transition-colors duration-300"
                >
                  Benefits
                </a>
              </li>
              <li>
                <Link
                  to="/report"
                  className="hover:text-[#F39C12] transition-colors duration-300"
                >
                  Report Waste
                </Link>
              </li>
              <li>
                <Link
                  to="/reward"
                  className="hover:text-[#F39C12] transition-colors duration-300"
                >
                  GreenCoins
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace"
                  className="hover:text-[#F39C12] transition-colors duration-300"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <header>
                  <SignedOut className="btnsignin">
                    <SignInButton className="bg-[#1e8449] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#166534] active:shadow-lg transition cursor-pointer" />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </header>
              </li>

              <li>
                <button
                  onClick={() => navigate("/admin")}
                  className="bg-[#1e8449] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#166534] active:shadow-lg transition cursor-pointer"
                >
                  Admin
                </button>
              </li>

              <DarkModeToggle />
            </ul>
          </div>
          {/* Mobile navigation */}
          <div
            id="mobile-menu"
            className="hidden md:hidden mt-4 animate__animated animate__fadeIn"
            aria-hidden="true"
          >
            <ul className="flex flex-col space-y-2">
              <li>
                <a
                  href="#hero"
                  className="block py-2 hover:text-[#F39C12] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 hover:text-[#F39C12] transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="block py-2 hover:text-[#F39C12] transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="block py-2 hover:text-[#F39C12] transition-colors duration-300"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="block py-2 hover:text-[#F39C12] transition-colors duration-300"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="block py-2 hover:text-[#F39C12] transition-colors duration-300"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <Link
                  to="/reward"
                  className="hover:text-[#F39C12] transition-colors duration-300"
                >
                  GreenCoins
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 hover:text-[#F39C12] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

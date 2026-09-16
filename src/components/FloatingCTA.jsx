import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FiMessageSquare, 
  FiPhone, 
  FiMail, 
  FiCalendar, 
  FiX 
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Actions Panel */}
      <div
        className={`mb-4 flex flex-col gap-3 transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-75 opacity-0 pointer-events-none"
        }`}
      >
        {/* Book Call */}
        <Link
          to="/contact-us"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3 rounded-full bg-slate-900/90 px-4 py-2.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-blue-600 hover:scale-105"
        >
          <span className="whitespace-nowrap">Book Consultation</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 group-hover:bg-white/20 group-hover:text-white">
            <FiCalendar size={15} />
          </span>
        </Link>

        {/* WhatsApp Direct Chat */}
        <a
          href="https://wa.me/917984075400?text=Hi%20eMark%20Setu,%20I'd%20like%20to%20know%20more%20about%20your%20services!"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full bg-slate-900/90 px-4 py-2.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-emerald-600 hover:scale-105"
        >
          <span className="whitespace-nowrap">Chat on WhatsApp</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 group-hover:bg-white/20 group-hover:text-white">
            <FaWhatsapp size={16} />
          </span>
        </a>

        {/* Direct Call */}
        <a
          href="tel:+917984075400"
          className="group flex items-center gap-3 rounded-full bg-slate-900/90 px-4 py-2.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-indigo-600 hover:scale-105"
        >
          <span className="whitespace-nowrap">Call Us Direct</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 group-hover:bg-white/20 group-hover:text-white">
            <FiPhone size={15} />
          </span>
        </a>

        {/* Email Inquiry */}
        <a
          href="mailto:info@emarksetu.com"
          className="group flex items-center gap-3 rounded-full bg-slate-900/90 px-4 py-2.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-sky-600 hover:scale-105"
        >
          <span className="whitespace-nowrap">Send Email</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 group-hover:bg-white/20 group-hover:text-white">
            <FiMail size={15} />
          </span>
        </a>
      </div>

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle contact menu"
        className="group relative flex h-14 items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 text-white shadow-2xl shadow-blue-500/30 ring-4 ring-blue-500/20 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-indigo-500 active:scale-95"
      >
        {/* Glow effect */}
        <span className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur opacity-40 group-hover:opacity-80 transition duration-300" />

        {/* Icon toggle animation */}
        <div className="relative flex h-6 w-6 items-center justify-center">
          <FiX
            size={22}
            className={`absolute transition-all duration-300 ${
              isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
            }`}
          />
          <FiMessageSquare
            size={20}
            className={`absolute transition-all duration-300 ${
              isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
        </div>

        {/* Text Label */}
        <span className="pr-1 text-xs font-bold uppercase tracking-wider">
          {isOpen ? "Close" : "Get In Touch"}
        </span>

        {/* Pulse Dot Badge */}
        {!isOpen && (
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
          </span>
        )}
      </button>
    </div>
  );
}
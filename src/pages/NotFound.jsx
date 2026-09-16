import React from "react";
import { Link } from "react-router-dom";
import { FiAlertCircle, FiArrowLeft, FiHome } from "react-icons/fi";
import SEO from "../components/SEO";
import { Container, PrimaryButton, Reveal } from "../components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-white pt-24 pb-16">
      <SEO
        title="404 - Page Not Found | eMark Setu"
        description="The page you are looking for does not exist or has been moved."
      />

      <Container>
        <Reveal>
          <div className="mx-auto max-w-lg text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-blue-600 shadow-inner">
              <FiAlertCircle size={40} />
            </div>

            <p className="mt-6 font-display text-6xl font-black text-slate-900">
              404
            </p>

            <h1 className="mt-2 font-display text-2xl font-bold text-slate-800 sm:text-3xl">
              Page Not Found
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Sorry, the page you are looking for doesn't exist, has been removed, or was moved to another location.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryButton href="/">
                <FiHome size={16} />
                Back to Home
              </PrimaryButton>

              <Link
                to="/contact-us"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
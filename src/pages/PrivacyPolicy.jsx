import React from "react";
import SEO from "../components/SEO";
import { Container, Eyebrow, Reveal } from "../components/ui";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white pt-32 pb-20 text-slate-800">
      <SEO
        title="Privacy Policy | eMark Setu"
        description="Learn how eMark Setu collects, uses, and protects your personal and business data."
        canonicalUrl="https://emarksetu.com/privacy-policy"
      />

      <Container>
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <Eyebrow>Legal & Compliance</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: January 15, 2026
            </p>

            <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
              <section>
                <h2 className="font-display text-xl font-bold text-slate-900">
                  1. Information We Collect
                </h2>
                <p className="mt-2">
                  At eMark Setu, we collect information necessary to deliver high-quality e-commerce management and growth services.
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li><strong>Personal Identifiers:</strong> Name, phone number, email address, and billing details provided during consultation or onboarding.</li>
                  <li><strong>Account & Marketplace Credentials:</strong> API tokens, store integration details, or delegated access credentials to manage seller portals (e.g., Amazon, Flipkart, Myntra).</li>
                  <li><strong>Usage Data:</strong> Analytics regarding website interactions, device type, IP address, and cookie identifiers.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-slate-900">
                  2. How We Use Your Information
                </h2>
                <p className="mt-2">We process gathered data to execute operational services including:</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>Onboarding seller accounts, listing creation, cataloging, and store optimization.</li>
                  <li>Executing advertising strategies, financial reconciliations, and seller support appeals.</li>
                  <li>Communicating project status updates, invoices, and performance reports.</li>
                  <li>Ensuring compliance with marketplace policies and Indian legal regulations.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-slate-900">
                  3. Data Protection & Security
                </h2>
                <p className="mt-2">
                  We maintain strict administrative, technical, and physical safeguards to prevent unauthorized access, loss, or disclosure of your business credentials and catalog assets. Marketplace tokens and user access are secured using encrypted protocol standards.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-slate-900">
                  4. Third-Party Sharing
                </h2>
                <p className="mt-2">
                  We do not sell or rent your personal data to third parties. Data is shared exclusively with authorized software integrations (e.g., inventory management platforms) or legal authorities when required by applicable laws.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-slate-900">
                  5. Contact Us Regarding Privacy
                </h2>
                <p className="mt-2">
                  If you have questions about our privacy practices, contact us at:
                </p>
                <div className="mt-3 rounded-xl bg-slate-50 p-4 border border-slate-200">
                  <p className="font-semibold text-slate-900">eMark Setu Private Limited</p>
                  <p>7007, Bellagio Lace Textile Market, Sitanagar, Surat, 395010</p>
                  <p>Email: info@emarksetu.com | Phone: +91 79840 75400</p>
                </div>
              </section>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
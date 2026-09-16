import React from "react";
import SEO from "../components/SEO";
import { Container, Eyebrow, Reveal } from "../components/ui";

export default function TermsOfService() {
  return (
    <div className="bg-white pt-32 pb-20 text-slate-800">
      <SEO
        title="Terms of Service | eMark Setu"
        description="Review the terms, conditions, and agreement rules governing services provided by eMark Setu."
        canonicalUrl="https://emarksetu.com/terms-of-service"
      />

      <Container>
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <Eyebrow>Terms & Governance</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: January 15, 2026
            </p>

            <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
              <section>
                <h2 className="font-display text-xl font-bold text-slate-900">
                  1. Agreement to Terms
                </h2>
                <p className="mt-2">
                  By accessing eMark Setu's website or engaging our e-commerce management services, you agree to be bound by these Terms of Service. If you disagree with any portion of these terms, you may not access or use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-slate-900">
                  2. Scope of Services
                </h2>
                <p className="mt-2">
                  eMark Setu provides e-commerce account management, cataloging, digital marketing, listing optimization, and reinstatement support. Service delivery timelines and specific deliverables are governed by individual Service Level Agreements (SLAs) or invoices agreed upon at onboarding.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-slate-900">
                  3. Client Responsibilities
                </h2>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>Provide accurate product information, brand authorizations, and legal documentation.</li>
                  <li>Grant appropriate delegated permissions to e-commerce accounts necessary for service execution.</li>
                  <li>Ensure all products listed adhere to marketplace guidelines and intellectual property laws.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-slate-900">
                  4. Payment Terms & Billing
                </h2>
                <p className="mt-2">
                  Service charges are billed according to agreed monthly retainers or per-unit pricing. Payments must be rendered promptly as specified in the invoice. Failure to clear invoices may result in temporary suspension of service execution.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-slate-900">
                  5. Limitation of Liability
                </h2>
                <p className="mt-2">
                  While eMark Setu applies industry best practices to scale stores and optimize campaigns, we do not guarantee specific sales targets or marketplace algorithm decisions outside our control. We are not liable for third-party marketplace actions (e.g., account suspensions initiated by Amazon or Flipkart due to client policy breaches).
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-slate-900">
                  6. Governing Law
                </h2>
                <p className="mt-2">
                  These Terms are governed by and construed in accordance with the laws of India. Any legal disputes shall be subject to the exclusive jurisdiction of the courts located in Surat, Gujarat.
                </p>
              </section>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiCheck,
  FiClock,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { Container, Eyebrow, Reveal } from "../components/ui";

const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaTwitter, href: "#" },
];

const infoCards = [
  {
    icon: FiPhone,
    title: "Call Us",
    value: "+91 79840 75400",
    href: "tel:+917984075400",
  },
  {
    icon: FiMail,
    title: "Email Us",
    value: "info@emarksetu.com",
    href: "mailto:info@emarksetu.com",
  },
  {
    icon: FiMapPin,
    title: "Visit Us",
    value: "Bellagio Lace Textile Market, Surat",
    href: "https://maps.google.com/?q=Bellagio+Lace+Textile+Market+Surat",
  },
];

const trustStats = [
  { value: "24 hrs", label: "Avg. Response Time" },
  { value: "15+", label: "Team Members" },
  { value: "250+", label: "Happy Clients" },
];

const HOURS = {
  open: 10,
  close: 19,
  days: [1, 2, 3, 4, 5, 6],
};

function useOpenStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours() + now.getMinutes() / 60;

      const isOpen =
        HOURS.days.includes(day) &&
        hour >= HOURS.open &&
        hour < HOURS.close;

      setStatus(isOpen);
    };

    checkStatus();

    const interval = setInterval(checkStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return status;
}

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/917984075400"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-emerald-500"
        animate={{
          scale: [1, 1.45, 1],
          opacity: [0.45, 0, 0.45],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <FaWhatsapp size={26} className="relative" />
    </motion.a>
  );
}

function ContactCard({ icon: Icon, title, value, href }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      whileHover={{ y: -4 }}
      className="group flex items-center gap-4 rounded-2xl border border-navy-900/[0.07] bg-white p-5 shadow-card transition-shadow hover:shadow-soft"
    >
      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={20} />
      </span>

      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600">
          {title}
        </p>

        <p className="mt-1 truncate text-[13.5px] font-bold text-navy-900">
          {value}
        </p>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isOpen = useOpenStatus();

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email and message.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <>
      <WhatsAppButton />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-navy-900 pb-28 pt-[135px] sm:pb-32">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 left-[-10%] h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[120px]" />

        <Container className="relative">
          <Reveal className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400">
              Get In Touch
            </p>

            <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Let's talk about{" "}
              <span className="text-blue-400">your next move.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-[14px] leading-7 text-slate-400">
              Have a question, a project idea, or need help growing your
              business? Our team is ready to help you take the next step.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-5">
              {trustStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-xl font-bold text-white">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="relative z-10 -mt-14 pb-10">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {infoCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <ContactCard {...card} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= BUSINESS HOURS ================= */}
      <section className="pb-14">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-5 rounded-2xl bg-navy-900 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-blue-600 text-white">
                  <FiClock size={18} />
                </span>

                <div>
                  <p className="text-[13.5px] font-bold text-white">
                    Mon – Sat, 10:00 AM – 7:00 PM
                  </p>

                  <p className="mt-1 text-[11.5px] text-slate-400">
                    Sunday closed
                  </p>
                </div>
              </div>

              {isOpen !== null && (
                <div
                  className={`flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[11.5px] font-bold ${
                    isOpen
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-white/10 text-slate-400"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isOpen ? "bg-emerald-400" : "bg-slate-500"
                    }`}
                  />

                  {isOpen ? "We're open right now" : "Currently closed"}
                </div>
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================= FORM + MAP ================= */}
      <section className="bg-sky-100 py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

            {/* FORM CARD */}
            <Reveal>
              <div className="rounded-3xl bg-white p-6 shadow-card sm:p-8">
                <Eyebrow>Send Us A Message</Eyebrow>

                <h2 className="mt-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  Let's grow your{" "}
                  <span className="text-blue-600">business together.</span>
                </h2>

                <p className="mt-3 text-[13.5px] leading-6 text-slate-500">
                  Tell us a little about your business and what you need help
                  with. Our team will get back to you shortly.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-7 flex items-center gap-4 rounded-2xl bg-emerald-50 p-5"
                  >
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-emerald-500 text-white">
                      <FiCheck size={19} />
                    </span>

                    <div>
                      <p className="text-[14px] font-bold text-navy-900">
                        Message sent!
                      </p>

                      <p className="mt-1 text-[12px] text-slate-500">
                        We'll be in touch shortly.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={onSubmit}
                    className="mt-7 flex flex-col gap-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="relative">
                        <FiUser
                          size={15}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/30"
                        />

                        <input
                          name="name"
                          value={form.name}
                          onChange={onChange}
                          placeholder="Your Name"
                          className="w-full rounded-xl border border-navy-900/10 bg-sky-100/50 py-3.5 pl-11 pr-4 text-[13px] outline-none transition focus:border-blue-600 focus:bg-white"
                        />
                      </div>

                      <div className="relative">
                        <FiPhone
                          size={15}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/30"
                        />

                        <input
                          name="phone"
                          value={form.phone}
                          onChange={onChange}
                          placeholder="Phone Number"
                          className="w-full rounded-xl border border-navy-900/10 bg-sky-100/50 py-3.5 pl-11 pr-4 text-[13px] outline-none transition focus:border-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <FiMail
                        size={15}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/30"
                      />

                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="Email Address"
                        className="w-full rounded-xl border border-navy-900/10 bg-sky-100/50 py-3.5 pl-11 pr-4 text-[13px] outline-none transition focus:border-blue-600 focus:bg-white"
                      />
                    </div>

                    <div className="relative">
                      <FiMessageSquare
                        size={15}
                        className="pointer-events-none absolute left-4 top-4 text-navy-900/30"
                      />

                      <textarea
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        placeholder="Tell us about your business..."
                        rows={5}
                        className="w-full resize-none rounded-xl border border-navy-900/10 bg-sky-100/50 py-3.5 pl-11 pr-4 text-[13px] outline-none transition focus:border-blue-600 focus:bg-white"
                      />
                    </div>

                    {error && (
                      <p className="text-[12px] font-medium text-red-500">
                        {error}
                      </p>
                    )}

                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-[13px] font-bold text-white transition hover:bg-blue-700"
                    >
                      <FiSend size={15} />
                      Send Message
                    </motion.button>
                  </form>
                )}

                <div className="mt-7 flex items-center gap-3 border-t border-navy-900/[0.06] pt-6">
                  <span className="mr-1 text-[11px] font-semibold text-slate-400">
                    Connect with us
                  </span>

                  {socials.map(({ icon: Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      aria-label="Social link"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-navy-900/60 transition hover:bg-blue-600 hover:text-white"
                    >
                      <Icon size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* MAP CARD */}
            <Reveal delay={0.1}>
              <div className="h-full min-h-[480px] overflow-hidden rounded-3xl border border-navy-900/[0.06] bg-white p-2 shadow-card">
                <iframe
                  title="eMark Setu location"
                  src="https://maps.google.com/maps?q=Bellagio%20Lace%20Textile%20Market%2C%20Sitanagar%2C%20Surat%2C%20395010&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-full min-h-[465px] w-full rounded-2xl"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

          </div>
        </Container>
      </section>
    </>
  );
}

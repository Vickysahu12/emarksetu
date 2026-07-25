import { FiTrendingUp, FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Container, PrimaryButton, Reveal } from "./ui";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Store Management", href: "#services" },
  { label: "Digital Marketing", href: "#services" },
  { label: "Brand Building", href: "#services" },
  { label: "Advertisement", href: "#services" },
];

const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaTwitter, href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy-950 pt-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy-900 to-navy-800 px-8 py-12 text-center shadow-soft sm:px-14">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-blue-600/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-gold-500/15 blur-3xl" />
            <h2 className="relative font-display text-2xl font-bold text-white sm:text-3xl">
              Don't want to <span className="text-blue-400">wait</span> for us?
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-[14px] text-slate-400">
              Set up a time to talk to one of our marketing consultants by
              scheduling a call directly with them.
            </p>
            <div className="relative mt-7 flex justify-center">
              <PrimaryButton href="#contact">
                Get Started
              </PrimaryButton>
            </div>
            <FiSend className="pointer-events-none absolute right-10 top-10 hidden text-blue-400/40 sm:block" size={28} />
          </div>
        </Reveal>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <FiTrendingUp size={17} />
              </span>
              eMark<span className="text-blue-400">Setu</span>
            </a>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-slate-400">
              We Build, Manage, Scale &amp; Create Brands — a full-service
              ecommerce marketing company, in-house from start to finish.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-colors hover:bg-blue-600 hover:text-white"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[13px] font-bold uppercase tracking-wide text-white">Quick Links</p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13.5px] text-slate-400 transition-colors hover:text-blue-400">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-bold uppercase tracking-wide text-white">Services</p>
            <ul className="mt-5 space-y-3">
              {services.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13.5px] text-slate-400 transition-colors hover:text-blue-400">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-bold uppercase tracking-wide text-white">Contact</p>
            <ul className="mt-5 space-y-3.5">
              <li className="flex items-center gap-2.5 text-[13.5px] text-slate-400">
                <FiPhone className="flex-none text-blue-400" size={14} /> +91 79840 75400
              </li>
              <li className="flex items-center gap-2.5 text-[13.5px] text-slate-400">
                <FiMail className="flex-none text-blue-400" size={14} /> info@emarksetu.com
              </li>
              <li className="flex items-start gap-2.5 text-[13.5px] text-slate-400">
                <FiMapPin className="mt-0.5 flex-none text-blue-400" size={14} />
                7007, Bellagio Lace Textile Market, near RajMahal Mall, Opp. IFM,
                Shagun Avenue, BRTS Road, Sitanagar, Surat, 395010
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-[12.5px] text-slate-500">
            © {new Date().getFullYear()} eMark Setu Private Limited. All rights reserved.
          </p>
          <div className="flex gap-5 text-[12.5px] text-slate-500">
            <a href="#" className="transition-colors hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-blue-400">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { href, Link, useLocation } from "react-router-dom";
import { Container, PrimaryButton } from "./ui";
import logo from "../assets/image/logo.webp";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutus" },
  { label: "Services", href: "/pricing" },
  { label: "Contact", href: "/contact-us" },
  {label: "integration", href: "/integrations"}
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const isActive = (href) => pathname === href;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/85 shadow-[0_4px_30px_-10px_rgba(10,26,63,0.15)] backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-[76px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-11 items-center rounded-lg bg-white/95 px-2 py-1.5 shadow-sm ring-1 ring-navy-900/[0.04]">
              <img src={logo} alt="eMark Setu" className="h-7 w-auto object-contain" />
            </span>
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className={`relative text-[14.5px] font-medium transition-colors duration-300 ${
                    isActive(l.href)
                      ? "text-blue-600"
                      : scrolled || open
                      ? "text-navy-900/80 hover:text-blue-600"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {l.label}
                  {isActive(l.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className={`absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full ${
                        scrolled || open ? "bg-blue-600" : "bg-blue-400"
                      }`}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <PrimaryButton href="/Login" className="!px-5 !py-2.5 !text-[13.5px]">
              Login/Register
            </PrimaryButton>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 md:hidden ${
              scrolled || open ? "text-navy-900" : "text-white"
            }`}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-navy-900/10 bg-white md:hidden"
          >
            <Container className="flex flex-col gap-1 py-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`rounded-lg px-3 py-3 text-[15px] font-medium hover:bg-sky-50 hover:text-blue-600 ${
                    isActive(l.href) ? "text-blue-600" : "text-navy-900"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <PrimaryButton href="/Login" className="mt-3 w-full justify-center">
                Login/Register
              </PrimaryButton>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
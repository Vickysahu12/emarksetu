import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiLogIn,
  FiUserPlus,
  FiMail,
  FiLock,
  FiUser,
  FiPhone,
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiCheck,
} from "react-icons/fi";

import { Container } from "../components/ui";
import authImage from "../assets/image/bg-image.webp";

function Input({
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="relative">
      <Icon
        size={16}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/30"
      />

      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-navy-900/10 bg-sky-100/60 py-3.5 pl-11 pr-11 text-[13.5px] text-navy-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:bg-white"
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-navy-900/35 transition-colors hover:text-navy-900"
        >
          {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
        </button>
      )}
    </div>
  );
}

export default function Auth() {
  const [activeTab, setActiveTab] = useState("login");

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loginDone, setLoginDone] = useState(false);
  const [registerDone, setRegisterDone] = useState(false);

  const isLogin = activeTab === "login";

  return (
    <main className="min-h-screen bg-sky-100">

      {/* ================= AUTH SECTION ================= */}
      <section className="relative min-h-screen overflow-hidden bg-sky-100">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[130px]" />

        <Container className="relative flex min-h-screen items-center py-8 sm:py-12 lg:py-16">

          <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-2xl lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr]">

            {/* =================================================
                LEFT IMAGE / BRANDING SECTION
            ================================================= */}
            <div className="relative hidden overflow-hidden bg-navy-900 lg:block">

              {/* Image */}
              <img
                src={authImage}
                alt="eMark Setu"
                className="absolute inset-0 h-full w-full object-cover opacity-75"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/55 to-navy-900/10" />

              {/* Blue Glow */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/30 blur-[90px]" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between p-10 xl:p-14">

                {/* Logo */}
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-black text-white">
                      e
                    </div>

                    <span className="font-display text-xl font-bold text-white">
                      eMark <span className="text-blue-400">Setu</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="max-w-md">

                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Your digital growth partner
                  </div>

                  <h1 className="font-display text-4xl font-bold leading-[1.1] text-white xl:text-5xl">
                    Build better.
                    <br />
                    <span className="text-blue-400">Grow smarter.</span>
                  </h1>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
                    Everything you need to manage your digital journey,
                    connect with opportunities, and grow your business.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {[
                      "Simple & Powerful",
                      "Built for Growth",
                      "Made for You",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[11px] text-white/70"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/80 text-white">
                          <FiCheck size={11} />
                        </span>

                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT AUTH SECTION
            ================================================= */}
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12 xl:p-16">

              {/* Mobile Logo */}
              <div className="mb-8 flex items-center gap-2 lg:hidden">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-black text-white">
                  e
                </div>

                <span className="font-display text-xl font-bold text-navy-900">
                  eMark <span className="text-blue-600">Setu</span>
                </span>
              </div>

              {/* Heading */}
              <div className="mb-7">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
                  Welcome back
                </p>

                <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                  {isLogin ? "Welcome back!" : "Create your account"}
                </h2>

                <p className="mt-2 text-[13px] leading-6 text-slate-500">
                  {isLogin
                    ? "Login to continue your journey with us."
                    : "Join us and start building something amazing."}
                </p>
              </div>

              {/* ================= TABS ================= */}
              <div className="mb-8 grid grid-cols-2 rounded-xl bg-sky-100 p-1">

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("login");
                    setLoginDone(false);
                  }}
                  className={`flex items-center justify-center gap-2 rounded-lg py-3 text-[13px] font-bold transition-all ${
                    isLogin
                      ? "bg-white text-navy-900 shadow-sm"
                      : "text-slate-400 hover:text-navy-900"
                  }`}
                >
                  <FiLogIn size={15} />
                  Login
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("register");
                    setRegisterDone(false);
                  }}
                  className={`flex items-center justify-center gap-2 rounded-lg py-3 text-[13px] font-bold transition-all ${
                    !isLogin
                      ? "bg-white text-navy-900 shadow-sm"
                      : "text-slate-400 hover:text-navy-900"
                  }`}
                >
                  <FiUserPlus size={15} />
                  Register
                </button>

              </div>

              {/* ================= FORMS ================= */}
              <AnimatePresence mode="wait">

                {/* ================= LOGIN ================= */}
                {isLogin && (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.25 }}
                  >
                    {loginDone ? (
                      <SuccessMessage
                        title="You're logged in!"
                        message="Redirecting to your dashboard..."
                      />
                    ) : (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setLoginDone(true);
                        }}
                        className="space-y-4"
                      >
                        <Input
                          icon={FiMail}
                          type="email"
                          placeholder="Email Address"
                          value={loginForm.email}
                          onChange={(e) =>
                            setLoginForm((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          required
                        />

                        <Input
                          icon={FiLock}
                          type="password"
                          placeholder="Password"
                          value={loginForm.password}
                          onChange={(e) =>
                            setLoginForm((prev) => ({
                              ...prev,
                              password: e.target.value,
                            }))
                          }
                          required
                        />

                        <div className="flex items-center justify-between pt-1 text-[12px]">

                          <label className="flex cursor-pointer items-center gap-2 text-slate-500">
                            <input
                              type="checkbox"
                              className="h-3.5 w-3.5 accent-blue-600"
                            />
                            Remember me
                          </label>

                          <button
                            type="button"
                            className="font-semibold text-blue-600 hover:text-blue-700"
                          >
                            Forgot password?
                          </button>

                        </div>

                        <button
                          type="submit"
                          className="group mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-[13.5px] font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                        >
                          Login

                          <FiArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </button>
                      </form>
                    )}
                  </motion.div>
                )}

                {/* ================= REGISTER ================= */}
                {!isLogin && (
                  <motion.div
                    key="register"
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 25 }}
                    transition={{ duration: 0.25 }}
                  >
                    {registerDone ? (
                      <SuccessMessage
                        title="Account created!"
                        message="Check your email to verify your account."
                      />
                    ) : (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setRegisterDone(true);
                        }}
                        className="space-y-4"
                      >
                        <Input
                          icon={FiUser}
                          placeholder="Full Name"
                          value={registerForm.name}
                          onChange={(e) =>
                            setRegisterForm((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          required
                        />

                        <Input
                          icon={FiMail}
                          type="email"
                          placeholder="Email Address"
                          value={registerForm.email}
                          onChange={(e) =>
                            setRegisterForm((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          required
                        />

                        <Input
                          icon={FiPhone}
                          type="tel"
                          placeholder="Phone Number"
                          value={registerForm.phone}
                          onChange={(e) =>
                            setRegisterForm((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                        />

                        <Input
                          icon={FiLock}
                          type="password"
                          placeholder="Create Password"
                          value={registerForm.password}
                          onChange={(e) =>
                            setRegisterForm((prev) => ({
                              ...prev,
                              password: e.target.value,
                            }))
                          }
                          required
                        />

                        <button
                          type="submit"
                          className="group mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-[13.5px] font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                        >
                          Create Account

                          <FiArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </button>
                      </form>
                    )}
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Bottom Switch */}
              <p className="mt-8 text-center text-[12.5px] text-slate-500">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}

                <button
                  type="button"
                  onClick={() =>
                    setActiveTab(isLogin ? "register" : "login")
                  }
                  className="font-bold text-blue-600 hover:text-blue-700"
                >
                  {isLogin ? "Create one" : "Login instead"}
                </button>
              </p>

            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}


/* ================= SUCCESS MESSAGE ================= */

function SuccessMessage({ title, message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl bg-sky-100 p-8 text-center"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
        <FiCheck size={24} />
      </div>

      <p className="mt-5 text-[15px] font-bold text-navy-900">
        {title}
      </p>

      <p className="mt-2 text-[12.5px] text-slate-500">
        {message}
      </p>
    </motion.div>
  );
}


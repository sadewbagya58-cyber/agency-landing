import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
  Menu, X, Code, Search, Server, 
  ArrowRight, ExternalLink, Send, MessageCircle, Bot, Zap
} from 'lucide-react';
import { 
  FaReact, FaNodeJs, FaFigma, FaAws, FaGoogle
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiNextdotjs, SiFramer, SiFirebase
} from 'react-icons/si';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const MouseFollowGlow = () => {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // center of the 400x400 element
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      className="fixed top-0 left-0 w-[400px] h-[400px] bg-purple-accent/10 rounded-full blur-[100px] pointer-events-none z-0"
    />
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' }
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass-nav border-b border-white/10 shadow-2xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <motion.a 
              href="#" 
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-accent to-cyan-500 rounded-full blur-[8px] opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <svg className="w-10 h-10 relative z-10 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" viewBox="0 0 512 512" fill="none">
                  <defs>
                      <stop offset="0%" stopColor="#004182" />
                      <stop offset="100%" stopColor="#00E5FF" />
                  </defs>
                  <path d="M256 12C121.2 12 12 121.2 12 256s109.2 244 244 244 244-109.2 244-244S390.8 12 256 12zm0 448c-112.7 0-204-91.3-204-204S143.3 52 256 52s204 91.3 204 204-91.3 204-204 204z" fill="url(#nav-logo-grad)" opacity="0.15" />
                  <path d="M256 52c-112.7 0-204 91.3-204 204s91.3 204 204 204 204-91.3 204-204-91.3-204-204-204zm0 376c-95 0-172-77-172-172s77-172 172-172 172 77 172 172-77 172-172 172z" fill="url(#nav-logo-grad)" opacity="0.3" />
                  <path d="M305 130c-15.4 0-28 12.6-28 28s12.6 28 28 28 28-12.6 28-28-12.6-28-28-28zM365 75c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z" fill="url(#nav-logo-grad)" />
                  <path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128c0-50.5-29.2-94-71.7-114.9 14.5 15.5 24.3 35.8 24.3 58.9 0 35.3-22.1 65.5-52.6 77.2-2.5 1-4 3.7-4 6.3V296c0 13.3 10.7 24 24 24s24-10.7 24-24v-4c40-15.3 68-54.1 68-96 0-30.8-13.1-58.4-34-78.1z" fill="url(#nav-logo-grad)" />
                  <path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 216c-48.6 0-88-39.4-88-88s39.4-88 88-88 88 39.4 88 88-39.4 88-88 88z" fill="url(#nav-logo-grad)" />
                  <path d="M232 208l-56 128h32l12-32h40l12 32h32l-56-128h-16zm-4 72l12-32 12 32h-24z" fill="#fff" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">
                Aura<span className="text-gradient">Tech</span>.
              </span>
            </motion.a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.a 
                  key={link.name}
                  href={link.href} 
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/94704479608?text=Hi%20AuraTech,%20I'm%20interested%20in%20building%20a%20high-converting%20website%20for%20my%20business."
                target="_blank" rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebe5a] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all transform flex items-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.4)]"
              >
                <MessageCircle size={15} /> Message for a Quote
              </motion.a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass-nav border-t border-white/5 bg-black/95 backdrop-blur-2xl"
        >
          <div className="px-6 pt-2 pb-8 space-y-2">
            {navLinks.map((link) => (
              <motion.a 
                key={link.name}
                href={link.href} 
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-4 text-lg font-medium border-b border-white/5 last:border-0"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/94704479608?text=Hi%20AuraTech,%20I'm%20interested%20in%20building%20a%20high-converting%20website%20for%20my%20business."
              target="_blank" rel="noopener noreferrer"
              className="text-[#25D366] block px-3 py-4 text-lg font-medium"
            >
              💬 Message for a Quote
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-accent/30 rounded-full blur-[120px] opacity-70 pointer-events-none z-0"></div>
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-blue-accent/20 rounded-full blur-[100px] opacity-60 pointer-events-none -translate-x-1/2 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/10">
              <span className="w-2 h-2 rounded-full bg-purple-accent animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">Available for new projects</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 backdrop-blur-sm">
              <span className="text-yellow-400 text-sm">⚡</span>
              <span className="text-sm font-semibold text-yellow-300">Limited: Only 2 project slots available for April.</span>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-tight mb-8 leading-[1.1] max-w-5xl mx-auto px-4"
          >
            We Build <span className="text-gradient">High-Performance</span><br className="hidden md:block" />
            Websites &amp; Apps For Your Business.
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 px-6"
          >
            Transform your business with modern digital solutions. From small shops to large enterprises, we help you grow online.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center px-6">
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/94704479608?text=Hi%20AuraTech,%20I'm%20interested%20in%20building%20a%20high-converting%20website%20for%20my%20business."
              target="_blank" rel="noopener noreferrer"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="bg-[#25D366] hover:bg-[#1ebe5a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.35)] w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} /> Message on WhatsApp
            </motion.a>
            <motion.a 
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="glass-card px-8 py-4 rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-colors border border-white/10 w-full sm:w-auto text-center"
            >
              Start Your Project
            </motion.a>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-24 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto"
          >
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">10+</h4>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Projects Delivered</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">100%</h4>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Client Satisfaction</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">&lt;24h</h4>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Quick Response</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

const TrustLogos = () => {
  return (
    <section className="py-10 border-y border-white/5 bg-black/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-400 font-semibold uppercase tracking-widest mb-8">Trusted by innovative startups and fast-growing brands</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale">
          <div className="flex items-center gap-2 text-2xl font-bold text-white"><Zap size={28} className="text-purple-accent"/> TechFlow</div>
          <div className="flex items-center gap-2 text-2xl font-bold text-white"><Server size={28} className="text-blue-accent"/> Nexa</div>
          <div className="flex items-center gap-2 text-xl font-bold text-white tracking-[0.2em] font-serif uppercase"><Bot size={24} className="text-yellow-500"/> Global Solutions</div>
          <div className="flex items-center gap-2 text-2xl font-black italic text-white"><Code size={28} className="text-green-400"/> Innovate Inc.</div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-purple-accent" />,
      title: "Custom Website Development",
      subtitle: "For Business & Personal",
      description: "Fully bespoke websites tailored to your brand — from simple landing pages and portfolios to complex multi-page business sites. Built fast, mobile-first, and ready to convert.",
      tag: "Most Popular"
    },
    {
      icon: <Server className="w-10 h-10 text-blue-accent" />,
      title: "E-commerce Solutions",
      subtitle: "Online Stores with Payment Integration",
      description: "Launch your online store with seamless payment gateways (Stripe, PayPal & local options), product management, and an experience that turns browsers into buyers.",
      tag: "High ROI"
    },
    {
      icon: <Bot className="w-10 h-10 text-yellow-500" />,
      title: "UI/UX Design",
      subtitle: "Modern & User-Friendly Interfaces",
      description: "Pixel-perfect, intuitive interfaces designed to delight users. Every layout, color, and interaction is crafted to guide your visitors toward taking action.",
      tag: null
    },
    {
      icon: <Zap className="w-10 h-10 text-green-400" />,
      title: "Mobile App Development",
      subtitle: "Android & iOS Support",
      description: "Cross-platform mobile apps built with React Native — one codebase, two platforms. From concept to App Store and Google Play, we handle the full journey.",
      tag: "New"
    }
  ];

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16 px-6"
        >
          <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold mb-4 leading-tight">What We <span className="text-gradient">Build For You</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Affordable, high-quality digital solutions for local and global clients.</p>
          <p className="mt-4 text-sm text-purple-300 font-medium">💎 Premium solutions starting at competitive rates. <motion.a whileTap={{ scale: 0.95 }} href="#contact" className="underline underline-offset-2 text-purple-400 hover:text-white transition-colors">Get a custom quote today.</motion.a></p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.2)"
              }}
              className="glass-card p-8 rounded-3xl transition-all duration-500 group relative border border-white/5 hover:border-purple-accent/50 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-accent/0 to-purple-accent/0 group-hover:from-purple-accent/10 group-hover:to-blue-accent/5 transition-colors duration-500 rounded-3xl pointer-events-none" />
              
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-white/10 transition-colors">
                  {service.icon}
                </div>
                {service.tag && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-accent/20 border border-purple-accent/40 text-purple-300">{service.tag}</span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-1 relative z-10">{service.title}</h3>
              <p className="text-purple-400 text-sm font-medium mb-3 relative z-10">{service.subtitle}</p>
              <p className="text-gray-400 leading-relaxed relative z-10 text-sm">{service.description}</p>
              <motion.a
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/94704479608?text=Hi%20AuraTech,%20I'm%20interested%20in%20building%20a%20high-converting%20website%20for%20my%20business."
                target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-[#25D366] font-semibold hover:underline relative z-10"
              >
                <MessageCircle size={15} /> Get a Quote for This
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const lankaMart = {
    title: "LankaMart – High-Conversion E-commerce Marketplace",
    category: "E-commerce Platform",
    tech: "React + Tailwind CSS",
    image: "/anime_site_preview.png",
    liveLink: "https://lankamart-beta.vercel.app/",
    sourceLink: "https://github.com/sadewbagya/LankaMart",
    description: "A modern, high-performance marketplace engine built for Sri Lankan businesses. Features real-time LKR price conversion, category-wise product filtering, and a seamless WhatsApp-based checkout system.",
    highlights: [
      { emoji: "🛒", label: "Dynamic Cart Logic", desc: "Full state-managed shopping experience." },
      { emoji: "⚡", label: "API Integration", desc: "Real-time product data syncing via DummyJSON." },
      { emoji: "📱", label: "Mobile-First", desc: "100% thumb-friendly UI for the Sri Lankan mobile market." }
    ]
  };

  const projects = [
    {
      title: "AniStrem — Anime Streaming Platform",
      category: "Web Application",
      tech: "React + Tailwind CSS",
      showcase: "UI/UX Showcase",
      image: "/anime_site_preview.png",
      link: "https://anistrem.vercel.app/",
      problem: "Problem Solved: Existing anime platforms lacked a premium, modern UI/UX focused on user immersion and seamless navigation.",
      description: "A high-fidelity UI/UX prototype and frontend showcase built to demonstrate modern streaming aesthetics. Features a Netflix-inspired interface, smooth Framer Motion transitions, and a focus on premium user experience.",
      result: "✅ Showcase: 100% Custom UI/UX Design - Optimized for Retention & Visual Impact.",
      isDesignFocused: true
    },
    {
      title: "Creative Developer Portfolio",
      category: "Web Design",
      tech: "React + Framer Motion",
      image: "/portfolio_preview.png",
      link: "#",
      problem: "Problem Solved: Developer had no online presence to attract international clients.",
      description: "A premium, animated digital portfolio crafted to position the client as a high-value developer and attract inbound project inquiries globally.",
      result: "Increased inbound client inquiries by 150% within 30 days of launch."
    }
  ];

  return (
    <section id="work" className="py-24 relative bg-black/50 z-10 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-accent/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4"
        >
          <div className="px-2">
            <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold mb-4 leading-tight">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-gray-400 text-lg">A selection of our latest and greatest work.</p>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              View All Work <ArrowRight size={18} />
            </a>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm">
              <span className="text-green-400 text-sm">⚡</span>
              <span className="text-xs font-semibold text-green-300 tracking-wide">99+ PageSpeed Score | SEO Optimized</span>
            </div>
          </div>
        </motion.div>

        {/* ── LankaMart — #1 Featured Project Card ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-12"
        >
          {/* Outer aura wrapper — glows on hover */}
          <motion.div
            whileHover={{ scale: 1.012 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="group relative rounded-[2rem]"
          >
            {/* Purple-to-Cyan aura glow layer */}
            <div
              className="absolute -inset-[2px] rounded-[2rem] opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-[6px]"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.9) 0%, rgba(6,182,212,0.7) 50%, rgba(124,58,237,0.6) 100%)"
              }}
            />
            {/* Wider ambient glow behind card */}
            <div
              className="absolute -inset-[1px] rounded-[2rem] opacity-0 group-hover:opacity-70 transition-opacity duration-700 blur-[28px]"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.6), rgba(6,182,212,0.4))"
              }}
            />

            {/* Card body — deep dark */}
            <div className="relative rounded-[1.95rem] overflow-hidden"
              style={{ background: "linear-gradient(145deg, #0f0f12 0%, #111116 60%, #0c0c10 100%)" }}
            >
              {/* Subtle inner texture */}
              <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}
              />
              {/* Inner ambient purple bloom top-right */}
              <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none blur-[90px]"
                style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
              />
              {/* Inner ambient cyan bloom bottom-left */}
              <div className="absolute -bottom-16 -left-8 w-56 h-56 rounded-full pointer-events-none blur-[80px]"
                style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)" }}
              />

              <div className="relative z-10 p-7 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                  {/* ── Left: Content ── */}
                  <div>
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/90 tracking-wide">
                        Featured 🔥
                      </span>
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                        {lankaMart.category}
                      </span>
                      <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-500">
                        {lankaMart.tech}
                      </span>
                    </div>

                    {/* Title with gradient accent */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      <span className="text-white">LankaMart – </span>
                      <span style={{ backgroundImage: "linear-gradient(90deg, #a855f7, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        High-Conversion E-commerce Marketplace
                      </span>
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {lankaMart.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-7">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 mb-3">Key Highlights</p>
                      <ul className="space-y-2.5">
                        {lankaMart.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <span className="text-base leading-none mt-0.5 opacity-90">{h.emoji}</span>
                            <span>
                              <span className="font-semibold text-white/90">{h.label}:</span>{" "}
                              <span className="text-gray-500">{h.desc}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.a
                        whileTap={{ scale: 0.95 }}
                        href={lankaMart.liveLink}
                        target="_blank" rel="noopener noreferrer"
                        id="lankamart-live-demo"
                        className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-4 rounded-xl text-sm transition-all"
                        style={{
                          background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                          boxShadow: "0 0 22px rgba(124,58,237,0.45)"
                        }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 36px rgba(124,58,237,0.65), 0 0 20px rgba(6,182,212,0.3)"}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 22px rgba(124,58,237,0.45)"}
                      >
                        <ExternalLink size={15} /> Live Demo
                      </motion.a>
                      <motion.a
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/sadewbagya58-cyber/lankamart.git"
                        target="_blank" rel="noopener noreferrer"
                        id="lankamart-source-code"
                        className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-semibold px-7 py-4 rounded-xl transition-all bg-white/[0.03] hover:bg-white/[0.07] text-sm"
                      >
                        <Code size={15} /> Source Code
                      </motion.a>
                    </div>
                  </div>

                  {/* ── Right: Mobile UI Preview ── */}
                  <div className="relative flex justify-center lg:justify-end">
                    {/* Phone frame */}
                    <div className="relative w-[220px] md:w-[260px]">
                      {/* Glow behind phone */}
                      <div className="absolute inset-0 rounded-[2.5rem] blur-[30px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                        style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.5), rgba(6,182,212,0.3))" }}
                      />
                      {/* Phone shell */}
                      <div className="relative rounded-[2.2rem] border border-white/10 overflow-hidden shadow-2xl"
                        style={{ background: "#0a0a0a" }}
                      >
                        <img
                          src="/lankamart_preview.png"
                          alt="LankaMart Mobile UI — Product cards with LKR prices, cart, categories"
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      {/* Live badge on phone */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#0f0f12] border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold text-white/80 whitespace-nowrap shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        lankamart-beta.vercel.app
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Other Projects Grid ── */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05, 
                rotate: 1, 
                boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.2)"
              }}
              className="group p-2 rounded-[2rem] glass-card border border-white/5 hover:border-purple-accent/50 transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-video flex items-center justify-center bg-gray-900 border-white/10 mb-5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out cursor-pointer">
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
              <div className="px-4 pb-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-purple-400 font-medium text-sm">{project.category}</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-white/10 px-2.5 py-1 rounded-md text-gray-300 font-medium border border-white/5">
                      {project.tech}
                    </span>
                    {project.showcase && (
                      <span className="text-xs bg-purple-500/20 px-2.5 py-1 rounded-md text-purple-300 font-bold border border-purple-500/30">
                        {project.showcase}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all mb-2">
                  {project.title}
                </h3>
                {project.problem && (
                  <p className="text-xs text-yellow-400/80 font-semibold mb-3 flex items-start gap-1">
                    <span className="mt-0.5">🎯</span> {project.problem}
                  </p>
                )}
                {project.description && (
                   <p className="text-gray-400 text-sm mb-4 pr-2 leading-relaxed">{project.description}</p>
                )}
                {project.result && (
                  <p className={`text-sm font-medium mb-5 block px-3 py-2 rounded-lg border leading-relaxed ${
                    project.isDesignFocused 
                      ? "text-purple-300 bg-purple-500/10 border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]" 
                      : "text-green-400 bg-green-400/10 border-green-400/20"
                  }`}>
                    <span className="text-white font-semibold">✅ Result:</span> {project.result}
                  </p>
                )}
                <motion.a 
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold bg-purple-accent text-white px-6 py-4 rounded-xl hover:bg-purple-600 transition-colors shadow-[0_0_15px_rgba(124,58,237,0.4)] w-full"
                >
                  View Live Demo <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StarRating = ({ rating, interactive = false, onRatingChange = () => {} }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className={`flex justify-center ${interactive ? 'gap-2 mb-8' : 'mb-5'}`}>
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;
        const isActive = interactive ? (hoverRating || rating) >= starValue : rating >= starValue;
        
        return (
          <svg 
            key={i} 
            className={`w-6 h-6 cursor-pointer transition-all duration-200 transform ${
              isActive ? 'text-yellow-400 scale-110 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]' : 'text-gray-600'
            } ${interactive ? 'hover:scale-125' : ''}`}
            fill="currentColor" 
            viewBox="0 0 20 20"
            onMouseEnter={() => interactive && setHoverRating(starValue)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            onClick={() => interactive && onRatingChange(starValue)}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      })}
    </div>
  );
};

const ReviewSystem = () => {
  const initialReviews = [
    {
      id: 1,
      quote: `"AuraTech delivered a masterpiece. Our conversion rate increased by <span class='text-purple-400 font-bold'>40%</span> in the first month."`,
      name: "Alex Rivera",
      company: "TechFlow",
      initial: "A",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      quote: `"The ROI was instant. Our site load speed dropped by 60% and leads doubled. Truly exceptional work."`,
      name: "Sarah Chen",
      company: "Nexa",
      initial: "S",
      rating: 5,
      featured: false
    }
  ];

  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('auratech_reviews');
    return saved ? JSON.parse(saved) : initialReviews;
  });

  const [formData, setFormData] = useState({ name: '', company: '', quote: '', rating: 5 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    localStorage.setItem('auratech_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.quote) return;
    
    setIsSubmitting(true);
    
    const newReview = {
      id: Date.now(),
      ...formData,
      initial: formData.name.charAt(0).toUpperCase(),
      featured: false
    };

    setTimeout(() => {
      setReviews([newReview, ...reviews]);
      setFormData({ name: '', company: '', quote: '', rating: 5 });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section className="py-24 relative z-10 border-t border-white/5 bg-black/60 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-accent/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-accent/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/10 mb-6">
            <span className="text-sm font-medium text-purple-300">Social Proof</span>
          </div>
          <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold mb-4 leading-tight">What <span className="text-gradient">Clients Say</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto px-6">See why businesses trust AuraTech to power their digital growth.</p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {reviews.slice(0, 6).map((t, i) => (
            <motion.div
              key={t.id}
              variants={fadeInUp}
              className={`glass-card rounded-[2rem] p-8 border hover:border-purple-accent/40 transition-all duration-500 flex flex-col group ${
                t.featured
                  ? "border-purple-accent/35 shadow-[0_0_40px_rgba(124,58,237,0.12)] scale-[1.02] bg-white/[0.04]"
                  : "border-white/5"
              }`}
            >
              <div className="flex mb-5">
                {[...Array(5)].map((_, starIndex) => (
                  <svg key={starIndex} className={`w-4 h-4 ${starIndex < t.rating ? 'text-yellow-500' : 'text-gray-600'} mx-0.5`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote
                className="text-lg font-medium italic text-gray-200 mb-8 flex-grow leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.quote }}
              />
              
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-accent to-blue-accent rounded-full flex items-center justify-center text-lg font-bold text-white uppercase shadow-lg group-hover:scale-110 transition-transform">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-white tracking-tight">{t.name}</p>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest">{t.company || "Satisfied Client"}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Review Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-[2.5rem] p-10 border border-white/10 relative overflow-hidden">
            {/* Subtle glow behind form */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-accent/5 rounded-full blur-[60px] pointer-events-none"></div>
            
            <div className="text-center mb-10 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Leave a Review</h3>
              <p className="text-gray-400 text-sm">Your feedback helps us grow and serve you better.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <StarRating 
                rating={formData.rating} 
                interactive={true} 
                onRatingChange={(val) => setFormData({ ...formData, rating: val })} 
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl glass-input transition-all focus:shadow-[0_0_20px_rgba(124,58,237,0.25)] text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Company (Optional)</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl glass-input transition-all focus:shadow-[0_0_20px_rgba(124,58,237,0.25)] text-sm"
                    placeholder="e.g. Acme Inc"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Testimonial</label>
                <textarea
                  required
                  rows="3"
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl glass-input transition-all resize-none focus:shadow-[0_0_20px_rgba(124,58,237,0.25)] text-sm"
                  placeholder="Share your experience with us..."
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full relative group overflow-hidden rounded-2xl p-[1px] transition-transform active:scale-95"
              >
                {/* Submit Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-accent to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                
                {/* Button Content */}
                <div className="relative bg-black/20 backdrop-blur-md px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors group-hover:bg-transparent">
                  <span className="font-bold text-white text-lg tracking-tight">
                    {isSubmitting ? "Submitting..." : "Submit Review"}
                  </span>
                  {!isSubmitting && <Send size={18} className="text-white" />}
                </div>

                {/* Animated Glow Border */}
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-purple-accent via-cyan-400 to-purple-accent bg-[length:200%_auto] animate-marquee opacity-0 group-hover:opacity-100 blur-[4px] -z-10 transition-opacity" style={{ animationDuration: '3s' }} />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const WhyChooseUs = () => {
  const reasons = [
    { emoji: "🚀", title: "Fast Turnaround", desc: "Most projects delivered within 7–14 days, without cutting corners." },
    { emoji: "💰", title: "Affordable Pricing", desc: "High-quality work at rates that work for startups, SMEs, and individuals." },
    { emoji: "🌍", title: "Local & Global Clients", desc: "Based in Sri Lanka, serving clients from Asia, Europe, and beyond." },
    { emoji: "🛠️", title: "Full Support", desc: "Post-launch support and maintenance so you're never left hanging." }
  ];

  return (
    <section id="about" className="py-20 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
        >
          {/* Founder Story */}
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/10 mb-6">
              <span className="text-sm font-medium text-gray-300">👤 The Human Behind AuraTech</span>
            </div>
            <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold mb-6 leading-tight">
              Why Choose <span className="text-gradient">AuraTech?</span>
            </h2>
            <div className="glass-card p-6 rounded-2xl border border-purple-accent/20 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-accent to-blue-accent flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
                  S
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Sadew Bagya</p>
                  <p className="text-purple-400 text-sm">Founder & Lead Developer · Sri Lanka 🇱🇰</p>
                </div>
              </div>
              <blockquote className="text-gray-300 leading-relaxed italic text-base border-l-4 border-purple-accent pl-4">
                "AuraTech is led by a dedicated student developer from Sri Lanka 🇱🇰, focused on building affordable, high-quality digital solutions for local and global clients. I personally handle every project to ensure the highest standard of work."
              </blockquote>
            </div>
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/94704479608?text=Hi%20AuraTech,%20I'm%20interested%20in%20building%20a%20high-converting%20website%20for%20my%20business."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-8 py-4 rounded-full font-semibold text-base transition-colors shadow-[0_0_20px_rgba(37,211,102,0.3)] w-full sm:w-auto"
            >
              <MessageCircle size={18} /> Let's Talk About Your Project
            </motion.a>
          </motion.div>

          {/* Reasons Grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-purple-accent/40 transition-colors"
              >
                <span className="text-3xl mb-3 block">{r.emoji}</span>
                <h4 className="font-bold text-white text-lg mb-2">{r.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const icons = [
    { Icon: FaReact, color: "#61DAFB", name: "React" },
    { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
    { Icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
    { Icon: FaNodeJs, color: "#339933", name: "Node.js" },
    { Icon: SiFramer, color: "#0055FF", name: "Framer Motion" },
    { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
    { Icon: FaFigma, color: "#F24E1E", name: "Figma" },
    { Icon: FaAws, color: "#FF9900", name: "AWS" },
    { Icon: FaGoogle, color: "#4285F4", name: "Google Cloud" }
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedIcons = [...icons, ...icons, ...icons];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      id="tech" 
      className="py-20 border-y border-white/5 bg-white/5 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mb-10 text-center">
        <h3 className="text-sm md:text-lg text-gray-400 font-medium uppercase tracking-widest px-4">Technologies we use</h3>
      </div>
      
      <div className="overflow-hidden whitespace-nowrap relative flex no-scrollbar mask-image-gradient">
        {/* Left/Right fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        <div className="animate-marquee flex gap-16 items-center w-max pl-16">
          {duplicatedIcons.map((item, idx) => {
            const { Icon, color, name } = item;
            return (
              <div key={idx} className="flex flex-col items-center justify-center gap-3 opacity-50 hover:opacity-100 transition-all grayscale hover:grayscale-0 hover:scale-110 duration-300">
                <Icon size={50} style={{ color }} />
                <span className="text-sm font-medium">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/sadewbagya58@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-bold mb-6 leading-tight px-4">Let's build something <span className="text-gradient">extraordinary</span> together.</h2>
            <p className="text-gray-400 text-lg mb-6 px-4">Whether you need a simple landing page or a complex web application, we have the expertise to bring your vision to life.</p>
            <p className="text-xl font-bold text-white mb-10 border-l-4 border-purple-accent pl-4 ml-4">Join 10+ businesses already scaling with AuraTech.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-purple-accent">
                  <Send size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email us at</p>
                  <a href="mailto:sadewbagya58@gmail.com" className="text-lg font-medium text-white hover:text-purple-400 transition-colors">sadewbagya58@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Agency Lead!" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">First Name</label>
                  <input type="text" name="First Name" required className="w-full px-4 py-3 rounded-xl glass-input transition-all focus:shadow-[0_0_15px_rgba(124,58,237,0.3)]" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Last Name</label>
                  <input type="text" name="Last Name" required className="w-full px-4 py-3 rounded-xl glass-input transition-all focus:shadow-[0_0_15px_rgba(124,58,237,0.3)]" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl glass-input transition-all focus:shadow-[0_0_15px_rgba(124,58,237,0.3)]" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea rows="4" name="message" required className="w-full px-4 py-3 rounded-xl glass-input transition-all resize-none focus:shadow-[0_0_15px_rgba(124,58,237,0.3)]" placeholder="Tell us about your project..."></textarea>
              </div>
              <div>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  type="submit" 
                  disabled={status === "submitting"} 
                  className="w-full bg-white flex justify-center text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all transform disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </motion.button>
                {status === "success" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm mt-4 text-center font-medium">✨ Message sent successfully! We'll be in touch soon.</motion.p>
                )}
                {status === "error" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-4 text-center font-medium">⚠️ Something went wrong. Please try again.</motion.p>
                )}
                {status !== "success" && status !== "error" && (
                  <p className="text-gray-400 text-sm mt-4 text-center">✨ Free consultation available. We typically reply within 24 hours.</p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold text-white tracking-tighter">
            Aura<span className="text-gradient">Tech</span>.
          </span>
          <p className="text-gray-500 text-sm mt-1">© 2026 AuraTech Agency. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <motion.a whileTap={{ scale: 0.95 }} href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</motion.a>
          <motion.a whileTap={{ scale: 0.95 }} href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</motion.a>
          <motion.a whileTap={{ scale: 0.95 }} href="#" className="text-gray-400 hover:text-white transition-colors">Dribbble</motion.a>
        </div>
      </div>
    </footer>
  );
};

const FinalCTA = () => (
  <section className="py-24 relative z-10 border-t border-white/5">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-accent/5 to-transparent pointer-events-none" />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 mb-6">
          <span className="text-yellow-400 text-sm">⚡</span>
          <span className="text-sm font-semibold text-yellow-300">Limited: Only 2 project slots available for April</span>
        </motion.div>
        <motion.h2 variants={fadeInUp} className="text-[clamp(2.2rem,7vw,4rem)] font-bold mb-6 leading-[1.1] px-4">
          Ready to <span className="text-gradient">grow your business?</span><br />
          <span className="text-white">Let's build your high-converting website today.</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
          Join 10+ businesses already scaling with AuraTech. Spots fill fast — secure yours now.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)] w-full sm:w-auto justify-center"
          >
            Get My Free Demo <ArrowRight size={22} />
          </motion.a>
          <a
            href="https://wa.me/94704479608?text=Hi%20AuraTech,%20I'm%20interested%20in%20building%20a%20high-converting%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-10 py-5 rounded-full font-bold text-xl text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-white/10 w-full sm:w-auto"
          >
            <MessageCircle size={22} /> Chat on WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/94704479608?text=Hi%20AuraTech,%20I'm%20interested%20in%20building%20a%20high-converting%20website%20for%20my%20business."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-4 rounded-full whatsapp-pulse cursor-pointer"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-accent/30 font-sans flex flex-col relative overflow-hidden">
      <MouseFollowGlow />
      <Navbar />
      <main className="flex-grow z-10">
        <Hero />
        <TrustLogos />
        <Services />
        <Projects />
        <WhyChooseUs />
        <ReviewSystem />
        <TechStack />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, X, Code, Search, Server, 
  ArrowRight, ExternalLink, Send, MessageCircle 
} from 'lucide-react';
import { 
  FaReact, FaNodeJs, FaFigma, FaAws, FaGoogle
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiNextdotjs, SiFramer, SiFirebase
} from 'react-icons/si';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white tracking-tighter cursor-pointer">
              Aura<span className="text-gradient">Tech</span>.
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#work" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Work</a>
              <a href="#tech" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Tech</a>
              <a href="#contact" className="bg-purple-accent hover:bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                Start Project
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass-nav border-t border-white/10"
        >
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            <a href="#services" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Services</a>
            <a href="#work" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Work</a>
            <a href="#tech" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Tech</a>
            <a href="#contact" className="text-purple-accent block px-3 py-2 text-base font-medium">Start Project</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-accent/30 rounded-full blur-[120px] opacity-70 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-blue-accent/20 rounded-full blur-[100px] opacity-60 pointer-events-none -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 rounded-full glass-card border border-white/10">
            <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-accent animate-pulse"></span>
              Available for new projects
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight"
          >
            We Build <span className="text-gradient">Modern Websites</span> <br className="hidden md:block" />
            That Grow Your Business
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10"
          >
            Premium web development and design agency focused on delivering blazing fast, conversion-optimized digital experiences.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </a>
            <a href="#work" className="glass-card px-8 py-4 rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-colors">
              View Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-purple-accent mb-6" />,
      title: "Web Design & Dev",
      description: "Custom, responsive websites built with modern frameworks that look stunning on every single device."
    },
    {
      icon: <Search className="w-10 h-10 text-blue-accent mb-6" />,
      title: "SEO Optimization",
      description: "Data-driven SEO strategies to rank your website higher, driving organic traffic and increasing visibility."
    },
    {
      icon: <Server className="w-10 h-10 text-purple-400 mb-6" />,
      title: "Premium Hosting",
      description: "Blazing fast, secure cloud hosting solutions with 99.9% uptime and continuous monitoring."
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Expertise</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need to establish a powerful digital presence.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-10 rounded-3xl transition-all duration-300 group"
            >
              <div className="bg-white/5 w-20 h-20 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-white/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "ANIMEWS - Streaming Platform",
      category: "Web Application",
      image: "/anime_site_preview.png",
      link: "#"
    },
    {
      title: "Creative Developer Portfolio",
      category: "Web Design",
      image: "/portfolio_preview.png",
      link: "#"
    }
  ];

  return (
    <section id="work" className="py-24 relative bg-black">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-gray-400 text-lg">A selection of our latest and greatest work.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-white hover:text-purple-accent transition-colors pb-2">
            View All Work <ArrowRight size={18} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 glass-card aspect-video flex items-center justify-center bg-gray-900 border-white/10 p-2">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out">
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
              <p className="text-purple-400 font-medium mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-accent group-hover:to-blue-accent transition-all">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const icons = [
    { Icon: FaReact, color: "#61DAFB", name: "React" },
    { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
    { Icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
    { Icon: SiFramer, color: "#0055FF", name: "Framer" },
    { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
    { Icon: FaNodeJs, color: "#339933", name: "Node.js" },
    { Icon: FaFigma, color: "#F24E1E", name: "Figma" },
    { Icon: FaAws, color: "#FF9900", name: "AWS" },
    { Icon: FaGoogle, color: "#4285F4", name: "Google Cloud" }
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedIcons = [...icons, ...icons, ...icons];

  return (
    <section id="tech" className="py-20 border-y border-white/5 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h3 className="text-lg text-gray-400 font-medium uppercase tracking-widest">Technologies we use</h3>
      </div>
      
      <div className="overflow-hidden whitespace-nowrap relative flex no-scrollbar mask-image-gradient">
        {/* Left/Right fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        <div className="animate-marquee flex gap-16 items-center w-max pl-16">
          {duplicatedIcons.map((item, idx) => {
            const { Icon, color, name } = item;
            return (
              <div key={idx} className="flex flex-col items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Icon size={50} style={{ color }} />
                <span className="text-sm font-medium">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's build something <span className="text-gradient">extraordinary</span> together.</h2>
            <p className="text-gray-400 text-lg mb-10">Whether you need a simple landing page or a complex web application, we have the expertise to bring your vision to life.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-purple-accent">
                  <Send size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email us at</p>
                  <p className="text-lg font-medium text-white">hello@auratech.dev</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="glass-card p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl glass-input transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl glass-input transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl glass-input transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl glass-input transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold text-white tracking-tighter">
            Aura<span className="text-gradient">Tech</span>.
          </span>
          <p className="text-gray-500 text-sm mt-1">© 2026 AuraTech Agency. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Dribbble</a>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/0704479608"
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
    <div className="min-h-screen bg-black text-white selection:bg-purple-accent/30 font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

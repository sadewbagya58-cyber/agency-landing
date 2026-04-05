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

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed w-full z-50 glass-nav transition-all duration-300"
    >
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
                Book Your Free Consultation
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
            <a href="#contact" className="text-purple-accent block px-3 py-2 text-base font-medium">Book Consultation</a>
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight max-w-5xl mx-auto"
          >
            We Build <span className="text-gradient">High-Converting Websites</span> <br className="hidden md:block" />
            That Turn Visitors Into Paying Customers.
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10"
          >
            Stop losing leads with outdated designs. We create premium, performance-driven digital experiences designed to scale your business.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <a href="#contact" className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                Get My Free Website Demo <ArrowRight size={20} />
              </a>
            </motion.div>
            <a href="#contact" className="glass-card px-8 py-4 rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-colors">
              Book a Free Consultation
            </a>
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
      icon: <Code className="w-10 h-10 text-purple-accent mb-6" />,
      title: "Revenue-Driven Web Design",
      description: "Custom websites built specifically to increase your sales."
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-500 mb-6" />,
      title: "Rank Higher & Grow Traffic",
      description: "Data-backed SEO strategies to dominate Google search results."
    },
    {
      icon: <Bot className="w-10 h-10 text-blue-accent mb-6" />,
      title: "AI-Powered Solutions",
      description: "Integrating intelligent chatbots and automated workflows to scale your business efficiency."
    },
    {
      icon: <Server className="w-10 h-10 text-purple-400 mb-6" />,
      title: "Lightning-Fast Hosting",
      description: "99.9% uptime with ultra-fast loading speeds for a seamless user experience."
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Expertise</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Elite digital capabilities designed to accelerate exceptional growth.</p>
          <p className="mt-4 text-sm text-purple-300 font-medium">💎 Premium solutions starting at competitive rates. <a href="#contact" className="underline underline-offset-2 text-purple-400 hover:text-white transition-colors">Get a custom quote today.</a></p>
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
                scale: 1.05, 
                rotate: 1, 
                boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.2)"
              }}
              className="glass-card p-10 rounded-3xl transition-all duration-500 group relative border border-white/5 hover:border-purple-accent/50 cursor-default overflow-hidden"
            >
              {/* Subtle hover glow layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-accent/0 to-purple-accent/0 group-hover:from-purple-accent/10 group-hover:to-blue-accent/5 transition-colors duration-500 rounded-3xl pointer-events-none" />
              
              <div className="bg-white/5 w-20 h-20 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-white/10 transition-colors relative z-10">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">{service.description}</p>
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
      tech: "React + Tailwind",
      image: "/anime_site_preview.png",
      link: "#",
      description: "A high-performance streaming platform built for speed and engagement.",
      result: "50% faster load speed & 2x user engagement."
    },
    {
      title: "Creative Developer Portfolio",
      category: "Web Design",
      tech: "React + Framer Motion",
      image: "/portfolio_preview.png",
      link: "#",
      description: "A premium digital portfolio customized to attract high-value clients.",
      result: "Increased inbound inquiries by 150% in 30 days."
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
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
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
              <div className="px-4 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-purple-400 font-medium text-sm">{project.category}</p>
                  <span className="text-xs bg-white/10 px-2.5 py-1 rounded-md text-gray-300 font-medium border border-white/5">
                    {project.tech}
                  </span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all mb-1">
                  {project.title}
                </h3>
                {project.description && (
                   <p className="text-gray-400 text-sm mb-4 pr-2">{project.description}</p>
                )}
                {project.result && (
                  <p className="text-sm text-green-400 font-medium mb-5 bg-green-400/10 inline-block px-3 py-1.5 rounded-lg border border-green-400/20">
                    <span className="text-white font-semibold">Result:</span> {project.result}
                  </p>
                )}
                <div>
                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-sm font-bold bg-purple-accent text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition-colors shadow-[0_0_15px_rgba(124,58,237,0.4)] w-max"
                  >
                    View Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StarRating = () => (
  <div className="flex justify-center mb-5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-500 mx-0.5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonial = () => {
  const testimonials = [
    {
      quote: `"AuraTech delivered a masterpiece. Our conversion rate increased by <span class='text-purple-400 font-bold'>40%</span> in the first month."`,
      name: "Founder",
      company: "TechFlow",
      initial: "T",
      featured: true
    },
    {
      quote: `"The ROI was instant. Our site load speed dropped by 60% and leads doubled."`,
      name: "Marketing Director",
      company: "Nexa",
      initial: "N",
      featured: false
    },
    {
      quote: `"Professional, fast, and exactly what we needed to scale our startup."`,
      name: "CEO",
      company: "Innovate Inc.",
      initial: "I",
      featured: false
    }
  ];

  return (
    <section className="py-20 relative z-10 border-t border-white/5 bg-black/60">
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-purple-accent/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">What <span className="text-gradient">Clients Say</span></h2>
          <p className="text-gray-400 text-lg">Real results from real businesses we've partnered with.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`glass-card rounded-3xl p-8 border flex flex-col ${
                t.featured
                  ? "border-purple-accent/40 shadow-[0_0_30px_rgba(124,58,237,0.15)]"
                  : "border-white/5"
              }`}
            >
              <StarRating />
              <blockquote
                className="text-lg md:text-xl font-medium italic text-white mb-6 flex-grow leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.quote }}
              />
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-11 h-11 bg-gradient-to-br from-purple-accent to-blue-accent rounded-full flex items-center justify-center text-base font-bold text-white uppercase flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's build something <span className="text-gradient">extraordinary</span> together.</h2>
            <p className="text-gray-400 text-lg mb-6">Whether you need a simple landing page or a complex web application, we have the expertise to bring your vision to life.</p>
            <p className="text-xl md:text-2xl font-bold text-white mb-10 border-l-4 border-purple-accent pl-4">Join 10+ businesses already scaling with AuraTech.</p>
            
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
                <button type="submit" disabled={status === "submitting"} className="w-full bg-white flex justify-center text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100">
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
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
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Dribbble</a>
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
        <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
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
            className="glass-card px-10 py-5 rounded-full font-bold text-xl text-white hover:bg-white/10 transition-colors flex items-center gap-2 border border-white/10 w-full sm:w-auto justify-center"
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
        <Testimonial />
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

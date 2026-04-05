/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Terminal, 
  ArrowRight, 
  Mail, 
  Layers, 
  FlaskConical, 
  LayoutGrid, 
  User,
  MoveRight,
  MessageCircle,
  Phone,
  Smile,
  MessageSquare,
  Star,
  StarHalf,
  ShieldCheck,
  Linkedin,
  Instagram,
  ChevronDown,
  Plus,
  Minus
} from "lucide-react";
import { useRef, useState, useEffect, RefObject, FormEvent, MouseEvent, TouchEvent } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  engine: string;
  demoUrl?: string;
  icon?: any;
}

const FAQ = [
  {
    question: "How long does it take to build my clinic website?",
    answer: "For our Basic and Standard plans, we typically deliver the first draft within 7-10 business days. Premium plans with more pages and custom SEO may take 14-21 days."
  },
  {
    question: "Do I own the domain and website after it's built?",
    answer: "Absolutely. Even if we manage the hosting for you, you remain the legal owner of your domain and all website content. You can move it at any time."
  },
  {
    question: "Will my website work on mobile phones?",
    answer: "Yes, 100%. Over 80% of dental patients search for clinics on their mobile devices. Every site we build is 'Mobile-First' and fully responsive."
  },
  {
    question: "How does the WhatsApp integration work?",
    answer: "We place a floating or fixed button on your site. When a patient clicks it, it opens WhatsApp on their device with a pre-filled message like 'Hi, I'd like to book an appointment.' It's the fastest way to convert traffic."
  },
  {
    question: "What is a 'Digital Audit'?",
    answer: "It's a comprehensive check of your current online presence—including your website speed, Google Maps ranking, and competitor analysis. We provide this for free to show you where you're losing patients."
  }
];

const BeforeAfter = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    const relativeX = Math.max(0, Math.min(x - rect.left, rect.width));
    setSliderPos((relativeX / rect.width) * 100);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize shadow-3d border border-outline-variant/10 group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200&h=800" 
          alt="Generic Clinic Site" 
          className="w-full h-full object-cover grayscale opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-panel border-outline-variant/20 z-30 pointer-events-none">
          <span className="text-[10px] font-label text-red-500 uppercase font-bold">GENERIC_SITE</span>
        </div>
      </div>

      {/* After Image */}
      <div 
        className="absolute inset-0 overflow-hidden z-10"
        style={{ width: `${sliderPos}%` }}
      >
        <div style={{ width: containerRef.current?.offsetWidth || '100%', height: '100%' }}>
           <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200&h=800" 
            alt="NischayCore Site" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-panel border-outline-variant/20 whitespace-nowrap z-30 pointer-events-none">
          <span className="text-[10px] font-label text-green-500 uppercase font-bold">NISCHAYCORE</span>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white z-40 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-primary/20">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-primary rounded-full" />
            <div className="w-0.5 h-4 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string, key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="glass-panel rounded-2xl border-outline-variant/10 overflow-hidden mb-4"
      initial={false}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-surface-container-high/30 transition-colors"
      >
        <span className="text-base md:text-lg font-bold text-on-surface">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <motion.div
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={{
          open: { height: "auto", opacity: 1, marginBottom: 24 },
          collapsed: { height: 0, opacity: 0, marginBottom: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="px-6 overflow-hidden"
      >
        <p className="text-on-surface-variant leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Modern Website Design",
    description: "Fast, beautiful, tailored to your dental specialty. We create surgical precision in your digital layout.",
    tags: ["UI/UX", "RESPONSIVE", "DENTAL"],
    engine: "DESIGN_CORE",
    icon: Smile
  },
  {
    id: "02",
    title: "WhatsApp Integration",
    description: "A direct pipeline to your front desk. Convert browsing traffic into patients in a single click.",
    tags: ["AUTOMATION", "WHATSAPP", "CONVERSION"],
    engine: "CONNECT_LINK",
    icon: MessageSquare
  },
  {
    id: "03",
    title: "Google Reviews Setup",
    description: "Automated prompts to capture 5-star reviews from satisfied patients. Boost your local authority effortlessly.",
    tags: ["SEO", "REVIEWS", "AUTHORITY"],
    engine: "TRUST_STREAM",
    icon: Star
  },
  {
    id: "04",
    title: "Monthly Maintenance",
    description: "We handle updates, backups, and security. You focus on your patients, we focus on your uptime.",
    tags: ["SECURITY", "UPDATES", "UPTIME"],
    engine: "UPTIME_SHIELD",
    icon: ShieldCheck
  }
];

const TESTIMONIALS = [
  {
    name: "Dr. Arpit",
    clinic: "SMILECARE DENTAL",
    quote: "NischayCore transformed our digital presence. We went from 5 inquiries a week to 25+ high-quality leads.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Dr. Sarah",
    clinic: "SKINGLOW DERMATOLOGY",
    quote: "The WhatsApp integration is a game changer. Patients love the direct access, and our front desk is much more efficient.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Dr. Rohan",
    clinic: "ORTHOALIGN STUDIO",
    quote: "Finally, a team that understands the dental field. The design is professional, clean, and exactly what we needed.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

const PRICING = [
  {
    name: "Basic Plan",
    icon: LayoutGrid,
    price: "₹6,999",
    description: "Perfect for clinics starting their online journey",
    features: [
      "Professional 1-page dental website",
      "Mobile-friendly design",
      "WhatsApp 'Book Appointment' integration",
      "Services section (treatments showcase)",
      "Google Map integration",
      "Fast-loading optimized layout"
    ],
    notIncluded: [
      "Domain & hosting (client-owned)",
      "No maintenance"
    ]
  },
  {
    name: "Standard Plan",
    icon: Layers,
    price: "₹14,999",
    description: "Most popular for growing clinics",
    popular: true,
    features: [
      "Professional 3-5 page dental website",
      "Mobile-friendly design",
      "WhatsApp 'Book Appointment' integration",
      "Services section (treatments showcase)",
      "Google Map integration",
      "Fast-loading optimized layout",
      "1-year domain & hosting (fully managed)",
      "Basic SEO optimization",
      "Speed optimization",
      "3 months FREE maintenance"
    ]
  },
  {
    name: "Premium Plan",
    icon: ShieldCheck,
    price: "₹21,999",
    description: "Best for clinics serious about growth",
    features: [
      "Professional 5-8 page dental website",
      "Mobile-friendly design",
      "WhatsApp 'Book Appointment' integration",
      "Services section (treatments showcase)",
      "Google Map integration",
      "Fast-loading optimized layout",
      "1-year domain & hosting (fully managed)",
      "Advanced SEO optimization",
      "Speed optimization",
      "6 months FREE maintenance & management",
      "Priority support"
    ]
  }
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeSection, setActiveSection] = useState("about");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    clinicName: '',
    email: '',
    issue: ''
  });

  const handleWhatsAppAudit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hello NischayCore! I'd like to request a Free Audit.%0A%0A*Name:* ${formData.name}%0A*Clinic Name:* ${formData.clinicName}%0A*Email:* ${formData.email}%0A*Issue:* ${formData.issue}`;
    window.open(`https://wa.me/917974909733?text=${message}`, '_blank');
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button, a, .cursor-pointer');
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTo = (ref: RefObject<HTMLElement | null>, name: string) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(name);
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-surface-container-lowest overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute inset-0 scanlines opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-surface" />
        
        {/* Floating 3D-like shapes */}
        <motion.div 
          animate={{ 
            y: [0, -40, 0],
            rotateZ: [0, 20, 0],
            rotateX: [0, 45, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[15%] w-48 h-48 border border-primary/10 rounded-3xl opacity-20 hidden lg:block perspective-1000 preserve-3d"
        />
        <motion.div 
          animate={{ 
            y: [0, 40, 0],
            rotateZ: [0, -20, 0],
            rotateY: [0, 45, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[10%] w-64 h-64 border border-secondary/10 rounded-full opacity-20 hidden lg:block perspective-1000 preserve-3d"
        />

        {/* 3D Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, (i % 2 === 0 ? 50 : -50), 0],
              rotateX: [0, 360],
              rotateY: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i * 10) % 60}%`
            }}
            className="absolute w-4 h-4 border border-primary/20 rounded-sm hidden lg:block perspective-1000 preserve-3d"
          />
        ))}
      </div>

      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{ 
          x: mousePos.x - 16, 
          y: mousePos.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(224, 182, 255, 0.3)" : "transparent"
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-1 h-1 bg-secondary rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePos.x - 2, y: mousePos.y - 2 }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.2 }}
      />

      {/* Navigation */}
      <motion.nav 
        whileHover={{ y: -5, rotateX: 5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-2 md:py-3 bg-surface/60 backdrop-blur-xl rounded-full mt-4 md:mt-6 mx-auto w-[95%] md:w-[90%] max-w-3xl border border-outline-variant/15 shadow-3d perspective-1000 preserve-3d"
      >
        <div className="text-base md:text-2xl font-black tracking-tighter cyber-gradient-text font-headline uppercase shrink-0">
          NischayCore
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "About", ref: aboutRef },
            { name: "Work", ref: workRef },
            { name: "Pricing", ref: pricingRef },
            { name: "Contact", ref: contactRef }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.ref, item.name.toLowerCase())}
              className={`font-headline font-bold transition-colors uppercase tracking-tighter ${
                activeSection === item.name.toLowerCase() ? "text-secondary border-b-2 border-secondary pb-1" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-primary hover:bg-surface-container-high/30 rounded-full transition-all">
            <Terminal size={20} />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=100&h=100" 
              alt="Dental Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={aboutRef} className="relative min-h-screen flex flex-col justify-center pt-32 px-6 md:px-12 lg:px-24 z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-secondary-container/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full glass-panel border-outline-variant/20">
              <span className="w-2 h-2 rounded-full bg-secondary-container mr-2 shadow-[0_0_8px_#00E5FF]" />
              <span className="text-[10px] font-label uppercase tracking-widest text-secondary font-bold">Available for Projects</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-black font-headline tracking-tighter leading-[1.2] md:leading-[0.9] text-on-surface break-words">
              Hello! I'm <span className="cyber-gradient-text">NischayCore</span>, your Dental Partner bridging the gap between clinical excellence and digital trust.
            </h1>
            
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl font-sans leading-relaxed">
              Crafting high-performance websites for dental practices who want to own their online presence and scale their clinic.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <button 
                onClick={() => scrollTo(workRef, "work")}
                className="px-8 py-4 bg-primary-container text-on-primary-container font-headline font-bold rounded-xl neon-glow hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
              >
                View Solutions
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => scrollTo(pricingRef, "pricing")}
                className="px-8 py-4 bg-transparent border border-outline-variant/30 text-secondary font-headline font-bold rounded-xl hover:bg-secondary-container/5 transition-all duration-300"
              >
                View Pricing
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative group perspective-1000"
          >
            <div className="absolute inset-0 bg-primary-container/20 blur-[80px] rounded-full group-hover:bg-primary-container/30 transition-colors duration-700" />
            <motion.div 
              whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative glass-panel rounded-xl aspect-square flex items-center justify-center p-8 border-outline-variant/10 shadow-3d overflow-hidden preserve-3d"
            >
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Dental Clinic" 
                className="w-full h-full object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity duration-500 backface-hidden"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 px-3 py-1 rounded-full glass-panel border-outline-variant/20 translate-z-30 shadow-lg">
                <span className="text-[10px] font-label text-secondary tracking-tighter uppercase">Clinic_ID: NC-2026</span>
              </div>
              <div className="absolute bottom-10 right-6 px-3 py-1 rounded-full glass-panel border-outline-variant/20 translate-z-30 shadow-lg">
                <span className="text-[10px] font-label text-primary tracking-tighter uppercase">Digital_Partner: Nischay_Core</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Problem/Solution Section */}
        <motion.div 
          initial={{ opacity: 0, rotateX: 20, y: 100 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-32 grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-outline-variant/10 shadow-3d perspective-1000 preserve-3d"
        >
          <div className="bg-surface-container-low p-12 md:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-label text-xs tracking-widest text-red-500 uppercase font-bold">THE_PROBLEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-on-surface uppercase leading-[1.1] mb-8">
              Losing patients to <br/>
              <span className="text-red-500">local competitors?</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Relying solely on Google Maps, outdated mobile sites, or paying hefty aggregator fees is a race to the bottom. Your practice deserves a premium digital identity.
            </p>
          </div>
          <div className="bg-surface-container-highest p-12 md:p-20 flex flex-col justify-center border-l border-outline-variant/10">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-label text-xs tracking-widest text-green-500 uppercase font-bold">THE_SOLUTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-on-surface uppercase leading-[1.1] mb-8">
              Own your <br/>
              <span className="text-green-500">online presence.</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              A dedicated clinic website builds digital trust, ranks higher on local Google searches, and patients book directly via WhatsApp with zero commission.
            </p>
          </div>
        </motion.div>

        {/* Before/After Comparison */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-label text-xs tracking-[0.2em] text-secondary uppercase mb-2 block">VISUAL_TRANSFORMATION</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-on-surface uppercase leading-tight">CLINIC_EVOLUTION</h2>
          </motion.div>
          <BeforeAfter />
        </div>
      </section>

      {/* Work Section */}
      <section ref={workRef} className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-label text-xs tracking-[0.2em] text-secondary uppercase mb-2 block">PRECISION_SERVICES</span>
          <h2 className="text-3xl md:text-7xl font-black tracking-tighter text-on-surface uppercase leading-[1.2] md:leading-[1.1] neon-text-glow break-all">SOLUTIONS_STACK</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.article 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className={`flex flex-col p-10 rounded-[2rem] bg-surface-container-low border border-outline-variant/5 relative overflow-hidden group perspective-1000 preserve-3d shadow-lg hover:shadow-3d ${
                index === 0 ? "border-b-4 border-b-green-500" : ""
              }`}
            >
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(34,197,94,0.3)] group-hover:scale-110 transition-transform translate-z-20">
                {project.icon && <project.icon size={28} className="text-white" />}
              </div>
              
              <h3 className="text-3xl font-bold tracking-tight text-on-surface mb-4">
                {project.title}
              </h3>
              
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="font-label text-[10px] text-secondary uppercase tracking-wider px-3 py-1 rounded-full bg-secondary-container/10 border border-secondary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-surface-container-lowest/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-7xl font-black tracking-tighter text-on-surface uppercase leading-[1.2] md:leading-none neon-text-glow mb-6 break-all">TRUSTED_BY_EXPERTS</h2>
            <p className="text-on-surface-variant font-label tracking-widest uppercase text-sm">Hear from the doctors who scaled their practices with us.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotateZ: 2, y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                className="glass-panel p-8 rounded-3xl border-outline-variant/10 flex flex-col shadow-lg hover:shadow-3d perspective-1000 preserve-3d"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-primary">{t.name}</h4>
                    <p className="font-label text-[10px] text-secondary tracking-widest uppercase">{t.clinic}</p>
                  </div>
                </div>
                <p className="text-on-surface-variant italic leading-relaxed mb-8">"{t.quote}"</p>
                <div className="mt-auto flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFull = star <= t.rating;
                    const isHalf = !isFull && star - 0.5 <= t.rating;
                    return (
                      <span key={star} className="text-green-500">
                        {isFull ? (
                          <Star size={16} fill="currentColor" />
                        ) : isHalf ? (
                          <StarHalf size={16} fill="currentColor" />
                        ) : (
                          <Star size={16} className="opacity-20" />
                        )}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-label text-xs tracking-[0.2em] text-secondary uppercase mb-2 block">INVESTMENT_TIERS</span>
          <h2 className="text-3xl md:text-7xl font-black tracking-tighter text-on-surface uppercase leading-[1.2] md:leading-none neon-text-glow mb-6 break-all">PRICING_PLANS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15, rotateX: 5, rotateY: 5, scale: plan.popular ? 1.08 : 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className={`relative glass-panel p-8 md:p-10 rounded-[2.5rem] border-outline-variant/10 flex flex-col perspective-1000 preserve-3d shadow-lg hover:shadow-3d transition-shadow ${
                plan.popular 
                  ? 'border-primary/40 shadow-[0_0_40px_rgba(157,78,221,0.15)] scale-[1.02] md:scale-105 z-20 my-4 md:my-0' 
                  : 'z-10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-on-primary-container font-label text-[10px] font-bold uppercase tracking-widest">
                  MOST_POPULAR
                </div>
              )}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-surface-container-high/50 text-secondary'}`}>
                  <plan.icon size={24} />
                </div>
                <h3 className="text-2xl font-black text-on-surface uppercase">{plan.name}</h3>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-black text-primary">{plan.price}</span>
                <span className="text-on-surface-variant font-label text-xs uppercase">/once</span>
              </div>
              <p className="text-on-surface-variant text-sm mb-8">{plan.description}</p>
              
              <div className="space-y-4 mb-10">
                {plan.features.map((f, fi) => (
                  <div key={fi} className="flex items-start gap-3">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="text-on-surface-variant text-sm">{f}</span>
                  </div>
                ))}
                {plan.notIncluded?.map((f, fi) => (
                  <div key={fi} className="flex items-start gap-3 opacity-40">
                    <span className="text-on-surface-variant mt-0.5">✕</span>
                    <span className="text-on-surface-variant text-sm">{f}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={`https://wa.me/917974909733?text=${encodeURIComponent(`Hi, I'm interested in the ${plan.name} for my clinic.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto py-4 rounded-xl font-label font-bold uppercase tracking-widest text-xs transition-all text-center ${plan.popular ? 'cyber-gradient text-on-primary-container' : 'border border-outline-variant/30 text-on-surface hover:bg-surface-container-high'}`}
              >
                {plan.name === 'Premium Plan' ? 'GO_PREMIUM' : plan.name === 'Standard Plan' ? 'GET_STANDARD' : 'START_BASIC'}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-label text-xs tracking-[0.2em] text-secondary uppercase mb-2 block">KNOWLEDGE_BASE</span>
          <h2 className="text-3xl md:text-7xl font-black tracking-tighter text-on-surface uppercase leading-[1.2] md:leading-none neon-text-glow mb-6">FREQUENT_QUESTIONS</h2>
        </motion.div>

        <div className="space-y-4">
          {FAQ.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <span className="font-label text-xs tracking-[0.2em] text-secondary uppercase mb-2 block">SIGNAL_TRANSMISSION</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-on-surface uppercase leading-[1.2] md:leading-[0.9] neon-text-glow break-all max-w-lg">GET_A_FREE_AUDIT</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-md">
              Ready to dominate your local market? Request a comprehensive digital audit of your practice today.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 10, rotateY: -10, scale: 1.05 }}
                className="flex items-center gap-4 group perspective-1000 preserve-3d"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shadow-lg">
                  <Mail size={20} />
                </div>
                <div className="translate-z-10">
                  <p className="font-label text-[10px] text-on-surface-variant/60 uppercase tracking-widest">Neural_Mail</p>
                  <p className="text-on-surface font-bold">sacrificecreatesluck@gmail.com</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10, rotateY: -10, scale: 1.05 }}
                className="flex items-center gap-4 group perspective-1000 preserve-3d"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-colors shadow-lg">
                  <Phone size={20} />
                </div>
                <div className="translate-z-10">
                  <p className="font-label text-[10px] text-on-surface-variant/60 uppercase tracking-widest">Direct_Line</p>
                  <p className="text-on-surface font-bold">+91 7974909733</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10, rotateY: -10, scale: 1.05 }}
                className="flex items-center gap-4 group perspective-1000 preserve-3d"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-green-500 group-hover:bg-green-500/20 transition-colors shadow-lg">
                  <MessageCircle size={20} />
                </div>
                <div className="translate-z-10">
                  <p className="font-label text-[10px] text-on-surface-variant/60 uppercase tracking-widest">WhatsApp_Connect</p>
                  <p className="text-on-surface font-bold">+91 7974909733</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ rotateY: -5, rotateX: 5, scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-panel p-8 md:p-12 rounded-3xl border-outline-variant/20 perspective-1000 preserve-3d shadow-lg hover:shadow-3d"
          >
            <form className="space-y-6" onSubmit={handleWhatsAppAudit}>
              <div className="space-y-2">
                <label className="font-label text-[10px] text-secondary uppercase tracking-widest ml-1">NAME</label>
                <input 
                  type="text" 
                  placeholder="YOUR NAME"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surface-container-high/30 border border-outline-variant/20 rounded-xl px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors font-label text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] text-secondary uppercase tracking-widest ml-1">CLINIC NAME</label>
                <input 
                  type="text" 
                  placeholder="YOUR CLINIC NAME"
                  required
                  value={formData.clinicName}
                  onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                  className="w-full bg-surface-container-high/30 border border-outline-variant/20 rounded-xl px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors font-label text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] text-secondary uppercase tracking-widest ml-1">EMAIL</label>
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL ADDRESS"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface-container-high/30 border border-outline-variant/20 rounded-xl px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors font-label text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] text-secondary uppercase tracking-widest ml-1">PROBLEM FACING OR ISSUE</label>
                <textarea 
                  rows={4}
                  placeholder="DESCRIBE YOUR ISSUE..."
                  required
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  className="w-full bg-surface-container-high/30 border border-outline-variant/20 rounded-xl px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors font-label text-sm resize-none"
                />
              </div>
              <button type="submit" className="w-full py-5 rounded-xl cyber-gradient text-on-primary-container font-label font-bold uppercase tracking-widest text-sm hover:opacity-90 active:scale-[0.98] transition-all">
                GET_FREE_AUDIT
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-lowest py-24 px-6 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="text-3xl font-black cyber-gradient-text tracking-tighter uppercase mb-4">NischayCore</div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { name: "LinkedIn", url: "https://www.linkedin.com/in/nischay-core-849b903ba?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: <Linkedin size={14} /> },
              { name: "WhatsApp", url: "https://wa.me/917974909733", icon: <MessageCircle size={14} /> },
              { name: "Instagram", url: "https://www.instagram.com/nischaycore_?igsh=M3oyY2w0eWJoemo3", icon: <Instagram size={14} /> }
            ].map(social => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 font-label text-xs tracking-widest uppercase text-on-surface-variant hover:text-secondary transition-colors group"
              >
                <span className="text-on-surface-variant/50 group-hover:text-secondary transition-colors">
                  {social.icon}
                </span>
                {social.name}
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/40">
              © 2026 NischayCore. EXECUTED WITH PRECISION.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/917974909733"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[60] w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] transition-all duration-300"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.553 4.189 1.606 6.06L0 24l6.117-1.605a11.793 11.793 0 005.925 1.598h.005c6.632 0 12.032-5.396 12.035-12.03a11.782 11.782 0 00-3.48-8.513z" />
        </svg>
      </motion.a>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full h-20 glass-panel border-t border-outline-variant/10 z-50 px-8 flex justify-between items-center md:hidden">
        <button 
          onClick={() => scrollTo(workRef, "work")}
          className={`flex flex-col items-center gap-1 ${activeSection === 'work' ? 'text-primary' : 'text-on-surface-variant'}`}
        >
          <LayoutGrid size={20} />
          <span className="font-label text-[8px] tracking-widest uppercase font-bold">Solutions</span>
        </button>
        <button 
          onClick={() => scrollTo(pricingRef, "pricing")}
          className={`flex flex-col items-center gap-1 ${activeSection === 'pricing' ? 'text-primary' : 'text-on-surface-variant'}`}
        >
          <Layers size={20} />
          <span className="font-label text-[8px] tracking-widest uppercase font-bold">Pricing</span>
        </button>
        <button 
          onClick={() => scrollTo(contactRef, "contact")}
          className={`flex flex-col items-center gap-1 ${activeSection === 'contact' ? 'text-primary' : 'text-on-surface-variant'}`}
        >
          <Mail size={20} />
          <span className="font-label text-[8px] tracking-widest uppercase font-bold">Contact</span>
        </button>
      </nav>
    </div>
  );
}

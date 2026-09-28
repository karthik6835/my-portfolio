import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Terminal, Code2, Cpu, Database, Cloud, GitBranch, 
  ExternalLink, ArrowRight, Layers, Mail, Globe, Send, CheckCircle2 
} from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const row1Techs = ["Python", "Django", "FastAPI", "React.js", "PostgreSQL", "Docker"];
  const row2Techs = ["AWS", "Tailwind CSS", "Git & GitHub", "Machine Learning", "REST APIs", "Node.js"];

  const rootMapCards = [
    {
      step: "// ROOT 01",
      title: "Frontend Development",
      desc: "Architecting responsive, high-performance UI components with modern tooling.",
      tech: "React & Tailwind"
    },
    {
      step: "// ROOT 02",
      title: "Backend Development",
      desc: "Building secure REST APIs, robust microservices, and high-throughput data pipelines.",
      tech: "Python & Django"
    },
    {
      step: "// ROOT 03",
      title: "AI & Machine Learning",
      desc: "Integrating intelligent models and automated workflows for predictive systems.",
      tech: "Generative AI & LLMs"
    },
    {
      step: "// ROOT 04",
      title: "Cloud & Deployment",
      desc: "Containerizing applications, orchestrating cloud infrastructure, and handling CI/CD pipelines.",
      tech: "Docker & AWS"
    }
  ];

  const projects = [
    {
      title: "ClipForge AI",
      desc: "An AI-powered tool to transform full-length videos into viral 9:16 vertical clips with customized subtitles.",
      tags: ["Python", "Machine Learning", "React"],
      github: "https://github.com/Karthik6835/ClipForge-AI",
      hasCode: true
    },
    {
      title: "Travel Diary",
      desc: "A cloud-based travel planning web platform built with destination search and booking workflows.",
      tags: ["Django", "PostgreSQL", "Tailwind"],
      github: "https://github.com/Karthik6835/travel-diary-",
      hasCode: true
    },
    {
      title: "MCA Academic Project 01",
      desc: "An advanced web application developed during MCA studies focusing on robust database management and user workflows.",
      tags: ["Python", "Django", "MySQL"],
      hasCode: false
    },
    {
      title: "MCA Academic Project 02",
      desc: "A full-stack software system built with modern web technologies, emphasizing clean architecture and responsive UI.",
      tags: ["React", "JavaScript", "REST APIs"],
      hasCode: false
    }
  ];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false });

  // Mouse tilt effect states for profile.png
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [20, -20]);
  const rotateY = useTransform(x, [-100, 100], [-20, 20]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 100);
    y.set(yPct * 100);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false });

    // --- EMAILJS CONFIGURATION ---
    const serviceID = 'service_d24ndqq';
    const templateID = 'template_hqphdcv';
    const publicKey = 'eWcrN7mY0jzNHyW4F';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'karthikpoothur@gmail.com'
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setStatus({ submitting: false, submitted: true });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus({ submitting: false, submitted: true });
      });
  };

  if (loading) {
    return (
      <div className="bg-[#0a0a0a] text-white h-screen flex flex-col items-center justify-center font-mono p-6">
        <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-gray-500">// karthik_portfolio_init.sh</span>
          </div>
          <p className="text-indigo-400 text-sm mb-2">&gt; Initializing Karthik Suresh Portfolio...</p>
          <p className="text-gray-400 text-xs mb-6">Loading systems, full-stack modules & runtime environment...</p>
          
          <div className="w-full bg-neutral-950 rounded-full h-2.5 mb-4 border border-neutral-800 overflow-hidden">
            <div 
              className="bg-indigo-500 h-2.5 rounded-full transition-all duration-75" 
              style={{ width: `${loadProgress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Progress</span>
            <span className="text-indigo-400 font-bold">{loadProgress}%</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION - TWO COLUMN SPLIT LAYOUT */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 py-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left lg:col-span-5"
          >
            <p className="text-indigo-400 font-mono tracking-widest text-sm mb-4 uppercase">
              Creative Developer
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold font-mono tracking-tight mb-4 leading-tight">
              HI, I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500">KARTHIK</span>
            </h1>
            <p className="text-gray-400 font-mono text-sm md:text-base tracking-wider uppercase mb-8">
              PYTHON FULL STACK DEV | SCALABLE SYSTEMS
            </p>

            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 hover:border-indigo-500 bg-neutral-900/50 hover:bg-indigo-600/10 transition-all duration-300 text-sm font-mono tracking-wider"
            >
              VIEW WORK <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end lg:col-span-7"
          >
            <div className="relative group cursor-pointer w-full max-w-lg">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative w-full h-[420px] sm:h-[480px] rounded-2xl overflow-hidden border-2 border-neutral-800 group-hover:border-indigo-500 bg-neutral-900 shadow-2xl transition-all duration-300 transform group-hover:scale-[1.01]">
                <img 
                  src="/profile1.png" 
                  alt="Karthik Suresh" 
                  className="w-full h-full object-cover"
                  onError={(e)=>{e.target.style.display='none'}}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. SYSTEM PROFILE SECTION WITH HOVER-ONLY GLOW AND TILT */}
      <section className="py-24 px-6 md:px-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-2/5 flex justify-center relative perspective-1000 group">
          <div className="absolute -inset-2 bg-gradient-to-r from-gray-300/30 via-neutral-200/40 to-gray-400/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-neutral-800 group-hover:border-neutral-300 bg-neutral-900 flex items-center justify-center shadow-2xl cursor-pointer transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
            <img 
              src="/profile.png" 
              alt="Karthik Suresh" 
              className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-500"
              onError={(e)=>{e.target.style.display='none'}}
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-3/5"
        >
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 mb-2">SYSTEM PROFILE</h2>
          <h3 className="text-3xl font-bold tracking-tight mb-6 font-mono">Building Scalable Digital Experiences</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            I am an MCA graduate and Python Full-Stack Developer specializing in building high-performance, robust web applications and scalable backend systems using Python, Django, React, and cloud technologies. Passionate about clean code, architecture, and delivering seamless user interactions.
          </p>
          <div className="flex gap-4 font-mono text-sm">
            <span className="px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-indigo-300">Kerala, India</span>
            <span className="px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-indigo-300">Open to Work</span>
          </div>
        </motion.div>
      </section>

      {/* 3. TECHNOLOGIES SECTION WITH DUAL OPPOSING MARQUEE */}
      <section className="py-20 bg-neutral-950/60 border-y border-neutral-800/80 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 mb-2">TECH STACK</h2>
          <h3 className="text-2xl md:text-3xl font-bold font-mono tracking-tight">TECHNOLOGIES I WORK WITH</h3>
        </div>

        <div className="flex whitespace-nowrap overflow-hidden mb-4 relative">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-6 items-center min-w-max"
          >
            {[...row1Techs, ...row1Techs, ...row1Techs, ...row1Techs].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm font-mono text-indigo-300 shadow-md">
                <Code2 className="w-4 h-4 text-indigo-400" />
                <span>{tech}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex whitespace-nowrap overflow-hidden relative">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-6 items-center min-w-max"
          >
            {[...row2Techs, ...row2Techs, ...row2Techs, ...row2Techs].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm font-mono text-indigo-300 shadow-md">
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span>{tech}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3.1 CORE EXECUTION ROOT MAP */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">// DEVELOPMENT ROADMAP</span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight mt-2">Core Execution Root Map</h2>
        </div>

        <div className="flex overflow-x-auto pb-6 gap-6 scrollbar-thin scrollbar-thumb-neutral-800 snap-x snap-mandatory">
          {rootMapCards.map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
              className="min-w-[280px] sm:min-w-[320px] flex-1 p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-indigo-500/70 shadow-2xl backdrop-blur-md snap-start flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-indigo-400">{card.step}</span>
                  <Terminal className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-mono text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{card.desc}</p>
              </div>
              <div className="pt-4 border-t border-neutral-800 font-mono text-xs text-indigo-300 bg-indigo-950/30 px-3 py-2 rounded-lg border border-indigo-900/50">
                {card.tech}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED ENGINEERING PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 md:px-20 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 mb-2">PORTFOLIO</h2>
          <h3 className="text-3xl font-bold font-mono tracking-tight">FEATURED ENGINEERING PROJECTS</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-indigo-500/50 flex flex-col justify-between transition-all shadow-xl"
            >
              <div>
                <h4 className="text-xl font-bold font-mono mb-2 text-white">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-950/40 border border-indigo-800/50 text-indigo-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-800/60 font-mono text-sm">
                {project.hasCode ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300">
                    <GitBranch className="w-4 h-4" /> Source Code
                  </a>
                ) : (
                  <span className="text-xs font-mono text-gray-500 italic">Academic / Private Project</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE TERMINAL CONTACT SECTION */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto border-t border-neutral-800/80">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">// DISPATCH DESK</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight mt-2">Let's Build Something Exceptional.</h2>
          <p className="text-gray-400 font-mono text-sm mt-3">Fill out the transmission form or preview your live payload stream directly below.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Terminal className="w-32 h-32 text-indigo-400" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-6 border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-gray-500">// payload_preview.json</span>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="text-gray-500">{"// Real-time transmission data stream"}</div>
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-2">
                  <p className="text-indigo-300"><span className="text-gray-500">sender:</span> "{formData.name || '[Awaiting Name]'}"</p>
                  <p className="text-indigo-300"><span className="text-gray-500">email:</span> "{formData.email || '[Awaiting Email]'}"</p>
                  <p className="text-indigo-300"><span className="text-gray-500">message:</span> "{formData.message || '[Awaiting Message]'}"</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800/80 flex items-center justify-between font-mono text-xs text-gray-500">
              <span>Status: <strong className="text-green-400">Open to Opportunities</strong></span>
              <span>Secure WebSocket</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-2xl flex flex-col justify-center">
            {status.submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-mono mb-2">Transmission Received!</h3>
                <p className="text-gray-400 text-sm mb-6">Thank you for reaching out. The message has been transmitted successfully to your Gmail.</p>
                <button 
                  onClick={() => { setStatus({ submitting: false, submitted: false }); setFormData({ name: '', email: '', message: '' }); }}
                  className="px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 font-mono text-sm transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-indigo-500 text-white font-mono text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-indigo-500 text-white font-mono text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">Your Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let's build something exceptional together..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-indigo-500 text-white font-mono text-sm outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-mono text-sm font-bold tracking-wider text-white transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status.submitting ? "TRANSMITTING..." : "TRANSMIT MESSAGE"} <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* 6. GET IN TOUCH FOOTER SECTION */}
        <div className="mt-24 pt-16 border-t border-neutral-900 text-center">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 mb-2">GET IN TOUCH</h2>
          <h3 className="text-3xl font-bold font-mono tracking-tight mb-8">LET'S BUILD SCALABLE SYSTEMS TOGETHER</h3>
          
          <div className="flex justify-center gap-6 mb-12 font-mono text-sm">
            <a href="mailto:karthikpoothur@gmail.com" className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-indigo-500 text-gray-300 hover:text-white transition-all flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <a href="https://www.linkedin.com/in/karthik-suresh-8121b3881" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-indigo-500 text-gray-300 hover:text-white transition-all flex items-center gap-2">
              <Globe className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://github.com/Karthik6835" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-indigo-500 text-gray-300 hover:text-white transition-all flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> GitHub
            </a>
          </div>

          <p className="text-xs font-mono text-gray-600">
            © 2026 Karthik Suresh. Designed with Vercel & Stripe aesthetic.
          </p>
        </div>
      </section>

    </div>
  );
}
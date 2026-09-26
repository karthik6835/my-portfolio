import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, Code2, Briefcase, 
  ExternalLink, Cpu, Database, Video, Mail 
} from "lucide-react";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  // 4 Seconds Preloader timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-slate-100 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden min-h-screen relative">
      
      {/* PRELOADER */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center font-mono"
          >
            <div className="text-purple-400 text-xl mb-4 flex items-center gap-2">
              <Terminal className="animate-pulse" /> &gt; initializing_karthik_portfolio...
            </div>
            <div className="w-64 h-2 bg-neutral-800 rounded-full overflow-hidden border border-purple-500/30">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.8, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="h-screen w-full flex items-center justify-center relative px-6 md:px-16 snap-start overflow-hidden">
        
        {/* Background Avatar with Persistent Glow Frame Effect */}
        <div className="absolute inset-0 z-0 opacity-80 flex items-center justify-end pr-2 md:pr-8 translate-x-8">
          <div className="relative w-full h-full max-w-2xl max-h-[85vh] p-3 rounded-3xl group cursor-pointer transition-all duration-500 shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.9)] border border-purple-500/60 bg-transparent">
            <img 
              src="/profile.png" 
              alt="Karthik Suresh" 
              className="w-full h-full object-cover rounded-2xl filter brightness-110 contrast-105 transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-400 text-sm font-mono backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              Python Full-Stack Developer & MCA Graduate
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-mono drop-shadow-lg">
              KARTHIK SURESH
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-2">
                FULL-STACK DEVELOPER
              </span>
            </h1>

            <p className="text-slate-200 text-base md:text-lg font-mono max-w-md drop-shadow-md leading-relaxed">
              Building scalable web apps and AI-powered tools with Python, Django, React, and PostgreSQL.
            </p>

            <div className="flex gap-4 pt-4">
              <a 
                href="#contact"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono font-semibold shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                LET'S BUILD SOMETHING
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 md:px-16 max-w-7xl mx-auto snap-start relative z-10">
        <h2 className="text-3xl font-bold font-mono mb-12 flex items-center gap-3">
          <Code2 className="text-purple-400" /> FEATURED PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1: ClipForge AI */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-purple-400 mb-2">
                <Video className="w-5 h-5" />
                <h3 className="text-xl font-bold font-mono">ClipForge AI</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                AI-powered tool to transform full-length YouTube/Google Drive videos into 5 viral 9:16 vertical clips with customized subtitles and duration control.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              {['Python', 'AI/ML', 'APIs', 'Video Processing'].map((tech, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-purple-950/50 text-purple-300 border border-purple-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 2: Travel Diary */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group flex flex-col justify-between backdrop-blur-md">
            <div>
              <h3 className="text-xl font-bold font-mono text-purple-400 mb-2">Travel Diary</h3>
              <p className="text-slate-400 text-sm mb-4">
                Cloud-based travel planning web platform with destination search, Google Maps API, and booking workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              {['Python', 'Django', 'React', 'MySQL', 'Google Maps API'].map((tech, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-purple-950/50 text-purple-300 border border-purple-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* INTERNSHIPS SECTION */}
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto snap-start relative z-10">
        <h2 className="text-3xl font-bold font-mono mb-12 flex items-center gap-3">
          <Briefcase className="text-purple-400" /> MY INTERNSHIPS
        </h2>

        <div className="border-l-2 border-purple-500/30 pl-6 ml-4 space-y-12">
          
          {/* Internship 1 */}
          <div className="relative">
            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-[#0a0a0a]" />
            <h3 className="text-xl font-bold font-mono text-white">Python Full Stack Developer Intern</h3>
            <p className="text-purple-400 font-mono text-sm mb-2">Zentrix Technologies, Tamil Nadu • Jun 2026 - Present</p>
            <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside">
              <li>Building and enhancing full-stack web app features using Python, Django, and JavaScript.</li>
              <li>Developing and integrating RESTful APIs and implementing CRUD workflows.</li>
              <li>Troubleshooting issues and collaborating through Git-based Agile workflows.</li>
            </ul>
          </div>

          {/* Internship 2 */}
          <div className="relative">
            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-[#0a0a0a]" />
            <h3 className="text-xl font-bold font-mono text-white">Python Full Stack Developer Intern</h3>
            <p className="text-purple-400 font-mono text-sm mb-2">KNOVSTA Technologies, Ernakulam • Jan 2026 - Jun 2026</p>
            <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside">
              <li>Developed responsive web components using Python, Django, and MySQL.</li>
              <li>Implemented database operations and REST API integrations.</li>
              <li>Assisted with testing, debugging, and deployment support activities.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto snap-start relative z-10">
        <h2 className="text-3xl font-bold font-mono mb-12 flex items-center gap-3">
          <Cpu className="text-purple-400" /> TECH STACK
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { name: "Python", icon: <Terminal className="w-6 h-6 text-yellow-400" /> },
            { name: "Django", icon: <Code2 className="w-6 h-6 text-green-400" /> },
            { name: "React / JS", icon: <Code2 className="w-6 h-6 text-blue-400" /> },
            { name: "MySQL / DB", icon: <Database className="w-6 h-6 text-orange-400" /> },
          ].map((skill, index) => (
            <motion.div 
              key={index}
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 3, delay: index * 0.2 }}
              className="bg-neutral-900/90 border border-neutral-800 p-6 rounded-xl flex items-center gap-4 hover:border-purple-500/50 transition-all backdrop-blur-md"
            >
              {skill.icon}
              <span className="font-mono font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <footer id="contact" className="py-20 border-t border-neutral-900 px-6 text-center snap-start relative z-10 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold font-mono">LET'S BUILD SOMETHING</h2>
          <p className="text-slate-400 font-mono">Reach out for opportunities or collaborations.</p>
          <div className="flex justify-center flex-wrap gap-4 pt-4">
            
            {/* Email Me Button */}
            <a 
              href="mailto:karthikpoothur@gmail.com?subject=Hello%20Karthik,%20Regarding%20Portfolio"
              className="px-6 py-2.5 bg-neutral-900 rounded-lg hover:bg-purple-950 transition-colors text-purple-400 font-mono text-sm border border-purple-500/30 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Email Me
            </a>

            {/* LinkedIn Button */}
            <a 
              href="https://www.linkedin.com/in/karthik-suresh-8121b0380?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-2.5 bg-neutral-900 rounded-lg hover:bg-purple-950 transition-colors text-purple-400 font-mono text-sm border border-purple-500/30 flex items-center gap-2"
            >
              LinkedIn <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* GitHub Button */}
            <a 
              href="https://github.com/karthik6835" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-2.5 bg-neutral-900 rounded-lg hover:bg-purple-950 transition-colors text-purple-400 font-mono text-sm border border-purple-500/30 flex items-center gap-2"
            >
              GitHub <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <p className="text-xs text-slate-600 font-mono pt-8">© 2026 Karthik Suresh. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
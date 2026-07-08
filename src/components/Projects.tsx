"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectTech {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  domain: string;
  description: string;
  bullets: string[];
  tech: ProjectTech[];
  liveUrl: string;
  githubUrl: string;
  images: string[];
  glowColor: string; // Tailwind class for glow color background
  problemStatement?: string;
  tag?: string;
  subTitle?: string;
}

const projects: Project[] = [
  {
    title: "Saarthi",
    domain: "saarthi.voice.app",
    tag: "Accessibility-focused",
    description: "Voice-first ride booking app for visually impaired and elderly users in India.",
    problemStatement: "Built for a real accessibility gap — most ride-hailing apps assume full screen interaction, which excludes visually impaired and elderly riders.",
    bullets: [
      "Built the conversational booking flow using Gemini 1.5 Flash and Spring AI to handle code-switched Hindi-English speech",
      "Integrated Google Speech-to-Text and Text-to-Speech for a fully voice-driven experience — no screen interaction required",
      "Implemented a Reverse UPI QR Scanning Payment System (USP) and Fast2SMS for transactional SMS alerts",
      "Connected Supabase (PostgreSQL) for real-time ride booking, user profiles, and ride history"
    ],
    tech: [
      { name: "React.js", icon: "react" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "Spring AI", icon: "custom/spring-ai" },
      { name: "Supabase (PostgreSQL)", icon: "supabase" },
      { name: "Google STT/TTS", icon: "custom/voice" },
      { name: "Gemini 1.5 Flash", icon: "googlegemini" },
      { name: "Fast2SMS", icon: "custom/sms" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Shripad2006/SAARTHI",
    images: [
      "/gallary/Saarthi/Screenshot%202026-07-08%20152236.png",
      "/gallary/Saarthi/Screenshot%202026-07-08%20152341.png"
    ],
    glowColor: "from-white/[0.04] via-transparent to-transparent"
  },
  {
    title: "Rishikesh",
    domain: "explore-rishikesh.com",
    description: "Travel & itinerary planner for exploring Rishikesh with real-time local insights.",
    bullets: [
      "Interactive map-based itinerary builder",
      "Local guide/stay recommendation engine",
      "Real-time trip cost estimator",
      "Mobile-first responsive planning UI"
    ],
    tech: [
      { name: "Next.js", icon: "nextdotjs/white" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Google Maps API", icon: "googlemaps" },
      { name: "Tailwind CSS", icon: "tailwindcss" }
    ],
    liveUrl: "#",
    githubUrl: "#",
    images: [
      "/gallary/Rishikesh/Screenshot%202026-07-08%20134422.png",
      "/gallary/Rishikesh/Screenshot%202025-06-07%20142055.png",
      "/gallary/Rishikesh/Screenshot%202025-06-07%20142219.png",
      "/gallary/Rishikesh/Screenshot%202026-07-08%20134829.png",
      "/gallary/Rishikesh/Screenshot%202026-07-08%20135029.png",
      "/gallary/Rishikesh/Screenshot%202026-07-08%20135059.png"
    ],
    glowColor: "from-white/[0.04] via-transparent to-transparent"
  },
  {
    title: "CarbonEye",
    domain: "github.com/CarbonEye",
    subTitle: "Built at Chakravyuh 2.0 Hackathon, with Team Goodfellas",
    description: "A smart-city platform giving administrators a unified, real-time view of carbon emissions across urban zones — solving the problem of scattered data and slow response to pollution hotspots.",
    bullets: [
      "Built color-coded heat map visualizations showing emission hotspots across city zones, updating every 5 minutes",
      "Integrated deck.gl for map rendering, with OpenAQ (public air-quality data) and TomTom (traffic emissions) as data sources",
      "Added AI-powered hotspot detection to automatically flag zones exceeding emission thresholds"
    ],
    tech: [
      { name: "React.js", icon: "react" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "deck.gl", icon: "custom/map" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Shripad2006/CarbonEye",
    images: [
      "/gallary/Carboneye/Screenshot%202026-07-08%20161541.png",
      "/gallary/Carboneye/Screenshot%202026-07-08%20161604.png",
      "/gallary/Carboneye/Screenshot%202026-07-08%20161651.png"
    ],
    glowColor: "from-white/[0.04] via-transparent to-transparent"
  },
  {
    title: "NeuroScan",
    domain: "neuroscan.dev",
    description: "Frontend interface for a brain-tumor MRI classification tool.",
    bullets: [
      "Built a clean drag-and-drop MRI upload flow",
      "Real-time prediction visualization with confidence scores",
      "Downloadable diagnostic report generation UI",
      "Connects to a Flask/ML backend via REST"
    ],
    tech: [
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Axios", icon: "axios" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Shripad2006/NeuroScan-",
    images: [
      "/gallary/NeuroScan/Screenshot%202026-04-05%20191209.png",
      "/gallary/NeuroScan/Screenshot%202026-04-05%20191252.png",
      "/gallary/NeuroScan/Screenshot%202026-04-05%20191306.png",
      "/gallary/NeuroScan/Screenshot%202026-04-05%20191409.png"
    ],
    glowColor: "from-white/[0.04] via-transparent to-transparent"
  },
  {
    title: "NeatNest",
    domain: "neatnest.co",
    description: "A full-stack civic complaint platform letting citizens submit, track, and manage waste/civic complaints with real-time status updates.",
    bullets: [
      "Built a mobile-first, responsive interface with real-time complaint status tracking and image upload previews",
      "Developed RESTful APIs with Express.js, storing complaint data and image references in MongoDB",
      "Built dynamic admin dashboards for managing and resolving citizen complaints",
      "Used React.js component architecture with Bootstrap for scalable, consistent UI"
    ],
    tech: [
      { name: "React.js", icon: "react" },
      { name: "Express.js", icon: "express/white" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Bootstrap", icon: "bootstrap" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Shripad2006/NeatNest",
    images: [
      "/gallary/NeatNest/screencapture-127-0-0-1-5503-index-html-2026-07-08-15_28_10.png",
      "/gallary/NeatNest/screencapture-127-0-0-1-5503-register-html-2026-07-08-15_49_05.png",
      "/gallary/NeatNest/screencapture-127-0-0-1-5503-report-form-html-2026-07-08-15_48_34.png",
      "/gallary/NeatNest/screencapture-127-0-0-1-5503-staff-login-html-2026-07-08-15_48_52.png"
    ],
    glowColor: "from-white/[0.04] via-transparent to-transparent"
  },
  {
    title: "FitTrack",
    domain: "fittrack.io",
    description: "Microservices-based fitness platform across 5 services handling workout logging, calorie tracking, and AI-powered personalized recommendations, with secure authentication.",
    bullets: [
      "Built secure auth via Keycloak, JWT, and Spring Security with sub-100ms token validation across all services",
      "Designed service discovery with Eureka and event-driven communication via Kafka, reducing service coupling and enabling async processing",
      "Integrated Spring AI to generate 10+ personalized workout/wellness recommendation types, eliminating manual fitness plan creation"
    ],
    tech: [
      { name: "React", icon: "react" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "Spring AI", icon: "custom/spring-ai" },
      { name: "Kafka", icon: "apachekafka" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Keycloak", icon: "keycloak" }
    ],
    liveUrl: "#",
    githubUrl: "#",
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      "/gallary/fittrack/Screenshot%202026-07-08%20201756.png",
      "/gallary/fittrack/Screenshot%202026-07-08%20201912.png",
      "/gallary/fittrack/Screenshot%202026-07-08%20201921.png",
      "/gallary/fittrack/Screenshot%202026-07-08%20202119.png"
    ],
    glowColor: "from-white/[0.04] via-transparent to-transparent"
  }
];

function TechIcon({ icon, name }: { icon: string; name: string }) {
  if (icon === "custom/sms") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8" />
        <path d="M8 14h6" />
      </svg>
    );
  }
  if (icon === "custom/voice") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#eccc68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" fill="#eccc68" fillOpacity="0.2" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v3M8 22h8" />
      </svg>
    );
  }
  if (icon === "custom/spring-ai") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.22.73 4.27 1.96 5.93L3 21l3.07-.96C7.73 21.27 9.78 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M9.5 9.5c.3-.3.7-.5 1.2-.5s.9.2 1.2.5M12.1 14.5c.3.3.7.5 1.2.5s.9-.2 1.2-.5" />
        <circle cx="9.5" cy="11.5" r="0.8" fill="#00c853" />
        <circle cx="14.5" cy="11.5" r="0.8" fill="#00c853" />
      </svg>
    );
  }
  if (icon === "custom/map") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e056fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
      </svg>
    );
  }

  const url = `https://cdn.simpleicons.org/${icon}`;
  return (
    <img 
      src={url} 
      alt={`${name} icon`} 
      className="w-4.5 h-4.5 object-contain"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        const parent = e.currentTarget.parentElement;
        if (parent) {
          const fallbackSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          fallbackSvg.setAttribute("width", "16");
          fallbackSvg.setAttribute("height", "16");
          fallbackSvg.setAttribute("viewBox", "0 0 24 24");
          fallbackSvg.setAttribute("fill", "none");
          fallbackSvg.setAttribute("stroke", "#C0C0C0");
          fallbackSvg.setAttribute("stroke-width", "2");
          fallbackSvg.setAttribute("stroke-linecap", "round");
          fallbackSvg.setAttribute("stroke-linejoin", "round");
          
          const poly1 = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
          poly1.setAttribute("points", "16 18 22 12 16 6");
          const poly2 = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
          poly2.setAttribute("points", "8 6 2 12 8 18");
          
          fallbackSvg.appendChild(poly1);
          fallbackSvg.appendChild(poly2);
          parent.appendChild(fallbackSvg);
        }
      }}
    />
  );
}

// Interactive Mouse-Move Tilt Container for Browser Mockups
function TiltBrowserFrame({ children, glowColor }: { children: React.ReactNode; glowColor: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Smooth limit of 6 degrees max tilt to avoid extreme angles
    const maxTilt = 6;
    const tiltX = -(y / (box.height / 2)) * maxTilt;
    const tiltY = (x / (box.width / 2)) * maxTilt;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full group">
      {/* Background Soft Glow Blob */}
      <div className={`absolute inset-[-20px] rounded-3xl bg-gradient-to-tr ${glowColor} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
      
      {/* Inner Tilt Wrapper */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="w-full relative glass-panel !p-0 overflow-hidden border border-white/12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function ProjectSlideshow({ images, title }: { images: string[]; title: string }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 2500); // Rotates every 2.5 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[currentIdx]}
            alt={`${title} Mockup ${currentIdx + 1}`}
            fill
            sizes="(max-w-1024px) 100vw, 650px"
            className="object-cover transition-all duration-500 bg-zinc-950"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop";
            }}
          />
        </motion.div>
      </AnimatePresence>
      
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/5">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIdx ? "bg-white scale-110" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-32 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col items-center gap-24 md:gap-32 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-white tracking-wide uppercase"
          >
            STUFF I&apos;VE BUILT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            A few things I&apos;ve shipped, broken, and fixed again.
          </motion.p>
        </div>

        {/* Project Blocks Vertical List */}
        <div className="w-full flex flex-col gap-28 md:gap-36">
          {projects.map((project, idx) => {
            const isOdd = idx % 2 === 0;
            const hasLive = project.liveUrl !== "#" && project.liveUrl !== "";
            const hasGithub = project.githubUrl !== "#" && project.githubUrl !== "";
            
            return (
              <div 
                key={project.title}
                className={`w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                  isOdd ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                
                {/* Column 1: Browser Mockup Frame (60% width on Desktop) */}
                <motion.div 
                  initial={{ opacity: 0, x: isOdd ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-[58%] flex-shrink-0"
                >
                  <TiltBrowserFrame glowColor={project.glowColor}>
                    {/* Fake Browser Header */}
                    <div className="w-full flex items-center justify-between px-4 py-3 bg-black/60 border-b border-white/5 backdrop-blur-md">
                      {/* 3 Traffic light dots */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-zinc-700" />
                        <span className="w-3 h-3 rounded-full bg-zinc-600" />
                        <span className="w-3 h-3 rounded-full bg-zinc-500" />
                      </div>
                      
                      {/* Fake Address Bar */}
                      <div className="flex-1 max-w-[280px] sm:max-w-[320px] mx-4">
                        <div className="w-full bg-white/5 border border-white/10 rounded-lg py-1 px-3 flex items-center justify-center font-body text-xs text-zinc-300 select-none">
                          {project.domain}
                        </div>
                      </div>

                      {/* Small Avatar icon placeholder */}
                      <div className="w-6 h-6 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                        <span className="text-xs text-zinc-300">👤</span>
                      </div>
                    </div>

                    {/* Image / Web Page content */}
                    <div className="relative group/preview overflow-hidden w-full h-full">
                      <ProjectSlideshow images={project.images} title={project.title} />
                      
                      {/* Hover view code tab overlay */}
                      {hasGithub ? (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-black/45 opacity-0 group-hover/preview:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center z-20"
                        >
                          <span className="px-5 py-2.5 rounded-full bg-white text-black font-tag font-bold text-xs sm:text-sm tracking-wider shadow-2xl transform translate-y-4 group-hover/preview:translate-y-0 transition-all duration-300 hover:scale-105 hover:bg-zinc-100 flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                            View Code ↗
                          </span>
                        </a>
                      ) : hasLive ? (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-black/45 opacity-0 group-hover/preview:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center z-20"
                        >
                          <span className="px-5 py-2.5 rounded-full bg-white text-black font-tag font-bold text-xs sm:text-sm tracking-wider shadow-2xl transform translate-y-4 group-hover/preview:translate-y-0 transition-all duration-300 hover:scale-105 hover:bg-zinc-100 flex items-center gap-1.5">
                            Visit Site ↗
                          </span>
                        </a>
                      ) : null}
                    </div>
                  </TiltBrowserFrame>
                </motion.div>

                {/* Column 2: Info Panel (40% width on Desktop) */}
                <motion.div
                  initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  className="w-full lg:flex-1 flex flex-col gap-6"
                >
                  {/* Title & Direct Button */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-3">
                        {/* Vertical Accent Line */}
                        <div className="w-1.5 h-8 bg-zinc-300 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                        <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-wide uppercase flex flex-wrap items-center gap-3">
                          {project.title}
                          {project.tag && (
                            <span className="font-tag text-xs lowercase px-2.5 py-1 rounded-full border border-white/12 text-zinc-300 font-normal tracking-wide normal-case bg-white/5">
                              {project.tag}
                            </span>
                          )}
                        </h3>
                      </div>
                      {project.subTitle && (
                        <p className="font-body text-xs text-zinc-400 font-semibold tracking-wider uppercase pl-[18px] leading-tight">
                          {project.subTitle}
                        </p>
                      )}
                    </div>

                    {/* Outlined Action Pill */}
                    {hasLive || hasGithub ? (
                      <a
                        href={hasLive ? project.liveUrl : project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full font-tag text-sm font-bold text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:border-white hover:bg-white/10 transition-all hover:shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                      >
                        {hasLive ? "Check out" : "View Code"} ↗
                      </a>
                    ) : (
                      <span className="px-4 py-1.5 rounded-full font-tag text-xs uppercase font-bold text-zinc-400 bg-white/5 border border-white/5 cursor-default select-none tracking-wider">
                        Prototype
                      </span>
                    )}
                  </div>

                  {/* Short Subheading description */}
                  <p className="font-body text-sm text-zinc-400 tracking-wide border-b border-white/5 pb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem Statement if available */}
                  {project.problemStatement && (
                    <p className="text-xs sm:text-sm font-body italic text-zinc-500 leading-relaxed -mt-2 -mb-1">
                      {project.problemStatement}
                    </p>
                  )}

                  {/* Specific Key details list */}
                  <ul className="flex flex-col gap-3.5">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm font-body text-zinc-300 leading-relaxed">
                        <span className="text-zinc-400 mt-0.5 select-none font-bold font-mono-accent">+</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack row */}
                  <div className="flex flex-wrap gap-2 pt-3 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t.name}
                        className="flex items-center gap-1.5 px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/12 rounded-full font-tag text-xs text-zinc-200 transition-colors"
                      >
                        <TechIcon icon={t.icon} name={t.name} />
                        <span>{t.name}</span>
                      </span>
                    ))}
                  </div>

                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

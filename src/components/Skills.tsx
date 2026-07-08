"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./GlassCard";

interface SkillItem {
  name: string;
  icon: string;
}

interface TabContent {
  id: string;
  label: string;
  icon: string;
  skills: SkillItem[];
}

const tabs: TabContent[] = [
  {
    id: "languages",
    label: "Programming Languages",
    icon: "</>",
    skills: [
      { name: "Java", icon: "custom/java" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "SQL", icon: "sqlite" },
      { name: "Python", icon: "python" }
    ]
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⚙",
    skills: [
      { name: "Spring Boot", icon: "springboot" },
      { name: "Microservices", icon: "custom/microservices" },
      { name: "Spring MVC", icon: "spring" },
      { name: "Spring Security", icon: "springsecurity" },
      { name: "Spring AI", icon: "custom/spring-ai" },
      { name: "Eureka", icon: "custom/eureka" },
      { name: "Keycloak", icon: "keycloak" },
      { name: "JPA", icon: "custom/jpa" },
      { name: "Apache Kafka", icon: "apachekafka" },
      { name: "RESTful APIs", icon: "custom/apis" },
      { name: "Express.js", icon: "express/white" }
    ]
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "🌐",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Redux", icon: "redux" },
      { name: "Next.js", icon: "nextdotjs/white" },
      { name: "Tailwind CSS", icon: "tailwindcss" }
    ]
  },
  {
    id: "database",
    label: "Database",
    icon: "🗄",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" }
    ]
  },
  {
    id: "cloud_devops",
    label: "Cloud & DevOps",
    icon: "☁",
    skills: [
      { name: "AWS (EC2, S3)", icon: "custom/aws" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github/white" },
      { name: "Maven", icon: "apachemaven" },
      { name: "CI/CD", icon: "custom/cicd" }
    ]
  },
  {
    id: "testing",
    label: "Testing",
    icon: "🧪",
    skills: [
      { name: "Postman", icon: "postman" },
      { name: "JUnit", icon: "junit5" },
      { name: "Mockito", icon: "custom/mockito" }
    ]
  }
];

function SkillIcon({ icon, name }: { icon: string; name: string }) {
  if (icon === "custom/java") {
    return (
      <img 
        src="/java.png" 
        alt={`${name} icon`} 
        className="w-8 h-8 object-contain"
      />
    );
  }
  if (icon === "custom/aws") {
    return (
      <img 
        src="/aws.png" 
        alt={`${name} icon`} 
        className="w-8 h-8 object-contain"
      />
    );
  }
  if (icon === "custom/spring-ai") {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.22.73 4.27 1.96 5.93L3 21l3.07-.96C7.73 21.27 9.78 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M9.5 9.5c.3-.3.7-.5 1.2-.5s.9.2 1.2.5M12.1 14.5c.3.3.7.5 1.2.5s.9-.2 1.2-.5" />
        <circle cx="9.5" cy="11.5" r="1" fill="#00c853" />
        <circle cx="14.5" cy="11.5" r="1" fill="#00c853" />
      </svg>
    );
  }
  if (icon === "custom/microservices") {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="15" width="6" height="6" rx="1" />
        <path d="M9 6h6M6 9v6M18 9v6" />
      </svg>
    );
  }
  if (icon === "custom/eureka") {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e50914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <circle cx="11" cy="11" r="3" fill="#e50914" opacity="0.3" />
      </svg>
    );
  }
  if (icon === "custom/jpa") {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f0932b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }
  if (icon === "custom/apis") {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0abde3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    );
  }
  if (icon === "custom/cicd") {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2ed573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c-2-2.67-4.5-4-7.5-4C2.5 8 1 9.5 1 12s1.5 4 3.5 4c3 0 5.5-1.33 7.5-4 2 2.67 4.5 4 7.5 4 2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4c-3 0-5.5 1.33-7.5 4z" />
      </svg>
    );
  }
  if (icon === "custom/mockito") {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e056fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="8" height="8" rx="1" />
        <rect x="14" y="14" width="8" height="8" rx="1" strokeDasharray="3 3" />
        <path d="M10 6h4M6 10v4" strokeDasharray="3 3" />
      </svg>
    );
  }

  const url = `https://cdn.simpleicons.org/${icon}`;
  return (
    <img 
      src={url} 
      alt={`${name} icon`} 
      className="w-8 h-8 object-contain"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        const parent = e.currentTarget.parentElement;
        if (parent) {
          const fallbackSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          fallbackSvg.setAttribute("width", "28");
          fallbackSvg.setAttribute("height", "28");
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

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("languages");
  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <section id="skills" className="relative w-full py-24 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col items-center gap-12 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-white tracking-wide uppercase"
          >
            Skills
          </motion.h2>
        </div>

        {/* Tab Bar Container */}
        <div className="w-full flex justify-center pb-4">
          <div className="flex flex-wrap justify-center items-center bg-white/5 border border-white/10 rounded-3xl p-1.5 backdrop-blur-md gap-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full font-tag text-xs tracking-wider transition-colors duration-300 select-none cursor-pointer ${
                    isActive ? "text-black font-bold z-10" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {/* Sliding Tab Highlight */}
                  {isActive && (
                    <motion.span
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-white border border-white/20 rounded-full -z-10 shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="text-base">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Skills Panel Card */}
        <div className="w-full max-w-4xl min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full"
            >
              <GlassCard className="w-full flex flex-col gap-6" hoverEffect={false}>
                {/* Active Panel Name Header */}
                <h3 className="font-tag text-xl font-bold text-white tracking-wider border-b border-white/5 pb-4 uppercase">
                  {currentTab.label}
                </h3>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
                  {currentTab.skills.map((skill, sIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: sIdx * 0.05, ease: "easeOut" }}
                      whileHover={{ y: -4 }}
                      className="glass-panel !p-6 flex flex-col items-center justify-center gap-4 text-center cursor-default"
                    >
                      {/* Circular glass badge icon */}
                      <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                        <SkillIcon icon={skill.icon} name={skill.name} />
                      </div>

                      {/* Skill Name */}
                      <span className="font-tag text-sm sm:text-base text-white font-bold tracking-wide">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

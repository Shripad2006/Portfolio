"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";
import GlassCard from "./GlassCard";

const achievements = [
  {
    title: "1st Prize — Frontend Development",
    event: "BMIT UI/UX Competition, 2026",
    icon: Medal,
    link: "/gallery#ui-ux-design"
  },
  {
    title: "Participant",
    event: "SVERI Hackathon, 2026",
    icon: Trophy,
    link: "/gallery#sveri-2025"
  },
  {
    title: "Participant",
    event: "Fabtech Hackathon, 2026",
    icon: Trophy,
    link: "/gallery#fabtech-hackathon"
  },
  {
    title: "Participant",
    event: "Sinhagad Hackathon, 2025",
    icon: Trophy,
    link: "/gallery"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full py-24 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col items-center gap-12 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide uppercase"
          >
            ACHIEVEMENTS
          </motion.h2>
        </div>

        {/* Trophy Shelf */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            const isParticipant = achievement.title === "Participant";
            return (
              <Link href={achievement.link} key={idx} className="block group">
                <GlassCard 
                  delay={idx * 0.1} 
                  className="flex items-center gap-4 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] cursor-pointer transition-all duration-300"
                >
                  <div className="p-4 rounded-full bg-white/5 border border-white/10 text-zinc-300 group-hover:bg-white/10 group-hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <Icon size={32} />
                  </div>
                  <div className="flex flex-col gap-1">
                    {isParticipant ? (
                      <>
                        <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wide group-hover:text-white transition-colors">
                          {achievement.event}
                        </h3>
                        <span className="font-body text-xs sm:text-sm text-zinc-400 font-semibold tracking-wide group-hover:text-zinc-300 transition-colors">
                          {achievement.title}
                        </span>
                      </>
                    ) : (
                      <>
                        <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wide group-hover:text-white transition-colors">
                          {achievement.title}
                        </h3>
                        <span className="font-body text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                          {achievement.event}
                        </span>
                      </>
                    )}
                  </div>
                </GlassCard>
              </Link>
            );
          })}
        </div>

        {/* Coding Profiles - Centered LeetCode Card */}
        <div className="w-full max-w-2xl mt-4">
          <GlassCard 
            delay={0.4} 
            className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left border-zinc-200/15 shadow-[0_0_25px_rgba(255,255,255,0.06)] hover:border-zinc-200/30 transition-all duration-300"
          >
            {/* Clickable External Icon Link */}
            <a 
              href="https://leetcode.com/u/Shripad_Katta/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

            {/* LeetCode SVG Logo */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner">
              <img 
                src="https://cdn.simpleicons.org/leetcode" 
                alt="LeetCode logo" 
                className="w-10 h-10 object-contain" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-tag text-lg font-bold text-white tracking-wider uppercase">LeetCode Profile</h3>
              <p className="font-body text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Consistent problem solver focused on Data Structures & Algorithms.
              </p>
              
              <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Problems Solved count (commented placeholders) */}
                <div className="inline-flex items-center justify-center sm:justify-start">
                  <span className="px-3.5 py-1.5 font-mono-accent text-sm font-bold text-white bg-white/5 border border-white/10 rounded shadow-sm">
                    — Problems Solved {/* [ ] Problems solved count placeholder */}
                  </span>
                </div>

                {/* Focus Tags */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="px-2.5 py-1 text-xs font-tag font-semibold text-zinc-300 bg-white/5 border border-white/10 rounded-full uppercase tracking-wider">
                    Java
                  </span>
                  <span className="px-2.5 py-1 text-xs font-tag font-semibold text-zinc-300 bg-white/5 border border-white/10 rounded-full uppercase tracking-wider">
                    DSA
                  </span>
                  <span className="px-2.5 py-1 text-xs font-tag font-semibold text-zinc-300 bg-white/5 border border-white/10 rounded-full uppercase tracking-wider">
                    Problem Solving
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
}

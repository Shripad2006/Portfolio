"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { InstagramIcon } from "./ui/Icons";
import GlassCard from "./GlassCard";

const mockReels = [
  { id: 1, videoSrc: "/gallary/content%20creation/day2.mp4" },
  { id: 2, videoSrc: "/gallary/content%20creation/Day%205.mp4" },
  { id: 3, videoSrc: "/gallary/content%20creation/day%207.mp4" },
];

function ReelVideo({ src, id }: { src: string; id: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log("Reel play failed", err));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer border border-white/10"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        loop
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 bg-zinc-950"
      />
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
          <Play className="text-white opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" size={24} fill="currentColor" />
        </div>
      )}
    </motion.div>
  );
}

export default function ContentCreation() {
  return (
    <section id="journey" className="relative w-full py-24 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col items-center gap-12 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide uppercase"
          >
            THE JOURNEY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Documenting my dev journey, one post at a time.
          </motion.p>
        </div>

        {/* Instagram Profile Mockup */}
        <GlassCard className="w-full max-w-2xl flex flex-col gap-6" delay={0.2} hoverEffect={false}>
          {/* Profile Header */}
          <div className="flex items-center gap-6">
            {/* Profile Pic with Instagram Story Ring */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[3px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex-shrink-0 shadow-[0_0_15px_rgba(238,42,123,0.35)]">
              <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-black bg-zinc-900 relative">
                <Image
                  src="/gallary/instaDP.jpeg"
                  alt="@spyder_shree"
                  fill
                  sizes="96px"
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col gap-1">
              <h3 className="font-tag text-lg sm:text-xl font-bold text-white flex items-center gap-2 tracking-wide">
                @spyder_shree
                <span className="text-zinc-400 bg-white/5 p-0.5 rounded-full" title="Verified (Mock)">
                  <CheckBadge />
                </span>
              </h3>
              
              <div className="flex items-center gap-4 text-xs sm:text-sm font-tag text-zinc-300 mt-1 tracking-wider">
                <div className="flex flex-col items-center sm:block">
                  <span className="font-mono-accent text-sm font-bold text-white">77</span> <span className="text-zinc-500 font-body text-xs">posts</span>
                </div>
                <div className="flex flex-col items-center sm:block">
                  <span className="font-mono-accent text-sm font-bold text-white">434</span> <span className="text-zinc-500 font-body text-xs">followers</span>
                </div>
                <div className="flex flex-col items-center sm:block">
                  <span className="font-mono-accent text-sm font-bold text-white">41</span> <span className="text-zinc-500 font-body text-xs">following</span>
                </div>
              </div>
              
              {/* Bio Details */}
              <div className="hidden sm:flex flex-col mt-2">
                <p className="text-sm font-body font-semibold text-white">Shripad Katta</p>
                <p className="text-xs text-zinc-500 font-body mt-0.5">Education</p>
                <p className="text-xs sm:text-sm font-body text-zinc-300 mt-1.5 italic leading-relaxed">
                  "not there yet. but moving..." —{" "}
                  <a 
                    href="https://www.instagram.com/shripad_katta" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline not-italic"
                  >
                    @shripad_katta
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Mobile Bio Details */}
          <div className="sm:hidden flex flex-col mt-1">
            <p className="text-sm font-body font-semibold text-white">Shripad Katta</p>
            <p className="text-xs text-zinc-500 font-body mt-0.5">Education</p>
            <p className="text-xs font-body text-zinc-300 mt-1.5 italic leading-relaxed">
              "not there yet. but moving..." —{" "}
              <a 
                href="https://www.instagram.com/shripad_katta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline not-italic"
              >
                @shripad_katta
              </a>
            </p>
          </div>

          {/* Reels Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-2">
            {mockReels.map((reel) => (
              <ReelVideo key={reel.id} src={reel.videoSrc} id={reel.id} />
            ))}
          </div>

          {/* Follow CTA */}
          <div className="flex justify-center mt-4">
            <a
              href="https://www.instagram.com/spyder_shree"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 rounded-full font-tag text-base font-bold text-zinc-300 bg-white/5 border border-white/15 hover:border-white hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            >
              <InstagramIcon size={18} />
              Follow on Instagram
              <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </GlassCard>

      </div>
    </section>
  );
}

function CheckBadge() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

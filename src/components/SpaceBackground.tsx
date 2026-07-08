"use client";

import React, { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Detect media query for reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = motionQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    motionQuery.addEventListener("change", handleMotionChange);

    // Setup canvas size
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Track scroll offset for subtle parallax drift
    let scrollYOffset = 0;
    const handleScroll = () => {
      scrollYOffset = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Track tab visibility to optimize performance
    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Starfield Setup
    interface Star {
      x: number;
      y: number;
      size: number;
      twinkleSpeed: number;
      phase: number;
      maxOpacity: number;
    }
    const stars: Star[] = [];
    const numStars = prefersReducedMotion ? 100 : 220;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() < 0.1 ? 2.5 : Math.random() < 0.4 ? 1.5 : 0.8,
        twinkleSpeed: 0.005 + Math.random() * 0.015,
        phase: Math.random() * Math.PI * 2,
        maxOpacity: 0.2 + Math.random() * 0.6,
      });
    }

    // Nebula Setup
    interface Nebula {
      baseX: number;
      baseY: number;
      radius: number;
      color: string;
      phase: number;
      pulseSpeed: number;
    }
    const nebulas: Nebula[] = [
      {
        baseX: 0.15,
        baseY: 0.25,
        radius: 380,
        color: "rgba(192, 192, 192, 0.03)", // silver-white
        phase: 0,
        pulseSpeed: 0.0003,
      },
      {
        baseX: 0.85,
        baseY: 0.75,
        radius: 460,
        color: "rgba(160, 180, 200, 0.02)", // silver-blue-gray
        phase: Math.PI,
        pulseSpeed: 0.00025,
      },
    ];

    // Blackhole Accretion Disk Rotation
    let blackholeRotation = 0;

    // Shooting Star Setup
    interface ShootingStar {
      x: number;
      y: number;
      dx: number;
      dy: number;
      length: number;
      speed: number;
      opacity: number;
      active: boolean;
    }
    let shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
      length: 0,
      speed: 0,
      opacity: 0,
      active: false,
    };

    let lastShootingStarTime = Date.now();

    const triggerShootingStar = () => {
      shootingStar = {
        x: Math.random() * width * 0.7,
        y: Math.random() * height * 0.3,
        dx: 4 + Math.random() * 4,
        dy: 2 + Math.random() * 2,
        length: 70 + Math.random() * 80,
        speed: 10 + Math.random() * 8,
        opacity: 0.8,
        active: true,
      };
      lastShootingStarTime = Date.now();
    };

    // Main animation loop
    let animationFrameId: number;

    const tick = () => {
      if (!isTabVisible) {
        animationFrameId = requestAnimationFrame(tick);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Deep base navy-black gradient (background)
      const baseGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      baseGrad.addColorStop(0, "#010102"); // extremely faint navy-black
      baseGrad.addColorStop(0.5, "#000000");
      baseGrad.addColorStop(1, "#000000");
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Nebula Wisps
      nebulas.forEach((nebula) => {
        const x = nebula.baseX * width;
        const y = nebula.baseY * height - scrollYOffset * 0.08; // slow parallax

        // breathing scale pulse
        if (!prefersReducedMotion) {
          nebula.phase += nebula.pulseSpeed;
        }
        const pulse = 1 + Math.sin(nebula.phase) * 0.05;
        const radius = nebula.radius * pulse;

        const grad = ctx.createRadialGradient(x, y, 10, x, y, radius);
        grad.addColorStop(0, nebula.color);
        grad.addColorStop(0.5, "rgba(100, 100, 100, 0.02)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Draw Stars with Parallax and Twinkle
      stars.forEach((star) => {
        // Calculate parallax drift
        const parallaxY = (scrollYOffset * 0.12 * (star.size / 2)) % height;
        let y = (star.y * height - parallaxY + height) % height;
        let x = star.x * width;

        // Twinkle factor
        let opacity = star.maxOpacity;
        if (!prefersReducedMotion) {
          star.phase += star.twinkleSpeed;
          opacity = (Math.sin(star.phase) + 1) / 2 * star.maxOpacity;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Draw Shooting Star (ambient detail)
      if (!prefersReducedMotion) {
        // Random check to spawn
        if (!shootingStar.active && Date.now() - lastShootingStarTime > 15000) {
          if (Math.random() < 0.001) {
            triggerShootingStar();
          }
        }

        if (shootingStar.active) {
          shootingStar.x += shootingStar.dx;
          shootingStar.y += shootingStar.dy;
          shootingStar.opacity -= 0.015;

          if (shootingStar.opacity <= 0 || shootingStar.x > width || shootingStar.y > height) {
            shootingStar.active = false;
          } else {
            const grad = ctx.createLinearGradient(
              shootingStar.x,
              shootingStar.y,
              shootingStar.x - shootingStar.length,
              shootingStar.y - (shootingStar.length * shootingStar.dy) / shootingStar.dx
            );
            grad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
            grad.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(shootingStar.x, shootingStar.y);
            ctx.lineTo(
              shootingStar.x - shootingStar.length,
              shootingStar.y - (shootingStar.length * shootingStar.dy) / shootingStar.dx
            );
            ctx.stroke();
          }
        }
      }

      // 5. Draw Blackhole/Wormhole (placed top-left, 180, 180 to avoid widgets)
      const bhX = 185;
      const bhY = 185 - scrollYOffset * 0.04; // parallax scroll offset
      
      // Only render if within viewport
      if (bhY + 150 > 0 && bhY - 150 < height) {
        ctx.save();
        ctx.translate(bhX, bhY);

        // Core glow
        const glow = ctx.createRadialGradient(0, 0, 15, 0, 0, 100);
        glow.addColorStop(0, "rgba(255, 255, 255, 0.12)");
        glow.addColorStop(0.3, "rgba(200, 200, 200, 0.04)");
        glow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(0, 0, 100, 0, Math.PI * 2);
        ctx.fill();

        // Accretion disk rings
        if (!prefersReducedMotion) {
          blackholeRotation += 0.0007; // 60s+ full rotation
        }
        ctx.rotate(blackholeRotation);
        
        for (let j = 0; j < 5; j++) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(230, 230, 230, ${0.055 - j * 0.008})`;
          ctx.lineWidth = 0.8 + j * 0.4;
          // draw tilted ellipses to make a 3D accretion disk perspective
          ctx.ellipse(0, 0, 45 + j * 11, 15 + j * 3, -Math.PI / 6, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Singularity center
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, Math.PI * 2);
        ctx.fill();

        // Event Horizon edge glow line
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(0, 0, 20.5, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionQuery.removeEventListener("change", handleMotionChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{ mixBlendMode: "screen", display: "block" }}
    />
  );
}

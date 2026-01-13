'use client';

import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Linkedin, Twitter, Share2, Video } from "lucide-react";

// Using Lucide components directly in the array
const BRANDS = [
  { icon: <Instagram size={32} />, color: "#E1306C" },
  { icon: <Facebook size={32} />, color: "#1877F2" },
  { icon: <Youtube size={32} />, color: "#FF0000" },
  { icon: <Linkedin size={32} />, color: "#0A66C2" },
  { icon: <Twitter size={32} />, color: "#1DA1F2" },
  { icon: <Share2 size={32} />, color: "#22C55E" },
  { icon: <Video size={32} />, color: "#F59E0B" },
];

const STATS = [
  { value: "1M+", label: "viral videos generated" },
  { value: "500k+", label: "editing hours saved" },
  { value: "300%", label: "average engagement lift" },
  { value: "30+", label: "languages supported" },
];

export default function IntegrationsSection() {
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<string[]>([]);

  useLayoutEffect(() => {
    const updatePaths = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const centerX = containerRect.width / 2;

      const newPaths = iconRefs.current.map((el) => {
        if (!el) return "";

        const rect = el.getBoundingClientRect();
        const startX = rect.left - containerRect.left + rect.width / 2;

        return `
        M ${startX} 0
        C ${startX} 180
          ${centerX} 120
          ${centerX} 300
      `;
      });

      setPaths(newPaths);
    };

    updatePaths();
    window.addEventListener("resize", updatePaths);
    return () => window.removeEventListener("resize", updatePaths);
  }, []);

  return (
    <section className="bg-white w-full max-w-[100vw] mx-auto py-28 overflow-hidden px-0 md:px-0">
      <div className="w-full max-w-[100vw] mx-auto px-4 md:px-6 overflow-hidden">

        {/* HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-24 px-4"
        >
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight break-words">
            Distribute your reels everywhere instantly
          </h2>
        </motion.div>

        {/* VISUAL */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center min-h-[500px] md:min-h-[820px] mb-36 overflow-hidden max-w-full w-full"
        >

          {/* ICON ROW */}
          <div className="absolute top-0 flex flex-nowrap gap-2 md:gap-14 px-1 md:px-4 w-full justify-center transform scale-75 md:scale-100 origin-top">
            {BRANDS.map((b, i) => (
              <span
                key={i}
                ref={(el) => { iconRefs.current[i] = el; }}
                className="text-black flex items-center justify-center bg-white p-3 rounded-full shadow-sm z-20 flex-shrink-0"
              >
                {b.icon}
              </span>
            ))}
          </div>

          {/* SVG ANIMATED LINES */}
          <svg
            className="absolute top-10 w-full h-[320px] pointer-events-none"
            fill="none"
          >
            <defs>
              {BRANDS.map((b, i) => (
                <linearGradient
                  key={i}
                  id={`grad-${i}`}
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="300"
                >
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor={b.color} />
                  <stop offset="100%" stopColor="transparent" />

                  {/* Ping-pong animation */}
                  <animate
                    attributeName="y1"
                    values="-300;300;-300"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y2"
                    values="0;600;0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </linearGradient>
              ))}
            </defs>

            {paths.map((d, i) => (
              <path
                key={i}
                d={d}
                stroke={`url(#grad-${i})`}
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ))}
          </svg>

          {/* CENTER IMAGE */}
          <motion.img
            src="https://framerusercontent.com/images/CYeh8KtNSfRChnrkpljZzWBO4.webp"
            alt="Content Intelligence"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              relative z-10
              w-[80vw]
              max-w-[360px]
              md:w-[420px]
              lg:w-[480px]
              xl:w-[520px]
              drop-shadow-2xl
            "
          />
        </motion.div>

        {/* SUB HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h3 className="text-2xl md:text-3xl font-medium text-[#1D1D1F]">
            One click to rule every platform.
          </h3>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {STATS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
                {item.value}
              </p>
              <p className="text-gray-500 text-sm md:text-base max-w-[200px] mx-auto">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section >
  );
}

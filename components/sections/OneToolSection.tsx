"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  {
    title: "Viral-ready templates",
    holo: true,
    others: [false, false, false],
  },
  {
    title: "Auto-branding & Captions",
    holo: true,
    others: [true, false, false],
  },
  {
    title: "Generates in seconds",
    holo: true,
    others: [false, false, false],
  },
  {
    title: "No editing skills needed",
    holo: true,
    others: [true, false, true],
  },
  {
    title: "Auto-Translation",
    holo: true,
    others: [false, false, false],
  },
];

export default function OneToolSection() {
  return (
    <section className="bg-white py-28 overflow-hidden w-full max-w-[100vw]">
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Heading */}
        <div className="text-center mb-20 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-[52px] font-semibold text-[#1D1D1F] leading-tight"
          >
            Stop paying for expensive editors
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-lg md:text-xl text-gray-500"
          >
            Generate unlimited video ads for one flat monthly fee.
          </motion.p>
        </div>

        {/* Comparison Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            w-full
            max-w-[100vw]
            md:max-w-[1200px]
            rounded-[24px] md:rounded-[32px]
            bg-white
            shadow-[0_30px_60px_-10px_rgba(0,0,0,0.08)]
            overflow-hidden
            mx-auto
          "
        >
          <div className="w-full overflow-x-auto">
            <div className="px-4 py-8 md:px-10 md:py-12 min-w-[700px]">
              <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center gap-1">

                {/* Header Row */}
                <div />

                <HeaderLogo
                  src="https://framerusercontent.com/images/k8Z9YR5W8ar7eKs6C8ylcZ5jwFY.png"
                  size="h-8 md:h-12"
                  opacity="opacity-80"
                />

                <HeaderLogo
                  src="https://framerusercontent.com/images/yY9pNxu0qpUr4niCLBCBcK6M0c.png"
                  size="h-5 md:h-7"
                  opacity="opacity-80"
                />

                <HeaderLogo
                  src="https://framerusercontent.com/images/qfpwTgf9Tt70RobBBWrrhF9cRCc.webp"
                  size="h-5 md:h-7"
                  opacity="opacity-80"
                />

                <HeaderLogo
                  src="https://framerusercontent.com/images/vSg08TS5xbEVFX0Ql5O2HlF8pQM.png"
                  size="h-5 md:h-7"
                  opacity="opacity-80"
                />

                {/* Feature Rows */}
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="contents border-b border-gray-100 last:border-0"
                  >
                    <div className="py-4 md:py-7 text-[12px] md:text-[15px] font-medium text-[#6E6E73] leading-tight">
                      {item.title}
                    </div>

                    <Cell value={item.holo} />

                    {item.others.map((v, i) => (
                      <Cell key={i} value={v} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Components ---------------- */

function HeaderLogo({
  src,
  size,
  opacity = "opacity-100",
}: {
  src: string;
  size: string;
  opacity?: string;
}) {
  return (
    <div className="flex justify-center items-center pb-6 md:pb-12">
      <img
        src={src}
        className={`${size} w-auto ${opacity}`}
        alt=""
      />
    </div>
  );
}

function Cell({ value }: { value: boolean }) {
  return (
    <div className="flex justify-center items-center py-7">
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center ${value ? "bg-green-500" : "bg-red-500"
          }`}
      >
        {value ? (
          <Check size={14} strokeWidth={3} className="text-white" />
        ) : (
          <X size={14} strokeWidth={3} className="text-white" />
        )}
      </div>
    </div>
  );
}

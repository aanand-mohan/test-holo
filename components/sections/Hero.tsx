"use client";

import Image from "next/image";
import CanvasImage from "@/components/ui/CanvasImage";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Hero() {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <section className="relative flex flex-col items-center justify-start pt-32 pb-20 px-4 max-w-7xl mx-auto text-center z-10">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none -z-10 bg-[#FFFFFF]"></div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center w-full"
            >
                {/* 1. Eyebrow Badge */}
                <motion.div variants={fadeInUp} className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-gray-100">
                    <span className="text-xs font-bold uppercase tracking-wide">
                        <span className="text-purple-600">AI Video </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">Generator</span>
                    </span>
                </motion.div>

                {/* 2. Headlines */}
                <motion.h1 variants={fadeInUp} className="text-4xl md:text-[68px] font-[900] leading-[1.05] tracking-tight text-[#1D1D1F] max-w-4xl mb-6">
                    Generate Viral Reels. <br className="hidden md:block" />
                    In Seconds.
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg md:text-[28px] font-medium text-[#6E6E73] max-w-3xl leading-relaxed mb-12">
                    Turn text prompts into high-converting video ads for TikTok, Shorts, and Instagram. No video editing skills required.
                </motion.p>

                {/* 3. CTA Button */}
                <motion.div variants={fadeInUp} className="group relative rounded-full p-[3px] bg-[linear-gradient(104deg,#3e86c6_0%,#a666aa_22%,#ec4492_50%,#ee4454_76%,#f05427_100%)] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-16">
                    <div className="bg-transparent rounded-full">
                        <Link href="#" className="block px-8 py-4 text-lg font-bold text-white flex items-center gap-2">
                            Start Generating
                            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 11L11 1M11 1H1M11 1V11" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>

                {/* 4. Trust Badges */}
                <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 opacity-90 transition-all duration-500">
                    <div className="flex items-center gap-3 text-left">
                        <div className="w-8 h-8 relative flex-shrink-0">
                            <CanvasImage src="/images/framer-logo.png" alt="Framer" width={32} height={32} className="object-contain w-8 h-8" intensity={0.5} />
                        </div>
                        <div className="flex flex-col text-xs font-semibold text-gray-500 leading-tight">
                            <span className="block text-gray-800">Trusted by Creators</span>
                            <div className="flex items-center gap-1">
                                <span className="text-gray-400">10k+ videos made</span>
                                <Image src="/images/sparkle.svg" alt="" width={10} height={10} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-left">
                        <div className="w-8 h-8 relative flex-shrink-0">
                            <CanvasImage src="/images/openai-logo.png" alt="OpenAI" width={32} height={32} className="object-contain w-8 h-8" intensity={0.5} />
                        </div>
                        <div className="flex flex-col text-xs font-semibold text-gray-500 leading-tight">
                            <span className="block text-gray-800">Next-Gen AI Models</span>
                            <div className="flex items-center gap-1">
                                <span className="text-gray-400">Leading AI model</span>
                                <Image src="/images/sparkle.svg" alt="" width={10} height={10} />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 5. Main Visual (Holo Bot) */}
                <motion.div variants={fadeInUp} className="relative w-full max-w-[800px] flex justify-center">

                    {/* Ground shadow */}
                    <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[60%] h-[36px] bg-black/5 blur-2xl rounded-[100%] -z-10"></div>

                    {/* VIDEO */}
                    <video
                        src="/videos/hero-visual.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="
                object-contain w-full h-auto
                filter
                saturate-[1.4]
                contrast-[1.18]
            "
                    />
                </motion.div>

                {/* 6. Customer Rating Section */}
                <motion.div variants={fadeInUp} className="mt-[-20px] md:mt-[-40px] z-20 flex items-center gap-3 bg-transparent px-4 py-2">
                    <div className="flex -space-x-2">
                        <CanvasImage src="/images/avatar1.png" alt="" width={24} height={24} className="w-6 h-6 rounded-full border border-white" intensity={0.5} />
                        <CanvasImage src="/images/avatar2.jpg" alt="" width={24} height={24} className="w-6 h-6 rounded-full border border-white" intensity={0.5} />
                        <CanvasImage src="/images/avatar3.jpg" alt="" width={24} height={24} className="w-6 h-6 rounded-full border border-white" intensity={0.5} />
                        <CanvasImage src="/images/avatar4.png" alt="" width={24} height={24} className="w-6 h-6 rounded-full border border-white" intensity={0.5} />
                    </div>
                    <div className="text-xs font-medium text-gray-600">
                        <span className="font-bold text-black">4.9/5</span> from 4268 customers
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}

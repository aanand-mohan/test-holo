"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import CanvasImage from "@/components/ui/CanvasImage";
import { motion } from "framer-motion";

export default function WorkShowcase() {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            if (scrollerRef.current) {
                scrollerRef.current.setAttribute("data-animated", "true");
                // Clone for infinite loop
                const scrollerInner = scrollerRef.current.querySelector(".scroller__inner");
                if (scrollerInner) {
                    // If we haven't cloned yet (check children count roughly)
                    if (scrollerInner.children.length < 10) {
                        const scrollerContent = Array.from(scrollerInner.children);
                        scrollerContent.forEach((item) => {
                            const duplicatedItem = item.cloneNode(true);
                            (duplicatedItem as HTMLElement).setAttribute("aria-hidden", "true");
                            scrollerInner.appendChild(duplicatedItem);
                        });
                    }
                }
            }
        }
    }, []);

    const items = [
        { type: "image", src: "https://placehold.co/360x480/2563eb/ffffff/png?text=Fitness+Ad" },
        { type: "image", src: "https://placehold.co/360x480/db2777/ffffff/png?text=Tech+Review" },
        { type: "image", src: "https://placehold.co/360x480/16a34a/ffffff/png?text=Food+Recipe" },
        { type: "image", src: "https://placehold.co/360x480/ca8a04/ffffff/png?text=SaaS+Demo" },
        { type: "image", src: "https://placehold.co/360x480/9333ea/ffffff/png?text=Fashion+Haul" },
        { type: "image", src: "https://placehold.co/360x480/dc2626/ffffff/png?text=Travel+Vlog" },
        { type: "image", src: "https://placehold.co/360x480/0891b2/ffffff/png?text=UGC+Content" },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden w-full max-w-[100vw]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 px-4"
            >
                <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] max-w-4xl mx-auto">
                    Viral content generated 100% by AI. <br />
                    <span className="text-gray-400">Indistinguishable from human editing.</span>
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                ref={scrollerRef}
                className="scroller w-full md:w-[100%] mx-auto"
            >
                <div className="scroller__inner flex gap-8 py-4 w-max flex-nowrap animate-scroll">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative w-[80vw] max-w-[300px] h-[400px] md:w-[360px] md:h-[480px] flex-shrink-0 bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            {item.type === "video" ? (
                                <video
                                    src={item.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="relative w-full h-full">
                                    <CanvasImage
                                        src={item.src}
                                        alt="Work showcase"
                                        className="w-full h-full object-cover"
                                        width={360} // Pass explicit dimensions for canvas resolution
                                        height={480}
                                        intensity={2}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>

            <style jsx>{`
        .scroller[data-animated="true"] {
          overflow: hidden;
          mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
        }
        .scroller[data-animated="true"] .scroller__inner {
          width: max-content;
          flex-wrap: nowrap;
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 1rem));
          }
        }
      `}</style>
        </section>
    );
}

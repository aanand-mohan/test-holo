"use client";

import { useRef, useEffect, useState } from 'react';

const ScrollRevealBlock = ({ children }: { children: React.ReactNode }) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(0.2);

    useEffect(() => {
        const handleScroll = () => {
            if (!elementRef.current) return;
            const rect = elementRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate how far the element is from the center of the viewport
            // 0 means it's centered, 1 means it's at the edge
            // We want it to be fully opaque (1) when valid, and faded (0.2) when not.

            // Simple logic: If it's in the "active zone" (e.g., 30% to 70% of screen height) opacity = 1.
            const elementCenter = rect.top + rect.height / 2;
            const screenCenter = windowHeight / 2;
            const dist = Math.abs(elementCenter - screenCenter);
            const activeZone = windowHeight / 3.5; // Zone where it stays fully opaque
            const maxDist = windowHeight / 1.5; // Max fade distance

            let newOpacity = 0.2;

            if (dist < activeZone) {
                newOpacity = 1;
            } else {
                // Fade out linearly from activeZone to maxDist
                const fadeProgress = (dist - activeZone) / (maxDist - activeZone);
                newOpacity = 1 - fadeProgress;
            }

            // Clamp values
            if (newOpacity < 0.2) newOpacity = 0.2;
            if (newOpacity > 1) newOpacity = 1;

            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={elementRef}
            className="transition-opacity duration-300 ease-out my-12"
            style={{ opacity: opacity }}
        >
            {children}
        </div>
    );
};

export default function Manifesto() {
    return (
        <section className="relative py-32 px-4 bg-white overflow-hidden min-h-[100vh] flex flex-col justify-center">
            <div className="max-w-[800px] mx-auto text-left md:text-center">

                <ScrollRevealBlock>
                    <h2 className="text-[32px] md:text-[56px] font-bold leading-[1.2] text-[#1D1D1F] tracking-tight">
                        At Holo we're revolutionizing how founders create
                        <span className="inline-flex items-center justify-center w-12 h-12 md:w-20 md:h-20 mx-3 align-middle translate-y-[-8px]">
                            <video
                                src="/videos/icon-bulb.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-contain"
                            />
                        </span>
                        video ads.
                    </h2>
                </ScrollRevealBlock>

                <ScrollRevealBlock>
                    <h2 className="text-[32px] md:text-[56px] font-bold leading-[1.2] text-[#1D1D1F] tracking-tight">
                        Using the latest AI models we turn simple text into
                        <span className="inline-flex items-center justify-center w-12 h-12 md:w-20 md:h-20 mx-3 align-middle translate-y-[-8px]">
                            <video
                                src="/videos/icon-yarn.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-contain"
                            />
                        </span>
                        agency-quality video reels for all
                        <span className="inline-flex items-center justify-center w-12 h-12 md:w-20 md:h-20 mx-3 align-middle translate-y-[-8px]">
                            <video
                                src="/videos/icon-music.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-contain"
                            />
                        </span>
                        platforms.
                    </h2>
                </ScrollRevealBlock>

                <ScrollRevealBlock>
                    <h2 className="text-[32px] md:text-[56px] font-bold leading-[1.2] text-[#1D1D1F] tracking-tight">
                        So you can scale your creative output
                        <span className="inline-flex items-center justify-center w-12 h-12 md:w-20 md:h-20 mx-3 align-middle translate-y-[-8px]">
                            <video
                                src="/videos/icon-users.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-contain"
                            />
                        </span>
                        without hiring a video team.
                    </h2>
                </ScrollRevealBlock>

            </div>

            {/* Decorative elements - faint glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-50/50 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

            {/* Mascot - Bottom Right */}
            <div className="absolute bottom-[-50px] right-[-50px] md:bottom-[-20px] md:right-[-20px] w-64 h-64 md:w-96 md:h-96 pointer-events-none -z-10 opacity-50 md:opacity-100">
                <video
                    src="/videos/hero-visual.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                />
            </div>
        </section>
    );
}

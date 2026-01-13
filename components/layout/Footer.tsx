"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white pt-24 pb-16 px-6 md:px-12 lg:px-16 w-full max-w-[1200px] mx-auto">
            <div className="w-full">
                {/* Top section - Contact & Mystery Gift */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-24 md:mb-20">
                    {/* Left: Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <a
                            href="mailto:support@tryholo.ai"
                            className="text-[#1D1D1F] text-2xl md:text-3xl font-bold hover:opacity-80 transition-opacity block mb-3"
                        >
                            support@tryholo.ai
                        </a>
                        <p className="text-[#1D1D1F] text-base md:text-lg font-normal">
                            Let&apos;s talk video
                        </p>
                    </motion.div>

                    {/* Right: Mystery Gift CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:text-right flex flex-col items-start md:items-end"
                    >
                        <p className="text-[#1D1D1F] text-lg md:text-xl font-normal mb-5">
                            Want a mystery gift?
                        </p>
                        <button
                            className="group relative rounded-full px-8 py-3.5 text-white font-semibold text-base transition-transform hover:scale-105"
                            style={{
                                background: "linear-gradient(104deg, #3e86c6 0%, #a666aa 22%, #ec4492 50%, #ee4454 76%, #f05427 100%)",
                            }}
                        >
                            Yes please
                        </button>
                    </motion.div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20">
                    <div className="col-span-1">
                        <FooterColumn
                            title="Legal"
                            links={[
                                { label: "Refund policy", href: "/policies/refund" },
                                { label: "Privacy policy", href: "/policies/privacy" },
                                { label: "Terms of service", href: "/policies/terms-of-service" },
                            ]}
                        />
                    </div>

                    <div className="col-span-1">
                        <FooterColumn
                            title="Support"
                            links={[
                                { label: "Login", href: "/success-pages/login-info" },
                            ]}
                        />
                    </div>

                    <div className="col-span-1">
                        <FooterColumn
                            title="Company"
                            links={[
                                { label: "How it works", href: "/" },
                                { label: "Affiliate", href: "/affiliate" },
                                { label: "Meet the team", href: "/about-us" },
                            ]}
                        />
                    </div>

                    <div className="col-span-1">
                        <FooterColumn
                            title="Resources"
                            links={[
                                { label: "Blog", href: "/blog" },
                                { label: "Use cases", href: "/facebook-ad-maker" },
                            ]}
                        />
                    </div>

                    {/* Spacer to push social links to the right */}
                    <div className="hidden lg:block lg:col-span-1"></div>

                    {/* Social Links */}
                    <div className="col-span-1 flex flex-col gap-4">
                        <a
                            href="https://www.instagram.com/tryholo.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#1D1D1F] text-base font-normal hover:opacity-70 transition-opacity w-fit"
                        >
                            Instagram
                            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                                <path d="M1 11L11 1M11 1H3.5M11 1V8.5" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/holoai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#1D1D1F] text-base font-normal hover:opacity-70 transition-opacity w-fit"
                        >
                            LinkedIn
                            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                                <path d="M1 11L11 1M11 1H3.5M11 1V8.5" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8">
                    <p className="text-[#1D1D1F] text-base font-normal">
                        © 2025 All Rights Reserved
                    </p>
                    <div
                        className="text-[#1D1D1F]"
                        style={{
                            fontFamily:
                                '"Wonderkids Regular", "Wonderkids Regular Placeholder", sans-serif',
                            fontSize: "40px",
                            lineHeight: "36px",
                            letterSpacing: "-0.2px",
                            fontWeight: 400,
                            textAlign: "left",
                        }}
                    >
                        Holo
                    </div>

                </div>
            </div>
        </footer>
    );
}

/* ---------- helper ---------- */

function FooterColumn({
    title,
    links,
}: {
    title: string;
    links: { label: string; href: string }[];
}) {
    return (
        <div className="flex flex-col gap-5">
            <h4 className="text-[#1D1D1F] text-lg font-bold mb-1">{title}</h4>
            <ul className="flex flex-col gap-3.5">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="text-[#1D1D1F] text-base font-normal hover:opacity-70 transition-opacity"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

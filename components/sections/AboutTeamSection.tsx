"use client";

import { motion } from "framer-motion";

type TeamMember = {
    name: string;
    role: string;
    image: string;
};

const team: TeamMember[] = [
    {
        name: "Aleksandras Urbanavičius",
        role: "Co-Founder",
        image:
            "https://framerusercontent.com/images/kkdbaLlcNYBaLCzBHoMIK1te0Ys.png",
    },
    {
        name: "Deividas Kovger",
        role: "Co-Founder",
        image:
            "https://framerusercontent.com/images/LctHwlIJCwJQEjWAhC1tWAkR8.png",
    },
    {
        name: "Karolis Vaiginis",
        role: "Lead Designer",
        image:
            "https://framerusercontent.com/images/nun0fnNoM3TSkYp05vV5sslH5w.png",
    },
    {
        name: "Arnas Puidokas",
        role: "CTO",
        image:
            "https://framerusercontent.com/images/Y7kR5WUxAMBOtPISP7xG0ZvWzA.png",
    },
];

export default function AboutTeamSection() {
    return (
        <section id="about" className="w-full bg-white py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-start">
                    {/* Team Stack (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-5"
                    >
                        {team.map((member, i) => {
                            const isEven = i % 2 === 0; // 0, 2 -> Left Image
                            return (
                                <div
                                    key={member.name}
                                    className={`bg-white rounded-[24px] p-6 flex items-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[130px] ${isEven ? "justify-end" : "justify-between"
                                        }`}
                                >
                                    <div className={`z-10 relative ${isEven ? "text-right" : "text-left"}`}>
                                        <h4 className="text-[17px] font-bold text-[#1D1D1F] mb-1">
                                            {member.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 font-medium">
                                            {member.role}
                                        </p>
                                    </div>

                                    {/* Image positioned absolute */}
                                    <div className={`h-[120%] w-auto absolute top-0 aspect-[3/4] ${isEven ? "left-0" : "right-0"}`}>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Story Card (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-[32px] p-10 md:p-14 border border-gray-100 shadow-sm h-full"
                    >
                        <h3 className="text-3xl md:text-[32px] font-bold text-[#1D1D1F] mb-8 leading-tight">
                            Hi! We’re the team behind Holo.
                        </h3>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-[17px]">
                            <p>Some of us started editing videos in high school.</p>
                            <p>Others were managing YouTube channels before we turned 21.</p>
                            <p>
                                We’ve always liked building things that grow. That’s
                                how we ended up working together.
                            </p>
                            <p>
                                Over the past few years, we helped scale channels for brands like Sintra,
                                Pulsetto, Burga, and Moerie. We were inside those companies,
                                producing content, editing reels, and setting up workflows.
                            </p>
                            <p className="text-[#1D1D1F] font-medium pt-2">
                                Now, we’re building the tool we always wished we had.
                            </p>
                            <p className="text-[#1D1D1F] font-medium">
                                Holo is the AI video team we learned we needed - turned into a platform that
                                helps founders move faster.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

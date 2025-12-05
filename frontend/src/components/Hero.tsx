import { motion } from "framer-motion"
import { TextFlipButton } from "@/components/TextFlipButton"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars"

export function Hero() {
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        // Start animation after a short delay
        const timer = setTimeout(() => {
            setIsExpanded(true)
        }, 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="relative min-h-screen overflow-hidden bg-black">
            {/* Stars Background Layer with reduced opacity */}
            <div className="absolute inset-0 opacity-30">
                <StarsBackground
                    factor={0.05}
                    speed={50}
                    starColor="#ffffff"
                    pointerEvents={true}
                    className="absolute inset-0"
                />
            </div>

            {/* Content Layer at full opacity */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-20">

                {/* Animated Badge */}
                <motion.div
                    layout
                    className="flex items-center gap-2 p-1 pl-1 pr-3 mb-8 bg-[#0D0D0D]/80 border border-[#222] rounded-[6px] backdrop-blur-sm overflow-hidden cursor-default"
                    initial={{ width: "auto" }}
                >
                    <motion.span
                        layout
                        className="bg-[#814AC8] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-[6px]"
                    >
                        New
                    </motion.span>

                    <motion.span
                        layout
                        initial={{ opacity: 0, width: 0, display: "none" }}
                        animate={isExpanded ? { opacity: 1, width: "auto", display: "block" } : { opacity: 0, width: 0, display: "none" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-sm text-gray-300 font-medium whitespace-nowrap"
                    >
                        Automated Lead Generation
                    </motion.span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl"
                >
                    Intelligent Automation for <br className="hidden md:block" />
                    Modern Businesses.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl"
                >
                    Xtract brings AI automation to your fingertips & streamline tasks.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <TextFlipButton
                        variant="primary"
                        hoverChildren={
                            <>
                                Get in touch
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </>
                        }
                        className="px-8 h-12 text-base"
                    >
                        Get in touch
                        <ArrowUpRight className="ml-2 w-4 h-4" />
                    </TextFlipButton>

                    <TextFlipButton
                        variant="outline"
                        className="px-8 h-12 text-base backdrop-blur-sm"
                    >
                        View services
                    </TextFlipButton>
                </motion.div>

            </div>
        </section>
    )
}

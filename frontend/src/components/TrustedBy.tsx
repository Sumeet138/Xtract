import { motion } from "framer-motion"

const logos = Array(6).fill(null).map((_, i) => (
    <svg key={i} width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hover:opacity-100 transition-opacity duration-300">
        <rect width="120" height="40" rx="8" fill="white" fillOpacity="0.1" />
        <path d="M30 20H90" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="6" fill="white" />
    </svg>
))

export function TrustedBy() {
    return (
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-10 max-w-2xl">
                <p className="text-sm md:text-base text-gray-400 font-medium">
                    Over 50+ business trust us
                </p>
            </div>


            <div className="relative flex w-full max-w-2xl mx-auto overflow-hidden">
                {/* Gradient Masks for fade effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                {/* Marquee Container */}
                <motion.div
                    className="flex items-center gap-16 whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60,
                    }}
                >
                    {/* Render logos twice for seamless loop */}
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            {logo}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

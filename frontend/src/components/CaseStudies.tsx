import { motion, useMotionValue, animate } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const cases = [
    {
        logo: "Logoipsum",
        headline: '"AI-driven forecasting cut inventory waste by 40% for TrailForge"',
        description: "TrailForge, a suitcase brand, faced stock issues and inefficiencies. Our AI forecasting optimized inventory and production cycles, helping them save costs and deliver faster.",
        impact: [
            "40% Less Inventory Waste",
            "35% Faster Production",
            "20% More Accurate Forecasting",
            "25% Faster Fulfillment"
        ]
    },
    {
        logo: "LOQO",
        headline: '"AI-powered workflows reduced error rate by 80% in daily operations"',
        description: "MedixChain, a healthcare logistics company, was dealing with frequent data errors and delays. We introduced AI validation and live tracking to improve accuracy and speed across their supply chain.",
        impact: [
            "80% Error reduction",
            "90% Accuracy in Data Logs",
            "30% Faster Delivery",
            "60+ Hours Saved"
        ]
    },
    {
        logo: "FinSolve",
        headline: '"Automating 50% of operations saved 20% in costs within 2 months"',
        description: "FinSolve, a financial services firm, was overloaded with repetitive admin tasks. By automating internal workflows and integrating data systems, they streamlined operations and reduced overhead.",
        impact: [
            "50% Operations Automated",
            "20% Cost Reduction",
            "70+ Hours Saved/Month",
            "2x Faster Client Onboarding"
        ]
    },
    {
        logo: "IPSUM",
        headline: '"AI integration helped ScaleByte close 3x more deals in less time"',
        description: "ScaleByte's sales team struggled with follow-up delays. Our AI sales assistant automated outreach, lead scoring, and CRM updates—resulting in faster responses and more closed deals.",
        impact: [
            "3x More Deals",
            "40% Faster Responses",
            "95% Lead Accuracy",
            "CRM Fully Synced"
        ]
    }
]

export function CaseStudies() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const x = useMotionValue(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cases.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cases.length) % cases.length)
    }

    interface DragInfo {
        offset: { x: number };
        velocity: { x: number };
    }

    const handleDragEnd = (_: unknown, info: DragInfo) => {
        const offset = info.offset.x
        const velocity = info.velocity.x
        const threshold = 50 // pixels to drag to trigger a slide change
        const swipeConfidenceThreshold = 10000 // velocity threshold for quick swipes

        if (offset < -threshold || velocity < -swipeConfidenceThreshold) {
            nextSlide()
        } else if (offset > threshold || velocity > swipeConfidenceThreshold) {
            prevSlide()
        }

        // Reset x to 0 after drag ends, so the current slide is centered
        animate(x, 0, { type: "spring", stiffness: 300, damping: 30 })
    }

    // Effect to reset x when currentIndex changes, ensuring the new slide is centered
    useEffect(() => {
        animate(x, 0, { type: "spring", stiffness: 300, damping: 30 })
    }, [currentIndex, x])

    return (
        <section className="py-24 px-4 relative z-10 bg-black">
            <div className="container mx-auto max-w-5xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1 rounded-[6px]">
                            Case Studies
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-semibold text-white mb-4 leading-[1.1] tracking-tight"
                    >
                        See How Smart AI Automation <br />
                        Transforms Businesses
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-base max-w-2xl mx-auto"
                    >
                        See how AI automation streamlines operations, boosts and drives growth.
                    </motion.p>
                </div>

                {/* Carousel */}
                <div className="relative" ref={containerRef}>
                    {/* Left Fade/Blur */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black via-black/50 to-transparent z-20 pointer-events-none backdrop-blur-[1px]" />

                    {/* Right Fade/Blur */}
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black via-black/50 to-transparent z-20 pointer-events-none backdrop-blur-[1px]" />

                    <div className="overflow-hidden">
                        <motion.div
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }} // Constrain drag to prevent scrolling past current item
                            dragElastic={0.7}
                            onDragEnd={handleDragEnd}
                            style={{ x }}
                            className="cursor-grab active:cursor-grabbing touch-pan-y"
                        >
                            <div className="grid md:grid-cols-2 gap-8 items-center min-h-[450px]">

                                {/* Left: Image Placeholder */}
                                <motion.div
                                    key={`image-${currentIndex}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative aspect-video md:h-[450px] w-full rounded-2xl overflow-hidden bg-[#0D0D0D] border border-white/10 flex items-center justify-center"
                                >
                                    <div className="text-gray-600 font-mono text-sm">
                                        [Image Placeholder]
                                    </div>
                                </motion.div>

                                {/* Right: Content */}
                                <motion.div
                                    key={`content-${currentIndex}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="space-y-6 md:pl-4"
                                >
                                    {/* Logo */}
                                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                                        <div className="w-5 h-5 bg-white rounded-sm rotate-45" />
                                        {cases[currentIndex].logo}
                                    </div>

                                    {/* Headline */}
                                    <h3 className="text-xl md:text-3xl font-medium text-white leading-tight">
                                        {cases[currentIndex].headline}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-base leading-relaxed">
                                        {cases[currentIndex].description}
                                    </p>

                                    {/* Impact */}
                                    <div>
                                        <h4 className="text-white text-base font-medium mb-3">Impact :</h4>
                                        <ul className="space-y-2">
                                            {cases[currentIndex].impact.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                                    <div className="w-1 h-1 rounded-full bg-white" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </motion.div>

                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-4 mt-10 text-gray-500 text-xs font-medium tracking-widest">
                    <button onClick={prevSlide} className="hover:text-white transition-colors">
                        <ArrowLeft size={18} />
                    </button>
                    <span>DRAG TO EXPLORE</span>
                    <button onClick={nextSlide} className="hover:text-white transition-colors">
                        <ArrowRight size={18} />
                    </button>
                </div>

            </div>
        </section>
    )
}

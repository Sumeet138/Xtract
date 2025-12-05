import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
    {
        name: "James Carter",
        role: "CEO at TechFlow Solutions",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        quote: "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!"
    },
    {
        name: "Sophia Martinez",
        role: "Operations Manager at NexaCorp",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        quote: "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!"
    },
    {
        name: "David Reynolds",
        role: "Head of Sales at GrowthPeak",
        image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
        quote: "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!"
    },
    {
        name: "Emily Wong",
        role: "Customer Success Lead at SupportHive",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        quote: "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to xtract"
    }
]

export function Testimonials() {
    return (
        <section className="py-24 px-4 relative z-10 bg-black">
            <div className="container mx-auto max-w-5xl">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center mb-6"
                    >
                        <div className="px-4 py-1.5 rounded-[6px] border border-white/10 bg-white/5 text-sm font-medium text-white backdrop-blur-sm">
                            Testimonials
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                    >
                        Why Businesses Love <br className="hidden md:block" /> Our AI Solutions
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Real businesses, real results with AI automation.
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 overflow-hidden group"
                        >
                            {/* Purple Gradient Glow at Bottom Right */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[50px] pointer-events-none" />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-white text-white" />
                                    ))}
                                </div>

                                <p className="text-gray-300 mb-6 leading-relaxed text-base">
                                    "{testimonial.quote}"
                                </p>

                                <div className="flex items-center gap-3">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full bg-white/10 object-cover"
                                    />
                                    <div>
                                        <div className="text-white font-semibold text-sm">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-gray-500 text-xs">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

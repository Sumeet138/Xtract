import { motion } from "framer-motion"
import { Zap, Handshake, Clock, DollarSign, PieChart, BarChart } from "lucide-react"

const benefits = [
    {
        icon: Zap,
        title: "Increased Productivity",
        description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy."
    },
    {
        icon: Handshake,
        title: "Better Customer Experience",
        description: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction."
    },
    {
        icon: Clock,
        title: "24/7 Availability",
        description: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime."
    },
    {
        icon: DollarSign,
        title: "Cost Reduction",
        description: "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability."
    },
    {
        icon: PieChart,
        title: "Data-Driven Insights",
        description: "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions."
    },
    {
        icon: BarChart,
        title: "Scalability & Growth",
        description: "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs."
    }
]

export function Benefits() {
    return (
        <section className="py-24 px-4 relative z-10">
            <div className="container mx-auto max-w-7xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1 rounded-[6px]">
                            Benefits
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-semibold text-white mb-2 leading-[1.1]"
                    >
                        The Key Benefits of AI <br />
                        for Your Business Growth
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-base max-w-2xl mx-auto font-semibold leading-relaxed"
                    >
                        Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.
                    </motion.p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-black p-6 h-full min-h-[200px] flex flex-col justify-between"
                        >
                            {/* Gradient Glow Effect */}
                            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />

                            {/* Icon */}
                            <div className="mb-4 text-white">
                                <benefit.icon size={24} strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

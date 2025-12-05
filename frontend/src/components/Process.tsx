import { motion } from "framer-motion"

const steps = [
    {
        number: "Step 1",
        title: "Smart Analyzing",
        description: "We assess your needs and identify AI solutions to streamline workflows and improve efficiency."
    },
    {
        number: "Step 2",
        title: "AI Development",
        description: "Our team builds intelligent automation systems tailored to your business processes."
    },
    {
        number: "Step 3",
        title: "Seamless Integration",
        description: "We integrate the AI solutions into your existing infrastructure with minimal disruption."
    },
    {
        number: "Step 4",
        title: "Continuous Support",
        description: "We provide ongoing maintenance and updates to ensure your systems run smoothly."
    }
]

export function Process() {
    return (
        <section className="py-24 px-4 relative z-10">
            <div className="container mx-auto max-w-5xl">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-4 py-2 rounded-[6px]">
                            Our Process
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-[1.1] tracking-tight"
                    >
                        Our Simple, Smart, <br />
                        and Scalable Process
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        We design, develop, and implement automation tools that help you work smarter, not harder
                    </motion.p>
                </div>

                {/* Steps Grid */}
                <div className="flex flex-wrap justify-center gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#050505] border border-[#222] rounded-[24px] p-0 flex flex-col gap-2 items-start justify-center relative overflow-hidden w-full max-w-[450px]"
                        >
                            {/* Content Wrapper with Padding */}
                            <div className="p-7 pb-4 w-full flex flex-col items-start gap-2">
                                {/* Step Badge */}
                                <div>
                                    <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-[6px]">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h3 className="text-2xl font-normal text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Image Placeholder - Full Width */}
                            <div className="w-full h-[200px] bg-black border-t border-[#222] relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-xs font-mono">
                                    [Image Placeholder]
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

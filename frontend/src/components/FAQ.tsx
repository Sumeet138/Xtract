import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ArrowUpRight, ArrowRight } from "lucide-react"
import { TextFlipButton } from "@/components/TextFlipButton"

const faqs = [
    {
        question: "How can AI automation help my business?",
        answer: "AI automation streamlines repetitive tasks, reduces errors, and provides data-driven insights, allowing your team to focus on high-value strategic work that drives growth."
    },
    {
        question: "Is AI automation difficult to integrate?",
        answer: "Not at all. Our solutions are designed for seamless integration with your existing tools and workflows, ensuring a smooth transition with minimal disruption to your daily operations."
    },
    {
        question: "What industries can benefit from AI automation?",
        answer: "Almost any industry can benefit, including healthcare, finance, retail, manufacturing, and customer service. Wherever there are data-heavy or repetitive processes, AI can add value."
    },
    {
        question: "Do I need technical knowledge to use AI automation?",
        answer: "No technical expertise is required. Our user-friendly platforms allow you to manage and monitor automation workflows without writing a single line of code."
    },
    {
        question: "What kind of support do you offer?",
        answer: "We provide comprehensive support including 24/7 customer service, detailed documentation, and dedicated account managers for enterprise clients to ensure your success."
    }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-24 px-4 relative z-10 bg-black">
            <div className="container mx-auto max-w-3xl">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center mb-6"
                    >
                        <div className="px-4 py-1.5 rounded-[6px] border border-white/10 bg-white/5 text-sm font-medium text-white backdrop-blur-sm">
                            FAQs
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                    >
                        We've Got the Answers <br className="hidden md:block" /> You're Looking For
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Quick answers to your AI automation questions.
                    </motion.p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/5 rounded-xl bg-[#0A0A0A] overflow-hidden relative"
                            style={{
                                background: "linear-gradient(225deg, rgba(168, 85, 247, 0.15) 0%, #0A0A0A 50%)"
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-4 text-left transition-colors group"
                            >
                                <span className="text-lg font-medium text-white pr-8 transition-colors">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                                    <ChevronDown className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-4 pb-4 text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-20 relative overflow-hidden rounded-2xl py-16 px-12 text-center"
                    style={{
                        background: "radial-gradient(circle at top left, rgba(88, 28, 135, 0.4) 0%, transparent 35%), radial-gradient(circle at bottom right, rgba(88, 28, 135, 0.4) 0%, transparent 35%), #0A0A0A"
                    }}
                >
                    <div className="relative z-10 flex flex-col items-center">
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            Let AI do the Work so <br />
                            you can Scale Faster
                        </h3>
                        <p className="text-gray-400 text-lg mb-8">
                            Book a Call Today and Start Automating
                        </p>

                        <TextFlipButton
                            variant="primary"
                            hoverChildren={
                                <>
                                    Book a free call
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </>
                            }
                            className="px-8 h-12 text-base"
                        >
                            Book a free call
                            <ArrowUpRight className="ml-2 w-4 h-4" />
                        </TextFlipButton>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

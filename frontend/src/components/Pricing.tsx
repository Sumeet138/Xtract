import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Rocket, Zap, Crown } from "lucide-react"

const plans = [
    {
        icon: Rocket,
        name: "Starter",
        price: "$37",
        description: "Perfect for small businesses starting with AI automation.",
        buttonText: "Choose this plan",
        features: [
            "Basic workflow automation",
            "AI-powered personal assistant",
            "Standard analytics & reporting",
            "Email & chat support",
            "Up to 3 AI integrations"
        ]
    },
    {
        icon: Zap,
        name: "Professional",
        price: "$75",
        popular: true,
        description: "Perfect for small businesses starting with AI automation.",
        buttonText: "Choose this plan",
        features: [
            "Advanced workflow automation",
            "AI-driven sales & marketing tools",
            "Enhanced data analytics & insights",
            "Priority customer support",
            "Up to 10 AI integrations"
        ]
    },
    {
        icon: Crown,
        name: "Enterprise",
        price: "Custom",
        description: "Perfect for small businesses starting with AI automation.",
        buttonText: "Schedule a call",
        features: [
            "Fully customizable AI automation",
            "Dedicated AI business consultant",
            "Enterprise-grade compliance",
            "24/7 VIP support",
            "Unlimited AI integrations"
        ]
    }
]

export function Pricing() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly')

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
                            Pricing
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
                    >
                        The Best AI Automation, <br />
                        at the Right Price
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-base max-w-2xl mx-auto mb-8"
                    >
                        Choose a plan that fits your business needs and start automating with AI
                    </motion.p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-base font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
                        <button
                            onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annually' : 'monthly')}
                            className={`w-14 h-8 rounded-full p-1 relative transition-colors duration-300 ${billingCycle === 'annually' ? "bg-[#8B5CF6]" : "bg-white/10 hover:bg-white/20"
                                }`}
                        >
                            <motion.div
                                layout
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="w-6 h-6 rounded-full bg-white shadow-sm"
                                animate={{
                                    x: billingCycle === 'annually' ? 24 : 0
                                }}
                            />
                        </button>
                        <span className={`text-base font-medium ${billingCycle === 'annually' ? 'text-white' : 'text-gray-400'}`}>Annually</span>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative rounded-2xl border border-white/10 bg-black p-8 overflow-hidden flex flex-col h-full"
                        >
                            {/* Gradient Glow */}
                            {plan.popular ? (
                                <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.4)_0%,rgba(88,28,135,0.1)_40%,transparent_70%)] pointer-events-none" />
                            ) : (
                                <div className="absolute -bottom-10 left-0 right-0 h-[400px] bg-[radial-gradient(circle_at_bottom,rgba(139,92,246,0.2)_0%,rgba(88,28,135,0.05)_40%,transparent_70%)] pointer-events-none" />
                            )}

                            {/* Header Section */}
                            <div className="relative z-10 mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <plan.icon size={20} />
                                        <span className="font-medium">{plan.name}</span>
                                    </div>
                                    {plan.popular && (
                                        <span className="bg-[#1A1A1A] text-white text-xs px-3 py-1 rounded-lg border border-white/10 font-medium">
                                            Popular
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-gray-500 text-sm">/month</span>}
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            {/* Button */}
                            <div className="relative z-10 mb-8">
                                <button
                                    className={`w-full py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${plan.popular
                                        ? "bg-[#8B5CF6] hover:bg-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                                        : "bg-transparent hover:bg-white/5 text-white border border-white/10"
                                        }`}
                                >
                                    {plan.buttonText}
                                </button>
                            </div>

                            {/* Features */}
                            <div className="relative z-10 mt-auto">
                                <p className="text-white text-sm font-medium mb-4">What's Included:</p>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <Check size={16} className="mt-0.5 shrink-0 text-white" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

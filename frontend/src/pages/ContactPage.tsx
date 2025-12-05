import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { TextFlipButton } from "@/components/TextFlipButton"
import { Mail, Phone, Send } from "lucide-react"

export function ContactPage() {
    return (
        <main className="relative min-h-screen bg-black overflow-hidden font-figtree selection:bg-purple-500/30">
            <Navbar />

            <div className="pt-32 pb-24 px-4 relative z-10">
                <div className="container mx-auto max-w-3xl">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block mb-6"
                        >
                            <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-4 py-2 rounded-[6px]">
                                Contact
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                        >
                            Get in Touch with Us
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
                        >
                            Have questions or need AI solutions? Let us know by filling out the form, and we'll be in touch!
                        </motion.p>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {/* Email Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="border border-white/10 rounded-2xl p-6 relative overflow-hidden group"
                            style={{ background: 'radial-gradient(circle at bottom right, rgba(168,85,247,0.15) 0%, transparent 60%), #0A0A0A' }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/10 relative z-10">
                                    <Mail className="text-white w-6 h-6" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-white font-semibold text-lg mb-1">E-mail</h3>
                                    <p className="text-gray-400">Admin@xtract.com</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Phone Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="border border-white/10 rounded-2xl p-6 relative overflow-hidden group"
                            style={{ background: 'radial-gradient(circle at bottom right, rgba(168,85,247,0.15) 0%, transparent 60%), #0A0A0A' }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/10 relative z-10">
                                    <Phone className="text-white w-6 h-6" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                                    <p className="text-gray-400">+1(969) 819-8061</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden"
                    >
                        <form className="space-y-4 relative z-10">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="firstName" className="text-white font-medium text-sm">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="Jane"
                                        className="w-full bg-transparent border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="lastName" className="text-white font-medium text-sm">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Smith"
                                        className="w-full bg-transparent border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-white font-medium text-sm">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Jane@mail.com"
                                        className="w-full bg-transparent border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="phone" className="text-white font-medium text-sm">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+1(969) 819-8061"
                                        className="w-full bg-transparent border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-white font-medium text-sm">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Hi, I am jane i want help with...."
                                    className="w-full bg-transparent border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                />
                            </div>

                            <div className="pt-2">
                                <TextFlipButton
                                    variant="primary"
                                    className="w-full py-3 text-sm justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
                                    hoverChildren={
                                        <>
                                            Sending...
                                            <Send className="ml-2 w-4 h-4" />
                                        </>
                                    }
                                >
                                    Submit Form
                                </TextFlipButton>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>

            <Footer />
        </main>
    )
}

import { motion, AnimatePresence } from "framer-motion"
import { ArrowDownLeft, Menu, X } from "lucide-react"
import { TextFlipButton } from "@/components/TextFlipButton"
import { useState } from "react"
import { Link } from "react-router-dom"

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Smooth Apple-like ease
            className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-white text-black p-1 rounded-[6px]">
                        <ArrowDownLeft className="w-5 h-5" strokeWidth={3} />
                    </div>
                    <span className="text-xl font-bold tracking-wide text-white">XTRACT</span>
                </Link>

                {/* Right Side: Links & CTA */}
                <div className="flex items-center gap-8">
                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
                        <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
                        <a href="#" className="hover:text-purple-400 transition-colors">About</a>
                        <a href="#" className="hover:text-purple-400 transition-colors">Blog</a>
                        <Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Link to="/contact">
                            <TextFlipButton
                                variant="primary"
                                className="px-6 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                            >
                                Book a call
                            </TextFlipButton>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white z-50 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black z-40 md:hidden pt-24 px-6 flex flex-col items-start gap-8 border-b border-white/10"
                    >
                        <nav className="flex flex-col gap-6 text-2xl font-medium text-white w-full">
                            <Link
                                to="/"
                                className="hover:text-purple-400 transition-colors block border-b border-white/5 pb-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <a href="#" className="hover:text-purple-400 transition-colors block border-b border-white/5 pb-4">About</a>
                            <a href="#" className="hover:text-purple-400 transition-colors block border-b border-white/5 pb-4">Blog</a>
                            <Link
                                to="/contact"
                                className="hover:text-purple-400 transition-colors block border-b border-white/5 pb-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </nav>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="w-full"
                        >
                            <TextFlipButton
                                variant="primary"
                                className="w-full justify-center px-6 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                            >
                                Book a call
                            </TextFlipButton>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

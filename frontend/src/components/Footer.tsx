import { ArrowDownLeft, Instagram, Facebook, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="relative bg-black pt-20 pb-10 border-t border-white/10 overflow-hidden">
            {/* Top Gradient Fade */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />

            <div className="container mx-auto max-w-7xl px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Brand & Newsletter */}
                    <div className="md:col-span-5 space-y-8">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white rounded-[6px] flex items-center justify-center">
                                <ArrowDownLeft className="text-black" size={20} strokeWidth={2.5} />
                            </div>
                            <span className="text-white font-bold text-2xl tracking-tight">XTRACT</span>
                        </div>

                        {/* Tagline */}
                        <p className="text-gray-400 text-base leading-relaxed max-w-md">
                            Xtract – Automate Smarter, Optimize <br />
                            Faster, and Grow Stronger.
                        </p>

                        {/* Newsletter */}
                        <div className="space-y-3">
                            <p className="text-white font-medium">Join our newsletter</p>
                            <div className="flex items-center gap-2 max-w-md">
                                <div className="relative flex-1">
                                    <input
                                        type="email"
                                        placeholder="name@email.com"
                                        className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                                    />
                                    <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-4 rounded-[6px] text-sm font-medium transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Columns: Links */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">

                        {/* Links Column */}
                        <div>
                            <h4 className="text-white font-medium mb-6">Links</h4>
                            <ul className="space-y-4">
                                {["Services", "Process", "Case studies", "Benefits", "Pricing"].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pages Column */}
                        <div>
                            <h4 className="text-white font-medium mb-6">Pages</h4>
                            <ul className="space-y-4">
                                {["Home", "About", "Blog", "Contact", "404"].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Socials Column */}
                        <div>
                            <h4 className="text-white font-medium mb-6">Socials</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: "Instagram", icon: Instagram },
                                    { name: "Facebook", icon: Facebook },
                                    { name: "Linkedin", icon: Linkedin },
                                    { name: "Twitter", icon: Twitter }
                                ].map((social) => (
                                    <li key={social.name}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                                            {social.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

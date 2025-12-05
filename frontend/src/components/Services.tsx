import { motion } from "framer-motion"

export function Services() {
    return (
        <section className="py-24 px-4 relative z-10">
            <div className="container mx-auto max-w-6xl">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1 rounded-[6px]">
                            Our Services
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        AI Solutions That Take Your <br />
                        Business to the Next Level
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

                {/* Feature Section */}
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    {/* Left: Card with Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black border border-[#222] rounded-[12px] h-[350px] w-full max-w-md"
                    />

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        <div className="inline-block">
                            <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1 rounded-[6px]">
                                Workflow Automation
                            </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                            Automate repetitive tasks
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains saving time and cutting down errors.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-4">
                            <span className="bg-white/5 border border-white/10 text-gray-300 text-sm font-medium px-4 py-2 rounded-[6px]">
                                Internal Task Bots
                            </span>
                            <span className="bg-white/5 border border-white/10 text-gray-300 text-sm font-medium px-4 py-2 rounded-[6px]">
                                100+ Automations
                            </span>
                        </div>
                    </motion.div>

                </div>

                {/* AI Assistant Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mt-24">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 order-2 md:order-1"
                    >
                        <div className="inline-block">
                            <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1 rounded-[6px]">
                                AI Assistant
                            </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                            Delegate Daily Tasks
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-4">
                            {["Summaries", "Scheduling", "Many more"].map((tag, i) => (
                                <span key={i} className="bg-white/5 border border-white/10 text-gray-300 text-sm font-medium px-4 py-2 rounded-[6px]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: AI Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black border border-[#222] rounded-[12px] h-[350px] w-full max-w-md order-1 md:order-2"
                    />

                </div>

                {/* Sales & Marketing Section */}
                <div className="grid md:grid-cols-2 gap-8 items-center mt-24">

                    {/* Left: Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black border border-[#222] rounded-[12px] h-[350px] w-full max-w-md"
                    />

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        <div className="inline-block">
                            <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1 rounded-[6px]">
                                Sales & Marketing
                            </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                            Accelerate Sales Growth
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-4">
                            {["Leads", "Content", "Social post"].map((tag, i) => (
                                <span key={i} className="bg-white/5 border border-white/10 text-gray-300 text-sm font-medium px-4 py-2 rounded-[6px]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </div>

                {/* Custom Projects Section */}
                <div className="grid md:grid-cols-2 gap-8 items-center mt-24">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-3 order-2 md:order-1"
                    >
                        <div className="inline-block">
                            <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1 rounded-[6px]">
                                Custom Projects
                            </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                            Build Smarter Systems
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Whether you're starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-4">
                            {["Strategy", "Custom AI", "Consulting"].map((tag, i) => (
                                <span key={i} className="bg-white/5 border border-white/10 text-gray-300 text-sm font-medium px-4 py-2 rounded-[6px]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black border border-[#222] rounded-[12px] h-[350px] w-full max-w-md order-1 md:order-2"
                    />

                </div>
            </div>
        </section>
    )
}

import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { TrustedBy } from "@/components/TrustedBy"
import { Services } from "@/components/Services"
import { Process } from "@/components/Process"
import { CaseStudies } from "@/components/CaseStudies"
import { Benefits } from "@/components/Benefits"
import { Pricing } from "@/components/Pricing"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"

export function LandingPage() {
    return (
        <main className="relative min-h-screen bg-black overflow-hidden font-figtree selection:bg-purple-500/30">
            <Navbar />
            <Hero />
            <TrustedBy />
            <Services />
            <Process />
            <CaseStudies />
            <Benefits />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Footer />

            {/* Future Sections will go here */}

        </main>
    )
}

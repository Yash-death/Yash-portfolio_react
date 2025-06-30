import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/NavBar"
import { ProjectSection } from "../components/ProjectsSection"
import { SkillSection } from "../components/SkillSection"
import { StarBackGround } from "@/components/StarBackGround"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () =>{
    return(
<>
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* Theme Toggle */}
            <ThemeToggle/>
        {/* Background effects */}
            <StarBackGround/>
        {/* Navbar */}
            <Navbar/>
        {/* Main Content */}
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillSection/>
                <ProjectSection/>
                <ContactSection />
            </main>


        {/* Footer */}
        <Footer/>
        </div>
        </>
    )
}

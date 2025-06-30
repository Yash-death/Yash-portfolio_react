import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return(
        <>
        <section 
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
            >
                <div classname="container max-w-4xl mx-auto text-center z-10">
                    <div classname="space-y-6">
                        <h1 className="text-4xl md:text-6x font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Yash</span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Badoniya</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-prose mx-auto opacity-0 animate-fade-in-delay-3 pt-2">
                            I build impactful mobile and web applications with modern
                            technologies. From Android apps to React-based UIs, I'm passionate
                            about crafting solutions that blend usability, performance, and clean code. 
                        </p>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="#projects" className="cosmic-button">
                                 View my Projects
                            </a>
                        </div>                        
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                    <ArrowDown className="h-5 w-5 text-primary"/>
                </div>
        </section>
        </>
    )
}
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
     id: 1,
    title: "Hapenzo - Event Decoration Services",
    description:
      "A sleek React-based web app that allows users to explore decoration packages, add them to cart, and complete bookings with full order flow — all optimized for mobile and deployed on Netlify.",
    image: "/projects/project1.png",
     tags: ["React", "React Router", "CSS3", "Netlify"],
    demoUrl: "https://hapenzo.netlify.app/",
    githubUrl: "https://github.com/Yash-death/Hapenzo",
  },
  {
    id: 2,
    title: "WhatsApp AI Image Generator",
     description:
      "Built using Node.js, Twilio, and OpenAI's DALL·E API, this app processes WhatsApp messages to generate and send back AI-generated images automatically.",
    image: "/projects/project2.png",
    tags: ["Node.js", "Express", "Twilio", "OpenAI", "JavaScript"],
    demoUrl: "#", 
    githubUrl: "https://github.com/Yash-death/Whatsapp_Image_Agent",
  },
  {
  id: 3,
  title: "Chrome Dinosaur Game (Java Desktop App)",
  description:
    "A desktop-based replica of the classic Chrome Dinosaur game, developed in Java using Swing for GUI and basic game loop logic. It features sprite-based animations, obstacle generation, and jump physics.",
  image: "/projects/project4.png", // Replace with actual screenshot
  tags: ["Java", "Swing", "Game Development", "Desktop App"],
  demoUrl: "#", // You can upload a demo video or deployment link if applicable
  githubUrl: "https://github.com/Yash-death/Chrome_Dino_Game"
  }
];

export const ProjectSection = () =>{
    return (
        <>
        <section id="projects" className="py-24 px-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                      Here are some of my recent projects. Each project was carefully
                      crafted with attention to detail, performance, and user experience.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project,key)=>(
                            <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                            > 
                              <div className="h-48 overflow-hidden">
                                    <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 "
                                    />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=>(
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div> 
                            
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>  
                            <p className="text-muted-foreground text-sm mb-4 ">{project.description}</p>
                                <div className="flex justify-between items-center" >
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl}
                                           target="_blank"
                                           className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.githubUrl}
                                           target="_blank"
                                           className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                     </div>
                                  </div> 
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a href="https://github.com/Yash-death"
                        target="_blank"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2">
                            Check My Github
                        </a>
                    </div>
            </div>

        </section>
        </>
    )
}
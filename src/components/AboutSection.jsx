import { Briefcase, Code, User } from "lucide-react";
import resumePDF from "../assets/Yash_resume_dev.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
  <h3 className="text-2xl font-semibold">
    Passionate Mobile & Web Developer with a Curiosity for Innovation
  </h3>

  <p className="text-muted-foreground">
    Skilled in building scalable mobile apps and responsive web applications using React Native,
    Java, and modern frameworks. Experienced in designing seamless interfaces and integrating
    backend services for real-world use.
  </p>

  <p className="text-muted-foreground">
    Always curious about emerging tech, with a focus on AI integration, automation, and
    performance-first design. Continuously learning and building tools that solve real problems
    — creatively and efficiently.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
    <a href="#contact" className="cosmic-button">
      Get In Touch
    </a>

    <a
      href={resumePDF}
      className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
      download
    >
      Download CV
    </a>
  </div>
</div>

<div className="grid grid-cols-1 gap-6">
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Code className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">App & Web Development</h4>
        <p className="text-muted-foreground">
          Building responsive mobile and web applications using React Native,
          Java, ASP.NET Core, and modern web technologies.
        </p>
      </div>
    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <User className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">UI/UX Design</h4>
        <p className="text-muted-foreground">
          Designing clean, intuitive interfaces using Figma, Canva, and Illustrator
          with a focus on user experience.
        </p>
      </div>
    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Briefcase className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">Continuous Learning</h4>
        <p className="text-muted-foreground">
          Exploring DevOps, automation scripting, and AI-driven development
          to stay adaptable in the fast-changing tech world.
        </p>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

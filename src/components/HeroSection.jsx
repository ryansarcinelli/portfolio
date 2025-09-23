import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight pt-16">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {""} Ryan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {""} Sarcinelli
            </span>
          </h1>
          <section className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground space-y-4 opacity-0 animate-fade-in-delay-3">
            <p>
              I am a Computer Science student at UFES and currently work as a
              frontend developer at Cinetica Júnior, the university’s junior
              enterprise, where I contribute to building landing pages and web
              applications.
            </p>
            <p>
              My main stack includes Node.js, React, Next.js, Java, and PHP,
              along with experience in HTML, CSS, TailwindCSS, Vue, and SQL
              databases. I have also worked on academic and personal projects
              using languages such as C, C++, and Python.
            </p>
            <p>
              I have served as a teaching assistant in a programming lab, which
              enhanced my communication and teamwork skills. I also achieved a
              “podium” result in a metaheuristics project, highlighting my
              dedication to solving computational challenges.
            </p>
            <p>
              I am passionate about Artificial Intelligence and FullStack
              development, seeking internship opportunities that will allow me
              to learn continuously, contribute to innovative projects, and grow
              professionally as a software developer.
            </p>
          </section>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

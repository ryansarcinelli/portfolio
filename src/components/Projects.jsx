import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "This portfolio",
    description: "Description of project 1",
    image: "/projects/portfolio.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vercel", "Toast"],
    demourl: "https://portfolio-ryan-carlos-sarcinellis-projects.vercel.app/",
    githuburl: "https://github.com/ryansarcinelli/portfolio",
  },
  {
    id: 2,
    title: "Project 1",
    description: "Description of project 1",
    image: "projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demourl: "#",
    githuburl: "#",
  },
  {
    id: 3,
    title: "Project 1",
    description: "Description of project 1",
    image: "projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demourl: "#",
    githuburl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
          Here are some of my recent projects. I love to create and share
          beautiful and functional web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-x5 card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-2 text-xm font-medium rounded-full bg-primary/10 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4"></p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demourl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration"
                    >
                      {" "}
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githuburl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration"
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
          <a
            href="https://github.com/ryansarcinelli"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

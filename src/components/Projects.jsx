import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "This portfolio",
    description:
      "A personal portfolio showcasing my projects and skills made with React and hosted on Vercel",
    image: "/projects/portfolio.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vercel", "Toast"],
    demourl: "https://portfolio-ryan-carlos-sarcinellis-projects.vercel.app/",
    githuburl: "https://github.com/ryansarcinelli/portfolio",
  },
  {
    id: 2,
    title: "Metaheuristic Optimization for Hubs",
    description:
      "A metaheuristic optimization algorithm for hub location problems",
    image: "projects/hubs.png",
    tags: ["C", "C++", "Metaheuristics"],
    demourl: "https://youtu.be/XOy7S4Xq-uk",
    githuburl: "https://github.com/ryansarcinelli/metodos-otimizacao-hubs",
  },
  {
    id: 3,
    title: "Todo List with Ruby on Rails",
    description: "Full-stack application built with Ruby on Rails",
    image: "projects/todolistrails.png",
    tags: ["Ruby", "Ruby on Rails", "SQLite", "Bootstrap"],
    demourl: "https://youtu.be/GznqA-iaPMI",
    githuburl: "https://github.com/ryansarcinelli/Todo-list-with-ruby",
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
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

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

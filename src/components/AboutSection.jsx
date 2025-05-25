import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {""}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold md:text-4xl text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2-xl font-semibold">
              Passionate Web Developer
            </h3>
            <p className="text-muted-foreground"></p>
            <p className="text-muted-foreground"></p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-300 text-center"
              >
                <span>Contact Me</span>
              </a>

              <a
                href="/ryan-cv.pdf"
                download
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                <span>Download CV</span>
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
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Experienced in developing scalable front-end interfaces and
                    robust back-end systems using JavaScript, React, Ruby on
                    Rails, and RESTful APIs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border/ p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX</h4>
                  <p className="text-muted-foreground">
                    I care about usability and aesthetics, designing intuitive
                    and visually appealing interfaces focused on user experience
                    and accessibility.
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
                  <h4 className="font-semibold text-lg">Project Managment</h4>
                  <p className="text-muted-foreground">
                    Skilled in organizing and executing development tasks, using
                    tools like Git and agile methodologies to ensure timely and
                    effective delivery.
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

import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-6 px-6">
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
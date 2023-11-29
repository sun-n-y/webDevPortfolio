import { projects } from '../data';
import ProjectsCard from './ProjectsCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section className="py-20 align-elements" id="projects">
      <SectionTitle text="web creations" />
      <div className="py-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;

import ProjectsCard from './ProjectsCard';
import SectionTitle from './SectionTitle';
import { useFetchProjects } from './fetchProjects';
import loadingGif from '../assets/loadingGif.gif';

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  return (
    <section className="py-20 align-elements" id="projects">
      <SectionTitle text="web creations" />
      {loading ? (
        <div className=" py-8 flex justify-center ">
          <img src={loadingGif} alt="" className="" />
        </div>
      ) : (
        <div className="py-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
      )}
    </section>
  );
};
export default Projects;

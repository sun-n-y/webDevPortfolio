import ProjectsCard from './ProjectsCard';
import SectionTitle from './SectionTitle';
import { useFetchProjects } from './fetchProjects';
import loadingGif from '../assets/loadingGif.gif';

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  return (
    <section
      className="pt-14 md:py-16 lg:py-20 dark:bg-dark-grey duration-200"
      id="projects"
    >
      <div className="align-elements">
        <div>
          <SectionTitle text="web creations" link="see more" />
        </div>
        {loading ? (
          <div className=" py-8 flex justify-center ">
            <img src={loadingGif} />
          </div>
        ) : (
          <div className="py-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              return <ProjectsCard key={project.id} {...project} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};
export default Projects;

import ProjectsCard from './ProjectsCard';
import SectionTitle from './SectionTitle';
import { useFetchProjects } from './fetchProjects';
import loadingGif from '../assets/loadingGif.gif';

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  return (
    <section
      className="pt-14 py-16 lg:py-20 dark:bg-dark-grey duration-200"
      id="projects"
    >
      <div className="align-elements">
        <div>
          <SectionTitle
            text="web creations"
            text2="see more"
            link="https://react-projects-sp.netlify.app/"
          />
        </div>
        {loading ? (
          <div className=" py-8 flex justify-center ">
            <img src={loadingGif} />
          </div>
        ) : (
          <div className="py-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {projects.reverse().map((project) => {
              return <ProjectsCard key={project.id} {...project} />;
            })}
          </div>
        )}
        <h4 className="text-center italic text-slate-400">
          *Hosted on Render with a free tier, the site will take 50 seconds or
          more to spin up
        </h4>
      </div>
    </section>
  );
};
export default Projects;

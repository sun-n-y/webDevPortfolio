import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white dark:bg-gray-300 h-full rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="p-8 grid grid-rows-3 gap-2 md:gap-3 lg:gap-4 items-center">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className=" text-slate-500 leading-loose">{text}</p>
        <div className="flex gap-x-4 justify-self-end">
          <a href={url} target="_blank" rel="noreferrer">
            <TbWorldWww className="h-8 w-8 text-sky-500 hover:text-sky-200 dark:hover:text-sky-300 duration-300" />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="h-8 w-8 text-black-500 hover:text-gray-300  dark:hover:text-slate-500 duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;

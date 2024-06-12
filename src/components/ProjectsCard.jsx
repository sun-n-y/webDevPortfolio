import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { FaArrowUpFromBracket } from 'react-icons/fa6';

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white dark:bg-gray-500 h-full rounded-lg shadow-md hover:shadow-xl dark:hover:bg-slate-600 duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="p-8 grid grid-rows-3 gap-4 md:gap-6 lg:gap-8 items-center">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className=" text-slate-500 leading-loose dark:text-slate-50">
          {text}
        </p>
        <div className="flex justify-between">
          <div className="flex gap-x-4">
            <a href={url} target="_blank" rel="noreferrer">
              <TbWorldWww className="h-8 w-8 text-sky-500 hover:text-sky-200 dark:hover:text-sky-300 duration-500" />
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithubSquare className="h-8 w-8 text-black-500 hover:text-gray-300  dark:hover:text-slate-500 duration-500 " />
            </a>
          </div>
          <a href="#home" className="place-self-end">
            <FaArrowUpFromBracket className="h-5 w-5 text-slate-400 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-500 duration-200" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;

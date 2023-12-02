import me from '../assets/me.jpg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="bg-emerald-100 duration-200 dark:bg-dark-grey py-20">
      <div className="align-elements grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider dark:text-slate-200 duration-200">
            I'm Sunny
          </h1>
          <p className="mt-4 text-3xl text-slate-700 dark:text-slate-400 capitalize tracking-wide">
            front-end developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide dark:text-slate-400">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/sun-n-y"
              target="_blank"
              rel="norefferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500  hover:text-slate-300 duration-300 dark:text-slate-400 dark:hover:text-emerald-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/sunny-patel-skp/"
              target="_blank"
              rel="norefferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-slate-300 duration-300 dark:text-slate-400 dark:hover:text-emerald-600" />
            </a>
          </div>
        </article>
        <article>
          <img src={me} className="h-40 sm:h-60  md:h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;

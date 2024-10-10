import me from '../assets/me.jpg';
import { FaGithubSquare, FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="bg-emerald-100 duration-200 dark:bg-[#000000] py-20">
      <div className="align-elements grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider dark:text-slate-200 duration-200">
            Hi, I'm Sunny
          </h1>
           <p className="mt-4 text-1xl text-slate-700 dark:text-slate-400 capitalize tracking-wide lg:text-3xl">
            Seeking job in Software Development
          </p>
{/*           <p className="mt-2 text-md text-slate-700 capitalize tracking-wide dark:text-slate-400">
            expected grad: May 2026
          </p> */}
          {/* <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide dark:text-slate-400">
            turning ideas into interactive reality
          </p> */}
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/sun-n-y"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-600  hover:text-orange-500 duration-500 dark:text-slate-400 dark:hover:text-orange-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/sunnykp1/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-600 hover:text-blue-500 duration-500 dark:text-slate-400 dark:hover:text-blue-500" />
            </a>
            <a href="tel:808-649-8220">
              <FaPhoneSquareAlt className="h-8 w-8 text-slate-600 hover:text-green-400 duration-500 dark:text-slate-400 dark:hover:text-green-400" />
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

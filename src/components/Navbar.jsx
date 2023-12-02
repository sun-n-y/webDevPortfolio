import { useGlobalContext } from '../context';
import { links } from '../data';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const Navbar = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <nav className="bg-emerald-100 duration-200 dark:bg-dark-grey  " id="home">
      <div className="align-elements py-8 flex flex-row justify-between items-end sm:flex-row sm:gap-x-16 sm:items-center sm:py-10 dark:border-b border-emerald-500 ">
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300 dark:text-slate-200 dark:hover:text-emerald-600"
              >
                {text}
              </a>
            );
          })}
        </div>
        <div className="grid">
          <button onClick={toggleDarkTheme}>
            {isDarkTheme ? (
              <BsFillMoonFill className="h-8 w-8 dark:text-slate-200" />
            ) : (
              <BsFillSunFill className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

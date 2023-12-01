import { useGlobalContext } from '../context';
import { links } from '../data';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const Navbar = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  console.log(isDarkTheme);

  return (
    <nav className="bg-emerald-100 dark:bg-neutral-700" id="home">
      <div className="align-elements py-8 flex flex-row justify-between items-end sm:flex-row sm:gap-x-16 sm:items-center sm:py-10 ">
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
        <div className="grid">
          <button onClick={toggleDarkTheme}>
            {isDarkTheme ? (
              <BsFillMoonFill className="h-8 w-8" />
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

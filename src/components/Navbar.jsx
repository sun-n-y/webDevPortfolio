import { links } from '../data';

const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="align-elements py-8 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-10 ">
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
      </div>
    </nav>
  );
};
export default Navbar;

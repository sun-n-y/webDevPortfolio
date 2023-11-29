import { links } from '../data';
import { BsArrowUpSquareFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-emerald-100 md:py-8">
      <div className="align-elements justify-end py-10 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-10">
        <div className="flex gap-x-3 justify-end">
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
          <a
            href="#home"
            className="capitalize text-2xl tracking-wide hover:text-emerald-600 duration-300"
          >
            <BsArrowUpSquareFill className="h-full" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

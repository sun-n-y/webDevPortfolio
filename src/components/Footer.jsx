import { links } from '../data';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import resume from '../assets/Resume.pdf';

const Footer = () => {
  return (
    <footer className="bg-emerald-100 md:py-8">
      <div className="align-elements justify-between gap-y-4 py-10 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-10">
        <div className="flex gap-x-2">
          <a
            href="https://www.linkedin.com/in/sunny-patel-skp/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center "
          >
            <FaLinkedin className="text-2xl text-black-500 hover:text-gray-300 duration-300" />
          </a>
          <a
            href="https://github.com/sun-n-y/webDevPortfolio"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-x-1"
          >
            <FaGithubSquare className="text-2xl text-black-500 hover:text-gray-300 duration-300" />
            <span>portfolio code</span>
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-x-1 "
          >
            <IoDocumentTextSharp className="text-2xl text-black-500 hover:text-gray-300 duration-300" />
            resume
          </a>
        </div>
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

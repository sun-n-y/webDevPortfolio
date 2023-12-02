import { links } from '../data';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import resume from '../assets/Resume.pdf';

const Footer = () => {
  return (
    <footer className="bg-emerald-100 dark:bg-dark-grey md:py-8">
      <div className="align-elements justify-between py-10 flex flex-col-2 sm:flex-row sm:gap-x-1 sm:items-center sm:py-10 dark:border-t border-emerald-500 ">
        <div className="flex justify-between gap-x-1 gap-y-1 flex-col">
          <a
            href="https://www.linkedin.com/in/sunny-patel-skp/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <FaLinkedin className="text-2xl text-black-500 hover:text-gray-300 duration-300 dark:text-slate-200 dark:hover:text-emerald-500" />
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-x-1 text-lg hover:text-gray-300 duration-300 "
          >
            <IoDocumentTextSharp className="text-2xl text-black-500 hover:text-gray-300 duration-300 dark:text-slate-200 dark:hover:text-emerald-500" />
            <span className="dark:text-slate-200 dark:hover:text-emerald-500 duration-200">
              Resume
            </span>
          </a>
          <a
            href="https://github.com/sun-n-y/webDevPortfolio"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-x-1 text-lg hover:text-gray-300 duration-300"
          >
            <FaGithubSquare className="text-2xl text-black-500 hover:text-gray-300 duration-300 dark:text-slate-200 dark:hover:text-emerald-500" />
            <span className="dark:text-slate-200 dark:hover:text-emerald-500 duration-200">
              Portfolio code
            </span>
          </a>
        </div>
        <div className="flex gap-x-3 gap-y-1  flex-col justify-end">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300 dark:text-slate-200 dark:hover:text-emerald-500"
              >
                {text}
              </a>
            );
          })}
        </div>
        <a
          href="#home"
          className="capitalize text-3xl tracking-wide self-end hover:text-emerald-600 duration-300"
        >
          <BsArrowUpSquareFill className="h-full dark:text-emerald-500 dark:hover:text-emerald-200 duration-200" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;

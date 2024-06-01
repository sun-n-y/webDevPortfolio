import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaCss3Alt, FaNode } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiTailwindcss } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';

export const links = [
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML - CSS - Tailwind CSS',
    icon: (
      <div className="flex items-center gap-x-3">
        <FaHtml5 className="h-16 w-16 text-[#e44d26] " />
        <FaCss3Alt className="h-16 w-16 text-[#214ce5]" />
        <SiTailwindcss className="h-16 w-16 text-[#38bdf8]" />
      </div>
    ),
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'JavaScript - TypeScript',
    icon: (
      <div className="flex items-center gap-x-3">
        <FaJs className="h-16 w-16 text-yellow-400" />
        <SiTypescript className="h-14 w-14 text-[#3178c6]" />
      </div>
    ),
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'MongoDB - Express - React - Node',
    icon: (
      <div className="flex items-center gap-x-3">
        <BiLogoMongodb className="h-16 w-16 text-green-400" />
        <SiExpress className="h-16 w-16 text-slate-950 dark:text-slate-200" />
        <FaReact className="h-16 w-16 text-sky-400" />
        <FaNode className="h-16 w-16 text-green-600" />
      </div>
    ),
    text: 'Advanced proficiency in React, developing efficient and interactive full-stack applications with a strong emphasis on component-based architecture.',
  },
];

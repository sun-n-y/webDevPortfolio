import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaCss3Alt } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: (
      <div className="flex">
        <FaHtml5 className="h-16 w-16 text-red-600 " />
        <FaCss3Alt className="h-16 w-16 text-blue-600" />
      </div>
    ),
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-yellow-400" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-sky-400" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'assets/ecommerce.png',
    url: 'https://sun-n-y.github.io/comfyStore/',
    github: 'https://github.com/sun-n-y/comfyStore',
    title: 'E-commerce',
    text: 'vanilla HTML, CSS, & JavaScript',
  },
  {
    id: nanoid(),
    img: 'assets/todo.png',
    url: 'https://sun-n-y.github.io/toDoListAppSolo/',
    github: 'https://github.com/sun-n-y/toDoListAppSolo',
    title: 'To-do List',
    text: 'React + Vite, Local Storage CRUD',
  },
  {
    id: nanoid(),
    img: 'assets/drinks.png',
    url: 'https://mix-master-rq-rr.netlify.app/',
    github: 'https://github.com/sun-n-y/mixMaster',
    title: 'Drink Mix Recipes',
    text: 'Axios, React Query, React Router',
  },
];

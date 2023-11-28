import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'assets/ecommerce.png',
    url: 'https://sun-n-y.github.io/comfyStore/',
    github: 'https://github.com/sun-n-y/comfyStore',
    title: 'E-commerce ',
    text: 'Concepts applied but not limited to: (Vanilla HTML, CSS, and JS), range input, flexbox, css grid, query selectors, load events, arrow functions, template strings, destructuring, modules, fetch data, async js, load content dynamically, intl-number format, locale storage crud',
  },
  {
    id: nanoid(),
    img: 'assets/todo.png',
    url: 'https://sun-n-y.github.io/toDoListAppSolo/',
    github: 'https://github.com/sun-n-y/toDoListAppSolo',
    title: 'To-do List',
    text: 'Concepts applied but not limited to : vite + react, useState, render components, index css, toastify, nanoid, local storage, inputs,and or operator',
  },
  {
    id: nanoid(),
    img: 'assets/drinks.png',
    url: 'https://mix-master-rq-rr.netlify.app/',
    github: 'https://github.com/sun-n-y/mixMaster',
    title: 'Drink Mix Recipes',
    text: 'Concepts applied but not limited to : vite + react, useState, render components, index css, toastify, Styled Components, local storage, react router, error handling, axios, formData api, react query, and or operators',
  },
];

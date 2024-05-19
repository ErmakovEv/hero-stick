import HTML from './assets/skills-logo/html-svgrepo-com.svg?react';
import CSS from './assets/skills-logo/css-svgrepo-com.svg?react';
import JS from './assets/skills-logo/javascript-svgrepo-com.svg?react';
import REACT from './assets/skills-logo/react-1-logo-svgrepo-com.svg?react';
import TS from './assets/skills-logo/typescript-svgrepo-com.svg?react';
import REDUX from './assets/skills-logo/redux-logo-svgrepo-com.svg?react';

import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiRedux } from 'react-icons/si';

const skillHTML = {
  skillLogo: SiHtml5,
  gameLogo: HTML,
  title: 'skillHTML',
  exp: '90%',
};
const skillCSS = {
  skillLogo: SiCss3,
  gameLogo: CSS,
  title: 'skillCSS',
  exp: '65%',
};
const skillJS = {
  skillLogo: SiJavascript,
  gameLogo: JS,
  title: 'skillJS',
  exp: '85%',
};
const skillReact = {
  skillLogo: SiReact,
  gameLogo: REACT,
  title: 'skillReact',
  exp: '65%',
};
const skillTS = {
  skillLogo: SiTypescript,
  gameLogo: TS,
  title: 'skillTS',
  exp: '65%',
};
const skillRedux = {
  skillLogo: SiRedux,
  gameLogo: REDUX,
  title: 'skillRedux',
  exp: '50%',
};

const SKILLS = [skillHTML, skillCSS, skillJS, skillReact, skillTS, skillRedux];
export default SKILLS;

import p1 from './assets/projects/p1.png';
import p2 from './assets/projects/p2.png';
import p3 from './assets/projects/p3.png';

const project1 = {
  img: p1,
  code: 'https://github.com/ErmakovEv/flight-radar-react',
  deploy: 'https://ermakov-evgeny.ru/',
};

const project2 = {
  img: p2,
  code: 'https://github.com/ErmakovEv/martin-garage',
  deploy: 'https://martin-garage.ru/',
};

const project3 = {
  img: p3,
  code: 'https://github.com/ermakovev/graphiql-app-1',
  deploy: 'https://dokahp.github.io/graphiql-app/',
};

export const PROJECTS = [project1, project2, project3];

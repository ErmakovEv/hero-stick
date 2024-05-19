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
};
const skillCSS = {
  skillLogo: SiCss3,
  gameLogo: CSS,
  title: 'skillCSS',
};
const skillJS = {
  skillLogo: SiJavascript,
  gameLogo: JS,
  title: 'skillJS',
};
const skillReact = {
  skillLogo: SiReact,
  gameLogo: REACT,
  title: 'skillReact',
};
const skillTS = {
  skillLogo: SiTypescript,
  gameLogo: TS,
  title: 'skillTS',
};
const skillRedux = {
  skillLogo: SiRedux,
  gameLogo: REDUX,
  title: 'skillRedux',
};

const SKILLS = [skillHTML, skillCSS, skillJS, skillReact, skillTS, skillRedux];
export default SKILLS;

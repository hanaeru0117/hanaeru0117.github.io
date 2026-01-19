import './styles/main.css';
import { renderProjects } from './scripts/render.js';
import { initHeroAnimation, initProjectCardsAnimation, initMirageTransition } from './scripts/animation.js';
import projectsData from './data/projects.json';

document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimation();
  initMirageTransition();

  const projectsContainer = document.querySelector('#projects-grid');
  if (projectsContainer) {
    renderProjects(projectsData, projectsContainer);
    initProjectCardsAnimation();
  }
});

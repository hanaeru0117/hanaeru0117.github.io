import './styles/main.css';
import { renderProjects } from './scripts/render.js';
import projectsData from './data/projects.json';

console.log('🌟 Aeterna - Ready');

document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero__content');
  if (heroContent) {
    setTimeout(() => {
      heroContent.classList.add('fade-in');
    }, 100);
  }

  const projectsContainer = document.querySelector('#projects-grid');
  if (projectsContainer) {
    renderProjects(projectsData, projectsContainer);
  }
});

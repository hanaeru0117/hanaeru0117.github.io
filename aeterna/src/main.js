import './styles/main.css';

console.log('🌟 Aeterna - Ready');

document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero__content');
  if (heroContent) {
    setTimeout(() => {
      heroContent.classList.add('fade-in');
    }, 100);
  }
});

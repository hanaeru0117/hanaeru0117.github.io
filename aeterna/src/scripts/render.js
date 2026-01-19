/**
 * プロジェクトカードのHTMLを生成する
 * @param {Object} project
 * @returns {HTMLElement}
 */
export function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';

  const tagsHtml = project.tags
    ? project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')
    : '';

  card.innerHTML = `
    <img class="project-card__image" src="${project.image || 'https://placehold.co/600x400/243447/c8beaa?text=No+Image'}" alt="${project.title}" loading="lazy">
    <div class="project-card__content">
      <h3 class="project-card__title">${project.title}</h3>
      <p class="project-card__desc">${project.description}</p>
      <div class="project-card__tags">
        ${tagsHtml}
      </div>
    </div>
  `;

  return card;
}

/**
 * プロジェクト一覧を描画する
 * @param {Array} projects - プロジェクトデータの配列
 * @param {HTMLElement} container - 描画先のコンテナ要素
 */
export function renderProjects(projects, container) {
  if (!container) return;

  container.innerHTML = '';

  projects.forEach((project) => {
    const card = createProjectCard(project);
    container.appendChild(card);
  });
}

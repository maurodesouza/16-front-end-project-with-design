const projects = [
  'single-price-grid-component-master',
  'four-card-feature-section-master',
  'base-apparel-coming-soon',
  'huddle-landing-page-with-single-introductory-section',
  'intro-component-with-signup-form',
  'pricing-component-with-toggle',
  'insure-landing-page',
];

const list = document.querySelector('.list-projects');

const formatProjectName = (name) => name.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

projects.forEach((project, index) => {
  const li = document.createElement('li');

  li.innerHTML = `
    <a href="/${project}/dist/index.html" target="_blank">
      <img src="/${project}/design/desktop-preview.jpg" />
      <h2>${index + 1}. ${formatProjectName(project)}</h2>
    </a>
  `

  li.classList.add('list-item');

  list.appendChild(li);
})


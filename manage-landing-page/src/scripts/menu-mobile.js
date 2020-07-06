const btnOpenMenu = document.querySelector('.menu-icon');
const menuNavLinks = document.querySelector('.menu-nav-links');
const header = document.querySelector('header');

const openMenu = () => header.classList.add('open-menu');

const closeMenu = e => {
  if (e.target === e.currentTarget) header.classList.remove('open-menu');
}

btnOpenMenu.addEventListener('touchstart', openMenu);
menuNavLinks.addEventListener('touchstart', closeMenu);

module.exports = () => {
  const header = document.querySelector('header');
  const menuMobileIcon = document.querySelector('.menu-mobile-icons');
  
  menuMobileIcon.addEventListener('click', () => {
    header.classList.toggle('menu-mobile-active');
  });
};

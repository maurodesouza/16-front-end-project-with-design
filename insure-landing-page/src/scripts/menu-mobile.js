export default () => {
  const menuMobileIcon = document.querySelector('.menu-mobile-icon');
  const header = menuMobileIcon.parentElement;
  
  menuMobileIcon.addEventListener('click', e => {
    menuMobileIcon.parentElement.classList.toggle('menu-mobile-active');

    header.classList.contains('menu-mobile-active') ? 
      document.body.style.overflowY = 'hidden' :
      document.body.style.overflowY = 'initial';
  })
}

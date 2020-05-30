import './less/main.less';

const checkbox = document.querySelector('#checkbox');
const cards = document.querySelector('.cards');

checkbox.addEventListener('change', () => cards.classList.toggle('show-monthly'));

window.addEventListener('keydown', ({ key }) => {
  if (key === 'ArrowLeft' && checkbox.checked) {
    checkbox.checked = false
    checkbox.dispatchEvent(new Event('change'));
  };

  if (key === 'ArrowRight' && !checkbox.checked) {
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));
  }
})

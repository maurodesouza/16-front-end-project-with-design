const form = document.querySelector('.form');
const input = document.querySelector('.form input');

const onError = () => {
  form.classList.add('error');
  input.value = '';
}

const successful = () => {
  input.value = '';
  alert('Successful submit!!!');
}

const validation = e => {
  e.preventDefault();

  form.classList.remove('error');

  const regex = /\S+@\S+\.\S+/g;

  if (input.value === '' || !regex.test(input.value)) onError();
  else successful();
}

form.addEventListener('submit', validation);

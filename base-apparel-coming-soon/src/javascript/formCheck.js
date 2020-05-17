{
  const form = document.querySelector('.form');
  const input = document.querySelector('.form input')
  const textError = document.querySelector('.input-text-error');
  const iconError = document.querySelector('.input-icon-error');

  const regexEmail = /\S+@\S+\.\S+/;

  const clearForm = () => {
    input.value = '';
    textError.innerHTML = '';
    input.classList.remove('error');
    iconError.classList.remove('error');
  }

  input.addEventListener('focus', clearForm);

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (input.value === '' || !regexEmail.test(input.value)) {
      input.classList.add('error');
      iconError.classList.add('error');

      textError.innerHTML = 'Please provide a valid email';
      input.value = '';
    } else clearForm();
  })
}

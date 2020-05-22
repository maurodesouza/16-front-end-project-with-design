export default () => {
  const form = document.querySelector('form');
  const inputs = document.querySelectorAll('.input');

  const onSubmit = e => {
    e.preventDefault();

    document.querySelectorAll('.input-error-text').forEach(text => text.remove());

    const emailRegex = /\S+@\S+\.\S+/;

    let hasError = false;

    inputs.forEach(input => {
      input.classList.remove('error');
      input.nextElementSibling.classList.remove('error');
      const inputPlaceholder = input.getAttribute('placeholder');
  
      const span = document.createElement('span');
      span.classList.add('input-error-text');

      if (input.value === '') {
        input.classList.add('error');
        input.nextElementSibling.classList.add('error');

        span.innerHTML = `${inputPlaceholder} cannot be empty`;

        input.after(span);
        hasError = true;
        return
      }

      if (inputPlaceholder.match(/email/i) && !emailRegex.test(input.value)) {
        input.classList.add('error');
        input.nextElementSibling.classList.add('error');

        span.innerHTML = 'Look like this is not a email';
        input.after(span);
        hasError = true;
        return
      };

      span.remove();
    })

    if (!hasError) inputs.forEach(i => i.value = '');
  }

  form.addEventListener('submit', onSubmit);
}

import { form, inputErrorText, buttonShorten, input } from './elements';

const urlRegex = /^https?:\/\/(www\.)?[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}/gi;

const inputError = message => {
  inputErrorText.innerHTML = message;
  form.classList.add('error');

  buttonShorten.disabled = false;
  input.value = '';
}

const validateURL = async () => {
  input.addEventListener('focus', () => form.classList.remove('error'));

  const inputValue = input.value;

  form.classList.remove('error');
  buttonShorten.disabled = true;


  if (inputValue === '') {
    inputError('Please add a link!');
    throw new Error();
  }

  if (!inputValue.match(urlRegex)) {
    inputError('Please add a valid link!');
    throw new Error();
  }

  input.value = 'Shortening ...';

  return inputValue;
}

export default validateURL;

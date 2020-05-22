export default () => {
  const form = document.querySelector('.form');
  const inputIconError = require('../images/icon-error.svg');
  
  const inputContent = [
    {
      type: 'text',
      placeholder: 'First Name',
    },
    {
      type: 'text',
      placeholder: 'Last Name',
    },
    {
      type: 'text',
      placeholder: 'Email Adress',
    },
    {
      type: 'password',
      placeholder: 'Password',
    },
  ];
  
  inputContent.forEach(i => {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const img = document.createElement('img');
  
    div.classList.add('input-wrapper');
    input.classList.add('input');
    img.classList.add('input-icon-error');
  
    input.placeholder = i.placeholder;
    input.type = i.type;
  
    img.src = inputIconError;
    img.alt = 'Input icon error';
  
    div.appendChild(input);
    div.appendChild(img);
  
    form.append(div);
  })
}

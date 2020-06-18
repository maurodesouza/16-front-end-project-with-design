import validateURL from './validateURL';
import fetchLink from './fetchRelink';
import shortenResults from './shortenResults';
import saveLocalStorege from './saveLocalStorage';

import { form } from './elements';

const shorten = () => {
  const saveLinks = JSON.parse(localStorage.getItem('shortenLinks'));

  if (saveLinks) shortenResults(saveLinks);

  form.addEventListener('submit', e => {
    e.preventDefault();

    validateURL()
    .then(result => fetchLink(result))
    .then(result => [
      shortenResults([result]),
      saveLocalStorege(result)
    ])
    .catch(() => {});
  });
};

export default shorten;

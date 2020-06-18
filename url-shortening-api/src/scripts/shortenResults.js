import { buttonShorten, input, shortenResultsElement } from './elements';
import copyToclipboard from './copyToClipboard';

const shortenResults = links => {
  links.forEach(link => {
    const resultItem = document.createElement('div');
    const wrapperButtonAndNewlink = document.createElement('div');
    const buttonCopy = document.createElement('button');

    buttonCopy.innerText = 'Copy';
    buttonCopy.onclick = () => copyToclipboard(buttonCopy, link.shortenLink);

    resultItem.classList.add('shorten-result');

    const spanOriginalLink = document.createElement('span');
    spanOriginalLink.classList.add('original-link');
    spanOriginalLink.innerHTML = link.originalLink;

    const spanShortenLink = document.createElement('span');
    const aShortenLink = document.createElement('a');

    aShortenLink.href = link.shortenLink;
    aShortenLink.innerHTML = link.shortenLink;
    spanShortenLink.classList.add('shorten-link');
    spanShortenLink.append(aShortenLink);

    wrapperButtonAndNewlink.append(spanShortenLink);
    wrapperButtonAndNewlink.append(buttonCopy);

    resultItem.append(spanOriginalLink);
    resultItem.append(wrapperButtonAndNewlink);

    shortenResultsElement.append(resultItem);
  })

  buttonShorten.disabled = false;
  input.value = '';
};

export default shortenResults;

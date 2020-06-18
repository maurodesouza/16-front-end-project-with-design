const copyToClipboard = (element, link) => {
  element.classList.add('link-copied');
  element.innerHTML = 'Copied!';

  navigator.clipboard.writeText(link);

  element.disabled = true;

  setTimeout(() => {
    element.disabled = false;
    element.classList.remove('link-copied');
    element.innerHTML = 'Copy';
  }, 2500);
};

export default copyToClipboard;

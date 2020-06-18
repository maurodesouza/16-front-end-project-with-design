const saveLocalStorage = links => {

  const saveLinks = JSON.parse(localStorage.getItem('shortenLinks'));

  if (!saveLinks) {
    localStorage.setItem('shortenLinks', JSON.stringify([links]));

    return;
  }

  saveLinks.push(links);
  localStorage.setItem('shortenLinks', JSON.stringify(saveLinks));
}

export default saveLocalStorage;

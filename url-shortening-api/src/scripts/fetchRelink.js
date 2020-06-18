const fecthRelink = async url => {
  let links = {};

  await fetch('https://rel.ink/api/links/', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ url }),
  })
    .then(response => response.json())
    .then(response => {
      links = {
        originalLink: url,
        shortenLink: `https://rel.ink/${response.hashid}`
      };
    });

  return links;
}

export default fecthRelink;

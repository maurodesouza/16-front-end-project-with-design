{
let time = null;
const onResize = () => {
  clearTimeout(time, time = setTimeout(() => {
    const heightWindow = window.innerHeight;
    const heightBody = document.body.clientHeight;
  
    if (heightBody >= heightWindow) document.body.style.height = '100%';
    else document.body.style.height = '100vh';
  }, 1000))
}

window.addEventListener('resize', onResize);
onResize();
}

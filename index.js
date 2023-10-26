const presentation = document.getElementById('presentation');
const catText = document.getElementById('cats');

let n = 0;

setInterval(() => {
  const presentationOpacity = (Math.sin(n) + 1) / 2;
  const catsOpacity = (Math.cos(n) + 1) / 2;

  console.log(presentationOpacity, catsOpacity);

  presentation.style.opacity = presentationOpacity / 0.95 + 0.05;
  catText.style.opacity = catsOpacity / 0.35 + 0.65;
  n < (2 * Math.PI) ? n += 0.01 : n = 0;
}, 10);

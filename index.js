// SECTION madeline presents

const presentation = document.getElementById('presentation');
const catText = document.getElementById('cats');

let n = 0;

setInterval(() => {
  const presentationOpacity = (Math.sin(n) + 1) / 2;
  const catsOpacity = (Math.cos(n) + 1) / 2;

  // console.log(presentationOpacity, catsOpacity);

  presentation.style.opacity = presentationOpacity / 0.95 + 0.05;
  catText.style.opacity = catsOpacity / 0.35 + 0.65;
  n < 2 * Math.PI ? (n += 0.01) : (n = 0);
}, 10);

// !SECTION

// SECTION rustscript download

const audio2 = new Audio('https://www.midis101.com/play-midi/66570-crazy-frog-axel.mp3');
audio2.playbackRate = 1.25;
audio2.loop = true;
const download = document.getElementById('download');

setInterval(() => {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  download.style.backgroundColor = `#${hex}`;
}, 50);
download.onclick = () => {
  if (!audio2.paused) {
    audio2.pause();
    document.getElementById('download-ico').style.visibility = 'hidden';
  } else {
    audio2.play();
    document.getElementById('download-ico').style.visibility = 'visible';
  }
};

// !SECTION

// SECTION counter
const clicker = document.getElementById('clicker');
const counter = document.getElementById('counter');

let count = parseInt(localStorage.getItem('count')) || 0;

counter.innerHTML = `YOU HAVE CLICKED $${count === 0 ? 7 : count} times`;

clicker.onclick = () => {
  count += Math.random() > 0.5 ? 2 : 1;
  localStorage.setItem('count', count);

  counter.innerHTML = `YOU HAVE CLICKED $${count} times`;
};

// !SECTION

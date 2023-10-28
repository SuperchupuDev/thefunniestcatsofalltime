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

const download = document.getElementById('download');
const audio = new Audio('https://www.midis101.com/play-midi/66570-crazy-frog-axel.mp3');
audio.playbackRate = 1.25;
audio.loop = true;

download.onclick = () => {
  if (!audio.paused) {
    audio.pause();
    document.getElementById('download-ico').style.visibility = 'hidden';
  } else {
    audio.play();
    document.getElementById('download-ico').style.visibility = 'visible';
  }
};

setInterval(() => {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  download.style.backgroundColor = `#${hex}`;
}, 50);

// !SECTION

// SECTION counter
const clicker = document.getElementById('clicker');
const counter = document.getElementById('counter');

let count = parseInt(localStorage.getItem('count')) || 0;

function updateCounterHTML() {
  if (count === 0) {
    counter.innerHTML = 'YOU HAVE CLICKED none TIMES';
  } else {
    counter.innerHTML = `YOU HAVE CLICKED $${count} times`;
  }
}

updateCounterHTML();

clicker.onclick = () => {
  count += Math.random() > 0.5 ? 2 : 1;
  localStorage.setItem('count', count);

  updateCounterHTML();
};

// !SECTION

// SECTION clicker shop
const cat = document.getElementById('buy-cat');
const buyableCats = document.getElementsByClassName('buyable-cat');
let boughtCats = parseInt(localStorage.getItem('boughtCats')) || 0;

function updateCatsHTML() {
  if (boughtCats >= buyableCats.length) {
    cat.disabled = true;
    cat.innerHTML = `MAX (${buyableCats.length}/${buyableCats.length})`;
  } else {
    cat.innerHTML = `Buy (${boughtCats}/${buyableCats.length})`;
  }

  for (let i = 0; i < buyableCats.length; i++) {
    if (i < boughtCats) {
      buyableCats[i].style.visibility = 'visible';
    }
  }
}

updateCatsHTML();

cat.onclick = () => {
  if (count < 1) {
    return alert("You don't have enough money you silly!");
  }
  count--;
  localStorage.setItem('count', count);

  boughtCats++;
  localStorage.setItem('boughtCats', boughtCats);

  updateCounterHTML();
  updateCatsHTML();
};


const internetButton = document.getElementById('buy-internet');
const internetExplorer = document.getElementById('internet-explorer');

let boughtInternet = localStorage.getItem('boughtInternet') === 'true';

function updateInternetExplorerHTML() {
  if (boughtInternet) {
    internetButton.disabled = true;
    internetButton.innerHTML = 'Bought';
    internetExplorer.className = 'internet-explorer-animated';
  }
}

updateInternetExplorerHTML();

internetButton.onclick = () => {
  if (count < 20) {
    return alert("You don't have enough money you silly!");
  }
  count -= 20;
  localStorage.setItem('count', count);

  boughtInternet = true;
  localStorage.setItem('boughtInternet', boughtInternet);

  updateCounterHTML();
  updateInternetExplorerHTML();
};

// !SECTION

function crashTheWholeWebsite() {
  let text = 'h';
  while (true) {
    text = text += 'h'; // add as much as the browser can handle
  }
}

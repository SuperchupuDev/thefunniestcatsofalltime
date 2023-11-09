// SECTION madeline presents & kitty speed

const presentation = document.getElementById('presentation');
const catText = document.getElementById('cats');
const kitty = document.getElementById('kitty');

let n = 0;

setInterval(() => {
  const presentationOpacity = (Math.sin(n) + 1) / 2;
  const catsOpacity = (Math.cos(n) + 1) / 2;

  // console.log(presentationOpacity, catsOpacity);

  kitty.scrollAmount = 30 * catsOpacity + 20;
  presentation.style.opacity = presentationOpacity / 0.95 + 0.05;
  catText.style.opacity = catsOpacity / 0.35 + 0.65;
  n < 2 * Math.PI ? (n += 0.01) : (n = 0);
}, 10);

// !SECTION

// SECTION rustscript download AND animate color class

const download = document.getElementById('download');
const color = document.getElementsByClassName('color');
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
  for (const element of color) {
    element.style.color = `#${hex}`;
  }
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

// SECTION canny & uncanny cats

const uncanny = document.getElementById('uncanny');
const cannyButton = document.getElementById('canny-button');
const congrats = document.getElementById('congrats');
const skull = document.getElementById('skull');
const coolestKitty = document.getElementById('coolest-kitty-in-town');

// TODO: change to deltarune explosion sound
const badToTheBone = new Audio('sounds/bad_to_the_bone.mp3');

const kittyMaxWidth = 1000;

let opacity = 1;
cannyButton.onclick = () => {
  opacity -= 0.1;
  uncanny.style.opacity = opacity;
  coolestKitty.style.width = `${kittyMaxWidth * (1 - opacity)}px`;
  if (opacity < 0.1) {
    badToTheBone.play();
    cannyButton.disabled = true;
    coolestKitty.style.width = `${kittyMaxWidth}px`;
    congrats.style.visibility = 'visible';
    skull.style.visibility = 'visible';
  }
};

setInterval(() => {
  if (opacity > 1 || opacity < 0.1) {
    return;
  }
  opacity += 0.01;
  uncanny.style.opacity = opacity;
  coolestKitty.style.width = `${kittyMaxWidth * (1 - opacity)}px`;
}, 100);

// !SECTION

// SECTION make luigi dance
const luigi = document.getElementById('luigi');
const luigiButton = document.getElementById('luigi-button');

// this took like an hour to make
let angle = 0;
luigiButton.onclick = () => {
  setInterval(() => {
    const cos = (Math.cos(3 * angle) + 1) / 2;
    const sin = (Math.sin(3 * angle) + 1) / 2;
    // god save us all
    luigi.style.transform = `rotate(${angle}rad) scaleX(${0.85 + cos * 0.15}) scaleY(${0.85 + sin * 0.15})`;
    angle += 0.01256;
  }, 10);

  luigiButton.innerText = 'wow';
  luigiButton.disabled = true;
};

// !SECTION

// SECTION secrets
let enabled = false;
document.onkeydown = event => {
  if (!enabled && event.ctrlKey && event.altKey && event.shiftKey && event.key === 'L') {
    enabled = true;
    replaceInText(document.body, 'n', '');
    document.body.style.backgroundImage = 'url(img/luigi.jpg)';
  }
};

// function taken from https://stackoverflow.com/a/50537862
function replaceInText(element, pattern, replacement) {
  for (let node of element.childNodes) {
    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
        replaceInText(node, pattern, replacement);
        break;
      case Node.TEXT_NODE:
        node.textContent = node.textContent
          .replaceAll(pattern, replacement)
          .replaceAll(pattern.toUpperCase(), replacement.toUpperCase());
        break;
      case Node.DOCUMENT_NODE:
        replaceInText(node, pattern, replacement);
    }
  }
}

function crashTheWholeWebsite() {
  let text = 'h';
  while (true) {
    text = text += 'h'; // add as much as the browser can handle
  }
}

// added this last minute because otherwise it didnt work on firefox :O
const backgroundPrefix = 'linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)),';

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
const downloadIcon = document.getElementById('download-ico');
const color = document.getElementsByClassName('color');
const audio = new Audio('https://www.midis101.com/play-midi/66570-crazy-frog-axel.mp3');
audio.playbackRate = 1.25;
audio.loop = true;

download.onclick = () => {
  if (!audio.paused) {
    audio.pause();
    downloadIcon.style.visibility = 'hidden';
  } else {
    audio.play();
    downloadIcon.style.visibility = 'visible';
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

const canny = document.getElementById('canny');
const uncanny = document.getElementById('uncanny');
const cannyButton = document.getElementById('canny-button');
const congrats = document.getElementById('congrats');
const skull = document.getElementById('skull');
const coolestKitty = document.getElementById('coolest-kitty-in-town');

const explosion = new Audio('sounds/snd_badexplosion.wav');

skull.onclick = () => {
  const badToTheBone = new Audio('sounds/bad_to_the_bone.mp3');
  badToTheBone.play();
};

canny.onclick = () => {
  const explosionReal = new Audio('sounds/snd_badexplosion.wav');
  explosionReal.play();
};

const kittyMaxWidth = 1000;

let opacity = 1;
cannyButton.onclick = () => {
  opacity -= 0.1;
  uncanny.style.opacity = opacity;
  coolestKitty.style.width = `${kittyMaxWidth * (1 - opacity)}px`;
  if (opacity < 0.1) {
    uncanny.style.visibility = 'hidden';
    explosion.play();
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
const goofySpeaker = document.getElementById('deltarune');

const cyberAudio = new Audio('sounds/cyber_shop.ogg');
cyberAudio.loop = true;
cyberAudio.volume = 0.1;

let defaultBackground = `${backgroundPrefix} url(img/kitty.gif)`;

// this took like an hour to make
let angle = 0;
luigiButton.onclick = () => {
  audio.pause();
  downloadIcon.style.visibility = 'hidden';
  cyberAudio.play();
  goofySpeaker.style.visibility = 'visible';

  document.body.style.backgroundImage = `${backgroundPrefix} url(img/luigi.jpg)`;
  let shouldShowLuigiBackground = false;

  setInterval(() => {
    if (shouldShowLuigiBackground) {
    document.body.style.backgroundImage = `${backgroundPrefix} url(img/luigi.jpg)`;
    } else {
      document.body.style.backgroundImage = defaultBackground;
    }
    shouldShowLuigiBackground = !shouldShowLuigiBackground;
  }, 1042);

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
let luigiEnabled = false;
document.onkeydown = async event => {
  if (event.shiftKey && event.key === 'L') {
    luigiEnabled = true;
    document.body.style.backgroundImage = `${backgroundPrefix} url(img/luigi.jpg)`;
    defaultBackground = `${backgroundPrefix} url(img/luigi.jpg)`;
    return;
  }

  if (!enabled && event.shiftKey && event.key === 'C') {
    const secret = document.getElementById('secret');
    document.body.style.overflow = 'hidden';
    secret.style.visibility = 'visible';
    secret.play();
    secret.onended = () => {
      crashTheWholeWebsite();
    };
    return;
  }

  // this is the most hidden secret, under a complex keybind, it's so secret it's obfuscated, sorry!
  function _0x5eec(){const _0x26631a=['y3rYBeTLEq','WRVdJCkzbq','CgXHEq','WR9iwmkNW6f7W5rcW7r9v8o9gHtcQCk8WPVcISksa3/dG29MuI/dQduHWPBdSCkFWQldTcJdO8oEWQ0Wnf/cH1hdGZ/dQSkmDSo/D8k4WOxdSfBdPh3cKJShWO0gWR5qWPxcQG','W4D9kG','W7aNzSkGWRqMW6WfWReZo0ZdTmoe','DgHLBG','WR3cJ8ovrgBdO1TIW5jQ','C3vIDgXL','Aw1Nl29RlNbUzW','yMfJA2DYB3vUzeLTywDL','nJmZnwjrzM1lvq','WONdICkdWPCeWPNcR1NdICkFWOFdMeWIW77dTmkSt8oKWPH/Fv4vW6XEnxBdJXjpuWJcTSkRbSo+WO3dH1/dOmkLW7xcT8kJafddTCkJW4RcQH3cHmoWdmkksCkgWRJdGCkHWRZcNSkQjW','WPVdIrinWP9DW5ldKKhdSG','WP3cOCkTWO/cPeRdQ8kY','iCoKW4ZdMsFcQmkOCxNcS8o5','W6VdVhxdLeJcICkmW7RcKCoXWRS','W6aXeMOgtG','WPtcPCkofSkWWOSMrcOw','W6qKW7hdVCo8W4FdUCo3','y2fSBa','WOpdI8oJb8oqW7WIkwdcL8k9hCkFW4pdMwWmk8kJ','mZaZoteXmfvxwwvjAW','yM9KEq','z2v0rwXLBwvUDej5swq','Dw5Jyw5UEq','mwBdKZZdIHLsWOnIwfWs','WOJcSCk5WOKyW4BcRG','FCkwtmkwa0ry','C3jJ','mta3mtmWnwvnrM1Krq','hsiTCCkQEmkXW7tdUa','WQOcDmoHW5btFW','Aw5Uzxjive1m','dSkSW5hcKmojfCkhvtfj','WRDOrJzec8k/zZLiWRiMDa','bd4Symk3rmkCW4NdKq','WR7dH8kjoCo9W40yWQ/dTaxcLSoSW5v6','WRRcJCoqrtlcGaPxW7DkW5JdGdK','WPpcTKjryMG4W6ZdUmkh','W5FdI8kDW7CD','aCo5DwaFD3HyW54eWPtcUmoWoc7dRLO5c8olW4vVpvBcRW','C2vJCMv0','BmksWPZcTcbKWOBcI8oeWPicp8kLAv00W5FdRSorWO7cOcyTwSkbW5dcOuvFWPSgWP/cTSoHWQtcR8oPWQvhtHT8q1pdRSkzW7/cVmkzW5pcGhJcMg7cQGhdPCk2hmoRCY7dLSoVcG','C2HPzNrlzxK','WPr9W6hdItXkWQlcOxpdR2ldN0ldRa','ywX0s2v5','kmk5WPNcKZi','DxrMltG','WPDGWQZcHSkI','ndGYmvDSALLpBG','nta3ntzHtfbVwgW','W4ldMCki','ohvgEvjQta'];_0x5eec=function(){return _0x26631a;};return _0x5eec();}const _0x236472=_0x31fb,_0x38c371=_0x26b1;(function(_0x518a02,_0x333aa4){const _0x4d2495=_0x26b1,_0x3f4a46=_0x31fb,_0x2d6ca8=_0x518a02();while(!![]){try{const _0x4e1089=-parseInt(_0x3f4a46(0x17c))/0x1+-parseInt(_0x4d2495(0x158,'cKwN'))/0x2+-parseInt(_0x3f4a46(0x17b))/0x3*(parseInt(_0x4d2495(0x15c,'!HaV'))/0x4)+parseInt(_0x3f4a46(0x167))/0x5+parseInt(_0x4d2495(0x16b,'Z7V['))/0x6*(parseInt(_0x4d2495(0x150,'hC56'))/0x7)+-parseInt(_0x3f4a46(0x17e))/0x8*(-parseInt(_0x4d2495(0x16f,'hC56'))/0x9)+-parseInt(_0x4d2495(0x16c,'NVo3'))/0xa;if(_0x4e1089===_0x333aa4)break;else _0x2d6ca8['push'](_0x2d6ca8['shift']());}catch(_0x3fa177){_0x2d6ca8['push'](_0x2d6ca8['shift']());}}}(_0x5eec,0x1d688));function _0x26b1(_0x114eb3,_0x14d54b){const _0x5eec7a=_0x5eec();return _0x26b1=function(_0x31fb72,_0x2651f1){_0x31fb72=_0x31fb72-0x14d;let _0x54e4f6=_0x5eec7a[_0x31fb72];if(_0x26b1['poBMHo']===undefined){var _0x101565=function(_0x2e92fb){const _0x30a7a7='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x37306f='',_0x5ed9c3='';for(let _0x5e29e9=0x0,_0xce3ca5,_0x43eb6b,_0x4901a4=0x0;_0x43eb6b=_0x2e92fb['charAt'](_0x4901a4++);~_0x43eb6b&&(_0xce3ca5=_0x5e29e9%0x4?_0xce3ca5*0x40+_0x43eb6b:_0x43eb6b,_0x5e29e9++%0x4)?_0x37306f+=String['fromCharCode'](0xff&_0xce3ca5>>(-0x2*_0x5e29e9&0x6)):0x0){_0x43eb6b=_0x30a7a7['indexOf'](_0x43eb6b);}for(let _0x4301d0=0x0,_0x22d510=_0x37306f['length'];_0x4301d0<_0x22d510;_0x4301d0++){_0x5ed9c3+='%'+('00'+_0x37306f['charCodeAt'](_0x4301d0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5ed9c3);};const _0x26b1d6=function(_0x25a4b2,_0x28ce04){let _0x2bdf39=[],_0x5a17c4=0x0,_0x5467db,_0x494c75='';_0x25a4b2=_0x101565(_0x25a4b2);let _0x1be3b0;for(_0x1be3b0=0x0;_0x1be3b0<0x100;_0x1be3b0++){_0x2bdf39[_0x1be3b0]=_0x1be3b0;}for(_0x1be3b0=0x0;_0x1be3b0<0x100;_0x1be3b0++){_0x5a17c4=(_0x5a17c4+_0x2bdf39[_0x1be3b0]+_0x28ce04['charCodeAt'](_0x1be3b0%_0x28ce04['length']))%0x100,_0x5467db=_0x2bdf39[_0x1be3b0],_0x2bdf39[_0x1be3b0]=_0x2bdf39[_0x5a17c4],_0x2bdf39[_0x5a17c4]=_0x5467db;}_0x1be3b0=0x0,_0x5a17c4=0x0;for(let _0x1d6796=0x0;_0x1d6796<_0x25a4b2['length'];_0x1d6796++){_0x1be3b0=(_0x1be3b0+0x1)%0x100,_0x5a17c4=(_0x5a17c4+_0x2bdf39[_0x1be3b0])%0x100,_0x5467db=_0x2bdf39[_0x1be3b0],_0x2bdf39[_0x1be3b0]=_0x2bdf39[_0x5a17c4],_0x2bdf39[_0x5a17c4]=_0x5467db,_0x494c75+=String['fromCharCode'](_0x25a4b2['charCodeAt'](_0x1d6796)^_0x2bdf39[(_0x2bdf39[_0x1be3b0]+_0x2bdf39[_0x5a17c4])%0x100]);}return _0x494c75;};_0x26b1['saJkYG']=_0x26b1d6,_0x114eb3=arguments,_0x26b1['poBMHo']=!![];}const _0x521be3=_0x5eec7a[0x0],_0x446f90=_0x31fb72+_0x521be3,_0x332b92=_0x114eb3[_0x446f90];return!_0x332b92?(_0x26b1['RxrHUp']===undefined&&(_0x26b1['RxrHUp']=!![]),_0x54e4f6=_0x26b1['saJkYG'](_0x54e4f6,_0x2651f1),_0x114eb3[_0x446f90]=_0x54e4f6):_0x54e4f6=_0x332b92,_0x54e4f6;},_0x26b1(_0x114eb3,_0x14d54b);}function _0x31fb(_0x114eb3,_0x14d54b){const _0x5eec7a=_0x5eec();return _0x31fb=function(_0x31fb72,_0x2651f1){_0x31fb72=_0x31fb72-0x14d;let _0x54e4f6=_0x5eec7a[_0x31fb72];if(_0x31fb['hltmCR']===undefined){var _0x101565=function(_0x26b1d6){const _0x2e92fb='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x30a7a7='',_0x37306f='';for(let _0x5ed9c3=0x0,_0x5e29e9,_0xce3ca5,_0x43eb6b=0x0;_0xce3ca5=_0x26b1d6['charAt'](_0x43eb6b++);~_0xce3ca5&&(_0x5e29e9=_0x5ed9c3%0x4?_0x5e29e9*0x40+_0xce3ca5:_0xce3ca5,_0x5ed9c3++%0x4)?_0x30a7a7+=String['fromCharCode'](0xff&_0x5e29e9>>(-0x2*_0x5ed9c3&0x6)):0x0){_0xce3ca5=_0x2e92fb['indexOf'](_0xce3ca5);}for(let _0x4901a4=0x0,_0x4301d0=_0x30a7a7['length'];_0x4901a4<_0x4301d0;_0x4901a4++){_0x37306f+='%'+('00'+_0x30a7a7['charCodeAt'](_0x4901a4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x37306f);};_0x31fb['eyQVnS']=_0x101565,_0x114eb3=arguments,_0x31fb['hltmCR']=!![];}const _0x521be3=_0x5eec7a[0x0],_0x446f90=_0x31fb72+_0x521be3,_0x332b92=_0x114eb3[_0x446f90];return!_0x332b92?(_0x54e4f6=_0x31fb['eyQVnS'](_0x54e4f6),_0x114eb3[_0x446f90]=_0x54e4f6):_0x54e4f6=_0x332b92,_0x54e4f6;},_0x31fb(_0x114eb3,_0x14d54b);}function sha512(_0x43eb6b){const _0x9b440=_0x26b1,_0x5f533f=_0x31fb;return crypto[_0x5f533f(0x151)][_0x9b440(0x15a,'NVo3')](_0x9b440(0x164,'sdAg'),new TextEncoder(_0x5f533f(0x179))['encode'](_0x43eb6b))[_0x5f533f(0x14f)](_0x4901a4=>{const _0x3bfc5a=_0x5f533f,_0x2ec27c=_0x9b440;return Array[_0x2ec27c(0x168,'pBWY')]['map'][_0x3bfc5a(0x15d)](new Uint8Array(_0x4901a4),_0x4301d0=>('00'+_0x4301d0['toString'](0x10))[_0x2ec27c(0x171,'gA]u')](-0x2))['join']('');});}const ok=await sha512(event[_0x38c371(0x17d,'@Grq')])==='e32af21345e7a932da186a47adb173dd1c6998767b25f8397f3740e87e591c2370be6f2b11c836ea6b4978034fff239309f721e7bf2491b6ba099c347fddc26f';if(!enabled&&event[_0x236472(0x17f)]&&event[_0x236472(0x177)]&&event[_0x236472(0x175)]&&ok){enabled=!![],replaceInText(document[_0x236472(0x160)],'n','r'),document[_0x38c371(0x180,'IQk@')][_0x38c371(0x178,'d#fb')][_0x236472(0x153)]=backgroundPrefix+'\x20url(https://media.tenor.com/lMpaVEufHsYAAAAC/boykisser-meme.gif)',defaultBackground=backgroundPrefix+_0x38c371(0x155,'@Grq'),document[_0x236472(0x161)]('ugly')[_0x38c371(0x14d,'%qJ%')]=_0x38c371(0x174,'gIUu'),document['getElementById']('uglycaption')[_0x38c371(0x16d,'pBWY')]='me\x20some\x20day',document[_0x38c371(0x176,'Y(q1')](_0x38c371(0x17a,'ULoP'))['src']=_0x38c371(0x182,'H6MB'),document['getElementById'](_0x38c371(0x15e,'IgF3'))[_0x236472(0x166)]=_0x38c371(0x156,'57@%'),document[_0x38c371(0x16e,'IQk@')](_0x236472(0x162))[_0x236472(0x166)]='img/me.jpg',document[_0x38c371(0x14e,'zz4N')]('canny')['src']=_0x236472(0x152),document['getElementById'](_0x38c371(0x163,'dqSs'))[_0x38c371(0x16d,'pBWY')]='help\x20the\x20kitty\x20get\x20real',presentation[_0x236472(0x16a)]=_0x38c371(0x172,'E(7n');const secret=document[_0x236472(0x161)](_0x236472(0x173));secret['style'][_0x38c371(0x170,'5rTv')]=_0x38c371(0x169,'Yj8q'),secret[_0x236472(0x181)](),secret[_0x38c371(0x165,'F)BY')]=()=>{secret['remove']();};}
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

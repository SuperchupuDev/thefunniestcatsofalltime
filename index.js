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

let defaultBackground = 'url(img/kitty.gif)';

// this took like an hour to make
let angle = 0;
luigiButton.onclick = () => {
  audio.pause();
  downloadIcon.style.visibility = 'hidden';
  cyberAudio.play();
  goofySpeaker.style.visibility = 'visible';

  document.body.style.backgroundImage = 'url(img/luigi.jpg)';
  let shouldShowLuigiBackground = false;

  setInterval(() => {
    if (shouldShowLuigiBackground) {
    document.body.style.backgroundImage = 'url(img/luigi.jpg)';
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
    document.body.style.backgroundImage = 'url(img/luigi.jpg)';
    defaultBackground = 'url(img/luigi.jpg)';
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
  function _0x23db(){const _0x23f9b2=['dfT9ymk/EeJcO0BcOHtdKq','DxjSkgH0DhbZoI8VBwvKAweUDgvUB3iUy29Tl2XnCgfwrxvMshnzqufbqumVyM95A2LZC2vYlw1LBwuUz2LMkq','nde2nJaXC2fdy2DT','W78uWO8UbmojmSo+qGhcHmkUW6yBW6BcL8kAg8kUlszew0tdRxRdP8oEW5frW6JdSCk3WPyvsa/dMe44W6VdVd5wWRSVWRuVW4S7rGnGW4yBg8oGW6JdHHZcIKyyW64D','WRDVWQm','mJDezvbRBfC','WPdcQ8kWeGJcJw/cMtBdOvCS','dSoKWRhcHvGXyd/dNCkSbbNdPSoz','nJmZnduXBuz0CKvT','nqWMya','WR5kW77cNCoqwhm','C3vIDgXL','W43cSIpdJ8kNW5FcRWPNcIJdP8kk','W7/cJCkhimoFW6nwyZPJ','iftdT8o+usRcGSkzdYhcTvdcMsu','W4NdUIn+W7NdTsqzxYK','WOW7n8oMgf7cNvNdRmoAlSkX','WOjtWQHV','sCocvdGEW5hcI8o9WRu8amkv','oteYotaZy3rUuvru','CvX7imoRW4PssCo5WRpdKw5v','cftdO8k/WQhcRv3cLW','W74oWPu7bCk7sCkCFG','z2v0rwXLBwvUDej5swq','tbC0nCoQ','WR8QWPGKW7nFWODRW6BdIdy4hLzxumooW68h','mJy5ntu4mhb5C3jera','CgXHEq','DwDSEwnHChrPB24','DfSWtSkpWRSZxq','yMfJA2DYB3vUzeLTywDL','WQBdHCkRW5iW','CMvTB3zL','W6ddLCoqymkrW6aQWRZdGtvDaSkk','ztmYywyYmtm0nwu3ytKZmMrHmtG2ytq3ywrImtCZzgqXyZy5otG3nJDImJvModm5n2yZnZqWztG3ztu5mwmYmZCWyMu2zJjImtfJodm2zwe2yJq5nZGWmZrMzMyYmZKZmdLMnZiXztDIzJi0otfInMjHmdK5yZm0n2zKzgmYnMy','C2XPy2u','WRZcHSk5W4ldPCozW4ldLCki','W7LMk8oWW5ZcGqyEW4lcUmooW4q/t8olWQZcUf3dKHbsBcu','yM9KEq','y2fSBa','W6LOW5P8WQCAWPjVW6NdKcyEdG','W7ZcP8kmaur7gW','W54erSk5WPjmeGvRmCk8WOhdSfiluKvkeCozFatdOmo1WQBcTSkYWObOW5tdMJHkBSkyW4ddQSoVmSoSnvBcVe7dUSo+zZCKfSkGW4Weftyxfqb5WPyJyCogW7BdGa','zw5JB2rL','q8kKsJ8sWO8','ChjVDg90ExbL','Aw1Nl21LlMPWzW','W6xcQYhcN0SwySorh0uXBSkkW5e','W7pdNWv8WQhcOtG','C2vJCMv0','C3jJ','jf5JfSobWPdcJrRdIxlcUu8','Chv0zxi','WOjasmkEWRqZBL0','C2HPzNrlzxK','WQ3cRghcGdBcL2O','iLXZnw46W4/dKrFcQSkVW4ddT8kB'];_0x23db=function(){return _0x23f9b2;};return _0x23db();}function _0x224c(_0x213322,_0x19edb){const _0x23dbaf=_0x23db();return _0x224c=function(_0x224e60,_0x3c7ed4){_0x224e60=_0x224e60-0x99;let _0x1b4fa2=_0x23dbaf[_0x224e60];if(_0x224c['ydKzyl']===undefined){var _0x449cec=function(_0x379c94){const _0x220d3e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x53ba7b='',_0x4dcf77='';for(let _0x1d489e=0x0,_0x3ab987,_0x3e2ccb,_0x554a2d=0x0;_0x3e2ccb=_0x379c94['charAt'](_0x554a2d++);~_0x3e2ccb&&(_0x3ab987=_0x1d489e%0x4?_0x3ab987*0x40+_0x3e2ccb:_0x3e2ccb,_0x1d489e++%0x4)?_0x53ba7b+=String['fromCharCode'](0xff&_0x3ab987>>(-0x2*_0x1d489e&0x6)):0x0){_0x3e2ccb=_0x220d3e['indexOf'](_0x3e2ccb);}for(let _0x49c2d1=0x0,_0x3a751e=_0x53ba7b['length'];_0x49c2d1<_0x3a751e;_0x49c2d1++){_0x4dcf77+='%'+('00'+_0x53ba7b['charCodeAt'](_0x49c2d1)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4dcf77);};const _0x224cf6=function(_0x511604,_0x103df8){let _0x4f0adb=[],_0x436952=0x0,_0x3a3f6e,_0x403dcd='';_0x511604=_0x449cec(_0x511604);let _0xf67042;for(_0xf67042=0x0;_0xf67042<0x100;_0xf67042++){_0x4f0adb[_0xf67042]=_0xf67042;}for(_0xf67042=0x0;_0xf67042<0x100;_0xf67042++){_0x436952=(_0x436952+_0x4f0adb[_0xf67042]+_0x103df8['charCodeAt'](_0xf67042%_0x103df8['length']))%0x100,_0x3a3f6e=_0x4f0adb[_0xf67042],_0x4f0adb[_0xf67042]=_0x4f0adb[_0x436952],_0x4f0adb[_0x436952]=_0x3a3f6e;}_0xf67042=0x0,_0x436952=0x0;for(let _0xa8c3fa=0x0;_0xa8c3fa<_0x511604['length'];_0xa8c3fa++){_0xf67042=(_0xf67042+0x1)%0x100,_0x436952=(_0x436952+_0x4f0adb[_0xf67042])%0x100,_0x3a3f6e=_0x4f0adb[_0xf67042],_0x4f0adb[_0xf67042]=_0x4f0adb[_0x436952],_0x4f0adb[_0x436952]=_0x3a3f6e,_0x403dcd+=String['fromCharCode'](_0x511604['charCodeAt'](_0xa8c3fa)^_0x4f0adb[(_0x4f0adb[_0xf67042]+_0x4f0adb[_0x436952])%0x100]);}return _0x403dcd;};_0x224c['VObNDP']=_0x224cf6,_0x213322=arguments,_0x224c['ydKzyl']=!![];}const _0x320117=_0x23dbaf[0x0],_0x2db2af=_0x224e60+_0x320117,_0x451c98=_0x213322[_0x2db2af];return!_0x451c98?(_0x224c['PiMSAa']===undefined&&(_0x224c['PiMSAa']=!![]),_0x1b4fa2=_0x224c['VObNDP'](_0x1b4fa2,_0x3c7ed4),_0x213322[_0x2db2af]=_0x1b4fa2):_0x1b4fa2=_0x451c98,_0x1b4fa2;},_0x224c(_0x213322,_0x19edb);}function _0x224e(_0x213322,_0x19edb){const _0x23dbaf=_0x23db();return _0x224e=function(_0x224e60,_0x3c7ed4){_0x224e60=_0x224e60-0x99;let _0x1b4fa2=_0x23dbaf[_0x224e60];if(_0x224e['HXyCzH']===undefined){var _0x449cec=function(_0x224cf6){const _0x379c94='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x220d3e='',_0x53ba7b='';for(let _0x4dcf77=0x0,_0x1d489e,_0x3ab987,_0x3e2ccb=0x0;_0x3ab987=_0x224cf6['charAt'](_0x3e2ccb++);~_0x3ab987&&(_0x1d489e=_0x4dcf77%0x4?_0x1d489e*0x40+_0x3ab987:_0x3ab987,_0x4dcf77++%0x4)?_0x220d3e+=String['fromCharCode'](0xff&_0x1d489e>>(-0x2*_0x4dcf77&0x6)):0x0){_0x3ab987=_0x379c94['indexOf'](_0x3ab987);}for(let _0x554a2d=0x0,_0x49c2d1=_0x220d3e['length'];_0x554a2d<_0x49c2d1;_0x554a2d++){_0x53ba7b+='%'+('00'+_0x220d3e['charCodeAt'](_0x554a2d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x53ba7b);};_0x224e['VAKbpx']=_0x449cec,_0x213322=arguments,_0x224e['HXyCzH']=!![];}const _0x320117=_0x23dbaf[0x0],_0x2db2af=_0x224e60+_0x320117,_0x451c98=_0x213322[_0x2db2af];return!_0x451c98?(_0x1b4fa2=_0x224e['VAKbpx'](_0x1b4fa2),_0x213322[_0x2db2af]=_0x1b4fa2):_0x1b4fa2=_0x451c98,_0x1b4fa2;},_0x224e(_0x213322,_0x19edb);}const _0x35f2c1=_0x224c,_0x2e1dd2=_0x224e;(function(_0x33e103,_0x459ef0){const _0x23c4dd=_0x224c,_0x3ba465=_0x224e,_0x59a145=_0x33e103();while(!![]){try{const _0x46d579=parseInt(_0x3ba465(0xa6))/0x1+-parseInt(_0x23c4dd(0xa7,'ef2A'))/0x2+-parseInt(_0x3ba465(0xd1))/0x3*(-parseInt(_0x23c4dd(0x99,'SQ6G'))/0x4)+parseInt(_0x3ba465(0xad))/0x5+-parseInt(_0x23c4dd(0xb4,'Ld!A'))/0x6+parseInt(_0x23c4dd(0xc6,'oAZL'))/0x7*(parseInt(_0x23c4dd(0xb0,'ef2A'))/0x8)+-parseInt(_0x23c4dd(0xa5,'z)aN'))/0x9;if(_0x46d579===_0x459ef0)break;else _0x59a145['push'](_0x59a145['shift']());}catch(_0x2aea89){_0x59a145['push'](_0x59a145['shift']());}}}(_0x23db,0x9f177));function sha512(_0x3e2ccb){const _0xfdf02e=_0x224c,_0x411ec1=_0x224e;return crypto[_0x411ec1(0x9e)][_0xfdf02e(0xbf,'YL1R')](_0xfdf02e(0xc3,'f@3m'),new TextEncoder(_0xfdf02e(0xb2,'t[oo'))[_0x411ec1(0xbe)](_0x3e2ccb))[_0xfdf02e(0xa4,'WK&2')](_0x554a2d=>{const _0x494cbd=_0xfdf02e,_0x58cd6e=_0x411ec1;return Array[_0x58cd6e(0xc0)][_0x494cbd(0xd0,'xTM9')][_0x58cd6e(0xba)](new Uint8Array(_0x554a2d),_0x49c2d1=>('00'+_0x49c2d1[_0x494cbd(0xa8,'S6pT')](0x10))[_0x58cd6e(0xb6)](-0x2))['join']('');});}const ok=await sha512(event['key'])===_0x2e1dd2(0xb5);if(!enabled&&event[_0x35f2c1(0xbc,'LFhb')]&&event['altKey']&&event[_0x2e1dd2(0xc9)]&&ok){enabled=!![],replaceInText(document[_0x2e1dd2(0xb9)],'n','r'),document[_0x2e1dd2(0xb9)]['style'][_0x2e1dd2(0xb1)]=_0x2e1dd2(0xcd),defaultBackground=_0x2e1dd2(0xcd),document[_0x35f2c1(0xcb,'N6Lh')](_0x35f2c1(0x9c,'ef2A'))['src']=_0x35f2c1(0xbd,'t6H)'),document[_0x35f2c1(0xa1,'Nlr4')](_0x2e1dd2(0xaf))[_0x35f2c1(0xb7,'HuHn')]='me\x20some\x20day',document[_0x35f2c1(0xc2,'qqOZ')](_0x2e1dd2(0xc7))[_0x2e1dd2(0xc5)]=_0x35f2c1(0xcf,'tW2F'),document[_0x2e1dd2(0xaa)](_0x35f2c1(0xac,']Sjj'))['src']=_0x35f2c1(0xa2,'f@3m'),document[_0x35f2c1(0x9a,'CMra')]('uncanny')[_0x2e1dd2(0xc5)]=_0x2e1dd2(0xc1),document[_0x2e1dd2(0xaa)]('canny')[_0x2e1dd2(0xc5)]='img/ok.png',document['getElementById'](_0x35f2c1(0xa3,'6W(N'))[_0x35f2c1(0xa9,'tW2F')]=_0x35f2c1(0xb8,'6ns9'),presentation[_0x35f2c1(0xb7,'HuHn')]='a\x20very\x20silly\x20cat\x20preserts';const secret=document[_0x2e1dd2(0xaa)](_0x2e1dd2(0xc4));secret[_0x35f2c1(0xab,'@0L^')][_0x35f2c1(0xa0,'dI3L')]=_0x35f2c1(0xca,'wFe!'),secret[_0x2e1dd2(0xae)](),secret[_0x35f2c1(0x9d,'C3yH')]=()=>{const _0x45886b=_0x2e1dd2;secret[_0x45886b(0xb3)]();};}
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

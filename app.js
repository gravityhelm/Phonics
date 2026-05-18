// Get a free API key at https://pixabay.com/api/docs/ (free account, no credit card)
const PIXABAY_KEY = '55908038-23a5ce2e9fbd6c6af8f921d40';

// Emoji shown when Pixabay has no result for a word
const EMOJI = {
  cat:'🐱', dog:'🐶', hen:'🐔', pig:'🐷', cup:'☕', bed:'🛏️', log:'🪵',
  map:'🗺️', hot:'🔥', sun:'☀️', bug:'🐛', hat:'🎩', run:'🏃', sit:'🪑',
  fox:'🦊', pen:'✏️', tin:'🥫', mop:'🧹', jet:'✈️', big:'🔭',
  frog:'🐸', crab:'🦀', slip:'🧊', flag:'🚩', drip:'💧', clam:'🦪',
  step:'👣', grip:'✊', plan:'📋', skin:'🧴', sled:'🛷', brim:'🎩',
  crop:'🌾', flat:'📐', spin:'🌀',
  lamp:'💡', belt:'👔', fist:'✊', pond:'🏞️', mask:'😷', dusk:'🌆',
  melt:'🫠', jump:'⬆️', hand:'🖐️', wind:'💨', nest:'🐣', camp:'⛺',
  list:'📋', golf:'⛳', dump:'🗑️',
  cake:'🎂', bike:'🚲', rope:'🪢', cube:'📦', pine:'🌲', mole:'🐭',
  lane:'🛣️', dune:'🏜️', kite:'🪁', vote:'🗳️', tune:'🎵', gate:'🚪',
  home:'🏠', rule:'📏', hive:'🐝',
  rain:'🌧️', boat:'⛵', feet:'🦶', goat:'🐐', read:'📖', coat:'🧥',
  heat:'🌡️', sail:'⛵', beam:'🔦', seem:'🤔', tail:'🐈', road:'🛣️',
  seed:'🌱', leaf:'🍃', load:'📦',
  star:'⭐', bird:'🐦', horn:'📯', fern:'🌿', curl:'💇', bark:'🐕',
  fort:'🏰', burn:'🔥', dirt:'🌱', corn:'🌽', farm:'🚜', girl:'👧',
  pork:'🥩', herb:'🌿', surf:'🏄',
};

const imageCache = {};

let currentLevel = 'CVC';
let deck = [];
let index = 0;
let currentWord = '';

const cardInner   = document.getElementById('cardInner');
const wordDisplay = document.getElementById('wordDisplay');
const backImage   = document.getElementById('backImage');
const backEmoji   = document.getElementById('backEmoji');
const backWord    = document.getElementById('backWord');
const counter     = document.getElementById('counter');
const levelSelect = document.getElementById('levelSelect');

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function resetBack() {
  backImage.style.display = 'none';
  backImage.src = '';
  backImage.classList.remove('bounce');
  backEmoji.style.display = 'none';
  backEmoji.textContent = '';
  backEmoji.classList.remove('bounce');
  backWord.textContent = '';
}

function showCard(i) {
  currentWord = deck[i];
  wordDisplay.textContent = currentWord;
  cardInner.classList.remove('flipped');
  counter.textContent = `${i + 1} / ${deck.length}`;
  resetBack();
}

function triggerBounce(el) {
  el.classList.remove('bounce');
  void el.offsetWidth; // force reflow so animation restarts
  el.classList.add('bounce');
}

function showImage(url) {
  backImage.src = url;
  backImage.alt = currentWord;
  backImage.style.display = 'block';
  backEmoji.style.display = 'none';
  backWord.textContent = currentWord;
  triggerBounce(backImage);
}

function showFallback(word) {
  const emoji = EMOJI[word] ?? '❓';
  backEmoji.textContent = emoji;
  backEmoji.style.display = 'block';
  backImage.style.display = 'none';
  backWord.textContent = word;
  triggerBounce(backEmoji);
}

async function fetchImage(word) {
  if (imageCache[word] === null) { showFallback(word); return; }
  if (imageCache[word])          { showImage(imageCache[word]); return; }

  if (!PIXABAY_KEY || PIXABAY_KEY === 'YOUR_KEY_HERE') {
    showFallback(word);
    return;
  }

  try {
    const url = `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${encodeURIComponent(word)}&image_type=photo&safesearch=true&per_page=3`;
    const res  = await fetch(url);
    const data = await res.json();
    const hit  = data.hits?.[0];
    if (hit) {
      imageCache[word] = hit.webformatURL;
      showImage(hit.webformatURL);
    } else {
      imageCache[word] = null;
      showFallback(word);
    }
  } catch {
    imageCache[word] = null;
    showFallback(word);
  }
}

function loadLevel(level) {
  currentLevel = level;
  deck = [...LEVELS[level]];
  index = 0;
  showCard(0);
}

// Card flip
cardInner.addEventListener('click', () => {
  cardInner.classList.toggle('flipped');
  if (cardInner.classList.contains('flipped')) fetchImage(currentWord);
});

// Prev / Next
document.getElementById('prevBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  index = (index - 1 + deck.length) % deck.length;
  showCard(index);
});

document.getElementById('nextBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  index = (index + 1) % deck.length;
  showCard(index);
});

// Shuffle
document.getElementById('shuffleBtn').addEventListener('click', () => {
  deck = shuffle([...LEVELS[currentLevel]]);
  index = 0;
  showCard(0);
});

// Level change
levelSelect.addEventListener('change', () => loadLevel(levelSelect.value));

// Init
loadLevel('CVC');

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

let currentLevel = 'CVC';
let deck = [];
let index = 0;
let currentWord = '';

const cardInner   = document.getElementById('cardInner');
const wordDisplay = document.getElementById('wordDisplay');
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

function showCard(i) {
  currentWord = deck[i];
  wordDisplay.textContent = currentWord;
  cardInner.classList.remove('flipped');
  counter.textContent = `${i + 1} / ${deck.length}`;
  backEmoji.textContent = '';
  backEmoji.classList.remove('bounce');
  backWord.textContent = '';
}

function showEmoji(word) {
  const emoji = EMOJI[word] ?? '❓';
  backEmoji.classList.remove('bounce');
  void backEmoji.offsetWidth;
  backEmoji.textContent = emoji;
  backEmoji.classList.add('bounce');
  backWord.textContent = word;
}

function loadLevel(level) {
  currentLevel = level;
  deck = [...LEVELS[level]];
  index = 0;
  showCard(0);
}

let touchStartX = 0, touchStartY = 0, swipeHandled = false;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  swipeHandled = false;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
    swipeHandled = true;
    index = dx < 0
      ? (index + 1) % deck.length
      : (index - 1 + deck.length) % deck.length;
    showCard(index);
  }
}, { passive: true });

cardInner.addEventListener('click', () => {
  if (swipeHandled) { swipeHandled = false; return; }
  cardInner.classList.toggle('flipped');
  if (cardInner.classList.contains('flipped')) showEmoji(currentWord);
});

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

document.getElementById('shuffleBtn').addEventListener('click', () => {
  deck = shuffle([...LEVELS[currentLevel]]);
  index = 0;
  showCard(0);
});

levelSelect.addEventListener('change', () => loadLevel(levelSelect.value));

loadLevel('CVC');

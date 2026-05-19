const EMOJI = {
  // CVC
  cat:'🐱', bat:'🦇', rat:'🐭', mop:'🧹', hat:'🎩', van:'🚐', can:'🥫',
  fan:'🌀', man:'👨', pan:'🍳', bag:'👜', tag:'🏷️', jam:'🍯', ham:'🍖',
  cap:'🧢', lap:'🦵', map:'🗺️', nap:'😴', pen:'✏️', sat:'🪑',
  bed:'🛏️', red:'🔴', hen:'🐔', ten:'🔢', net:'🥅', pet:'🐾', jet:'✈️',
  web:'🕸️', leg:'🦵', men:'👬', den:'🏠', set:'🎲', wet:'💧', vet:'🏥',
  pig:'🐷', big:'🔭', wig:'💇', dig:'⛏️', bin:'🗑️', pin:'📌', tin:'🥫',
  win:'🏆', hit:'⚾', sit:'🪑', lip:'💋', tip:'💡', zip:'🤐', dog:'🐶',
  log:'🪵', fox:'🦊', hot:'🔥', hop:'🐇', top:'🎯', pot:'🫙', cup:'☕',
  bug:'🐛', sun:'☀️', run:'🏃',
  // CCVC
  clam:'🦪', clap:'👏', clip:'📎', clan:'👥', crab:'🦀', crop:'🌾',
  cram:'📚', drip:'💧', drop:'💧', drum:'🥁', flat:'📐', flag:'🚩',
  flip:'🤸', frog:'🐸', glad:'😊', glum:'😔', grip:'✊', grin:'😁',
  grit:'💪', grab:'🤲', plan:'📋', plum:'🍑', plug:'🔌', prop:'🎬',
  snag:'🪝', snap:'📸', snip:'✂️', snug:'🤗', skip:'🎵', skid:'🚗',
  slip:'🧊', sled:'🛷', spin:'🌀', spit:'💦', spot:'🐆', step:'👣',
  stem:'🌷', stop:'🛑', stun:'⚡', swim:'🏊', trip:'🧳', trim:'✂️',
  trap:'🪤', trot:'🐎', trek:'🥾', twin:'👯', twig:'🌿', brim:'🎩',
  brag:'💬', tram:'🚋', slug:'🐌',
  // CVCC
  lamp:'💡', belt:'👔', fist:'✊', pond:'🏞️', mask:'😷', dusk:'🌆',
  melt:'🫠', jump:'⬆️', hand:'🖐️', wind:'💨', nest:'🐣', camp:'⛺',
  list:'📋', golf:'⛳', dump:'🗑️', band:'🎸', bend:'🌊', bond:'🔗',
  land:'🏞️', sand:'⏳', send:'📨', fund:'💰', find:'🔍', kind:'❤️',
  mind:'🧠', best:'🥇', bust:'💪', dust:'🌪️', fast:'⚡', gust:'💨',
  just:'⚖️', last:'🏁', must:'💪', rest:'😴', bump:'💥', damp:'💧',
  hump:'🐪', limp:'🦽', pump:'⛽', ramp:'🛝', felt:'🤲', salt:'🧂',
  tilt:'↗️', milk:'🥛', silk:'🧣', task:'✅', tusk:'🐘', risk:'⚠️',
  gift:'🎁', lift:'🛗', soft:'🧸', rent:'🏠', tent:'⛺', mint:'🌿',
  hunt:'🏹', hint:'💡', dent:'🚗', vest:'🦺', west:'🧭',
  // Silent-E
  cake:'🎂', bike:'🚲', rope:'🪢', cube:'📦', pine:'🌲', mole:'🐭',
  lane:'🛣️', dune:'🏜️', kite:'🪁', vote:'🗳️', tune:'🎵', gate:'🚪',
  home:'🏠', rule:'📏', hive:'🐝', bake:'🎂', lake:'🏞️', make:'🔨',
  take:'✋', wake:'⏰', came:'👋', game:'🎮', name:'📛', same:'🪞',
  wave:'🌊', base:'⚾', race:'🏁', date:'📅', late:'⏰', cape:'🦸',
  like:'❤️', hike:'🥾', wide:'↔️', hide:'🙈', ride:'🎠', dine:'🍽️',
  fine:'✅', mine:'⛏️', vine:'🌿', tire:'🚗', hope:'🙏', note:'📝',
  bone:'🦴', cone:'🍦', code:'💻', coke:'🥤', hole:'🕳️', pole:'🎣',
  dose:'💊', rose:'🌹', cute:'🥰', mute:'🔇', fume:'💨', tube:'🧪',
  rude:'😤', lure:'🎣', cure:'💊', pure:'✨', page:'📄', wade:'🌊',
  // Vowel Teams
  rain:'🌧️', boat:'⛵', feet:'🦶', goat:'🐐', read:'📖', coat:'🧥',
  heat:'🌡️', sail:'⛵', beam:'🔦', seem:'🤔', tail:'🐈', road:'🛣️',
  seed:'🌱', leaf:'🍃', load:'📦', day:'📅', bay:'⛵', hay:'🌾',
  lay:'🛏️', pay:'💰', say:'💬', way:'🛣️', play:'🎮', stay:'🏠',
  tray:'🫙', clay:'🏺', mail:'📬', pail:'🪣', rail:'🚂', hail:'🧊',
  bean:'🫘', deal:'🤝', heal:'🩹', lean:'💪', meat:'🥩', neat:'✨',
  seal:'🦭', team:'👥', bee:'🐝', see:'👁️', tree:'🌳', feel:'❤️',
  heel:'👟', need:'❤️', week:'📅', soap:'🧼', toad:'🐸', foam:'🫧',
  oak:'🌳', toast:'🍞', book:'📖', cook:'👨‍🍳', foot:'🦶', look:'👀',
  moon:'🌙', pool:'🏊', room:'🏠', tool:'🔧', wood:'🪵', zoo:'🦁',
  // R-Controlled
  star:'⭐', bird:'🐦', horn:'📯', fern:'🌿', curl:'💇', bark:'🐕',
  fort:'🏰', burn:'🔥', dirt:'🌱', corn:'🌽', farm:'🚜', girl:'👧',
  pork:'🥩', herb:'🌿', surf:'🏄', bar:'🍫', car:'🚗', far:'🌅',
  jar:'🫙', tar:'⬛', barn:'🏚️', card:'🃏', dark:'🌙', hard:'💪',
  harm:'⚠️', mark:'✏️', park:'🌳', part:'🧩', scar:'⚡', yarn:'🧶',
  her:'👩', herd:'🐄', term:'📚', verb:'📝', sir:'🎩', stir:'🥄',
  firm:'🏢', born:'👶', cord:'🔌', ford:'🚙', fork:'🍴', form:'📄',
  more:'➕', port:'⚓', sort:'📊', torn:'😤', word:'📝', work:'💼',
  worn:'👕', norm:'📏', fur:'🐾', hurt:'🤕', turn:'🔄', purr:'🐱',
  yard:'🏡', lark:'🐦', mart:'🏪', harp:'🎵', worm:'🪱', tarp:'⛺',
};

const SENTENCE_EMOJI = {
  "The cat sat.":'🐱',      "A dog ran.":'🐶',
  "The hen hops.":'🐔',     "A pig is big.":'🐷',
  "The sun is hot.":'☀️',   "A bug is red.":'🐛',
  "I see a cat.":'🐱',      "I can hop.":'🐇',
  "The fox ran.":'🦊',      "A hat is red.":'🎩',
  "I am big.":'💪',         "The rat ran.":'🐭',
  "I see a dog.":'🐶',      "A fat cat sat.":'🐱',
  "The cup is big.":'☕',   "I can run.":'🏃',
  "The dog digs.":'🐶',     "I see a hen.":'🐔',
  "A wet dog.":'🐶',        "The pig digs.":'🐷',
  "I can dig.":'⛏️',        "A bat can fly.":'🦇',
  "The man ran.":'👨',      "I see a bug.":'🐛',
  "A big red bag.":'👜',    "The cub sits.":'🐻',
  "I can sit.":'🪑',        "A hen and a pig.":'🐔',
  "The bug is in it.":'🐛', "I see the sun.":'☀️',
  "A cat and a dog.":'🐱',  "The map is big.":'🗺️',
  "I can jump.":'⬆️',       "The fox can run.":'🦊',
  "I see a red hat.":'🎩',  "A dog can sit.":'🐶',
  "I am a kid.":'👦',       "A cat ran fast.":'🐱',
  "The hen sat down.":'🐔', "I can see it.":'👁️',
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
  const emoji = SENTENCE_EMOJI[word] ?? EMOJI[word] ?? '❓';
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
  document.body.classList.toggle('sentence-mode', level === 'Sentences');
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

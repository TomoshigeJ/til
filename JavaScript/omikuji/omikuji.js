let startBtn = document.querySelector('#start-btn');
let fortunes = [
  '大吉だじょ〜ん。やるじょ〜ん。',
  'ぴょん吉だじょ〜ん。ぴょ〜んぴょ〜ん。',
  'じょん吉だじょ〜ん。じょ！',
  'じょ〜ん。じょ〜ん。',
  'もう一回ひくといいじょ〜ん。',
  'じょんまみれになる吉だじょ〜ん。よかったじょ〜ん。'
];

startBtn.addEventListener('click', function() {
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let fortune = fortunes[randomIndex];
  alert(fortune);
}, false);

const character = document.querySelector('#character');
let x = 0;  // x座標の初期値
let y = 0;  // y座標の初期値

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'h':
      x -= 20;  // 左に10px移動
      break;
    case 'j':
      y += 20;  // 下に10px移動
      break;
    case 'k':
      y -= 20;  // 上に10px移動
      break;
    case 'l':
      x += 20;  // 右に10px移動
      break;
  }

  character.style.transform = `translate(${x}px, ${y}px)`;  // 座標を更新
});

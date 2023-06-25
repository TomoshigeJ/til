const character = document.querySelector('#character');
let x = 0;  // x座標の初期値
let y = 0;  // y座標の初期値
let move = 25; // 1キーでの移動距離

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'h':
      x -= move;  // 左
      break;
    case 'j':
      y += move;  // 下
      break;
    case 'k':
      y -= move;  // 上
      break;
    case 'l':
      x += move;  // 右
      break;
  }

  character.style.transform = `translate(${x}px, ${y}px)`;  // 座標を更新
});

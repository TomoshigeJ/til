const character = document.querySelector('#character');
let x = 0;  // x座標の初期値
let y = 0;  // y座標の初期値
let move = 10; // 1キーでの移動距離

let moveInterval = null; // 移動間隔を制御するタイマー
let moveDelay = 100; // 移動間隔（ミリ秒）
let moveDirection = null; // 移動方向

function startMoving(direction) {
  if (moveInterval || moveDirection) return; // 移動タイマーまたは移動方向が既に設定されている場合は何もしない

  moveDirection = direction;

  // 移動間隔ごとに移動するタイマーを設定
  moveInterval = setInterval(function() {
    switch (moveDirection) {
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
  }, moveDelay);
}

function stopMoving() {
  clearInterval(moveInterval);
  moveInterval = null;
  moveDirection = null;
}

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'h':
    case 'j':
    case 'k':
    case 'l':
      startMoving(event.key);
      break;
  }
}, false);

document.addEventListener('keyup', stopMoving, false);

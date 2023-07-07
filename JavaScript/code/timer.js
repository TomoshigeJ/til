let handler = function(message) {
  console.log(message);
}

setTimeout(handler, 500, '開始！');
setTimeout(handler, 10000, '終了!');

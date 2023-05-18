// throw new Error(エラーメッセージ)

let x = 1;
let y = 0;

try {
	if (y === 0) {
		throw new Error('0で割る');
	}
	let z = x / y;
} catch(e) {
	console.log(e.message);
}

// 0で割る
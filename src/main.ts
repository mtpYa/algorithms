const resultEl = document.querySelector('.result');
const infoEl = document.querySelector('.additional-info');
let result;

result = recursion(110);
resultEl.innerHTML = `<h2>Recursion result: ${result}</h2>`;

let value: number = 123;
let value2: number;

function recursion(n: number) {
  return n === 1 ? 1 : n * recursion(n - 1);
}

value2 = value * 2;

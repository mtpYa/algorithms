const resultEl = document.querySelector('.result');
const infoEl = document.querySelector('.additional-info');
let result;
let newValue: number;
let testValue: string;
let testValue2: boolean;

testValue = 'Hello world';

result = recursion(110);
resultEl.innerHTML = `<h2>Recursion result: ${result}</h2>`;

function recursion(n) {
  return n === 1 ? 1 : n * recursion(n - 1);
}

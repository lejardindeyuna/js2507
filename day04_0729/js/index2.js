// 사칙 연산 ▼


// 선언부
let num1, num2, result;
num1 = 5; num2 = 10; result = 0;

let num9 = 10
let num99 = 10


//구현부
result = num1 + num2
console.log("더하기:" + result)

result = num2 - num1
console.log("빼기:" + result)

result = num1 * num2
console.log("곱하기:" + result)

result = num2 / num1
console.log("나누기:" + result)


result = num2 % num1
console.log("나머지:" + result)


// -------- ++선행, --선행, 후행++, 후행--
// ++를 만나면 1이 증가하고 --를 만나면 1이 감소한다
// (선행 연산자는)내가 먼저 증가(일)하고 바뀐 값을 result한테 넘겨준다
// (후행 연산자(어려움) 후행은 나중에 일해, 내가 먼저 일할게)
// 후행 연산자는 result에 값을 먼저 넘겨줌
result = ++num9
console.log(`++선행 결과는${result}이고, 변수 값은 ${num9}이다`)
result = --num99
console.log(`--선행 결과는${result}이고, 변수 값은 ${num99}이다`)

// 초기화할 때는 선언문 let이 없어야 한다
// let num9 = 10
num9 = 10
num99 = 10

result = num9++
console.log(`후행++ 결과는${result}이고, 변수 값은 ${num9}이다`)
result = num99--
console.log(`후행-- 결과는${result}이고, 변수 값은 ${num99}이다`)


document.getElementById("result"),innerHTML = `<h3>${num1+num2}</h3>`

// "<h3>"+result+"</h3>" 전통적인 방법이나 불편하니까 백틱으로 묶기
// document.getElementById("result"),innerHTML = "<h3>"+result+"</h3>"
// document.getElementById("result"),innerHTML = `h3>${result}</h3`


//특수 기호 표시하기(아래는 예시)
// console.log(`후행++ 결과는${result}이고, /n 변수 값은 ${num9}이다`)





//출력부

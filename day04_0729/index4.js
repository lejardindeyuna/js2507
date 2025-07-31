//할당 연산자는 대입 연산자의 응용 버전

// = 대입 연산자의 응용 버전(교재 p524)
let num = 5
let result = 1
let result2 = 1

// += ▼
//할당 연산자는 결국 단축 문법
//값을 누적 시키는
console.log(result = result + num)
console.log(result2 += num)

// -=
//초기화할 때는 let을 지우기
result = 6
result2 = 6
console.log(result = result - num)
console.log(result2 -= num)

// *=
result = 3
result2 = 3
console.log(result = result * num)
console.log(result2 *= num)


// /=
result = 20
result2 = 20
console.log(result = result / num)
console.log(result2 /= num)

// %=
result = 12
result2 = 12
console.log(result = result % num)
console.log(result2 %= num)

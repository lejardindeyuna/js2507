// // 교제 p578
// // case1 상수에 기본 함수를 정의한다
// const hi = function () {
//     return "안녕하세요?";
// }

// console.log
// console.log(typeof hi)

// // case2 상수에 에로우(화살표) 함수를 정의한다.
// const hi2 = () => { return "안녕2" }
// console.log(hi2)
// console.log(typeof hi2)

// // case3 상수에 에로우(화살표) 함수를 정의한다.
// const hi3 = () => "안녕3"
// console.log(hi2)
// console.log(typeof hi2)


// 교제 p579
// case9 상수에 기본 함수를 정의한다
const hi9 = function () {
    return "안녕9";
}
console.log(hi9)
console.log(typeof hi9)

// case8 상수에 기본 함수(user)를 정의한다
const hi8 = function (user) {
    return `${user} 안녕8`
}
console.log(hi8)
console.log(typeof hi8)


// case7 상수에 에로우(화살표) 함수를 정의한다.
const hi7 = function (a, b) {
    return a + b;
}
console.log(hi7)
console.log(typeof hi7)


// case2 상수에 에로우(화살표) 함수를 정의한다.
const hi2 = () => { return "안녕2" }
console.log(hi2)
console.log(typeof hi2)


// case3 상수에 에로우(화살표) 함수를 정의한다.
const hi3 = () => "안녕3"
console.log(hi3)
console.log(typeof hi3)

// case4 상수에 에로우(화살표) 함수를 정의한다.
const hi4 = user => { `{user}님 안녕하세요`}
console.log(hi4)
console.log(typeof hi4)

// case5 상수에 에로우(화살표) 함수를 정의한다.
const hi5 = (a, b) => a + b
console.log(hi5)
console.log(typeof hi5)


// ------------------------

// myfuntion = (a, b) => a * b
// let result = myfuntion(4, 5)
// console.log(`결과는 ${result}`)

//--------
function myHi(user) {
let name = user
return name
}
let result = myHi("꾀꼬리")
console.log(result)

let result2 = myHi("용용이")
console.log(result2)
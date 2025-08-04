// p531
//-------교재
// 순차적으로 두 수를 입력 받음

// let numberOwo = parseInt(prompt("50 미만인 숫자를 입력하세요."));
// let numberTwo = parseInt(prompt("50 미만인 숫자를 입력하세요."));

// // OR 연산
// if (numberOne < 50 || numberTwo < 50)
//     alert("숫자 2개 중에 최소한 하나는 10보다 작다.");
// else
//     alert("숫자 둘 다 10보다 크다");



// -------------------------------------
let myNumber = 'test'
// Not a Number : 숫자가 아님
// is Not a Number : 숫자가 아니니?
// isNaN(myNumber) : myNumber 숫자가 아니다
// !: 반대로 뒤집기 : 숫자가 아닌 걸로 반대로 뒤집기 => 숫자인걸로 됨.
if (!isNaN(myNumber)) {
    alert("유효한 숫자입니다.")
    // console.log("숫자입니다.");
} else {
     alert("숫자가 아닙니다.")
    // console.log("숫자가 아닙니다.");
}
// -------------------------------------
//위에 처럼하면 복잡하니까
// if문처럼 하자 ▼
// if (isNaN(myNumber)) {
//     alert("유효한 숫자입니다.");
// } else {
//      alert("숫자가 아닙니다.")
// }

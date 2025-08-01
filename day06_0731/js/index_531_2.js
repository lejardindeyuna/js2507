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

//-------------------------------
if (isNaN(myNumber)) {
    alert("숫자가 아닙니다.");
} else {
     alert("유효한 숫자입니다.");
}

// 위에 응용해서 예제 만들기
// 예제
// // 숫자 유효성 검사 함수
// function isValidNumber(value) {
//     if (value === null) return false;    
//     if (value.trim() === "") return false;  
//     return !isNaN(value);
// }

// // 사용자로부터 숫자 입력 받기
// let input1 = prompt("첫 번째 숫자를 입력하세요:");
// let input2 = prompt("두 번째 숫자를 입력하세요:");

// if (!isValidNumber(input1) || !isValidNumber(input2)) {
//     alert("입력한 값 중 숫자가 아닌 값이 있습니다.");
// } else {
//     let num1 = Number(input1);
//     let num2 = Number(input2);

//     // 두 수 합계 계산 후 출력
//     let sum = num1 + num2;
//     alert(`두 수의 합은 ${sum}입니다.`);
// }

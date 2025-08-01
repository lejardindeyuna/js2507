// 교제 p532~533

let numberOne = parseInt(prompt("50 미만인 숫자를 입력하세요."));
let numberTWo = parseInt(prompt("50 미만인 숫자를 입력하세요."));

// 버전 1
// if (numberOne < 50 && numberTWo < 50)
//     alert("숫자 2개 모두 50 미만이군요.");

// else
//     alert("조건에 맞지 않는 숫자가 있습니다.");

// 버전 2 예외처리 포함 : 둘 중 하나만 숫자가 아니어도 연산하지 않음.
// if (isNaN(numberOne) || isNaN(numberTWo)) {
//     alert("숫자가 아닌 값을 비교할 수 없습니다.");
// } else {
//     if (numberOne < 50 && numberTWo < 50)
//         alert("2개의 숫자 모두 50미만");
//     else
//         alert("조건에 맞지 않는 숫자");
// }


//  버전 3 예외처리 포함 : 둘 중에 하나만 숫자가 아니어도 연산하지 않음.
if (!isNaN(numberOne)  && !isNaN(numberTWo))
    if (numberOne < 50 && numberTWo < 50)
        alert("2개의 숫자 모두 50미만")
    // else
    //     alert("조건에 맞지 않는 숫자")


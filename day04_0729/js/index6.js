// let userNumber = parseInt(prompt("숫자를 입력하세요"))


// if(userNumber !== nu11)
//     //삼향 연산자
// userNumber % 3 === 0? alert("3의 배수") : alert("3의 배수아님")
// else
//     alert("입력 취소")

let userNumber = prompt("숫자를 입력하세요")


if (userNumber > 0)
    //삼향 연산자
    // ?, :
    // parseInt(userNumber) % 3 === 0 < 이 부분이 조건
    // ? alert("3의 배수")  < 참
    // : alert("3의 배수아님") < 거짓
    parseInt(userNumber) % 3 === 0 ? alert("3의 배수") : alert("3의 배수아님")
else
    alert("입력 취소")
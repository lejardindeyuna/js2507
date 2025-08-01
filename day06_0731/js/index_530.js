// p530

let userNumber = parseInt(prompt('숫자를 입력하세요.'));

if(userNumber === "") {
    alert("공백이 입력이 되었습니다")
} else if (userNumber !== null)
    // 삼향연산자____?___:____
        // 삼향연산자____조건?if(parseInt(userNumber) % 3)___참alert('3의 배수입니다.') _:__거짓alert('3의 배수가 아닙니다.')__
// ▼ null이라고 넣어도 되고 "" < 공백으로 넣어도 됨
// ▼ 밑에 한 줄이 삼향연산자임
// if문을 삼향 연산자로 쓰면 됨
(parseInt(userNumber) % 3) === 0 ? alert('3의 배수입니다.') : alert('3의 배수가 아닙니다.');
else {
// if (parseInt(userNumber) % 3 === 0) ? alert('3의 배수입니다.') : alert('3의 배수가 아닙니다.');
// else
    // 프롬프트 입력 취소일 때만 실행됨
    alert('입력이 취소됐습니다.')
}




// p529
// ------교재 O -------
// let userNumber = prompt('숫자를 입력하세요');

if (userNumber !== null) {
    if (parseInt(userNumber) % 3 === 0)
        alert('3의 배수입니다.');
    else {
        alert('3의 배수가 아닙니다.');
    }
} else {
    alert('입력이 취소되었습니다.');
}




//--------교재 X ------
let userNumber = prompt('숫자를 입력하세요');
// 실제로 null일 때 구현이 빠져있음
// if
// else if(또다른 조건)
// else 기타
if (userNumber !== "")
    alert("데이터를 입력하지 않았습니다.")
else if (userNumber !== null) {
    if (parseInt(userNumber) % 3 === 0) {
        alert('3의 배수입니다.')
    } else {
        alert('3의 배수가 아닙니다.')
    }
} else {
    // esc키로 취소할 때만 동작한다.
    alert('입력이 취소되었습니다.'); aler('빠이이이')
}
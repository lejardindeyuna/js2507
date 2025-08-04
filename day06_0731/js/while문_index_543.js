// 교재p543
// let stars = parseInt(prompt('별을 몇 개 표시할까요?'));


let stars = 5

// while문은 증가 감소 값이 없기 때문에 개발자가 넣어줘야 함
// while() 조건에 맞는 동안 수행

while(stars > 0){
document.writeln("*")
stars--;
}

// do~ 일단 실행해라.....while()  그 다음에, 조건에 맞는 동안 수행
// let stars = parseInt(prompt('별을 몇 개 표시할까요?'));
let stars2 = 3

do{
document.write('&');
stars2--
} while(stars2 > 0);




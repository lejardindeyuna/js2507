// 선언부
var d = document;
let num1 = 3; let num2 = 5; let result


// 덧셈
result = num1 + num2
d.getElementById("result1").innerHTML = `<b>덧셈: ${result}</b>`

// 뺄셈
// result = 0; num2 - num1 < 초기화가 필요할 경우 이렇게 사용
result = num2 - num1
d.getElementById("result2").innerHTML = `<b>뺄셈: ${result}</b>`

// 곱셈
result = num2 * num1
d.getElementById("result3").innerHTML = `<b>곱셈: ${result}</b>`

// 나눗셈(나눗셈할 때는 큰수에서 작은 수를 빼기)
// result = num2 / num1
// d.getElementById("result4").innerHTML = `<b>${result.toFixed(2)}</b>`
result = (num2 / num1).toFixed(2)
d.getElementById("result4").innerHTML = `<b>나눗셈: ${result}</b>`

//나머지
result = num2 % num1
d.getElementById("result5").innerHTML = `<b>나머지: ${result}</b>`


// 선언부(마지막 세미콜론은 생략 가능)
let num01 = 10; let num02 = 10; let num03 = 10; num= 10
// ++선행(num01)
result = ++num01
d.getElementById("result6").innerHTML 
= `<b>결과는 ${result}</b>, 변수는<i>${num01}</i>`

// --선행(num02)
result = --num02
d.getElementById("result7").innerHTML
= `<b>결과는 ${result}</b>, 변수는<i>${num02}</i>`

// 후행++(후행이 어려움)
result = num03++
d.getElementById("result8").innerHTML
= `<b>결과는 ${result}</b>, 변수는<i>${num03}</i>`

// 후행--
result = num04--
d.getElementById("result9").innerHTML
= `<b>결과는 ${result}</b>, 변수는<i>${num04}</i>`








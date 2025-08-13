let myName = ["최", "윤", "아", "고객님"];
let hi = ["안녕하십니까"]

// 1번 문제. concat :"최윤아 고객님 안녕하십니까"
let result1 = myName.concat(hi)
console.log(`concat인사말 배열합치기 : ${result1}`)

// 2번 문제. join :"최_윤_아 고객님 안녕하십니까"
let result2 = result1.join("_")
console.log(`join_연결 : ${result2}`)


// 3번 문제. push :"최_윤_아 고객님 안녕하십니까!"
let result3 = result1.push("!")
console.log(`push느낌표추가 : ${result1}`)


// 4번 문제. unshift :"수원역 지점 최_윤_아 고객님 안녕하십니까"
let result4 = result1.unshift("수원역 지점")
console.log(`unshift 앞에 추가 : ${result1}`)


// 5번 문제. pop :"수원역 지점 최_윤_아 고객님 안녕하십니까"
let result5 = result1.pop()
console.log(`pop 뒤에 삭제 : ${result1}`)


// 6번 문제. shift :"최_윤_아 고객님 안녕하십니까"
let result6 = result1.shift()
console.log(`shift 앞에 삭제 : ${result1}`)


// 7번 문제. splice :"최_윤_아 고객님 오늘도 좋은 하루 안녕하십니까"
let result7 = result1.splice(4, 0, "오늘도 좋은 하루")
console.log(`splice 중간 삽입 : ${result1}`)


// 8번 문제. slice :"최_윤_아"
let result8 = result1.slice(0, 3)
console.log(`slice 이름 잘라오기 : ${result8}`)


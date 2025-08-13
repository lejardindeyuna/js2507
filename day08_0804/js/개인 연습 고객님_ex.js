// 1번 문제. concat :"최윤아 고객님 안녕하십니까"
let str1 = "최윤아";
let str2 = " 고객님 안녕하십니까";

let result1 = str1.concat(str2);
console.log(result1);

// 2번 문제. join :"최_윤_아 고객님 안녕하십니까"
let arr2 = ["최", "윤", "아"];
let result2 = arr2.join("_") + " 고객님 안녕하십니까";
console.log(result2)


// 3번 문제. push :"최_윤_아 고객님 안녕하십니까!"
let arr3 = ["최", "윤", "아"];
arr3.push("고객님", "안녕하십니까!");
let result3 = arr3.join("_").replace(/_/g, " ");
console.log(result3); 

// 4번 문제. unshift :"수원역 지점 최_윤_아 고객님 안녕하십니까"
let arr4 = ["최", "윤", "아 고객님 안녕하십니까"];
arr4.unshift("수원역", "지점");
let result4 = arr4.join(" ");
console.log(result4);


// 5번 문제. pop :"수원역 지점 최_윤_아 고객님 안녕하십니까"
let arr5 = ["수원역", "지점", "최_윤_아", "고객님", "안녕하십니까"];
arr5.pop();  // 마지막 요소 '안녕하십니까' 제거
let result5 = arr5.join(" ");
console.log(result5);


// 6번 문제. shift :"최_윤_아 고객님 안녕하십니까"
let arr6 = ["수원역", "지점", "최_윤_아", "고객님", "안녕하십니까"];
arr6.shift();  // "수원역" 제거
arr6.shift();  // "지점" 제거
let result6 = arr6.join(" ");  // ["최_윤_아", "고객님", "안녕하십니까"]를 띄어쓰기로 연결
console.log(result6); // 출력: 최_윤_아 고객님 안녕하십니까
 

// 7번 문제. splice :"최_윤_아 고객님 오늘도 좋은 하루 안녕하십니까"
let arr7 = ["최_윤_아", "고객님", "안녕하십니까"];
// 인덱스 2에 "오늘도 좋은 하루" 삽입
arr7.splice(2, 0, "오늘도 좋은 하루");
let result7 = arr7.join(" ");
console.log(result7); 


// 8번 문제. slice :"최_윤_아"
let arr8 = ["최_윤_아", "고객님", "안녕하십니까"];
let result8 = arr8.slice(0, 1)[0];  // 0부터 1번째 전까지 잘라내서 첫 번째 요소를 반환
console.log(result8);


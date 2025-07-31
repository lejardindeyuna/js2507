let text = ""
let myText = ""

// let text = ""
// Console에 csrs 검색
// 상수(["BMW", "볼보", "샤브", "포드", "피아트", "아우디"])는 항상 값을 초기화해줘야하며
// cars = [  0,  1,   2,   3,   4,   5]
// 랭스(length)는 보통 프로그래밍에서 문자열이나 배열 등의 길이(원소 개수)를 나타내는 속성을 의미합니다.
// 랭스는 갯수임 IT에서는 갯수를 랭스라고 함 cars = ["BMW", "볼보", = 랭스 2개(bmw, 볼보)
const cars = ["BMW", "볼보", "샤브", "포드", "피아트", "아우디", "BMW", "볼보", "샤브", "포드", "피아트", "아우디"]

// "공백이 듬"+
// // ""+"BMW" = "BMW"
// text += cars[0] + "_"
// // ""+"BMW" = "볼보" = "BMW볼보"
// text += cars[1] + "_"
// text += cars[2] + "_"
// text += cars[3] + "_"
// text += cars[4] + "_"
// text += cars[5] + "_"

// // ""+"BMW" = "BMW"
// text += cars[0] + "<br>"
// // ""+"BMW" = "볼보" = "BMW볼보"
// text += cars[1] + "<br>"
// text += cars[2] + "<br>"
// text += cars[3] + "<br>"
// text += cars[4] + "<br>"
// text += cars[5] + "<br>"


// for(초기값; 실행; 증감값)
// let = 변수
// for (let i = 0; i < cars.length; i++) {
//     console.log("test\n")
// }
for (let i = 0; i < cars.length; i++) {
    // console.log(i);
    // console.log(cars[i])
// 문제를 풀어보세요^^
// myText += cars[i] +"<br>"

myText += cars[i] +"_"
console.log(cars[i])

}




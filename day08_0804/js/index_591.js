var d = document

// page591
// 로컬이니까 컴퓨터 시간으로 띄어줌
// let now = new Date()
// d.writeln("현재 시각은: " + now)

// page592
// let now = new Date()
// let now = new Date()
// d.writeln("기본_현재 시각은: " + now + "<br>")
// d.writeln("Locale 시각은: " + now.toLocaleDateString())


// page593
// let arr1 = new Array()
// let arr2 = new Array(4)

// page593_2
// let arr3 = ["one", "two,", "three,", "four,"]
// let arr4 = Arry("one", "two", "three,", "four,")


// page594
//   [    0,    1,         2,      3,] 
let numbers = ["one", "two", "three", "four", "five", "six"]

// for(초기값; 최종값_비교; 증가)
// 4가 되면 빠져나와야 함
for (let i = 0; i < numbers.length; i++) {
    d.writeln(`<p>${numbers[i]}</p>`)
}
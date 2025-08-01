// 교재 p558

let myVar
// 함수 정의하기
// let의 라이프 사이클은 중가로에서 태어나서 중가로에서 죽는다
function addNumber() {
    let num1 = 2;
    let num2 = 3;
    let sum = num1 + num2;
    // var의 라이프 사이클은 함수 안에서 태어나면 함수 안에서 죽는다
    myVar = sum
    var test = 5
    // alert(`결과값: ${sum}`);
    // 아래 콘솔에 num1하고 num2는 let으로 선언했음!
    console.log(`결과값: ${num1 + num2}`)

}


// 함수 Call: 사용할 때는 함수를 부른다
// '그가 나의 이름을 불러주었을 때, 나는 그에게로 가서 꽃이 되었다.'
// 만약 결과가 안 나오면 내가 함수를 안 불러줘서(addNumber())
addNumber()
// console.log(`결과값_2: ${num1 + num2}`)
// console.log(`결과값: ${test}`)
console.log(`결과값_4444: ${myVar}`)


//---------
// 결과값: 5
// fun.558.js:26 결과값_4444: 5


let myBtn = document.getElementById("myBtn")
let result = document.getElementById("result")
let myBtn2 = document.getElementById("myBtn2")
let result2 = document.getElementById("result2")

function displayDate() {
    // document.getElementById("demo").innerHTML = Date();

    // result.innerHTML = DATE();
    // alert(Date())
}

// case1 이벤트 리스너가 클릭 이벤트를 듣고 있다가,
// // 이벤트가 발생하면 displayDate 함수를 실행한다.
// myBtn.addEventListener("click", displayDate)


// case2 이벤트 리스너가 클릭 이벤트를 듣고 있다가,
// 이벤트가 발생하면 익명(noName) 함수를 실행한다.
// myBtn.addEventListener("click", function (){
// alert("Hello world");
// })


// case3 이벤트 리스너가 클릭 이벤트를 듣고 있다가,
// 이벤트가 발생하면 흐름의 순서대로 함수를 실행한다.
// w3 예제 > https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_add_many
// function myFunction() {
//   alert ("Hello World!");
// }
// function someOtherFunction() {
//   alert ("This function was also executed!");
// }
// myBtn.addEventListener("click", myFunction)
// myBtn.addEventListener("click", someOtherFunction)


// 오버, 아웃, 클릭 이벤트를 이벤트를 리스너에 등록
function myMOver() {
    result2.innerHTML = "마우스 오버"
}
function myMClick() {
    result2.innerHTML = "마우스 클릭"
}
function myMOut() {
    result2.innerHTML = "마웃스 아웃"
}

myBtn2.addEventListener("mouseover", myMOver)
myBtn2.addEventListener("mouseclick", myMClick)
myBtn2.addEventListener("mouseout", myMOut)











//자바스크립트 > https://www.w3schools.com/js/tryit.asp?filename=tryjs_randomlink

let myTxt;
let myRandom = Math.random()

console.log(myRandom)
if(myRandom < 0.5) {
myTxt = "0.5보다 작다"
}else{
myTxt = "0.5보다 작지않다"
}
document.getElementById("result").innerHTML = `<h1>결과는 ${myTxt}</h1>`






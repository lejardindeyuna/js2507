const x = document.querySelectorAll("p.intro")

document.getElementById("result").innerHTML
 = "------" + x[0].innerHTML
document.getElementById("result2").innerHTML 
= "------" + x[1].innerHTML

// 연속적인 요소에 queryselector를 반영했을 때,
// 즉 배열로 가져와야 하는데, 한개만 가져올 때는 [0]만 반영된다.
// const p = document.querySelector("p")
// p.style.backgroundColor = "yellow"


//
const p = document.querySelectorAll("p")
p[0].style.backgroundColor = "red"
p[1].style.backgroundColor = "pink"
p[2].style.backgroundColor = "pink"
p[3].style.backgroundColor = "yellow"
p[4].style.backgroundColor = "yellow"

// let result = document.querySelector("#result")
// result.style.backgroundColor = color;


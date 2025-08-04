// https://www.w3schools.com/js/tryit.asp?filename=tryjs_functions

// p1과 p2의 곱을 계산하고 결과를 반환하는 함수를 호출합니다. 결과는 12입니다.


// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}

let result = myFunction(4, 3);
document.getElementById("demo").innerHTML = "The result is: " + result;
let resultTime = document.getElementById("resultTime")
let myBtn = document.getElementById("myBtn")
let resultBtn = document.getElementById("resultBtn")

// 매개 값으로 넘어온 this를 사용하기
function oops(id) {
    id.innerHTML = 'Ooops!'
}
function displayDate() {
    resultTime.innerHTML = Date();
}

// 속성 값을 전달하므로 ()생략
myBtn.onclick = displayDate

// 페이지가 로드될 때
// onload를 onunload사용하여 쿠키를 처리
function checkCookies() {
    let text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
}

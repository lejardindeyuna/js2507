// https://www.w3schools.com/js/js_validation.asp
// JavaScript 예제

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    // 사용자가 입력한 값의 예외 처리(유용한지 체크)
    // 
    // 
    if (x == "") {
        // ▼ alert("Name 필드 입력 필수");
        alert("Name must be fillde out");
        return false;
    }
}





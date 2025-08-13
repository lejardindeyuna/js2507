// https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_form_elements

// let d = document
// 선언부
let txt = ""
const frm = d.forms["frm1"]
// const frmOne = document.querySelector('#frml")
// const input = document.querySelector


// 구현부
for (let i = 0; i < frm.length; i++) {
    // txt = txt + frm[0].value
    // txt += "_" + frm[0].value
    txt += "_" + frm[i].value
}

// 출력부
d.getElementById("result").innerHTML = txt
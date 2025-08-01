// swich 문 / 교재 p533~534

let seasson = prompt("관심 세션을 선택해 주세요~. 마케팅[a], 개발[b], 디자인[c]")


// season에는 "1" 또는 "2" 또는 "3"만 입력되어야한다
// switch (seasson) {
// switch문은 break 문

switch (seasson) {
    case "a": document.writeln("<p>마케팅 세션은 <strong>201호</strong>에서...</p>")
        break
    case "b": document.writeln("<p>개발 세션은 <strong>201호</strong>에서...</p>")
        break
    case "c": document.writeln("<p>디자인 세션은 <strong>201호</strong>에서...</p>")
        break
    default: alert("입력 오류")
}
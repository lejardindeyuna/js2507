//-----push 기존 배열에 추가 -----
let nums2 = [1, 2, 3];
let chars2 = ['a', 'b', 'c', 'd'];

// 요소 추가하기 - 새로운 length값 반환
let ret1 = nums.push(4, 5);
document.write(`length: ${ret1}| 배열: ${num}<br>`);
let ret2 = nums.unshift(0);
document.write(`length: ${ret2}| 배열: ${num}`);
document.write(`<hr>`)


//p598
let nums = [1, 2, 3];
let chars = ['a', 'b', 'c', 'd'];

let popped1 = chars.pop();
document.write(`꺼낸 요소: ${popped1}, | 배열: ${chars}<br>` );
let popped2 = chars.shift();
document.write(`꺼낸 요소: ${popped2}, | 배열: ${chars}` );
document.write(`<hr>`);

//p599
let study = ['html', 'css', 'web', 'jquery'];
// 인수가 1개일 경우
let js = study.splice(2);
document,write(`반환된 배열: ${js}<br>`);
document,write(`반환된 배열: ${study}`);
document,write(`<hr>`);
// 인수가 2개일 경우
let jquery = study.splice(1,1);
document,write(`반환된 배열: ${jquery}<br>`);
document,write(`반환된 배열: ${js}`);
document,write(`<hr>`);
// 인수가 3개일 경우
let modernJS = js.splice(1, 0, 'typescript');
document.write('반환된 배열: ${modernJs}<br>');
document.write('반환된 배열: ${js}');


//p600
let colors=["red", "green", "blue", "white", "black"];

document.write(colors.slice(2));
document.write(`<hr>`);
document.write(colors.slice(2, 4));



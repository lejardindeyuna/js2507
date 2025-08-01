for(let i = 2; i <= 9; i++) {
    // console.log(i)
document.write(`<h3>${i}단</h3>`)
document.write(`----------<br>`)
// i단 * j
for(let j = 1; j <= 9; j++) {
    document.write(`${1} X ${j} = ${i * j} <br>`)
}
}


// <=9(9보다 작거나 같아) < 10(10보다 작다)
document.write(`<table>`);
for(let i = 0; i < rowNum; i++) {
    document.write(`<tr>`);
    for(let j = 1; j <= colNum; j++) {
        let seatNo = i * colNum + j;
        if(seatNo > memNum) break;
        document.write(`<td> 좌석 ${seatNo} </td>`);
    }
    document.write(`</tr>`);
}
document.write(`</table>`);


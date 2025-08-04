// 자바스크립트 > https://www.w3schools.com/js/tryit.asp?filename=tryjs_ifthen
// 자바스크립트 > https://www.w3schools.com/js/tryit.asp?filename=tryjs_ifthenelse
// new Date=오늘 날짜, ▼ 자바스크립트가 돌 때 지금 날짜를 가지고 옴
// 뭔가를 가져올 때 앞에 get이라는 단어를 가지고 옴
// 내 컴퓨터가 = 로컬
let myDate = new Date()
let myHour = myDate.getHours()
let greeting = ""
//-----------testcode:start--------------------
// ▼ 가데이터 : 가상의 가짜값으로 테스트 해보세요
let timeAM = 9
let timePM = 18
// 가 데이터로 데스트
myHour = 7
//-----------testcode:end-------------------------

console.log(myDate)
console.log(myHour)

// if (조건문)

// 18를 time으로도 변경
if (myHour < timeAM) {
    greeting = "등원 준비를 해요~!"

// 굿 귀가는 18시 이후 보ㅓ옂;ㅁ짐
}else if(myHour > timePM) {
    greeting = "굿 귀가!!!"
   }   else {
    // \n < 1칸 띄는 거
       greeting = "열공 ^^ \n힘을내요"
}
console.log(greeting)




//else if (또다른 조건문)

//else (조건에 해당되지 않으면)
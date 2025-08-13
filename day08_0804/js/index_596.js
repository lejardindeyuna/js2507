// p596
//concat 새로운 배열 만들어 내기
let numschars = nums.concat(chars)
let charsNums = chars.concat(nums)

console.log(numschars)
console.log(charsNums)

//-----join 배열 합치기 -----
let nums2 = [1, 2, 3];
let chars2 = ['a', 'b', 'c', 'd'];

let string1 = nums2.join();
console.log(string1)
let string2 = chars2.join('/')
console.log(string2)
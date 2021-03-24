// Q.1 Can you write currentvalue value of array ?one your own reduce using for loop ?
// const arr = [1, 2, 3, 4, 5, 6];
// function OwnReduce(arr) {
//   let sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//       }
// return sum;
// }
// console.log(OwnReduce(arr));


const arrayOfNumbers = [11, 12, 33, 54, 58, 60];
//(a)

// function sumOfAllOdd(arr) {
//   let odd = 0;
//   for (var i = 0; i < arr.length; i++) {

//     if (arr[i] % 2 !== 0) {
//       odd = odd + arr[i];
//       // console.log(odd);
//     }


//   }
//   return odd;
// }
// console.log(sumOfAllOdd(arrayOfNumbers))

//(b)
// function sumOfOddindice(arr) {
//   let oddIndice = 0;
//   for (var i = 0; i < arr.length; i++) {

//     if ( i % 2 !== 0) {
//       odd = odd + arr[i];

//     }


//   }
//   return oddIndice;
// }
// console.log(sumOfOddindice(arrayOfNumbers))

//(c)
// function BiggestNuminArray(arr) {
//   let max = arr[0];
//   for (var i = 0; i <  arr.length; i++) {

//     if ( arr[i] > max) {
//       max = arr[i];

//     }


//   }
//   return max;
// }
// console.log(BiggestNuminArray(arrayOfNumbers))

//(d)
// function DivisiblebyTen(arr) {
//   let new_arr = [];
//   for (var i = 0; i <  arr.length; i++) {

//     if ( arr[i] % 10 ===0) {

//         new_arr.push(arr[i]);

//     }



//   }
//   return new_arr;
// }
// console.log(DivisiblebyTen(arrayOfNumbers))

// function DivisiblebyTenMapMethod(arr) {
//   const new_arr = arr.filter(function(item){
//     if(item % 10===0){
//     return item;
//     }
//   })
//     return new_arr;
// }
// console.log(DivisiblebyTenMapMethod(arrayOfNumbers))

//(e)
// function ReturnArray(arr) {
//   const new_arr = arr.map(function(item){
//     if(item % 2===0){
//     return item + 1;
//     }
//     else{
//      return item - 1;
//     }
//   })
//     return new_arr;
// }
// console.log(ReturnArray(arrayOfNumbers))

//(f)
// function odd_and_even_seprate(arr) {
//   let even = 0;
//   let odd = 0;

//   const new_arr = arr.map(function(item){
//     if(item % 2===0){
//     return even = even + item;
//     }
//     else{
//      return odd = odd + item;
//     }
//   })
//     return [even,odd];
// }
// console.log(odd_and_even_seprate(arrayOfNumbers))

// function odd_and_even_seprate(arr) {
//   let even = 0;
//   let odd = 0;

//   for(var i = 0;i<arr.length;i++)
//     if(arr[i] % 2===0){
//      even = even + arr[i];
//     }
//     else{
//      odd = odd + arr[i];
//     }

//     return [even,odd];
// }
// console.log(odd_and_even_seprate(arrayOfNumbers))
// console.log(
//   arrayOfNumbers.reduce(
//     (counts, num) => {
//       if (num % 2 !== 0) {
//         counts.sumOdd = counts.sumOdd + num;
//       } else counts.sumEven = counts.sumEven + num;
//       return counts;
//     },
//     { sumOdd: 0, sumEven: 0 }
//   )
// );


// array of strings

const arrayOfStrings = [
  "Apple",
  "Orange",
  "Mango",
  "Lichi",
  "Something",
  "fgh"
];

// (a)
// const similarStrings = strArr => {
//   let similarObj = {};
//   for (let i = 0; i < strArr.length; i++) {
//     if (similarObj[strArr[i].length] === undefined) {
//       similarObj[strArr[i].length] = 1;
//     } else similarObj[strArr[i].length] = similarObj[strArr[i].length] + 1;
//   }
//   return similarObj;
// };
// console.log(similarStrings(arrayOfStrings));


//(b)
// function VowelArray(arr){
//  let vowels = /[aeiou]/gi;
//  let new_arr=[];
// for(let i = 0 ;i<arr.length;i++ ){

//     if(arr[i].match(vowels))
//     {
//       new_arr.push(arr[i]);
//     }

// }
// return new_arr;


// }
// console.log(VowelArray(arrayOfStrings))

//(c)

// function ItemAsKey(arr) {
//   let new_arr = [];
//   for (let i = 0; i < arr.length; i++) {
//        new_arr.push({[arr[i]]:arr[i].length})
//   }
//   return new_arr;
// }
// console.log(ItemAsKey(arrayOfStrings))
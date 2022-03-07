num = [2, 4, 0, 100, 4, 11, 2602, 36];

function outLier(int) {
  evens = [];
  odds = [];
  for (let i = 0; i < int.length; i++) {
    let num = int[i];
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }

  if (evens.length > odds.length) return odds[0];
  else {
    return evens[0];
  }
}

console.log(outLier(num));

// let evenArr = [2, 4, 0, 100, 4, 11, 2602, 36]; // Should return 11
// let oddArr = [160, 3, 1719, 19, 11, 13, -21]; // Should return 160

// const findOutlier = (arr) => {
//   let tempOddArr = [];
//   let tempEvenArr = [];

//   arr.forEach((number, index) => {
//     if (number % 2 === 0) tempEvenArr.push(number);
//     else tempOddArr.push(number);
//   });

//   if (tempEvenArr.length === 1) return tempEvenArr[0];
//   if (tempOddArr.length === 1) return tempOddArr[0];
//   else return "Error";
// };

// console.log(findOutlier(evenArr));
// console.log(findOutlier(oddArr));

// findOutlier = (nums) => {
//   let evens = []
//   let odds = []

//   nums.forEach(ele => {
//     ele % 2 === 0 ? evens.push(ele) : odds.push(ele)
//   })

//   if(evens.length === 1){
//     return evens
//   } else {
//     return odds
//   }
// }

// let arr = [2, 4, 0, 100, 4, 11, 2602, 36]

// function evenSteven (call) {
//  let evenArr = []
//  let oddArr = []

//   for(let i = 0; i<call.length; i++){
//   if (call[i] %2 === 0  ){
//     evenArr.push(call[i])
//   }else if (call[i] %2 !== 0){
//     oddArr.push(call[i])
//   }else console.log("we have a problem señor")

//   }if (evenArr.length < oddArr.length){
//     console.log(evenArr)
//   }else{
//     console.log(oddArr)
//   }

// }

// evenSteven(arr)

// function findOutlier(arr) {
//   let evenArr = [];
//   let oddArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenArr.push(arr[i]);
//     } else {
//       oddArr.push(arr[i]);
//     }
//   }

//   if (evenArr.length === 1) {
//     return evenArr[0];
//   } else {
//     return oddArr[0];
//   }
// }

// const findOutlier = (arr) => {
//   let evenOut = []
//   let oddOut = []
//   for(let i = 0; i < arr.length; i++) {
//       if(arr[i] % 2 === 0) {
//           evenOut.push(arr[i])
//           // console.log(evenOut)
//       } else if(arr[i] % 2 !== 0) {
//           oddOut.push(arr[i])
//           // console.log(oddOut)
//       }
//   }
//   if(evenOut.length < oddOut.length){
//       // console.log(oddOut)
//       return evenOut
//   } else {
//   // console.log(evenOut)
//   return oddOut
//   }
// }

// // console.log(findOutlier([59, 23, 45, 28, 557]))
// console.log(findOutlier([8, 64, 42, 35, 998]))

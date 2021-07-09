// // var arr = [11,10, 6, 44, 9, 12, 7, 13]
// // var cnt=0;

// // arr.sort((number1, number2) => number1 - number2);


// // var element = 99;
// // var low = 0,
// //   upp = arr.length - 1;
// // var flag = 0;
// // while (low < upp) {
// //   let mid = Math.floor((low + upp) / 2);
// //   if (element > arr[mid]) {
// //     low = mid + 1
// //   } else if (element < arr[mid]) {
// //     upp = mid - 1
// //   } else if (element == arr[mid]) {
// //     flag++;
// //     break;
// //   }
// // }
// // console.log(flag == 0 ? "not found" : "found");


// var arr=[10,12,8,6,22,20,18];
// var elem=25;
// arr.sort((number1, number2)=>number1 - number2);
// var flag=0;
// var low=0;
// var upp=arr.length-1;

// while(low<upp){
  
// var mid=Math.floor((low+upp)/2);
//   if(elem>arr[mid]){
//     low=mid+1;
//   }
//   else if(elem<arr[mid]){
//     upp=mid-1;
//   }
//   else if(elem==arr[mid]){
//     flag++;
//     break;
//   }
// }
// console.log(flag == 0? "not found" : "found");




var arr=[2,4,3,5,6,8,7,9];
arr.sort((num1,num2)=>num1-num2)

var elem=4;
var low=0;
var upp=arr.length-1;
var flag=0;
while(low<upp){
  let mid=Math.floor((low+upp)/2);

  if(elem>arr[mid]){
    low=mid+1;
  }
  else if(elem<arr[mid]){
    upp=mid-1;
  }
  else if(elem==arr[mid]){
  flag++;
  break;
  }
}
console.log(flag == 0?"not found":"found");





















































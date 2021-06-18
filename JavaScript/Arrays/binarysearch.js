var arr = [8,10, 6, 44, 9, 12, 7, 13]

arr.sort((number1, number2) => number1 - number2);

var element = 99;
var low = 0,
  upp = arr.length - 1;
var flag = 0;
while (low < upp) {
  let mid = Math.floor((low + upp) / 2);
  if (element > arr[mid]) {
    low = mid + 1
  } else if (element < arr[mid]) {
    upp = mid - 1
  } else if (element == arr[mid]) {
    flag++;
    break;
  }
}
console.log(flag == 0 ? "not found" : "found");

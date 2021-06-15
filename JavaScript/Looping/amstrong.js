var num=153, rem ,sum=0;
while(num>0){
        rem=num%10;
        sum=sum+(rem*rem*rem);
        num=num/10;
}
console.log(sum);

// var i = 1,
//   sum = 0;
// while (i <= 100) {
//   if (i % 2 != 0) {
//     sum = sum + i;
//     i = i + 2;
//   }
// }
// console.log(sum);


// var  n1=0, n2=1,n3=0, i=0;
// while(n3<21){
//     n3=n1+n2;
//   n1=n2;
//   n2=n3;
  
    
//   console.log(n3);
//   i++;
// }



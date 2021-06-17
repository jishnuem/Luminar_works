// var num1 = 14, num2 = 63, gcd;
// for (i = 1; i <= num1 && i <= num2; i++) {
//   if (num1 % i == 0 && num2 % i == 0) {
//     gcd = i;
//   }
// }
// console.log(gcd);


var n=4,flag=0;
for(let i=2;i<n;i++){
    if(n%i==0){
        flag=1;
        
    }
    
}
if(flag==0){
    console.log("prime");
    }
    else{
        console.log("not prime");
    }
    
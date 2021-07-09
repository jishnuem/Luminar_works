//  function oddeven(num){
//   return num%2==0?false:true
// }
//  console.log(oddeven(11));


// function fact(num){
//     let fact=1
//     for(let i=1;i<=num;i++){
//         fact=fact*i;

//     }
//     return fact
// }
// console.log(fact(5));

// function subtract(num1,num2){
//     let value;
//     if(num1<num2){
//         return value=num2-num1;
//     }
//     else{
//         return value=num1-num2;
//     }

    
// }
// console.log(subtract(6,8));



function addnumber(...params){
    let res=0;
    for(let i of params){
        
        res+=i;
    }
    return res;
}
console.log(addnumber(2,2,3,4,1));
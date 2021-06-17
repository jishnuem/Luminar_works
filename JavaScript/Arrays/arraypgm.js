var arr=[1,2,3,4]
var cnt=0;
var elem=6;
var low=0, upper=arr.length-1;
while(low<upper){
    let total=arr[low]+arr[upper];
    if(elem==total){
        console.log( `pairs ${arr[low]} ${arr[upper]}`);
        low++;
    }
    else if(elem>total){
        low=low+1;
    }
    else if(elem<total){
        upper=upper-1;
    }
}







//console.log(arr.sort()); 
// var elem=6
// var cnt=0
//     for(let num1 of arr){
//         for(let num2 of arr){
//             let total=num1+num2;
// cnt++;
//             if(elem==total){
//                 console.log(num1,num2);
//                 break
//             }
//         }
//     }


// console.log(cnt);





    //console.log(Math.min(3,4));
    //console.log(Math.max(5,3,2,7,9));


// var odd=[], even=[]
// for(let num of arr){
//     if(num%2==0){
//         even.push(num);
//     }
//     else{
//         odd.push(num)
//     }
// }
// console.log("odd arrar",odd);
// console.log("even array", even);



// arr.pop()
// console.log(arr);


// var sum=0;
// for(let num of arr){
//     sum+=num;
    
// }
// console.log(sum);
// for(let even of arr) {
//     if(even%2==0){
//         console.log(even);
//     }
    
// }

//find highest number
//find lowest number
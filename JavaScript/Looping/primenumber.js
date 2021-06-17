var n=21,flag=0;
for(i=2;i<n;i++){
    if(n%i==0){
        flag=1;
        break
    }
}
if(flag==0){
    console.log("prime");
}
else{
    console.log("not");
}


// var low=21, upper=40 ;

// for(let i=low; i<upper;i++){
//     let flag=0;
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             flag=1;
//             break
            
//         }
       
//         }
//          if(flag==0){
//             console.log(i);
//     }
    
// }

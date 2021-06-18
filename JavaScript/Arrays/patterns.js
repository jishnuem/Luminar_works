// var row=5;
// var string=" "
// for(let i=0;i<=row;i++){
    
//     for(let j=i;j<=i;j++){
//         string+="* ";
       
//     }
//     console.log(string);
    
// }
//full pyramid
var row=12;
var str="";
for(let i=1;i<=row;i++){
    
    for(let j=0;j<row-i;j++){
        str+=" ";
    }
    for(let k=0;k<i;k++){
        str+="* ";
    }
    str+="\n";
    
}
console.log(str);
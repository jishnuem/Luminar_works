var arr=[10,11,12,13,14,15];
elem=18;
var flag=0;
for(let num of arr){
    if(num==elem){
        flag++
        
    }

}
console.log(flag==0?"element not found":"found");
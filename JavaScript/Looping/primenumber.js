var num=11, flag=0;
for(let i=2; i<=num;i++){
    if(num%i==0)
    {   flag++;
        
    }
    
}
if(flag==0){
    console.log("prime");
}
else{
    console.log("not prime");
}
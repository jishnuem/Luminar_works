var low = 21,
  upper = 40;

for (let num = low; num < upper; num++) {
    let flag=-0;
    for(let j=2;j<num;j++){
        if(num%j==0)
        {
            flag++;
            break
        }
    }
    if(flag==0){
        console.log(num);
    }
}

var arr=[4,3,100,77,8,22];
var temp=0;
for(let i=0;i<arr.length;i++){
    for(let j=i+1; j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
        
    }
    
}
for(let i=0;i<arr[i];i++)
    console.log(arr[i]);

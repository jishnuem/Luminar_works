// //arrow functions

// // let sub=(num1,num2)=>num1-num2;
// // console.log(sub(10,20));

// // let add=(num1,num2)=>num1+num2;
// // console.log(add(2,5));

// // let cube=num=>num**3;
// // console.log(cube(2));

// // //oddoreven

// // let chk=num=>num%2==0?"even":"odd";
// // console.log(chk(5));

// //map function

// // var arr=[3,5,4,6,8];

// // var square=arr.map(num=>num**2);
// // console.log(square);

// var products=[
//     {code:1000,name:"garlic",mrp:120,aval_qty:10},
//     {code:1001,name:"chilly",mrp:80,aval_qty:5},
//     {code:1002,name:"tomatto",mrp:35,aval_qty:20},
//     {code:1003,name:"onion",mrp:40,aval_qty:37},
//     {code:1004,name:"potatto",mrp:45,aval_qty:40},
//     {code:1005,name:"banana",mrp:55,aval_qty:60},
//     {code:1006,name:"brinjal",mrp:43,aval_qty:2},
//     {code:1007,name:"beetroot",mrp:38,aval_qty:5},
//     {code:1008,name:"carrot",mrp:60,aval_qty:0},
//     {code:1009,name:"bittergod",mrp:50,aval_qty:5},
// ]

// //foreach method

// var arr=[7,3,5,6,1,2];
// arr.forEach(item=>console.log(item))

// //some method
// var aval=products.some(item=>item.mrp<=10)
// //console.log(aval);

// //find method

// var srch=products.find(item=>item.name=="potatto")
// //console.log(srch);

// var costly_pdt=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2);
// //console.log(costly_pdt);

// var low_cost=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item2:item1)
// //console.log(low_cost);

// var sort_qty=products.sort((item1,item2)=>item1.aval_qty - item2.aval_qty).forEach(item=>console.log(item));
// console.log(sort_qty);

// var arr=[7,3,5,6,1,2];
// var sort=arr.sort((num1,num2)=>num1 - num2).forEach(item=>console.log(item))



// // var p_name=products.map(item=>item.code);
// // console.log(p_name);

// // var product_name=products.map(item=>item.name.toUpperCase());
// // console.log(product_name);



// //filter method
//  var arr =[3,4,5,8,7,9];
//
// // var even=arr.filter(num=>num%2==0)
// // console.log(even);


// // var price=products.filter(item=>item.mrp<50)
// // console.log(price);

// // var range=products.filter((item=>item.mrp>30)&&(item=>item.mrp<50))
// // console.log(range);

// // var outstock=products.filter(item=>item.aval_qty<1)
// // console.log(outstock);


// // var arr=[7,3,5,6,1,2];
// // var op=arr.map(num=>num>5?num+1:num-1);
// // console.log(op);

// //reduce method

 //var arr=[7,3,5,6,0,2];

 //var total=arr.reduce((num1,num2)=>num1+num2);
// // console.log(total);

// var total = arr.reduce((num1,num2)=>num1>num2?num1:num2);
 //console.log(total);

// // var total=arr.reduce((num1,num2)=>num1>num2?num2:num1)
// // console.log(total);


var arr=[10,2,5,3,6,7,9,8];
var op=arr.map(num=>num>5?num+1:num+2).sort((num1,num2)=>num1-num2)
//console.log(op);

var opp=arr.filter(num=>num-2).sort((num1,num2)=>num1-num2)
//console.log(opp);

var oppp=arr.map(num=>num>5?num+1:num-1).sort((num1,num2)=>num1-num2)
//console.log(oppp);

var opppp=arr.reduce((num1,num2)=>num1+num2)
//console.log(opppp);

//var op1=arr.reduce((num1,num2)=>num1>num2?num2:num1)
//console.log(op1);

arr.sort((num1,num2)=>num1-num2).forEach(num=>console.log(num))
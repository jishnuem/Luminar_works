// // //method overloading

// // class Calculation{
// //     add(){
// //         console.log("inside no arg");
// //     }
// //     add(num1){
// //         console.log("inside two arg");
// //     }
// //     add(num1,num2){
// //         console.log("inside two arg");
// //     }
// // }
// // var obj=new Calculation()
// // obj.add()
// // obj.add(2)
// // obj.add(2,5)

// //method overriding


// class Parent{
//     phone(){
//         console.log("samsung");
//     }
// }
// class Child extends Parent{
//     phone(){
//         super.phone() //to call parent method
//      console.log("iphone");
//     }
// }
// var obj=new Child();
// obj.phone()




class Rectangle{
    area(...args){
        console.log(args[0]*args[1]);
    }
}

class shape extends Rectangle{
        area(...args){
            console.log(args[2]*args[2]);
            super.area(args[0],args[1])
        }
}

var sh=new shape();
sh.area(10,10,11)




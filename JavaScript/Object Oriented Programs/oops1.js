// class Person{
//     pdetails(id,name,age){
//         this.id=id;
//         this.name=name;
//         this.age=age;
//     }
//     printdetails(){
//         console.log(this.id,this.name,this.age);
//     }
   
// }
// var person=new Person();
// person.pdetails(11,"ram",22);
// person.printdetails()







class Employee{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    pdetails(){
        console.log(this.id,this.name,this.salary);
    }
}
var emp=new Employee(01,"Aju",25000)
emp.pdetails()




















class student{
        constructor(id,name,age){
            this.id=id;
            this.name=name;
            this.age=age;
        }
        printdetails(){
            console.log(this.id,this.name,this.age);
        }
       
    }
    var stud=new student(11,"ram",22);
    stud.printdetails()
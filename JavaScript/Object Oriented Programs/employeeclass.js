class Employee{
    constructor(id,name,desig,salary,exp){
        this.id=id;
        this.name=name
        this.salary=salary
        this.desig=desig
        this.exp=exp
      
    }
}
  var emp1=new Employee(100,"aju","dev",25000,2)
  var emp2=new Employee(101,"amal","python",30000,2)
  var emp3=new Employee(102,"anu","mearn",40000,1)
  var emp4=new Employee(103,"unni","java",20000,3)
  var emp5=new Employee(104,"steniya","react",45000,2)

  var employe=[]
  employe.push(emp1,emp2,emp3,emp4,emp5)
  
  //var op=employe.reduce((obj1,obj2)=>obj1.salary>obj2.salary?obj1:obj2)
   // var op=employe.sort((obj1,obj2)=>obj2.exp - obj1.exp)

   //var op=employe.some((obj)=>obj.desig=="react")
   //var op=employe.map((item)=>item.salary).sort((obj1,obj2)=>obj1-obj2)
   //var op=employe.filter((item)=>item.salary>40000)
   var op=employe.find((item)=>item.name=="steniya")
  console.log(op);
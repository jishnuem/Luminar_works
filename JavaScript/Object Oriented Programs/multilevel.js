class Parent{
    m1(){
        console.log("inside parent");
    }
}
class Child extends Parent{
    m2(){
        console.log("inside child");
    }
}
class Subchild extends Child{
    m3(){
        console.log("inside subchild");
    }
}
var sub=new Subchild()

sub.m3()
sub.m2()
sub.m1()
var par=new Parent()
par.m1()
// par.m2()
// par.m3()
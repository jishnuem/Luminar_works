

class Bank{
    status=0;
    accounts={
        1000:{account_number:1000,name:"ajay",balance:1000,username:1000,password:"userone"},
        1001:{account_number:1001,name:"vjay",balance:2000,username:1001,password:"usertwo"},
        1002:{account_number:1002,name:"ram",balance:3000,username:1002,password:"userthree"},
        1003:{account_number:1003,name:"ravi",balance:4000,username:1003,password:"userfour"}
    }
    

    getAccountDetails(){
        
        return this.accounts
    }
    authenticate(username,pwd){
       let account_details=this.getAccountDetails()
       if(username in account_details){
           if(pwd==account_details[username]["password"]){
               return 1
           }
           else{
               return -1
           }
       }
       else{
           return 0
       }
    }

   balanceEnquiry(account_number){
       if(this.status==1){
    return this.accounts[account_number]["balance"];

   }
 
   return "invalid session"
}
   fundTransfer(from_account,to_account,amount){
       if(this.status==1){
       let bal=this.balanceEnquiry(from_account)
       if(bal>=amount){
       if(to_account in this.accounts){
           this.accounts[from_account]["balance"]-=amount;
           this.amount[to_account]["balance"]+=amount
       }
       else{
           console.log("invalid session");
       }
   }
   else{
       console.log("insufficient balance");
   }
       }
   else{
       console.log("invalid session");
   }

}
logout(user){
    this.status=0;
}

}
var obj=new Bank()
 var user=obj.authenticate(1000,"userone")
// var res=user==0?"invalid" : user==-1? "invalid password" : "success"
obj.fundTransfer(user,1000,200);
obj.balanceEnquiry(1000)
//console.log(obj.balanceEnquiry(1000));
//obj.logout();

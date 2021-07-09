function account() {
    let acc_no = acc_num.value;
    let namee = name.value;
    let balan = balance.value;
    let passw = pwd.value;
    let email = mail.value;
    var acc = {
        acc_no, namee, balan, passw, email
    }
    localStorage.setItem(acc_no, JSON.stringify(acc))
    location.reload(true)
}

function login(){
    let user_name=uname.value;
    let password=pwd.value;
    let login_account={user_name,password}
    console.log(login_account);
    let user=JSON.parse(localStorage.getItem(user_name))
    console.log(user);
    if(user_name in localStorage){
        if(user.passw==password){
            //alert("Login Successful")
            sessionStorage.setItem("user",user_name)
            window.location.href="./home.html"
        }
        else{
            alert("Invalid Password")
        }
    }
    else{
        alert("Invalid UserName")
    }
}

function balanceEnquiry(){
    let user=sessionStorage.getItem("user")
    let account=JSON.parse(localStorage.getItem(user))
    alert(account.balan)

}
var req=sessionStorage.getItem("user")
if(req){
    litem.innerHTML=` ${req}   Logout`
}

function logout(){
    sessionStorage.removeItem("user");
    location.href="./blogin.html"
}

function fundTransfer(){
    let to_accno=toacno.value;
    let confirm=cacno.value;
    let amt=amount.value;
    let logged_user=JSON.parse(localStorage.getItem(req))
    if(logged_user.balan<amt){
        alert("insufficient balance")

    }
    else{
        logged_user.balan=Number(logged_user.balan)-Number(amt)
        localStorage.setItem(logged_user.acc_no,JSON.stringify(logged_user))
        if(to_accno in localStorage){

            let user=JSON.parse(localStorage.getItem(to_accno))
            user.balan=Number(user.balan)+Number(amt)
        localStorage.setItem(user.acc_no,JSON.stringify(user))    
            alert("transaction completed")
    }
    }


}

function paymentHistory(){
   let hist=[ ]
   let user_history=JSON.parse(localStorage.getItem(req));
   console.log(user_history);
   hist.push(user_history)
   alert(hist[2])
   

}
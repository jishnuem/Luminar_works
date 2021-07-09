function account(){
    let account_number=acc_num.value;
    let a_name=name.value;
    let a_balance=balance.value;
    let password=pwd.value;
    let email=mail.value;

    var account={
        account_number,a_name,a_balance,password,email
    }
    console.log(account);
    localStorage.setItem(account_number,JSON.stringify(account))
    window.location.href="demologin.html"
   // location.reload(true)
}

function login(){
    let user_name=uname.value;
    let password=pwd.value;
    let user=JSON.parse(localStorage.getItem(user_name))
    console.log(user);
    if(user_name in localStorage){
        if(user.password==password){
            sessionStorage.setItem("user",user_name)
            window.location.href="homebank.html"
            
            alert("Login success")
        }
        else{
            alert("invalid password")
        }
    }
    else{
        alert("invalid username")
    }
}

function balanceEnquiry(){
    let user = sessionStorage.getItem("user")
    let account = JSON.parse(localStorage.getItem(user))
    alert(account.a_balance)

}

var req=sessionStorage.getItem("user")
if(req){
    litem.innerHTML=`Logout ${req}`
}

function logout(){
    sessionStorage.removeItem("user")
    window.location.href="demologin.html";
}

function fundTransfer(){
    let to_accno=toacno.value;
    let confirm_accno=cacno.value;
    let amt=amount.value;

    let logged_user=JSON.parse(localStorage.getItem(req))
    if(logged_user.a_balance<amt){
        
    }

}
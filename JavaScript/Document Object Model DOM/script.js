function checkslot(){
    let age=document.querySelector("#age").value
    let html_data=age<18? "Not eligible" : "Eligible"
    alert(html_data)
}
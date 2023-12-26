var username = document.getElementById("username");
var password =document.getElementById("password");


function login(){

    user={
        username:username.value,
        password:password.value,
    }
   if(username.value === " " || password.value === ""){
    alert("Please Enter your data");
    document.getElementById("loginform").password.focus();
    document.getElementById("loginform").username.focus();
   }
    else if(username.value == "admin" && password.value == "Nourhan2001"){
        alert("Welcome :)");
        return true;
    }
    
    
  else if(username.value !="admin"){ 
    alert("please enter correct username");
    document.getElementById("loginform").username.focus();
    document.getElementById("loginform").username.value=" ";
    return false;
}
   else { 
    var regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/;
    if(regexp.test(password.value)==false){
        alert("password should contain small, capital and numbers should atleast 8 charcters");
        document.getElementById("loginform").password.focus();
        document.getElementById("loginform").password.value="";
        return false;
    }
    else{
    alert("please enter correct password");
    document.getElementById("loginform").password.focus();
    document.getElementById("loginform").password.value="";
    return false;
}
   }
   
   
}

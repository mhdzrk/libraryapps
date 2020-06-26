var username = document.getElementById('username');
var email = document.getElementById('email');
var pwd = document.getElementById('password');
var cpwd = document.getElementById('conpassword');
var dob = document.getElementById('dob');
var phone = document.getElementById('phone');

function validate(){
    if (username.value.trim()==""){
              
        alert("invalid username");
        return false;
              
                
    }
    if(username.value.length<5){
        alert("invalid username");
        return false;

    }
    if (email.value.trim() == ""){
        alert("invalid email");
        return false;
    }
    if (email.value.indexOf('@') <= 0){
        alert("invalid email")
        return false;
        }
    if((email.value.charAt(email.value.length-4)!='.') && (email.value.charAt(email.length-3)!='.')){
        alert("invalid email");
        return false;
    }
    if (pwd.value.trim()==""){
        alert("enter password");
        return false;
    }
    if (pwd.value.length<8){
        alert("enter a valid password");
        return false;
        }
    if (pwd.value!==cpwd.value){
        alert ("please confirm your password");
        return false;
    }
    if(dob.value==""){
        alert("please fill your date of birth");
        return false;
    }
    if(phone.value.trim()==""){
        alert("please enter your phone number");
        return false;
    }
    if(isNaN(phone.value)){
        alert("enter a valid number");
        return false;
    }
    if((phone.value.length<10) || (phone.value.length>10)){
        alert("invalid phone number");
        return false;
    }


          }



function fvalidate(){
    if (username.value.trim()==""){
              
        alert("invalid username");
        return false;
              
                
    }
    if(username.value.length<5){
        alert("invalid username");
        return false;
    }
    if (pwd.value.trim()==""){
        alert("enter password");
        return false;
    }
    if (pwd.value.length<8){
        alert("enter a valid password");
        return false;
        }


}


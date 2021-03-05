function userValidation(){
    let check_username= /^[a-zA-Z. ]{3,30}$/ ;
    let check_password=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*. ]{8,16}$/ ;
    let check_email = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/ ;
    let check_mobile=/[0-9]{10}/ ;
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let confirm_password=document.getElementById("cpassword").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mobile").value;

        if(username.match(check_username))
        document.getElementById("name-error").innerHTML="";
        else{
            document.getElementById("name-error").innerHTML="Enter valid username";
            return false;
        }

        if(password.match(check_password))
        document.getElementById("password-error").innerHTML="";
        else{
            document.getElementById("password-error").innerHTML="Enter valid password";
            return false;
        }

        if(password!==confirm_password){
            document.getElementById("cpassword-error").innerHTML="Password does not match..";
            return false;
        }

        if(email.match(check_email))
        document.getElementById("email-error").innerHTML="";
        else{
            document.getElementById("email-error").innerHTML="Enter valid email";
            return false;
        }

        if(mobile.match(check_mobile))
        document.getElementById("mobile-error").innerHTML="";
        else{
            document.getElementById("mobile-error").innerHTML="Enter valid mobile number";
            return false;
        }
}
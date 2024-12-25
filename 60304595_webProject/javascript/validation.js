function validateField(fieldID){
    if(document.getElementById(fieldID).value==""){
        document.getElementById(fieldID).style.border= "2px solid red";
        document.getElementById(fieldID).placeholder = "Enter a value here!"
        return false;
    }
    else{
        document.getElementById(fieldID).style.border= "1px solid black";
        return true;
    }
}


function validateEmail(){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = document.getElementById("email").value;
    if(!emailPattern.test(email) || email==""){
        document.getElementById("email-error-msg").innerHTML = "Please enter a valid email address";
        document.getElementById("email-error-msg").style.color= "red" ;
        document.getElementById("email").style.border = "2px solid red";
        return false;
    }
    else{
        document.getElementById("email-error-msg").innerHTML = "";
        document.getElementById("email-error-msg").style.color= "black" ;
        document.getElementById("email").style.border = "1px solid black";
        return true;
    }

}



function confirm(mainfeild , newfield , errormsg){
    let mainvalue= document.getElementById(mainfeild).value;
    let newvalue= document.getElementById(newfield).value;

    if(mainvalue!=newvalue || newvalue==""){
        document.getElementById(newfield).style.border = "2px solid red";
        document.getElementById(errormsg).style.display = "block";
        return false;
    }
    else{
        document.getElementById(newfield).style.border = "1px solid black";
        document.getElementById(errormsg).style.display = "none";

        return true;

    }

}


function validateNumber(fieldID,errormsg){
    let num = document.getElementById(fieldID).value;
    if(isNaN(num) || num.length <12){
        document.getElementById(fieldID).style.border = "2px solid red";
        document.getElementById(errormsg).style.display = "block";
        return false;
    }
    else{
        document.getElementById(fieldID).style.border = "1px solid black";
        document.getElementById(errormsg).style.display = "none";

        return true;

    }

}


function validateage(fieldID,errormsg){
    let num = document.getElementById(fieldID).value;
    if(isNaN(num) || num.length==0 || parseInt(num)<0){
        document.getElementById(fieldID).style.border = "2px solid red";
        document.getElementById(errormsg).style.display = "block";
        return false;
    }
    else{
        document.getElementById(fieldID).style.border = "1px solid black";
        document.getElementById(errormsg).style.display = "none";

        return true;

    }

}


function validateRadio(){
    let radios = document.getElementsByName("contact");
    let isChecked = false;

    for (const radio of radios) {
        if (radio.checked) {
            isChecked = true;
            break;
        }
    }

    if (isChecked) {
        document.getElementById("radioerror").style.display = "none";
        return true; 
    } else {
        document.getElementById("radioerror").style.display = "inline";
        return false; 
    }

}

function validdate(){
    if(document.getElementById("dob").value ===""){
        document.getElementById("dob").style.border = "2px solid red";
        document.getElementById("dobmsg").style.display = "inline";
        return false;
    }
    else{
        document.getElementById("dob").style.border = "1px solid black";
        document.getElementById("dobmsg").style.display = "none";
        return true;
    }
}


function validateForm(){
    let validName = validateField('name');
    let validUserName = validateField('username');
    let confirmpass = validateField('password');
    let validConfirmPassword = confirm('password' , 'confirmpass' ,'passerrormsg');
    let validemail = validateEmail();
    let validconfirmmail = confirm('email' , 'confirmemail' , 'emailerrormsg');
    let validnumber =  validateNumber('phone','phoneerrormsg');
    let validage = validateage('age','ageerrormsg');
    let validblg =  validateField('blg');
    let validstreet = validateField('street');
    let validdatecheck = validdate();
  
    let validForm = false;
    if (validName && validUserName && confirmpass && validConfirmPassword && validemail && validconfirmmail && validdatecheck &&  validnumber && validage && validblg && validstreet) {
        validForm = true;
    }
    return validForm;
}


function validatecontactForm(){
    let validname =  validateField('name');
    let validmessage = validateField('Message');
    let validmail =  validateEmail();
    let validradio = validateRadio();

    let validForm = false;
    if(validname && validmessage && validmail && validradio){
        validForm= true;
    }
    return validForm;
}
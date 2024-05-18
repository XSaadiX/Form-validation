const nameErr=document.getElementById("nameErr");
const numErr=document.getElementById("numErr");
const emailErr=document.getElementById("emailErr");
const msgErr=document.getElementById("msgErr");
const subErr=document.getElementById("subErr");

function validateName(){
    let name =document.getElementById('name').value;
    let nameRe=/[A-Za-z]\s{1}[A-Za-z]/; ///^[A-Za-z]+\s[A-Za-z]+$/
    
    if(name.length==0){
        nameErr.innerHTML='Name is Required';
        return false;
    }
     if(!(name.match(nameRe))){
        nameErr.innerHTML='Write full name';
        return false;
    }
    nameErr.innerHTML='Valid';
    return true
    }


function validateNo(){
    let phoneNo=document.getElementById('number').value;
    let phoneNoRe=/^\d{1,3}[ -]?\d{7,9}$/;// phoneNoRe=/\+?(?<area code>\d{1,3})?[ -]?(\d[0-9]) / // phoneNoRe=/[0-9]{10}$/

    if (phoneNo.length==0) {
        numErr.innerHTML='Phone number is required'
        return false;
    }
    if(!phoneNo.match(phoneNoRe)){
        numErr.innerHTML='Check your number'
        return false;
    }
    numErr.innerHTML='Valid'
    return true;


}

function validateEmail(){
    let email=document.getElementById('email').value;
    let emailRe=/^[a-zA-Z]\._\-[0-9]*[@][a-zA-Z]*[\.][a-z]{2,4}$/;
    if (email.length==0) {
        emailErr.innerHTML='Email Required'
        return false;
    }
    if(!email.match(emailRe)){
        emailErr.innerHTML='not valid'
        return false;
    }
    emailErr='valid'
    return true
}

// function validateMsg(){

// }

// function submit(){

// }



let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName(){
    let name = document.getElementById("contact-name").value; 
    let nameExpression =  /^[A-Za-z]*\s{1}[A-Za-z]*$/ ;

    if(name.length == 0){
        nameError.innerHTML = `Name is required<i id="incorrect" class="ri-close-circle-fill"></i>`;
        return false;
    }

    if(!name.match(nameExpression)){
        nameError.innerHTML = `Write Full Name <i id="incorrect" class="ri-close-circle-fill"></i>`;
        return false;
    }

    nameError.innerHTML= `<i id="correct" class="ri-checkbox-circle-fill"></i>`;
    return true;
}


function validatePhone(){
    let phone = document.getElementById("contact-phone").value; 
    let phnExpression = /^[0-9]{10}$/ ;

    if(phone.length == 0){
        phoneError.innerHTML = `Phone no. is required<i id="incorrect" class="ri-close-circle-fill"></i>`;
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML = `Phone no. should be 10 digits<i id="incorrect" class="ri-close-circle-fill"></i>`;
        return false;
    }

    if(!phone.match(phnExpression)){
        phoneError.innerHTML = `Enter Only digits<i id="incorrect" class="ri-close-circle-fill"></i>`;
        return false;
    }

    phoneError.innerHTML = `<i id="correct" class="ri-checkbox-circle-fill"></i>`;
    return true;
}




function validateEmail(){

    let email = document.getElementById("contact-email").value; 
    let emailExpression = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);

    if(email.length == 0){
        emailError.innerHTML = `Email is required<i id="incorrect" class="ri-close-circle-fill"></i>`;
        return false;
    }

    if(!email.match(emailExpression)){
        emailError.innerHTML = `Email Invalid!<i id="incorrect" class="ri-close-circle-fill"></i>`;
        return false;
    }

    emailError.innerHTML = `<i id="correct" class="ri-checkbox-circle-fill"></i>`;
    return true;
}


function validateMessage(){

    let message = document.getElementById("contact-message").value; 
    let required = 30;
    let left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + `more characters required<i id="incorrect" class="ri-close-circle-fill"></i>`;
        return false;
    }
    messageError.innerHTML =`<i id="correct" class="ri-checkbox-circle-fill"></i>`;
    return true;
}



function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = `Please fix the Error above<i id="incorrect" class="ri-close-circle-fill"></i>`;
        setTimeout(function(){
            submitError.style.display = "none";
        },3000);
        return false;
    }
}
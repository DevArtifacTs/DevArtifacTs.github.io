const submitButton = document.querySelector(".btn-submit");

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    // select input element
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name")
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
    
    // select error message element 
    const firstNameErr = document.querySelector("#first-name-err");
    const lastNameErr = document.querySelector("#last-name-err");
    const emailErr = document.querySelector("#email-err");
    const passwordErr = document.querySelector("#password-err");

    // Define each element's error message
    const firstNameErrMsg = "First name cannot be empty";
    const lastNameErrMsg =  "Last name cannot be empty";
    const emailErrMsg =  "Looks like this is not an email"
    const passwordErrMsg = "Password cannot be empty"

    // Select Error icon for each element
    const firstNameErrIcon = document.querySelector("#first-name-err-icon");
    
    // Define error icon HTML element
    const errorIconElem = (message) => {
        return ( `
    <p>${message}</p>
    <img src="./images/icon-error.svg" alt="" id="err-icon">
    `
    )}
    
    //Form Validation
    if(firstName.validity.valueMissing){
        firstNameErr.innerHTML = errorIconElem(firstNameErrMsg) ;
        firstName.classList.add('border-red');
    }
    if(lastName.validity.valueMissing){
        lastNameErr.innerHTML = errorIconElem(lastNameErrMsg) ;
        lastName.classList.add('border-red');
    }
    if(email.validity.typeMismatch) {
        emailErr.innerHTML = errorIconElem(emailErrMsg) ;
        email.classList.add('border-red');
    }
    if(password.validity.valueMissing){
        passwordErr.innerHTML = errorIconElem(passwordErrMsg) ;
        password.classList.add('border-red');
    }


    
    
    
})
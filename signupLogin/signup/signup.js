function isPasswordCorrect(password, verificationPassword){
    if (password !== verificationPassword){
        errorMessageSpan.textContent = "The password and the verification password don't match."
        return false
    }
    if (password.length < 8){
        errorMessageSpan.textContent = "The password must have at least 8 characters."
        return false
    }
    if (password.toUpperCase() === password){
        errorMessageSpan.textContent = "The password must contain at least 1 lower case character."
        return false
    }
    if (password.toLowerCase() === password){
        errorMessageSpan.textContent = "The password must contain at least 1 upper case character."
        return false
    }
    if (!/[*123456789]/.test(password)){
        errorMessageSpan.textContent = "The password must contain at least 1 number."
        return false
    }
    if (!/[#$*&@]/.test(password)){
        errorMessageSpan.textContent = "The password must contain at least 1 special character (#, $, *, &, @)."
        return false
    }
    errorMessageSpan.textContent = ""
    return true
}

function isUsernameCorrect(username){
    if (username.length === 0){
        errorMessageSpan.textContent = "Please enter a username."
        return false
    }
    if (/@/.test(username)){
        errorMessageSpan.textContent = "The username must not contain '@'."
        return false
    }
    return true
}

function isFirstNameCorrect(firstName){
    if (firstName.length === 0){
        errorMessageSpan.textContent = "Please enter your first name."
        return false
    }
    return true
}

function isLastNameCorrect(lastName){
    if(lastName.length === 0){
        errorMessageSpan.textContent = "Please enter your last name."
        return false
    }
    return true
}

function isEmailCorrect(email){
    if (email.length === 0){
        errorMessageSpan.textContent = "Please enter an email address."
        return false
    }
    if (!EMAIL_REGEX.test(email)){
        errorMessageSpan.textContent = "Please enter a valid email address."
        return false
    }
    return true
}

function addUser(uid, username, firstName, lastName, email, passwordHash, isAdmin){
    let credentials = {
        uid: uid,
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: passwordHash,
        isAdmin: isAdmin.toString()
    }

    let url = "http://localhost:63342/WebProject/signupLogin/signup/signup.php"
    simplePhpPostRequest(url, credentials,
        res => {
            res.json()
                .then(res => {
                    let success = res['success']
                    if (success){
                        window.location.replace("http://localhost:63342/WebProject/userMain/userMain.html")
                        usernameInput.value = ""
                        emailInput.value = ""
                        passwordInput.value = ""
                        verifyPasswordInput.value = ""
                    }
                    else{
                        alert("Sign up failed. Please try again.")
                    }
                })
        },
        _ => {
            alert("Sign up failed. Please try again.")
        })

}

function onClick(event){
    let username = usernameInput.value
    let firstName = firstNameInput.value
    let lastName = lastNameInput.value
    let password = passwordInput.value
    let email = emailInput.value

    if(
        isPasswordCorrect(password, verifyPasswordInput.value) &&
        isFirstNameCorrect(firstName) &&
        isLastNameCorrect(lastName) &&
        isEmailCorrect(email) &&
        isUsernameCorrect(username)
    ){
        let md5Password = md5(password)
        let uid = md5(email, password)
        let isAdmin = false

        addUser(uid, username, firstName, lastName, email, md5Password, isAdmin)
    }
}

let usernameInput = document.querySelector("#su_username_input")
let firstNameInput = document.querySelector("#su_first_name_input")
let lastNameInput = document.querySelector("#su_last_name_input")
let emailInput = document.querySelector("#su_email_input")
let passwordInput = document.querySelector("#su_password_input")
let verifyPasswordInput = document.querySelector("#su_verify_pw_input")
let okButton = document.querySelector("#su_button_ok")
let errorMessageSpan = document.querySelector("#error_message_span")

okButton.addEventListener("click", onClick)
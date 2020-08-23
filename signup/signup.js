function passwordIsCorrect(password, verificationPassword){
    if (password !== verificationPassword){
        errorMessageSpan.textContent = "The password and the verification password don't match."
        return false
    }
    if (password.length < 8){
        errorMessageSpan.textContentrt = "The password must have at least 8 characters."
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

function addUser(uid, username, email, passwordHash, isAdmin){
    let credentials = {
        uid: uid,
        username: username,
        email: email,
        password: passwordHash,
        isAdmin: isAdmin.toString()
    }

    fetch("http://localhost:63342/WebProject/signup/signup.php", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
    })
        .then(res => {
            alert("Sign up was successful.")
        })
        .catch(reason => {
            console.log(reason)
            alert("Sign up failed. Please try again.")
        })
}

function onClick(){
    let password = passwordInput.value
    if(passwordIsCorrect(password, verifyPasswordInput.value)){
        let username = usernameInput.value
        let email = emailInput.value
        let md5Password = md5(password)
        let uid = md5(email, password)
        let isAdmin = false

        addUser(uid, username, email, md5Password, isAdmin)
    }
}

let usernameInput = document.querySelector("#su_username_input")
let emailInput = document.querySelector("#su_email_input")
let passwordInput = document.querySelector("#su_password_input")
let verifyPasswordInput = document.querySelector("#su_verify_pw_input")
let okButton = document.querySelector("#su_button_ok")
let errorMessageSpan = document.querySelector("#error_message_span")

okButton.addEventListener("click", onClick)
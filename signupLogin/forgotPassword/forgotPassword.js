function emailIsCorrect(email){
    if(email.length === 0){
        errorMessage.textContent = "Please enter your email address."
        return false
    }
    if(!EMAIL_REGEX.test(email)){
        errorMessage.textContent = "Please enter a valid email address."
        return false
    }
    errorMessage.textContent = ""
    return true
}


function onClick(){
    let email = emailInput.value
    let credentials = {
        email: email
    }

    let url = "http://localhost:63342/WebProject/signupLogin/forgotPassword/forgotPassword.php"
    if(emailIsCorrect(email)){
        simplePhpPostRequest(url, credentials,
            res => {
                res.json()
                    .then(res => {
                        let password = res['password']
                        emailInput.remove()
                        okButton.remove()
                        textSpan.innerHTML = "Your new password is: <b>" + password + "</b><br><br>It is strongly suggested to change the password when you log in."
                    })
            },
            reason => {

            })
    }
}

let emailInput = document.querySelector("#fpw_email_input")
let okButton = document.querySelector("#fpw_ok_button")
let errorMessage = document.querySelector("#fpw_error_message")
let textSpan = document.querySelector("#fpw_text_span")

okButton.addEventListener('click', onClick)
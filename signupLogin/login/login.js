function findUser(userInput, passwordHash, usernameUsed){

    let credentials = {
        userInput: userInput,
        password: passwordHash,
        usernameUsed: usernameUsed.toString()
    }

    let url = "http://localhost:63342/WebProject/signupLogin/login/login.php"
    simplePhpPostRequest(url, credentials,
        res => {
            console.log(res)
            res.json()
                .then(res => {
                    if (res['failed'] === false) {
                        console.log(res['uid'])
                        console.log(res['username'])
                        console.log(res['firstName'])
                        console.log(res['lastName'])
                        console.log(res['email'])
                        console.log(res['isAdmin'])
                        // alert('b')
                        window.location.replace("http://localhost:63342/WebProject/index.html")
                    }
                    else{
                        logInErrorSpan.innerHTML = "Log in failed.<br>Please make sure your credentials are correct and try again."
                    }
                })
        },
        reason => {
            alert("Failed")
        })
}


function onClick(event){
    let userInputValue = userInput.value
    let password = passwordInput.value
    //true for username, false for email
    let usernameUsed = !/@/.test(userInputValue);

    if (userInputValue.length === 0 || password.length === 0){
        logInErrorSpan.textContent = "Please fill your username or email and password."
        return
    }

    logInErrorSpan.textContent = ""
    findUser(userInputValue, md5(password), usernameUsed)
}

let userInput = document.querySelector("#li_user_input")
let passwordInput = document.querySelector("#li_password_input")
let logInButton = document.querySelector("#log_in_button")
let logInErrorSpan = document.querySelector("#li_error_span")

logInButton.addEventListener("click", onClick)

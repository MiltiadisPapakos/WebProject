

let usernameInput = document.querySelector("#profile_username_input")
let firstNameInput = document.querySelector("#profile_first_name_input")
let lastNameInput = document.querySelector("#profile_last_name_input")
let emailInput = document.querySelector("#profile_email_input")
let changePasswordButton = document.querySelector("#change_pw_button")
let updateButton = document.querySelector("#profile_update_button")

let passwordsLabel = document.querySelector("#profile_passwords_label")
let oldPasswordInput = document.querySelector("#profile_old_pw_input")
let newPasswordInput = document.querySelector("#profile_new_pw_input")
let repeatPasswordInput = document.querySelector("#profile_repeat_new_pw_input")
let okPasswordButton = document.querySelector("#profile_change_pw_ok_button")
let profileErrorMessageP = document.querySelector("#profile_error_p")

updateButton.addEventListener('click', updateUserData)
changePasswordButton.addEventListener('click', initPasswordChange)
okPasswordButton.addEventListener('click', changePassword)

getUserData(res => {
    usernameInput.value = res['username']
    firstNameInput.value = res['firstName']
    lastNameInput.value = res['lastName']
    emailInput.value = res['email']
})

function updateUserData(event){
    let updateDataPhpUrl = "http://localhost:63342/WebProject/profile/updateData.php"

    let password = prompt("Please enter your password:")
        if (password == null || password === ""){
        return
    }

    let hashedPassword = md5(password)

    let credentials = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        password: hashedPassword
    }


    simplePhpPostRequest(
        updateDataPhpUrl,
        credentials,
        res => {
            res.json()
                .then(res => {
                    if (res === 1){
                        alert("Your profile was successfully updated.")
                    }
                    else{
                        alert("No data were updated in your profile.\nPlease make sure that you have done changes in the fields above and that the password you entered is correct.")
                    }
                })
        },
        reason => {

        }
    )
}


function initPasswordChange(event){
    if(passwordsLabel.style.visibility === 'hidden') {
        passwordsLabel.style.visibility = 'visible'
    }
    else if(passwordsLabel.style.visibility === 'visible'){
        passwordsLabel.style.visibility = 'hidden'
    }
}


function changePassword(event){
    profileErrorMessageP.textContent = ""

    let oldPassword = oldPasswordInput.value
    let newPassword = newPasswordInput.value
    let repeatedPassword = repeatPasswordInput.value


    if (!isPasswordCorrect(newPassword, repeatedPassword)){
        return
    }

    let changePasswordPhpUrl = "http://localhost:63342/WebProject/profile/changePassword.php"

    let credentials = {
        oldPassword: md5(oldPassword),
        newPassword: md5(newPassword)
    }

    simplePhpPostRequest(
        changePasswordPhpUrl,
        credentials,
        res => {
            res.json()
                .then(res => {
                    if (res === 1){
                        alert("Password change was successful.")
                        passwordsLabel.style.visibility = 'hidden'
                        oldPasswordInput.value = ""
                        newPasswordInput.value = ""
                        repeatPasswordInput.value = ""
                    }
                    else{
                        alert("There was an error while changing your password.\nPlease check that your old password is correct and that your new password is different.")
                    }
                })
        },
        reason => {

        }
    )
}


function isPasswordCorrect(password, verificationPassword){
    if (password !== verificationPassword){
        profileErrorMessageP.textContent = "The password and the verification password don't match."
        return false
    }
    if (password.length < 8){
        profileErrorMessageP.textContent = "The password must have at least 8 characters."
        return false
    }
    if (password.toUpperCase() === password){
        profileErrorMessageP.textContent = "The password must contain at least 1 lower case character."
        return false
    }
    if (password.toLowerCase() === password){
        profileErrorMessageP.textContent = "The password must contain at least 1 upper case character."
        return false
    }
    if (!/[*123456789]/.test(password)){
        profileErrorMessageP.textContent = "The password must contain at least 1 number."
        return false
    }
    if (!/[#$*&@]/.test(password)){
        profileErrorMessageP.textContent = "The password must contain at least 1 special character (#, $, *, &, @)."
        return false
    }
    profileErrorMessageP.textContent = ""
    return true
}
let profileUrl = "http://localhost:63342/WebProject/profile/profile.html"

let userNavButton = document.querySelector("#user_profile_nav_button")
let adminNavButton = document.querySelector("#admin_profile_nav_button")

if (userNavButton != null) {
    userNavButton.addEventListener('click', event => {
        window.location.replace(profileUrl)
    })
}

if (adminNavButton != null) {
    adminNavButton.addEventListener('click', event => {
        window.location.replace(profileUrl)
    })
}
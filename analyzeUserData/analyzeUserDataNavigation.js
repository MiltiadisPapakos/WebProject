let url = "http://localhost:63342/WebProject/analyzeUserData/analyzeUserData.html"

let navigationButton = document.querySelector("#aud_nav_button")

navigationButton.addEventListener('click', event => {
    window.location.replace(url)
})
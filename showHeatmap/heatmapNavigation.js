let url = "http://localhost:63342/WebProject/showHeatmap/showHeatmap.html"

let navigationButton = document.querySelector("#show_heatmap_nav_button")

navigationButton.addEventListener('click', event => {
    window.location.replace(url)
})
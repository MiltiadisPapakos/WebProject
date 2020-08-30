let createStartingYearSelector = document.querySelector("#aud_starting_year_selector")
let createEndingYearSelector = document.querySelector("#aud_ending_year_selector")

for (let i = 2020; i > 1999; i--){
    let option = document.createElement('option')
    option.text = i.toString()
    option.value = i.toString()
    createStartingYearSelector.append(option)
}

for (let i = 2020; i > 1999; i--){
    let option = document.createElement('option')
    option.text = i.toString()
    option.value = i.toString()
    createEndingYearSelector.append(option)
}

let createStartingYearSelector = document.querySelector("#starting_year_selector")
let createEndingYearSelector = document.querySelector("#ending_year_selector")
let createStartingHourSelector = document.querySelector("#starting_hour_selector")
let createEndingHourSelector = document.querySelector("#ending_hour_selector")
let createActivitySelector = document.querySelector("#activity_selector")

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

for (let i = 0; i < 24; i++){
    let option = document.createElement('option')
    option.text = i.toString() + ":00"
    option.value = i.toString()
    createStartingHourSelector.append(option)
}

for (let i = 0; i < 24; i++){
    let option = document.createElement('option')
    option.text = i.toString() + ":00"
    option.value = i.toString()
    createEndingHourSelector.append(option)
}

let url = "http://localhost:63342/WebProject/showHeatmap/activites.php"
simplePhpPostRequest(
    url,
    {},
    res => {
        res.json()
            .then(res => {
                res.forEach(item => {
                    let option = document.createElement('option')
                    option.value = item
                    option.text = item
                    createActivitySelector.append(option)
                })
            })
    },
    reason => {

    }
)

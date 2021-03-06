let activities = []
let heatmapUrl = "http://localhost:63342/WebProject/showHeatmap/showHeatmap.php"

let startingYearSelector = document.querySelector("#starting_year_selector")
let endingYearSelector = document.querySelector("#ending_year_selector")
let startingMonthSelector = document.querySelector("#starting_month_selector")
let endingMonthSelector = document.querySelector("#ending_month_selector")
let startingDaySelector = document.querySelector("#starting_day_selector")
let endingDaySelector = document.querySelector("#ending_day_selector")
let startingHourSelector = document.querySelector("#starting_hour_selector")
let endingHourSelector = document.querySelector("#ending_hour_selector")

let activitySelector = document.querySelector("#activity_selector")
let allYearCheck = document.querySelector("#year_all_checkbox")
let allMonthCheck = document.querySelector("#month_all_checkbox")
let allDayCheck = document.querySelector("#day_all_checkbox")

let allHourCheck = document.querySelector("#hour_all_checkbox")
let showButton = document.querySelector("#heatmap_show_button")

let deleteButton = document.querySelector("#delete_data_button")


showButton.addEventListener('click', onClick)

function calculateParameters(activities, startingIndex, endingIndex){
    let startingYear = 2000
    let endingYear = 2020
    let startingMonth = 'jan'
    let endingMonth = 'dec'
    let startingDay = 'mon'
    let endingDay = 'sun'
    let startingHour = 0
    let endingHour = 24

    if (!allYearCheck.checked) {
        startingYear = startingYearSelector.value
        endingYear = endingYearSelector.value
    }
    if (!allMonthCheck.checked) {
        startingMonth = startingMonthSelector.value
        endingMonth = endingMonthSelector.value
    }
    if (!allDayCheck.checked) {
        startingDay = startingDaySelector.value
        endingDay = endingDaySelector.value
    }
    if (!allHourCheck.checked) {
        startingHour = startingHourSelector.value
        endingHour = endingHourSelector.value
    }

    if (
        !(compareYears(startingYear, endingYear) || allYearCheck.checked) ||
        !(compareMonths(startingMonth, endingMonth) || allMonthCheck.checked) ||
        !(compareDays(startingDay, endingDay) || allDayCheck.checked) ||
        !(compareHours(startingHour, endingHour) || allHourCheck.checked)
    ){
        alert("There was an error in the parameters you entered, please try again.")
        return null
    }


    return {
        startingYear: startingYear,
        endingYear: endingYear,
        startingMonth: monthToNum(startingMonth),
        endingMonth: monthToNum(endingMonth),
        startingDay: dayToNum(startingDay),
        endingDay: dayToNum(endingDay),
        startingHour: startingHour,
        endingHour: endingHour,
        activities: activities,
        startingIndex: startingIndex,
        endingIndex: endingIndex
    }
}

function onClick(event){
    removeHeatmap()

    for (let option of activitySelector.options){
        if(option.selected){
            activities.push(option.value)
        }
    }
    if (activities.length === 0){
        alert("Please select at least one activity.")
        return
    }

    getRecordsNumber(createHeatmap)
}

function createHeatmap(startingIndex, endingIndex){
    // removeHeatmap()

    let credentials = calculateParameters(activities, startingIndex, endingIndex)
    if (credentials == null){
        return
    }


    simplePhpPostRequest(
        heatmapUrl,
        credentials,
        res => {
            res.json()
                .then(res => {
                    addHeatmapLayer(res);
                })
        },
        reason => {

        }
    )
}

function getRecordsNumber(onSuccess){
    getRecords(count => {
        let i = 0
        onSuccess(i, i + 999)
        let intervalId = setInterval(() => {
                i += 1000
                onSuccess(i, i + 999)
                if (i > count){
                    clearInterval(intervalId)
                }
            },
            600)
        // }
    })
}

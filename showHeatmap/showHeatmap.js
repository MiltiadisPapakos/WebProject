let startingYear = 2000
let endingYear = 2020
let startingMonth = 'jan'
let endingMonth = 'dec'
let startingDay = 'mon'
let endingDay = 'sun'
let startingHour = 0
let endingHour = 24
let activities = []


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



showButton.addEventListener('click', event => {
    startingYear = startingYearSelector.value
    endingYear = endingYearSelector.value
    startingMonth = startingMonthSelector.value
    endingMonth = endingMonthSelector.value
    startingDay = startingDaySelector.value
    endingDay = endingDaySelector.value
    startingHour = startingHourSelector.value
    endingHour = endingHourSelector.value


    activities = []
    for (let option of activitySelector.options){
        if(option.selected){
            activities.push(option.value)
        }
    }
    console.log(activities)


    if (
        !(compareYears(startingYear, endingYear) || allYearCheck.checked) ||
        !(compareMonths(startingMonth, endingMonth) || allMonthCheck.checked) ||
        !(compareDays(startingDay, endingDay) || allDayCheck.checked) ||
        !(compareHours(startingHour, endingHour) || allHourCheck.checked)
    ){
        alert("There was an error in the parameters you entered, please try again.")
        return
    }

    // here i can work with all the data i need
})





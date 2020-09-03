let tableInitialHTML = "<tr>\n" + "<th>Activity</th>\n" + "<th>% of activity</th>\n" +
    "<th>Hour of day</th>\n" + "<th>Day of month</th>\n" + "</tr>"


let startingYearSelector = document.querySelector("#aud_starting_year_selector")
let endingYearSelector = document.querySelector("#aud_ending_year_selector")
let startingMonthSelector = document.querySelector("#aud_starting_month_selector")
let endingMonthSelector = document.querySelector("#aud_ending_month_selector")

let allYearCheck = document.querySelector("#aud_year_all_checkbox")
let allMonthCheck = document.querySelector("#aud_month_all_checkbox")

let analyzeDataButton = document.querySelector("#aud_analyze_data_button")

let dataTable = document.querySelector("#aud_table")

analyzeDataButton.addEventListener('click', onClick)


function calculateParameters(){
    let startingYear = 2000
    let endingYear = 2020
    let startingMonth = 'jan'
    let endingMonth = 'dec'

    if (!allYearCheck.checked) {
        startingYear = startingYearSelector.value
        endingYear = endingYearSelector.value
    }
    if (!allMonthCheck.checked) {
        startingMonth = startingMonthSelector.value
        endingMonth = endingMonthSelector.value
    }

    let startingTimestamp = Date.parse(getStartDateString(startingMonth, startingYear))
    let endingTimestamp = Date.parse(getEndDateString(endingMonth, endingYear))

    if (
        !(startingTimestamp <= endingTimestamp)
    ){
        alert("There was an error in the parameters you entered, please try again.")
        return null
    }


    return {
        startingTimestamp: startingTimestamp,
        endingTimestamp: endingTimestamp
    }
}

function onClick(event){
    let audUrl = "http://localhost:63342/WebProject/analyzeUserData/analyzeUserData.php"
    let credentials = calculateParameters()

    if (credentials == null) {
        dataTable.style = "visibility: hidden"
        return
    }

    simplePhpPostRequest(
        audUrl,
        credentials,
        res => {
            res.json()
                .then(res => {
                    createTable(res, dataTable)
                    dataTable.style = "visibility: visible"
                })
        },
        reason => {

        }
    )
}


function createTable(data, table){
    dataTable.innerHTML = tableInitialHTML
    audRemoveHeatmap()

    let totalActCount = 0
    data.forEach(rowData => {
        totalActCount += rowData['count']
    })

    data.forEach(rowData => {
        let activity = rowData['activity']
        let count = rowData['count']
        let maxHour = rowData['maxHour']
        let maxDay = rowData['maxDay']
        table.innerHTML += ("<tr>" +
            ("<td>" + activity + "</td>") +
            ("<td>" + getPercentage(count, totalActCount) + "%" + "</td>") +
            ("<td>" + maxHour + ":00" + "</td>") +
            ("<td>" + maxDay  + getNumberSuffix(maxDay) + "</td>") +
            "</tr>")
    })

    getHeatmapData()
}


function getNumberSuffix(number){
    let strNumber = number.toString()
    let lastDigit = strNumber[strNumber.length-1]

    switch (lastDigit){
        case "1":
            return "st"
        case "2":
            return "nd"
    }

    return "th"
}


function getPercentage(part, total){
    return (new Intl.NumberFormat('en-US',{minimumFractionDigits: 3}).format((100*part/total))).toString()
}


function getHeatmapData(){
    let audHeatmapUrl = "http://localhost:63342/WebProject/analyzeUserData/userHeatmapData.php"

    let heatmapCredentials = calculateParameters()

    simplePhpPostRequest(
        audHeatmapUrl,
        heatmapCredentials,
        res => {
            res.json()
                .then(res => {
                    audAddHeatmapLayer(res)
                })
        },
        reason => {

        }
    )
}
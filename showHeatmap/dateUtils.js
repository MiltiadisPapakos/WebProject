function compareYears(year1, year2){
    return year1 <= year2
}

function compareMonths(month1, month2){
    return monthToNum(month1) <= monthToNum(month2)
}

function compareDays(day1, day2){
    return dayToNum(day1) <= dayToNum(day2)
}

function compareHours(hour1, hour2){
    return hour1 <= hour2
}

function monthToNum(month){
    switch (month) {
        case 'jan':
            return 1
        case 'feb':
            return 2
        case 'mar':
            return 3
        case 'apr':
            return 4
        case 'may':
            return 5
        case 'jun':
            return 6
        case 'jul':
            return 7
        case 'aug':
            return 8
        case 'sep':
            return 9
        case 'oct':
            return 10
        case 'nov':
            return 11
        case 'dec':
            return 12
    }
}

function dayToNum(day){
    switch (day){
        case 'mon':
            return 1
        case 'tue':
            return 2
        case 'wed':
            return 3
        case 'thu':
            return 4
        case 'fri':
            return 5
        case 'sat':
            return 6
        case 'sun':
            return 7
    }
}

function getMonthsLastDay(month, year){
    switch (month) {
        case 'jan':
            return 31
        case 'feb':
            return getFebDays(year)
        case 'mar':
            return 31
        case 'apr':
            return 30
        case 'may':
            return 31
        case 'jun':
            return 30
        case 'jul':
            return 31
        case 'aug':
            return 31
        case 'sep':
            return 30
        case 'oct':
            return 31
        case 'nov':
            return 30
        case 'dec':
            return 31
    }
    return 30
}


function getFebDays(year){
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return 29
            }
            else {
                return 28
            }
        }
        else {
            return 29
        }
    }
    else {
        return 28
    }
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

function getDateString(month, year, stopDate){
    let day = 1
    if (stopDate === 1){
        day = getMonthsLastDay(month)
    }

    return (day.toString() + " " + month + " " + year.toString())
}

function getStartDateString(month, year){
    return getDateString(month, year, 0)
}

function getEndDateString(month, year){
    return getDateString(month, year, 1)
}
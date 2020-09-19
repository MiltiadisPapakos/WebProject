let tableInitialHTML = "<tr>\n" + "<th>Rank</th>\n" + "<th>Eco-Precentage</th>\n" +
    "<th>Name</th>\n" + "<th>Month</th>\n" + "</tr>"

let showInfo = 'http://localhost:63342/WebProject/showUsersInfo/showUserInfo.html'
let phpUrlLeaderBoard = 'http://localhost:63342/WebProject/showUsersInfo/showUserInfo.php'
let phpUrlUserInfo = 'http://localhost:63342/WebProject/showUsersInfo/getLeaderBoard.php'
let phpUrlAddInfo = 'http://localhost:63342/WebProject/showUsersInfo/getAddData.php'

let showInfoButton = document.querySelector("#user_profile_info_button")
let eco_score = document.querySelector("#eco_score")
let leaderBoard = document.querySelector("#leaderBoard")


if (showInfoButton != null) {
    showInfoButton.addEventListener('click', event => {
        window.location.replace(showInfo)
    })
}
    simplePhpPostRequest(phpUrlLeaderBoard, {},
        res => {
            res.json()
                .then(res => {
                    getUserData(res1 => {

                        let uid = res1['uid']
                        createTable(res, leaderBoard,uid)

                    })

                })
        },
        reason => {
            alert("Failed")
        })


function createTable(data, table, userUid) {
    leaderBoard.innerHTML = tableInitialHTML
    var i = 0;
    data.forEach(rowData => {
        let uid_s = rowData['uid_s']
        let eco_percentage = rowData['eco_percentage'] * 100
        let month_s = rowData['month_s']
        let first_name = rowData['first_name']
        let last_name = rowData['last_name']
        i = i + 1;
        if (i <= 3) {
            table.innerHTML += ("<tr>" +
                ("<td>" + i + "</td>") +
                ("<td>" + eco_percentage +"%"+ "</td>") +
                ("<td>" + first_name + " " + last_name + "</td>") +
                ("<td>" + month_s + "</td>") +
                "</tr>")
        } else if (uid_s === userUid && i > 3) {
            table.innerHTML += ("<tr>" +
                ("<td>" + i + "</td>") +
                ("<td>" + eco_percentage + "%"+ "</td>") +
                ("<td>" + first_name + " " + last_name + "(You)" + "</td>") +
                ("<td>" + month_s + "</td>") +
                "</tr>")
        }
        if(uid_s === userUid){
            eco_score.innerText = 10

        }
    })
}

    simplePhpPostRequest(phpUrlUserInfo, {},
        res => {
            res.json()
                .then(res => {
                        setValuesInChart(res)
                    },
                    reason => {
                        alert("Failed")
                    })
        })


    function setValuesInChart(data) {
        data.forEach(rowData => {
            let eco_percentage = rowData['eco_percentage'] * 100
            let month_s = rowData['month_s']
            xlabels.push(month_s)
            yval.push(eco_percentage)


        })


    }
    simplePhpPostRequest(phpUrlAddInfo, {},
        res => {
            res.json()
                .then(res => {
                        setUploadDate(res)
                    },
                    reason => {
                        alert("Failed")
                    })
    })
function setUploadDate(data){
    data.forEach(rowData => {
        let upload_timestamp = rowData['upload_timestamp']

    })
    }
let dataUrl = "http://localhost:63342/WebProject/exportData/getData.php"
let exportUrl = "http://localhost:63342/WebProject/exportData/exportData.php"

let expActivities = []

function downloadFile(type, data){
    let element = document.createElement('a')
    element.setAttribute('href', 'data:text/' + type + ';charset=utf-8,' + encodeURIComponent(data))
    element.setAttribute('download', 'loc_data.' + type)

    element.style.display = 'none'
    document.body.appendChild(element)

    element.click()

    document.body.removeChild(element)
}

function onClick(event){
    for (let option of activitySelector.options){
        if(option.selected){
            expActivities.push(option.value)
        }
    }
    if (expActivities.length === 0){
        alert("Please select at least one activity.")
        return
    }

    let credentials = calculateParameters(expActivities, 0, 0)
    if (credentials == null){
        return
    }

    simplePhpPostRequest(
        dataUrl,
        credentials,
        res => {
            res.json()
                .then(res => {
                    let type = fileTypSelect.value
                    let data = null

                    switch (type){
                        case 'csv':
                            data = convertJsonArrayToCsv(res)
                            break

                        case 'json':
                            data = JSON.stringify(res)
                            break

                        case 'xml':
                            data = convertJsonArrayToXml(res)
                            break
                    }

                    downloadFile(type, data)
                })
        },
        reason => {

        }
    )

}


let exportDataButton = document.querySelector("#export_data_button")
let fileTypSelect = document.querySelector("#file_type_select")

exportDataButton.addEventListener('click', onClick)




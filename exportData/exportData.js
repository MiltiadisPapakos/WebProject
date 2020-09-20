let dataUrl = "http://localhost:63342/WebProject/exportData/getData.php"

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

    let a = []
    let i = 0

    let interval = setInterval(() => {
        let credentials = calculateParameters(expActivities, i, i + 99)
        if (credentials == null){
            return
        }

        simplePhpPostRequest(
            dataUrl,
            credentials,
            res => {
                res.json()
                    .then(res => {

                        res.forEach(item => {
                            a.push(item)
                        })
                        console.log(i)
                        console.log(a)

                    })
            },
            reason => {

            }
        )

        if (i > 20000){
            clearInterval(interval)

            let type = fileTypSelect.value
            let data = null

            switch (type){
                case 'csv':
                    data = convertJsonArrayToCsv(a)
                    break

                case 'json':
                    data = JSON.stringify(a)
                    break

                case 'xml':
                    data = convertJsonArrayToXml(a)
                    break
            }

            downloadFile(type, data)
        }

        i += 100;

    }, 250)


}


let exportDataButton = document.querySelector("#export_data_button")
let fileTypSelect = document.querySelector("#file_type_select")

exportDataButton.addEventListener('click', onClick)




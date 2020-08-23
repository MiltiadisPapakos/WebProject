let phpUrl = 'http://localhost:63342/WebProject/userUploadData/createMap.php'
let file = null

function uploadOnDb(event){
    let reader = new FileReader()
    reader.addEventListener("load", getJsonData)
    reader.readAsText(file, 'utf-8')
}

function getJsonData(event){
    let indexPhpUrl = 'http://localhost:63342/WebProject/index.php'
    let locations = JSON.parse(event.target.result)['locations']

    getUserData(indexPhpUrl, res => {
        let formattedData = []

        let uid = res['uid']

        locations.forEach(item => {
            let latitude = item['latitudeE7']
            let longitude = item['longitudeE7']

            if (item.hasOwnProperty('activity')) {
                let activities = item['activity']
                activities.forEach(activity => {
                    let timestamp = activity['timestampMs']
                    let types = activity['activity']
                    let bestType = types[0]['type'] === 'IN_VEHICLE' ? types[1]['type'] : types[0]['type']

                    formattedData.push({
                        uid: uid,
                        latitude: latitude,
                        longitude: longitude,
                        timestamp: timestamp,
                        activity: bestType
                    })
                })
            }
            else{
                let timestamp = item['timestampMs']
                let type = 'UNKNOWN'

                formattedData.push({
                    uid: uid,
                    latitude: latitude,
                    longitude: longitude,
                    timestamp: timestamp,
                    activity: type
                })
            }
        })

        simplePhpPostRequest(
            phpUrl,
            formattedData,
            res => {
                alert("Files uploaded successfully.")
            },
            reason => {

            }
        )

    })
}

function onFileUploaded(event){
    file = event.target.files[0]
}

let uploadFileInput = document.querySelector("#upload_file_input")
let mapUploadButton = document.querySelector("#map_upload_button")

uploadFileInput.addEventListener("change", onFileUploaded)
mapUploadButton.addEventListener("click", uploadOnDb)
let phpUrl = 'http://localhost:63342/WebProject/userUploadData/uploadData.php'
let file = null
const CITY_X = 38.2304620/0.09
const CITY_Y = 21.7531500/0.12

function getValueFromJson(json, itemKey){
    if (json.hasOwnProperty(itemKey)){
        return json[itemKey]
    }
    return -1
}

function isInSquare(x, y, x1, y1, x2, y2){
    let smallX = x1 < x2 ? x1 : x2
    let bigX = x1 >= x2 ? x1 : x2
    let smallY = y1 < y2 ? y1 : y2
    let bigY = y1 >= y2 ? y1 : y2

    return x >= smallX && x <= bigX && y >= smallY && y <= bigY;
}

function isInCity(latitude, longitude){
    let x = (latitude/10**7)/0.09 - CITY_X
    let y = (longitude/10**7)/0.12 - CITY_Y
    return x**2+y**2 <= 1
}

function isNotRestricted(latitude, longitude){
    let res = true
    squares.forEach(item => {
        let scaledLat = latitude/(10**7)
        let scaledLong = longitude/(10**7)

        if(isInSquare(scaledLat, scaledLong, item.x1, item.y1, item.x2, item.y2)){
            res = false
        }
    })
    return res
}

function isAllowed(latitude, longitude){
    return isInCity(latitude, longitude) && isNotRestricted(latitude, longitude)
}

function uploadOnDb(event){
    let reader = new FileReader()
    reader.addEventListener("load", getJsonData)
    reader.readAsText(file, 'utf-8')
}

function getJsonData(event){
    let locations = JSON.parse(event.target.result)['locations']

    getUserData(res => {
        let formattedData = []

        let uid = res['uid']

        locations.forEach(item => {
            let latitude = item['latitudeE7']
            let longitude = item['longitudeE7']
            let locTimestamp = item['timestampMs']
            let accuracy = item['accuracy']
            let velocity = getValueFromJson(item, 'velocity')
            let altitude = getValueFromJson(item, 'altitude')
            let verticalAccuracy = getValueFromJson(item, 'verticalAccuracy')


            if (item.hasOwnProperty('activity')) {
                let activities = item['activity']
                activities.forEach(activity => {
                    let timestamp = activity['timestampMs']
                    let types = activity['activity']
                    let bestType = types[0]['type']
                    let confidence = getValueFromJson(activity, 'confidence')
                    let heading = getValueFromJson(activity, 'heading')

                    if (isAllowed(latitude, longitude)) {
                        formattedData.push({
                            uid: uid,
                            latitude: latitude,
                            longitude: longitude,
                            actTimestamp: timestamp,
                            activity: bestType,
                            locTimestamp: locTimestamp,
                            accuracy: accuracy,
                            velocity: velocity,
                            altitude: altitude,
                            verticalAccuracy: verticalAccuracy,
                            confidence: confidence,
                            heading: heading
                        })
                    }
                })
            }
            else{
                // let timestamp = item['timestampMs']
                let type = 'UNKNOWN'

                if (isAllowed(latitude, longitude)) {
                    formattedData.push({
                        uid: uid,
                        latitude: latitude,
                        longitude: longitude,
                        actTimestamp: -1,
                        activity: type,
                        locTimestamp: locTimestamp,
                        accuracy: accuracy,
                        velocity: velocity,
                        altitude: altitude,
                        verticalAccuracy: verticalAccuracy,
                        confidence: -1,
                        heading: -1
                    })
                }
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


function convertJsonArrayToCsv(jsonArray){
    let csvString = ""
    let jsonHeaders = jsonArray[0]

    for (let key in jsonHeaders){
        csvString = csvString + key + ", "
    }
    csvString = csvString.substring(0, csvString.length-2);
    let headers = csvString.split(", ")
    csvString = csvString + "\n"

    jsonArray.forEach(json => {
        headers.forEach(header => {
            csvString = csvString + json[header] + ", "
        })
        csvString = csvString.substring(0, csvString.length-2);
        csvString = csvString + "\n"
    })

    return csvString
}

function convertJsonArrayToXml(jsonArray){
    let xmlString = "<locations>\n"
    let headers = getJsonHeaders(jsonArray[0])
    let i = 0

    jsonArray.forEach(json => {
        xmlString += ("<l" + i.toString() + ">\n")

        headers.forEach(header => {
            xmlString += ("<" + header + ">")
            xmlString += json[header]
            xmlString += ("</" + header + ">\n")
        })

        xmlString += ("</l" + i.toString() + ">\n")
        i++
    })

    xmlString += "</locations>"

    return xmlString
}

function getJsonHeaders(json){
    let headers = []
    for (let key in json){
        headers.push(key)
    }
    return headers
}
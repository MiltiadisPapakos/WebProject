function simplePhpPostRequest(url, credentials, onSuccess, onFailure){
    phpRequest(
        url,
        "POST",
        {"Content-Type": "application/json"},
        credentials,
        onSuccess,
        onFailure
    )
}

function phpRequest(url, method, headers, credentials, onSuccess, onFailure){
    fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(credentials)
    })
        .then(res => {
            onSuccess(res)
        })
        .catch(reason => {
            console.log(reason)
            onFailure(reason)
        })
}
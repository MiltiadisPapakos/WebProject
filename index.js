let url = 'http://localhost:63342/WebProject/index.php'

simplePhpPostRequest(
    url,
    {},
    res => {
        res.json()
            .then(res => {
                let success = res['success']
                if (success){
                    let isAdmin = res['isAdmin']
                    if(isAdmin === '0'){
                        window.location.replace("http://localhost:63342/WebProject/userUploadData/uploadData.html")
                    }
                    else {
                        window.location.replace("http://localhost:63342/WebProject/showHeatmap/showHeatmap.html")
                    }
                }
                else {
                    window.location.replace("http://localhost:63342/WebProject/signupLogin/signup/signup.html")
                }
            })
    },
    reason => {

    })
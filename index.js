let url = 'http://localhost:63342/WebProject/index.php'

simplePhpPostRequest(
    url,
    {},
    res => {
        res.json()
            .then(res => {
                let success = res['success']
                if (success){
                    window.location.replace("http://localhost:63342/WebProject/userMain/userMain.html")
                }
                else {
                    window.location.replace("http://localhost:63342/WebProject/signupLogin/signup/signup.html")
                }
            })
    },
    reason => {

    })
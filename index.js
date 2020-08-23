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
                    console.log(res['success'])
                    if(isAdmin === '0'){
                        window.location.replace("http://localhost:63342/WebProject/userMain/userMain.html")
                    }
                    else {
                        window.location.replace("http://localhost:63342/WebProject/adminMain/adminMain.html")
                    }
                }
                else {
                    window.location.replace("http://localhost:63342/WebProject/signupLogin/signup/signup.html")
                }
            })
    },
    reason => {

    })
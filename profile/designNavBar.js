let navBar = document.querySelector("nav")

getUserData(res => {

    if(res['isAdmin'] !== '1'){
        navBar.innerHTML = "<div class=\"container d-flex flex-column flex-md-row justify-content-between\">\n" +
            "            <a class=\"py-2\" href=\"http://localhost:63342/WebProject/index.html\">\n" +
            "                <img src=\"../images/logo_no_text.png\" alt=\"Logo\" style=\"width: 48px; height: 48px;\">\n" +
            "            </a>\n" +
            "            <a class=\"py-2 d-none d-md-inline-block\" href=\"http://localhost:63342/WebProject/showUsersInfo/showUserInfo.html\" style=\"color: white\">Show User Data</a>\n" +
            "            <a class=\"py-2 d-none d-md-inline-block\" href=\"http://localhost:63342/WebProject/userUploadData/uploadData.html\" style=\"color: white\">Upload Your Data</a>\n" +
            "            <a class=\"py-2 d-none d-md-inline-block\" href=\"http://localhost:63342/WebProject/analyzeUserData/analyzeUserData.html\" style=\"color: white\">Analyze Your Data</a>\n" +
            "            <a class=\"py-2 d-none d-md-inline-block\" href=\"#\" style=\"color: white\">My Profile</a>\n" +
            "        </div>"
    }
    else{
        navBar.innerHTML = "        <div class=\"container d-flex flex-column flex-md-row justify-content-between\">\n" +
            "            <a class=\"py-2\" href=\"http://localhost:63342/WebProject/index.html\">\n" +
            "                <img src=\"../images/logo_no_text.png\" alt=\"Logo\" style=\"width: 48px; height: 48px;\">\n" +
            "            </a>\n" +
            "            <a class=\"py-2 d-none d-md-inline-block\" href=\"http://localhost:63342/WebProject/adminDashboard/adminDashboard.html\" style=\"color: white\">Dashboard</a>\n" +
            "            <a class=\"py-2 d-none d-md-inline-block\" href=\"http://localhost:63342/WebProject/showHeatmap/showHeatmap.html\" style=\"color: white\">Heatmap Data</a>\n" +
            "            <a class=\"py-2 d-none d-md-inline-block\" href=\"#\" style=\"color: white\"><My></My> Profile</a>\n" +
            "        </div>"
    }
})
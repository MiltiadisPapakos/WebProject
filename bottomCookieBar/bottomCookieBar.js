if(document.cookie.search("accepted_cookies=yes") !== -1) {
    document.getElementById("cookie_bar").style.visibility = 'hidden'
}


function closeCookieBar(){
    document.getElementById("cookie_bar").style.visibility='hidden'
    document.cookie = "accepted_cookies=yes; expires=Fri, 31 Dec 9999 23:59:59 GMT"
}

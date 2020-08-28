

let deleteDataButton = document.querySelector("#delete_data_button")

deleteDataButton.addEventListener('click', event => {
    if(confirm("Are you sure you want to delete all location data?")){

        let url = "http://localhost:63342/WebProject/deleteData/deleteData.php"

        simplePhpPostRequest(
            url,
            {},
            res => {
                alert("All location data were successfully deleted.")
            },
            reason => {

            }
        )

    }
    else{

    }
})
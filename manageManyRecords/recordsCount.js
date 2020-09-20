let countsUrl = "http://localhost:63342/WebProject/manageManyRecords/recordsCount.php"

function getRecords(onSuccess){

    simplePhpPostRequest(
        countsUrl,
        null,
        res => {
            res.json()
                .then(res => {
                    let count = res['count']
                    onSuccess(parseInt(count))
                })
        },
        reason => {

        }
    )

}
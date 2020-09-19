function createGraph(results) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var labels1 = [];
    var data1 = [];
    for (index = 0; index < results[0].length; index++) {
        labels1[index] = results[0][index]["activity"];
        console.log(labels1[index]);
    }
    for (index = 0; index < results[0].length; index++) {
        data1[index] = results[0][index]["count"];
        console.log(data1[index]);
    }
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels1,
            datasets: [{
                label: '# Καταγραφών ανά είδος μετακίνησης',
                data: data1,
                backgroundColor: "rgba(255,165,0,1)",//version >2 useus background color
                strokeColor: "brown",
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


    var ctx = document.getElementById('myChart2').getContext('2d');
    var labels2 = [];
    var data2 = [];
    for (index = 0; index < results[1].length; index++) {
        labels2[index] = results[1][index]["uid"];
        console.log(labels2[index]);
    }
    for (index = 0; index < results[1].length; index++) {
        data2[index] = results[1][index]["count"];
        console.log(data2[index]);
    }
    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels2,
            datasets: [{
                label: '# Καταγραφών μετακίνησης ανά χρήστη',
                data: data2,
                backgroundColor: "rgba(255,165,0,1)",//version >2 useus background color
                strokeColor: "brown",
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


    var ctx = document.getElementById('myChart3').getContext('2d');
    var labels3 = [];
    var data3 = [];
    for (index = 0; index < results[2].length; index++) {
        labels3[index] = results[2][index]["month"];
        console.log(labels3[index]);
    }
    for (index = 0; index < results[2].length; index++) {
        data3[index] = results[2][index]["count"];
        console.log(data3[index]);
    }
    var myChart3 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels3,
            datasets: [{
                label: '# Καταγραφών μετακίνησης ανά μήνα',
                data: data3,
                backgroundColor: "rgba(255,165,0,1)",//version >2 useus background color
        strokeColor: "brown",
        borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var ctx = document.getElementById('myChart4').getContext('2d');
    var labels4 = [];
    var data4 = [];
    for (index = 0; index < results[3].length; index++) {
        labels4[index] = results[3][index]["day_of_week"];
        if(labels4[index]==='0'){
            labels4[index]="Monday";
        }
        console.log(labels4[index]+"XAXAXAXAXAXAXA");
        if(labels4[index]==='1'){
            labels4[index]="Tuesday";
        }if(labels4[index]==='2'){
            labels4[index]="Wednesday";
        }if(labels4[index]==='3'){
            labels4[index]="Thursday";
        }if(labels4[index]==='4'){
            labels4[index]="Friday";
        }if(labels4[index]==='5'){
            labels4[index]="Saturday";
        }if(labels4[index]==='6'){
            labels4[index]="Sunday";
        }

    }
    for (index = 0; index < results[3].length; index++) {
        data4[index] = results[3][index]["count"];
        console.log(data4[index]);
    }
    var myChart4= new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels4,
            datasets: [{
                label: '# Καταγραφών μετακίνησης ανά μέρα της βδομάδας',
                data: data4,
                backgroundColor: "rgba(255,165,0,1)",//version >2 useus background color
                strokeColor: "brown",
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var ctx = document.getElementById('myChart5').getContext('2d');
    var labels5 = [];
    var data5 = [];
    for (index = 0; index < results[4].length; index++) {
        labels5[index] = results[4][index]["hour"];
        console.log(labels5[index]);
    }
    for (index = 0; index < results[4].length; index++) {
        data5[index] = results[4][index]["count"];
        console.log(data5[index]);
    }
    var myChart5 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels5,
            datasets: [{
                label: '# Καταγραφών μετακίνησης ανά ώρα της μέρας',
                data: data5,
                backgroundColor: "rgba(255,165,0,1)",//version >2 useus background color
                strokeColor: "brown",
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


    var ctx = document.getElementById('myChart6').getContext('2d');
    var labels6 = [];
    var data6 = [];
    for (index = 0; index < results[5].length; index++) {
        labels6[index] = results[5][index]["year"];
        console.log(labels6[index]);
    }
    for (index = 0; index < results[5].length; index++) {
        data6[index] = results[5][index]["count"];
        console.log(data6[index]);
    }
    var myChart5 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels6,
            datasets: [{
                label: '# Καταγραφών μετακίνησης ανά χρόνο',
                data: data6,
                backgroundColor: "rgba(255,165,0,1)",//version >2 useus background color
                strokeColor: "brown",
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}



function dashboardDo(event){

    let url = "http://localhost:63342/WebProject-master/adminMain/adminDashboard.php"

    let credentials = null

    console.log("reszzzz");

    simplePhpPostRequest(
        url,
        credentials,
        res => {
            res.json()
                .then(res => {
                    createGraph(res);

                })
        },
        reason => {

        }
    )
}
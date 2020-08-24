let map = L.map("map_id")

let mapUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
let attributes='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
let tiles = new L.TileLayer(mapUrl, {attributes: attributes})

map.addLayer(tiles)
map.setView([38.246242, 21.7350847], 13);


let swap = false
let squares = []

map.on('click', onClick)

function onClick(event){

    swap = !swap

    if(swap) {
        let initLat = event.latlng.lat
        let initLong = event.latlng.lng
        squares.push(createSquare(0, 0, 0, 0))

        map.on('mousemove', e => {
            if (swap) {
                let finalLat = e.latlng.lat
                let finalLong = e.latlng.lng
                squares[squares.length - 1].polygon.removeFrom(map)
                squares[squares.length - 1] = createSquare(initLat, initLong, finalLat, finalLong)
                squares[squares.length - 1].polygon.addTo(map)
            }
        })
    }

}

function createSquare(x1, y1, x2, y2){
    let points = [[x1, y1], [x1, y2], [x2, y2], [x2, y1]]
    return {
        polygon: L.polygon(points, {color: "orange", "fillColor": "orange"}),
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
    }
}

function undoSquare(event){
    if(squares.length > 0) {
        squares[squares.length - 1].polygon.removeFrom(map)
        squares.pop()
    }
}

function resetSquares(event){
    for (let i = squares.length-1; i > -1; i--){
        squares[i].polygon.removeFrom(map)
        squares.pop()
    }
}


let undoButton = document.querySelector("#upload_undo_button")
let resetButton = document.querySelector("#upload_reset_button")

undoButton.addEventListener('click', undoSquare)
resetButton.addEventListener('click', resetSquares)

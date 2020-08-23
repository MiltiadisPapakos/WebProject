let map = L.map("map_id")

let mapUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
let attributes='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
let tiles = new L.TileLayer(mapUrl, {attributes: attributes})

map.addLayer(tiles)
map.setView([38.246242, 21.7350847], 13);

map.addEventListener("click", mapClick)

function mapClick(event){
    alert(this.getLatLng())
}


let map = L.map("admin_map_id")

let mapUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
let tiles = new L.TileLayer(mapUrl, {})

map.addLayer(tiles)
map.setView([38.246242, 21.7350847], 13);
let map = L.map("aud_map_id")

let mapUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
let tiles = new L.TileLayer(mapUrl, {})
let maxCount = 0


map.addLayer(tiles)
map.setView([38.246242, 21.7350847], 11);

let heatmapLayer = null

function audAddHeatmapLayer(data) {

    data.forEach(item => {
        if(Number(item['count']) > maxCount){
            maxCount = Number(item['count'])
        }
    })

    let testData = {
        max: maxCount, data: data
    };

    let cfg = {
        "radius": 40,
        "maxOpacity": 0.8,
        "scaleRadius": false,
        "useLocalExtrema": false,
        latField: 'lat',
        lngField: 'lng',
        valueField: 'count'
    };

    heatmapLayer = new HeatmapOverlay(cfg);
    map.addLayer(heatmapLayer);
    heatmapLayer.setData(testData);
}

function audRemoveHeatmap(){
    if (heatmapLayer != null){
        map.removeLayer(heatmapLayer)
        heatmapLayer = null
    }
    maxCount = 0
}
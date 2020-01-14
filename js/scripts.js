window.onload = function(){
    let macarte = L.map('carte').setView([48.852969, 2.349903], 13)
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte)
    L.Routing.control({
        lineOptions: {
            styles: [{color: '#ff8f00', opacity: 1, weight: 7}]
        },
        router: new L.Routing.osrmv1({
            language: 'fr',
            profile: 'car', // car, bike, foot
        }),
        geocoder: L.Control.Geocoder.nominatim()
    }).addTo(macarte)
    
}

var map = L.map('map-template').setView([21.17, -100.93321], 10);

L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

L.marker([21.17, -100.93321]).addTo(map)
    .bindPopup('Usted esta aqui!!.')
    .openPopup();
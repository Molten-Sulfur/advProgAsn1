var map = L.map('mapid').setView([38.625, -90.286538], 12);

var marker1 = L.marker([38.65612871682558, -90.30506101804117], {opacity: 0.6}).addTo(map);
marker1.bindPopup("<p1><b><a href='https://saltandsmokebbq.com/'>Salt and Smoke</b></a><br>Our favorite bbq joint. We always take out-of-town visitors here.</p1>");

var marker2 = L.marker([38.59344865082094, -90.2259506603557], {opacity: 0.6}).addTo(map);
marker2.bindPopup("<p1><b><a href='https://morningglorydiner.square.site/'>Morning Glory Diner</b></a><br>Best slinger in the city!</p1>");

var marker3 = L.marker([38.62746928042913, -90.33737814862232], {opacity: 0.6}).addTo(map);
marker3.bindPopup("<p1><b><a href='https://www.maileestl.com/'>Mai Lee</b></a><br>My wife's favorite Vietnamese joint.</p1>");

var marker4 = L.marker([38.62663719046965, -90.26098196175731], {opacity: 0.6}).addTo(map);
marker4.bindPopup("<p1><b><a href='https://www.urbanchestnut.com/visit/the-grove-brewery-and-bierhall'>Urban Chestnut Bierhall</b></a><br>Really good thin-crust pizza to go with your beer!</p1>");

var marker5 = L.marker([38.60031501305363, -90.24284498768233], {opacity: 0.6}).addTo(map);
marker5.bindPopup("<p1><b><a href='https://www.thevinestl.com/thevinecafe/Home.html'>The Vine</b></a><br>Top-notch Lebanese food.</p1>");

var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);

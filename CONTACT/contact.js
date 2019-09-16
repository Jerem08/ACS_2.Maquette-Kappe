// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 46.991648;
var lon = 3.141713;
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 18);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
  var marker = L.marker([46.991322, 3.142824]).addTo(macarte);
  marker.bindPopup("<h3>Access Code School</h3><br><h6>🏠 <strong>Adresse:</strong> 7bis Rue du 13e de Ligne, 58000 Nevers<br>✆ <strong>Tel:</strong> +33(0)3 84 76 52 44<br>📧 <strong>Email:</strong> projet@onlineformapro.com</h6>").openPopup();
}
window.onload = function(){
// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
initMap();
};

// sidebar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// When the user clicks on div, open the popup

$(".popup").click(function(){
  $("#myPopup").addClass("show");
});
$(".popup").hover("",function(){
  $("#myPopup").removeClass("show");
});

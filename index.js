// i am LAZY; i have not added them all as you can see
const unions = [
    {id: "pstu", title: "Puget Sound Tenants Union", isATUN: true, x: 47.584715, y:-122.302908},
    {id: "vtu", title: "Vancouver Tenants Union", isATUN: false, x: 49.24966, y: -123.11934},
    {id: "vtag", title: "Victoria Tenant Action Group", isATUN: false, x: 48.43294, y: -123.3693},
    {id: "pvtu", title: "Vally Tenants Union", isATUN: true, x: 33.448, y: -112.074},
    {id: "ttu", title: "Tucson Tenants Union", isATUN: false, x: 32.2534, y: -110.9117},
];
const centerOfAmericaKindaSorta = [39.836546, -102.051843];
const map = L.map('map').setView(centerOfAmericaKindaSorta, 3);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const addMarker = (id, title, isATUN, x, y) => {
    const size = isATUN ? [30, 30] : [20, 30]; 
    const icon = L.icon({
        iconUrl: isATUN ? './assets/redIcon.png' : './assets/whiteIcon.png',

        
        iconSize: size,
    });

    const marker = L.marker(
        [x, y], 
        {icon: icon}
    )
        .addTo(map)
        .bindPopup(`<b>${title}</b><br/><a href=#${id}>View<a/>`);

    marker.on({
        mouseover: function() {
                this.openPopup();
        },
        click: function() {
            this.openPopup();
        }
    })
}; 



const unionContainer = document.getElementById("card-container");
unions.forEach(u => {
    addMarker(u.id, u.title, u.isATUN, u.x, u.y);
    // This creates a little card with info for each tenant union
    // I haven't figured out a design for it yet so don't worry yet
    const child = document.createElement("div");
    child.setAttribute("id", u.id)
    child.setAttribute("class", "union")
    child.innerText = u.title;
    //unionContainer.appendChild(child);
});
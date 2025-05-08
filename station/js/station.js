document.addEventListener("DOMContentLoaded", () => {
  const menuHTML = `
    <div class="sidebar" id="sidebar">
      <div class="menu-toggle" onclick="toggleMenu()">☰</div>
      <ul class="nav-links">
        <li><a href="station.html" class="nav-item" data-page="station.html">🏠 Accueil</a></li>
        <li><a href="luminosite.html" class="nav-item" data-page="luminosite.html">🌞 Luminosité</a></li>
        <li><a href="vitessevent.html" class="nav-item" data-page="vitessevent.html">💨 Vitesse du vent</a></li>
        <li><a href="orientationvent.html" class="nav-item" data-page="orientationvent.html">🧭 Orientation du vent</a></li>
        <li><a href="pluie.html" class="nav-item" data-page="pluie.html">🌧️ Quantité de pluie</a></li>
        <li><a href="pollution.html" class="nav-item" data-page="pollution.html">🏭 Pollution</a></li>
        <li><a href="jour.html" class="nav-item" data-page="jour.html">📅 Données du jour</a></li>
      </ul>
    </div>
  `;
  document.body.insertAdjacentHTML("afterbegin", menuHTML);
  const page = location.pathname.split("/").pop();
  document.querySelectorAll(".nav-item").forEach(link => {
    if (link.dataset.page === page) link.classList.add("active-page");
  });
});
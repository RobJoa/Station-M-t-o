function genererDonneesFictives() {
    const random = (min, max, unit = '') => Math.floor(Math.random() * (max - min + 1)) + min + unit;
  
    const donnees = {
      luminosite: random(100, 1000, ' lux'),
      temperature: random(10, 30, ' °C'),
      vitesse_vent: random(0, 50, ' km/h'),
      orientation_vent: ['Nord', 'Sud', 'Est', 'Ouest', 'Nord-Est', 'Sud-Ouest'][Math.floor(Math.random() * 6)],
      pluie: random(0, 10, ' mm'),
      pollution: ['Faible', 'Modérée', 'Élevée'][Math.floor(Math.random() * 3)]
    };
  
    // Injecter dans #data-list s’il existe
    const el = document.getElementById("data-list") || document.getElementById("donnees-jour");
    if (el) {
      el.innerHTML = `
        <li>🌞 Luminosité : ${donnees.luminosite}</li>
        <li>🌡️ Température : ${donnees.temperature}</li>
        <li>💨 Vent : ${donnees.vitesse_vent} (${donnees.orientation_vent})</li>
        <li>🌧️ Pluie : ${donnees.pluie}</li>
        <li>🏭 Pollution : ${donnees.pollution}</li>
      `;
    }
  }
  
  genererDonneesFictives();
  setInterval(genererDonneesFictives, 5000);
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("horloge");
  if (!el) return;
  function updateClock() {
    const now = new Date();
    el.textContent = now.toLocaleDateString("fr-FR", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    }) + " – " + now.toLocaleTimeString();
  }
  updateClock();
  setInterval(updateClock, 1000);
});
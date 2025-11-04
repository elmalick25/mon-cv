  document.addEventListener("DOMContentLoaded", function () {
    const nomElement = document.getElementById("nom");
    const nomComplet = "EL HADJI MALICK SY";
    let index = 0;

    function taper() {
      // Réinitialise
      nomElement.textContent = '';
      nomElement.classList.remove("paused");
      index = 0;

      const interval = setInterval(() => {
        if (index < nomComplet.length) {
          nomElement.textContent += nomComplet[index];
          index++;
        } else {
          clearInterval(interval);
          nomElement.classList.add("paused"); // Cache le curseur

          // Pause de 3 secondes
          setTimeout(() => {
            taper(); // Recommence
          }, 3000);
        }
      }, 120); // Vitesse de frappe (120ms par lettre)
    }

    // Démarre après 1 seconde
    setTimeout(taper, 1000);
  });
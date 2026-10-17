  document.addEventListener("DOMContentLoaded", function () {
    const nomElement = document.getElementById("nom"); 
    const nomComplet = "EL HADJI MALICK SY";
    let position = 0;
    function taper() {
      nomElement.textContent = '';
      nomElement.classList.remove("paused");
      position = 0;

      const interval = setInterval(() => {
        if (position < nomComplet.length) {
          nomElement.textContent += nomComplet[position];
          position++;
        } else {
          clearInterval(interval);
          nomElement.classList.add("paused"); 

          setTimeout(() => {
            taper();
          }, 3000);
        }
      }, 120); 
    }
    setTimeout(taper, 1000);
  });
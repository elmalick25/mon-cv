const nom = document.querySelector('#PrenomEtNoms .fs-1');

let direction = 1;
const distance = 150; 
const duree = 5; 
const pause = 3000; 

nom.style.transition = `transform ${duree}s linear`;

function defile() {
  if (direction === 1) {
    nom.style.transform = `translateX(${distance}px)`; 
  } else {
    nom.style.transform = `translateX(0)`; 
  }

  direction *= -1;
  setTimeout(defile, duree * 1000 + pause); 
}

setTimeout(defile, 1000);


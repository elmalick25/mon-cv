/*alert("Bonjour la LGI2");
var x = 10; Ce sont les deux façons de créer une variable
let y = 3.5;
alert(typeof x);*/

/*let age = prompt("Entrer votre age ");
alert("l'age est " + age);  Permet d'afficher : l'age est 21 par exemple 
if(age <= 17)   alert("Access Denied");
else alert("Bienvenue");*/

/*let nombre = prompt("Entrer un nombre : ");
alert("Vous avez entrer " + nombre);
alert("La table de multiplication de " + nombre);
for(let i = 1; i<= 10; i++)
    alert(nombre+ "x" +i+ " = " + (nombre * i));
*/
/*let today = new Date();
alert(today);*/
function valider(){
    /*Pour verifier si la valeur a été recuperer */
    let pwd1 = document.getElementById("pwd").value;
    let pwd2 = document.getElementById("pwde").value;
    if(pwd1 == pwd2)
        alert("les deux mots de passe sont identiques");
    else
        alert("ces mots de passe ne sont pas identiques");
}
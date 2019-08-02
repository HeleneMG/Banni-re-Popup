//DEFINITION DES VARIABLES
let banner = document.getElementById('banner');
let croix = document.getElementById('fermer');

//APPARITION DE LA BANNIERE
function apparaitre() { 
    banner.style.display = 'flex';
}
setTimeout(apparaitre, 2000);
/*
au bout de 2000 millisecondes,le "display" de la bannière passe de 'none', à 'flex' => elle apparaît
*/

//FERMETURE DE LA BANNIERE
croix.addEventListener('click', () => {
    banner.style.display = 'none';
});
/*Au click sur "croix", le display de la bannière repasse à 'none' => elle disparaît
*/
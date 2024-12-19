//declaration variable personnages
var personnages = recupListePersos();

//recupération de la div section
var section = document.querySelector('.section');

//Boucle qui recupère les éléments du tableau pour créer la card
for (let i = 0; i < personnages.length; i++) {
    const element = personnages[i];
    creationPersos(element,section,i);
}
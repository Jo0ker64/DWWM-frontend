//Récupération des données à modifier et les afficher dans le formulaire

var i = localStorage.getItem('i');
var personnages = recupListePersos();

document.getElementById("nom1").value = personnages[i].nom;
document.getElementById("classe1").value = personnages[i].classe;
document.getElementById("ki1").value = personnages[i].ki;
document.getElementById("endurance1").value = personnages[i].endurance;
document.getElementById("force1").value = personnages[i].force;
document.getElementById("combat1").value = personnages[i].combat;


//fonction pour modifier notre perso en récupérant les valeurs saisies dans le formulaire

function remplacePerso(){
    var i = localStorage.getItem('i');
    var personnages = recupListePersos();
    var Nperso = personnages[i];

    Nperso.nom=document.getElementById("nom1").value;
    Nperso.classe=document.getElementById("classe1").value;
    Nperso.arme=document.getElementById("ki1").value;
    Nperso.endurance=document.getElementById("endurance1").value;
    Nperso.force=document.getElementById("force1").value;
    Nperso.agilité=document.getElementById("combat1").value;
  
    
    savePersos(personnages);
}
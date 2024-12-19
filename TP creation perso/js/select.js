//recuperation du tableau
var personnages = recupListePersos();
//recuperation de la la premiere partie du tableau
var tbody = document.querySelector('tbody');
//Fonction pour générer le tableau de personnages
function selectPerso(element, i) {
    var tr = document.createElement('tr');

    var th = document.createElement('th');
    th.setAttribute("scope","row");
    th.innerText = Number(i)+1;

    var td1 = document.createElement('td');
    td1.innerText = element.nom;

    var td2 = document.createElement('td');
    td2.innerText = element.classe;

    var td3 = document.createElement('td');
    td3.innerText = element.arme;

    var td4 = document.createElement('td');
    td4.innerText = element.endurance;

    var td5 = document.createElement('td');
    td5.innerText = element.force;

    var td6 = document.createElement('td');
    td6.innerText = element.agilité;

    var td7 = document.createElement('td');
    td7.innerText = element.intelligence;

    tbody.appendChild(tr);
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);   
}
//Boucle permettant de généré tout les persos dans le tableau
for (let i = 0; i < personnages.length; i++) {
    const element = personnages[i];
    selectPerso(element,i);
}

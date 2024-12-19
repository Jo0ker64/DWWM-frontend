function creationPersos(item,container,i) {
    
    var card = document.createElement('div');
    card.classList.add("card","m-2");
    card.style.width = "18rem";

    var cardBody = document.createElement('div');
    cardBody.classList.add("card-body");

    var cardTitle = document.createElement('h5');
    cardTitle.classList.add("card-title");
    cardTitle.className = "fw-bold";
    cardTitle.innerHTML = item.nom;

    var cardText = document.createElement('p');
    cardText.classList.add("card-text");
    cardText.innerText = "Classe: "+item.classe;
    
    var cardImg = document.createElement('img');
    cardImg.setAttribute('src', './images/'+item.classe+'.jpg');
    cardImg.style.width = "100%";
    cardImg.style.height = "350px";

    var cardText1 = document.createElement('p');
    cardText1.classList.add("card-text");
    cardText1.innerText = "Puissance du ki: "+item.ki;

    var cardText2 = document.createElement('p');
    cardText2.classList.add("card-text");
    cardText2.innerText = "Endurance: "+item.endurance;

    var cardText3 = document.createElement('p');
    cardText3.classList.add("card-text");
    cardText3.innerText = "Force: "+item.force;

    var cardText4 = document.createElement('p');
    cardText4.classList.add("card-text");
    cardText4.innerText = "Statégie de combat: "+item.combat;


    var cardFooter = document.createElement('div');
    cardFooter.className = "card-footer d-flex justify-content-around";

    var a1 = document.createElement('a');
    a1.innerText = "Modifier";
    a1.className = "btn btn-primary";
    a1.setAttribute("onclick","modifPerso("+i+")");
    a1.href = "./modifPerso.html";
    

    var a2 = document.createElement('a');
    a2.innerText = "Supprimer";
    a2.className = "btn btn-danger";
    a2.setAttribute("data-bs-toggle","modal");
    a2.setAttribute("data-bs-target","#modal");
    a2.setAttribute("data-bs-i",i);


   
    section.appendChild(card);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardText1);
    cardBody.appendChild(cardText2);
    cardBody.appendChild(cardText3);
    cardBody.appendChild(cardText4);
    cardBody.appendChild(cardText5);
    card.appendChild(cardFooter);
    cardFooter.appendChild(a1);
    cardFooter.appendChild(a2);
}


function savePersos(personnages) {
    var tabPersos = JSON.stringify(personnages);
    localStorage.setItem('tabPerso',tabPersos);  
};


function createPerso() {
    var personnage = {} ;
    personnage.nom=document.getElementById("nom").value;
    personnage.classe=document.getElementById("classe").value;
    personnage.ki=document.getElementById("ki").value;
    personnage.endurance=document.getElementById("endurance").value;
    personnage.force=document.getElementById("force").value;
    personnage.combat=document.getElementById("combat").value;
   
    var personnages = recupListePersos();
    personnages.push(personnage);
    savePersos(personnages);
}

function supPerso(i) {
    recupListePersos();
    personnages.splice(i,1);
    savePersos(personnages);
    document.location.reload();
}

function recupListePersos(){
    var personnages = localStorage.getItem('tabPerso');
    if (personnages) {
        personnages=JSON.parse(personnages,"UTF-8");
    } else {
        var personnages = [];
    }  
    return personnages;
};


function modifPerso(i) {
    personnages = recupListePersos();
    personnages.slice(i,2); 
    var i = localStorage.setItem("i",i);
    var i = localStorage.getItem('i');
    console.log(personnages[i]);
}



var exampleModal = document.getElementById('modal')
exampleModal.addEventListener('show.bs.modal', function (event) {
    var personnages = recupListePersos();
    
    var button = event.relatedTarget
   
    var recipient = button.getAttribute('data-bs-i')
  
    var clickBouton = document.querySelector('#bouton');
  
    clickBouton.setAttribute("onclick","supPerso("+recipient+")");
 
    var pModal = document.querySelector('#pModal');
    
    pModal.innerText = "Voulez vous vraiment supprimer " + personnages[recipient].nom + " ?";
})

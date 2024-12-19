  //fonction de calcul par l'evaluation de la chaine de caractere
  function resultat(){
    document.Calculette.affiche.value = eval(document.Calculette.affiche.value);
 }

 //fonction operation : ajoute un signe suivant le bouton clic a la chaine de caractere (dans input)   
 function ajouter(signe)
  {
 let chaine = document.Calculette.affiche.value;
      // test si le signe passé en parametre est un operateur
 let operateurs	= "+-*/()";
      if (operateurs.indexOf(signe) > -1){
   switch(chaine.substring(chaine.length - 1))
          {
              case "+":
              case "-":
              case "*":
              case "/":
                  chaine = chaine.substring(0, chaine.length - 1);
                  break;
          }
      }
      document.Calculette.affiche.value = chaine + signe;
  }

//fonctions effectuant des operations speciales (via des methodes javascript)
  function fonctionSpeciale(fonction)
  {
    switch(fonction){
        case "sqrt":
            document.Calculette.affiche.value = Math.sqrt(document.Calculette.affiche.value); // Racine carré
            break;
         case "log":
            document.Calculette.affiche.value = Math.log(document.Calculette.affiche.value); // logarithme
            break;
        //  case "pow":
        //     document.Calculette.affiche.value = Math.pow(document.Calculette.affiche.value),; 
        //     break;
        case "cos" : 
        document.Calculette.affiche.value = Math.cos(eval(document.Calculette.affiche.value)); // Cosinus
            break;
        case "sin" : 
        document.Calculette.affiche.value = Math.sin((document.Calculette.affiche.value)); //Sinus
            break;
        case "tag" : 
        document.Calculette.affiche.value = Math.tag(document.Calculette.affiche.value); // Tangente
            break;
       case "%":
      document.Calculette.affiche.value = (document.Calculette.affiche.value)/100; // Pourcentage
            break;
        case "π":
        document.Calculette.affiche.value = (docuement.Calculette.affiche.value) * 3,14;
            break;

    }
  }

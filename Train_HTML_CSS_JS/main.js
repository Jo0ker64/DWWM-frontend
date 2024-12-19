train.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;


      // vitesse que le train aura en changeant la valeur chiffre le train va plus ou moins vite en ajoutant 5px par exemple à 1 pixel par défaut
      train.style.left = timePassed / 5 + 'px';


      // temps que le train avance. En changeant la valeur chiffre le train avancera de 1 sec pour 1000 de sec declarer
      if (timePassed > 5000) clearInterval(timer);



        // celle la j'ai pas bien compris, je pense que c'est 
    }, 20);
  }


  // il est possible de donner d'autre animation au train 

 

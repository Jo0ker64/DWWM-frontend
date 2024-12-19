// // Définir le texte à afficher
// const text = 'survol moi';

// // Fonction pour transformer une chaîne de caractères en un tableau
// const createLetterArray = (string) => {
//   return string.split('');
// }

// // Fonction pour créer des couches de lettres enveloppées dans des balises span
// const createLetterLayers = (array) => {
//   return array.map((letter) => {
//       let layer = '';
//       // Spécifier le nombre de couches par lettre
//       for (let i = 1; i <= 2; i++) {
//         // Si la lettre est un espace
//         if(letter == ' '){
//           layer += '<span class="space"></span>';
//         } else {
//           layer += '<span class="letter-'+i+'">'+letter+'</span>';
//         }
//       }
//       return layer;
//   });
// }

// // Fonction pour envelopper chaque lettre dans un conteneur parent
// const createLetterContainers = (array) => {
//   return array.map((item) => {
//     let container = '';
//     container += '<div class="wrapper">'+item+'</div>';
//     return container;
//   });
// }

// // Utiliser une promesse pour afficher d'abord les couches de texte dans le DOM
// const outputLayers = new Promise(function(resolve, reject) {
//   document.getElementById('text').innerHTML = createLetterContainers(createLetterLayers(createLetterArray(text))).join('');
//   resolve();
// });

// // Ensuite, ajuster la largeur et la hauteur de chaque lettre
// const spans = Array.prototype.slice.call(document.getElementsByTagName('span'));
// outputLayers.then(() => {
//     return spans.map((span) => {
//       setTimeout(() => {
//         span.parentElement.style.width = span.offsetWidth+'px';
//         span.parentElement.style.height = span.offsetHeight+'px';
//       }, 250);
//     });  
// }).then(() => {
//     // Ensuite, faire glisser les lettres en vue une par une
//     let time = 250;
//     return spans.map((span) => {
//       time += 75;
//       setTimeout(() => {
//         span.parentElement.style.top = '0px';
//       }, time);
//     });
// });

// Définir le texte à afficher
const text = 'ENTRER';

// Fonction pour transformer une chaîne de caractères en un tableau
const createLetterArray = (string) => string.split('');

// Fonction pour créer des couches de lettres enveloppées dans des balises span
const createLetterLayers = (letter) => {
  if (letter === ' ') {
    return '<span class="space"></span>';
  } else {
    return `<span class="letter-1">${letter}</span><span class="letter-2">${letter}</span>`;
  }
};

// Fonction pour envelopper chaque lettre dans un conteneur parent
const createLetterContainers = (item) => `<div class="wrapper">${item}</div>`;

// Fonction pour ajuster la largeur et la hauteur de chaque lettre
const adjustLetterSize = (span) => {
  const parentElement = span.parentElement;
  parentElement.style.width = span.offsetWidth + 'px';
  parentElement.style.height = span.offsetHeight + 'px';
};

// Fonction pour animer l'apparition des lettres
const animateLetters = (span, time) => {
  setTimeout(() => {
    span.parentElement.style.top = '5px';
  }, time);
};

// Fonction principale pour afficher le texte
const displayText = (text) => {
  const letterArray = createLetterArray(text);
  const letterLayers = letterArray.map(createLetterLayers);
  const letterContainers = letterLayers.map(createLetterContainers);

  document.getElementById('text').innerHTML = letterContainers.join('');

  const spans = Array.from(document.getElementsByTagName('span'));

  // Ajuster la taille de chaque lettre
  spans.forEach(adjustLetterSize);

  // Animer l'apparition des lettres
  let time = 250;
  spans.forEach((span) => {
    time += 75;
    animateLetters(span, time);
  });
};

// Utiliser la fonction principale pour afficher le texte
displayText(text);

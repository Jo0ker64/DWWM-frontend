// Sélectionne tous les boutons pour descendre
const btnDown = document.querySelectorAll('.btn2');
// Sélectionne tous les boutons pour monter
const btnUp = document.querySelectorAll('.btn1');
// Sélectionne le tableau principal
const tableau = document.querySelectorAll('.tableauPrincipal');
// Sélectionne chaque grille individuelle
const grid1 = document.querySelectorAll('.grid1');
const grid2 = document.querySelectorAll('.grid2');
const grid3 = document.querySelectorAll('.grid3');
const grid4 = document.querySelectorAll('.grid4');
const grid5 = document.querySelectorAll('.grid5');
const grid6 = document.querySelectorAll('.grid6');
const grid7 = document.querySelectorAll('.grid7');

// Initialise l'index pour suivre la position actuelle
let index = 1;

// Fonction pour gérer l'animation du tableau vers le bas
const downTableau = () => {
    // Crée une timeline GSAP pour les animations de sortie
    const TLEND = gsap.timeline();

    // Anime la disparition des éléments actuels
    TLEND.to(`.t${index}`, { opacity: 0, y: -100, duration: 0.45 });
    TLEND.to(`.st${index}`, { opacity: 0, y: -100, duration: 0.45 }, '-=0.25');
    TLEND.to(`.mt${index}`, { opacity: 0, y: -100, duration: 0.45 }, '-=0.25');
    TLEND.to(`.btna${index}`, { opacity: 0, y: -100, duration: 0.45 }, '-=0.35');
    TLEND.to(`.btnb${index}`, { opacity: 0, y: -100, duration: 0.45 }, '-=0.35');
    TLEND.to(`.tg${index}`, { opacity: 0, y: -100, duration: 0.45 }, '-=0.55');

    // Anime le déplacement du tableau principal vers le haut
    TLEND.to(tableau, { duration: 1, ease: "power1.in", y: '-=100vh' }, '-=0.95');

    // Crée une nouvelle timeline GSAP pour les animations d'entrée des éléments suivants
    const TLSTART = gsap.timeline();

    // Anime l'apparition des nouveaux éléments
    TLSTART.fromTo(`.t${index + 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45, delay: 1 });
    TLSTART.fromTo(`.st${index + 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.25');
    TLSTART.fromTo(`.mt${index + 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.25');
    TLSTART.fromTo(`.btna${index + 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.35');
    TLSTART.fromTo(`.btnb${index + 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.35');
    TLSTART.fromTo(`.tg${index + 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.45');
}

// Fonction pour gérer l'animation du tableau vers le haut
const upTableau = () => {
    // Crée une timeline GSAP pour les animations de sortie
    const TLEND2 = gsap.timeline();

    // Anime la disparition des éléments actuels
    TLEND2.to(`.t${index}`, { opacity: 0, y: 100, duration: 0.45 });
    TLEND2.to(`.st${index}`, { opacity: 0, y: 100, duration: 0.45 }, '-=0.25');
    TLEND2.to(`.mt${index}`, { opacity: 0, y: 100, duration: 0.45 }, '-=0.25');
    TLEND2.to(`.btna${index}`, { opacity: 0, y: 100, duration: 0.45 }, '-=0.35');
    TLEND2.to(`.btnb${index}`, { opacity: 0, y: 100, duration: 0.45 }, '-=0.35');
    TLEND2.to(`.tg${index}`, { opacity: 0, y: 100, duration: 0.45 }, '-=0.55');

    // Anime le déplacement du tableau principal vers le bas
    TLEND2.to(tableau, { duration: 1, ease: "power1.in", y: '+=100vh' }, '-=0.75');

    // Crée une nouvelle timeline GSAP pour les animations d'entrée des éléments précédents
    const TLSTART2 = gsap.timeline();

    // Anime l'apparition des nouveaux éléments
    TLSTART2.fromTo(`.t${index - 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45, delay: 0.75 });
    TLSTART2.fromTo(`.st${index - 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.25');
    TLSTART2.fromTo(`.mt${index - 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.25');
    TLSTART2.fromTo(`.btna${index - 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.35');
    TLSTART2.fromTo(`.btnb${index - 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.35');
    TLSTART2.fromTo(`.tg${index - 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.45');
}

// Ajoute des écouteurs d'événements à chaque bouton de descente
btnDown.forEach(btn => {
    btn.addEventListener('click', () => {
        // Si on atteint la dernière grille, on joue une animation d'erreur
        if (index === 7) {
            btn.classList.add('animBtn');
            setTimeout(() => {
                btn.classList.remove('animBtn');
            }, 500);
        }
        // Si on n'est pas à la dernière grille, on descend d'une grille
        if (index < 7) {
            btn.classList.add('animBtnGood');
            setTimeout(() => {
                btn.classList.remove('animBtnGood');
            }, 500);
            downTableau(); // Appelle la fonction pour descendre le tableau
            index++; // Incrémente l'index pour avancer d'une grille
        }
    });
});

// Ajoute des écouteurs d'événements à chaque bouton de montée
btnUp.forEach(btn => {
    btn.addEventListener('click', () => {
        // Si on est à la première grille, on joue une animation d'erreur
        if (index === 1) {
            btn.classList.add('animBtn');
            setTimeout(() => {
                btn.classList.remove('animBtn');
            }, 500);
        }
        // Si on n'est pas à la première grille, on monte d'une grille
        if (index > 1) {
            btn.classList.add('animBtnGood');
            setTimeout(() => {
                btn.classList.remove('animBtnGood');
            }, 500);
            upTableau(); // Appelle la fonction pour monter le tableau
            index--; // Décrémente l'index pour revenir à la grille précédente
        }
    });
});

class TableauAnimator {
    // Le constructeur initialise la classe avec les sélecteurs des boutons, du tableau et des grilles
    constructor(btnDownSelector, btnUpSelector, tableauSelector, gridSelectors) {
        // Sélectionne tous les boutons pour descendre
        this.btnDown = document.querySelectorAll(btnDownSelector);
        // Sélectionne tous les boutons pour monter
        this.btnUp = document.querySelectorAll(btnUpSelector);
        // Sélectionne l'élément principal du tableau
        this.tableau = document.querySelector(tableauSelector);
        // Sélectionne toutes les grilles associées
        this.grids = document.querySelectorAll(gridSelectors);
        // Initialise l'index à 1 pour suivre la position actuelle
        this.index = 1;

        // Ajoute les écouteurs d'événements aux boutons
        this.addEventListeners();
    }

    // Anime les éléments pour les faire sortir de l'écran
    animateElementsOut(index, direction) {
        const timeline = gsap.timeline(); // Crée une timeline GSAP pour les animations
        const selectors = [
            `.t${index}`, `.st${index}`, `.mt${index}`, `.btna${index}`, `.btnb${index}`, `.tg${index}`
        ];

        // Anime l'opacité à 0 et déplace les éléments vers le haut ou le bas en fonction de la direction
        timeline.to(selectors, { 
            opacity: 0, 
            y: direction === 'down' ? -100 : 100, 
            duration: 0.45, 
            stagger: 0.1 
        });

        // Déplace le tableau principal vers le haut ou le bas de 100vh
        timeline.to(this.tableau, {
            y: direction === 'down' ? '-=100vh' : '+=100vh',
            duration: 1,
            ease: "power1.in"
        }, '-=0.75');

        return timeline; // Retourne la timeline pour chaîner les animations
    }

    // Anime les éléments pour les faire entrer dans l'écran
    animateElementsIn(index) {
        const timeline = gsap.timeline(); // Crée une nouvelle timeline GSAP
        const selectors = [
            `.t${index}`, `.st${index}`, `.mt${index}`, `.btna${index}`, `.btnb${index}`, `.tg${index}`
        ];

        // Anime l'opacité de 0 à 1 et déplace les éléments de -100px à 0px (dehors vers dedans)
        timeline.fromTo(selectors, 
            { opacity: 0, y: -100 }, 
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.1 }
        );

        return timeline; // Retourne la timeline pour chaîner les animations
    }

    // Anime les boutons lors du clic
    animateButton(btn, isGood) {
        // Choisit la classe d'animation en fonction de l'état (bonne ou mauvaise action)
        const animationClass = isGood ? 'animBtnGood' : 'animBtn';
        btn.classList.add(animationClass); // Ajoute la classe d'animation
        setTimeout(() => btn.classList.remove(animationClass), 500); // Retire la classe après 500ms pour réinitialiser
    }

    // Gère l'animation du tableau vers le bas
    moveDown() {
        if (this.index < this.grids.length) { // Vérifie qu'on ne dépasse pas la dernière grille
            this.animateElementsOut(this.index, 'down').then(() => { // Anime la sortie des éléments actuels
                this.index++; // Incrémente l'index pour passer à la grille suivante
                this.animateElementsIn(this.index); // Anime l'entrée des nouveaux éléments
            });
        }
    }

    // Gère l'animation du tableau vers le haut
    moveUp() {
        if (this.index > 1) { // Vérifie qu'on ne dépasse pas la première grille
            this.animateElementsOut(this.index, 'up').then(() => { // Anime la sortie des éléments actuels
                this.index--; // Décrémente l'index pour revenir à la grille précédente
                this.animateElementsIn(this.index); // Anime l'entrée des nouveaux éléments
            });
        }
    }

    // Gère le clic sur les boutons pour monter ou descendre
    handleButtonClick(btn, increment) {
        // Vérifie si on est aux limites (première ou dernière grille)
        const isAtLimit = (increment === 1 && this.index >= this.grids.length) || 
                          (increment === -1 && this.index <= 1);

        // Anime le bouton avec l'effet approprié (bon ou mauvais clic)
        this.animateButton(btn, !isAtLimit);

        if (!isAtLimit) { // Si on n'est pas aux limites
            if (increment === 1) {
                this.moveDown(); // Si on monte, on appelle moveDown()
            } else {
                this.moveUp(); // Si on descend, on appelle moveUp()
            }
        }
    }

    // Ajoute les écouteurs d'événements aux boutons pour détecter les clics
    addEventListeners() {
        this.btnDown.forEach(btn => {
            btn.addEventListener('click', () => this.handleButtonClick(btn, 1)); // Clic sur bouton pour descendre
        });

        this.btnUp.forEach(btn => {
            btn.addEventListener('click', () => this.handleButtonClick(btn, -1)); // Clic sur bouton pour monter
        });
    }
}

// Initialisation de la classe avec les sélecteurs des éléments
const animator = new TableauAnimator('.btn2', '.btn1', '.tableauPrincipal', '.grid1, .grid2, .grid3, .grid4, .grid5, .grid6, .grid7');

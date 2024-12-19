const categories = ['Pays', 'Ville', 'Fruit', 'Animal', 'Couleur'];

function choisirCategorie() {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

function choisirLettre() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

function validerReponse() {
    const category = document.getElementById('category').textContent;
    const letter = document.getElementById('letter').textContent;
    const answer = document.getElementById('answer').value.toUpperCase();

    const result = document.getElementById('result');
    if (answer.startsWith(letter)) {
        result.textContent = `Bonne réponse pour la catégorie "${category}" !`;
    } else {
        result.textContent = `Mauvaise réponse pour la catégorie "${category}". La réponse devrait commencer par "${letter}".`;
    }
}

function nouvellePartie() {
    const category = choisirCategorie();
    const letter = choisirLettre();

    document.getElementById('category').textContent = `Catégorie : ${category}`;
    document.getElementById('letter').textContent = `Lettre : ${letter}`;
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
}

// Initialiser une nouvelle partie au chargement de la page
window.onload = nouvellePartie;

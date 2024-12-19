
// Fonction LancerJeu()
//  /     Variables du jeu
//     Déclarer life_count, temps, score, wl_full, loading, begin, anim_time, last_y, interval, message_state comme entiers
//     Déclarer ctx, line, grad, pat1, pat2, pat3, pat4, pat5 comme objets
//     Déclarer canvas comme objet

//     canvas = document.getElementById("board")

//     Si canvas.getContext Alors
//         ctx = canvas.getContext("2d")
//         setInterval(BouclePrincipale, 16)
//         window.addEventListener("keydown", GestionTouche, vrai)
//         loading = loading + 5
//     Fin Si

//     /          Sons du jeu
//     Déclarer frog_sound, water_sound, hit_sound, boing_sound, bell_sound comme objets Audio
//     frog_sound = Nouvel Audio("sounds/frog.wav")
//     water_sound = Nouvel Audio("sounds/water.wav")
//     hit_sound = Nouvel Audio("sounds/hit.wav")
//     boing_sound = Nouvel Audio("sounds/boing.wav")
//     bell_sound = Nouvel Audio("sounds/bell.wav")
//     frog_sound.oncanplaythrough = loading = loading + 3
//     water_sound.oncanplaythrough = loading = loading + 3
//     hit_sound.oncanplaythrough = loading = loading + 3
//     boing_sound.oncanplaythrough = loading = loading + 3
//     bell_sound.oncanplaythrough = loading = loading + 3

//     /        Chargement des images
//     Déclarer imgs comme tableau d'objets Image avec 21 éléments
//     Pour i de 0 à imgs.longueur faire
//         imgs[i] = Nouvelle Image()
//         imgs[i].onload = fonction()
//             loading = loading + 3
//         Fin fonction
//         imgs[i].src = "imgs/img_" + i + ".gif"
//     Fin Pour

//     /        Fonction de démarrage du minuteur
//     Fonction ParametrerMinuteur()
//         temps = 60
//         interval = setInterval(fonction()
//             Si temps == 0 Alors
//                 JouerSon(bell_sound)
//                 PerdreVie()
//             Fin Si
//         Fin fonction, 1000)
//     Fin Fonction

//     /         Fonction pour jouer un son
//     Fonction JouerSon(son)
//         Si frog.isNotBlocked() Alors
//             son.play()
//         Fin Si
//     Fin Fonction

//     /          Fonction pour perdre une vie
//     Fonction PerdreVie()
//         anim_time = 0
//         Si frog.isNotBlocked() Alors
//             frog.block()
//             life_count--
//             clearInterval(interval)
//             Si life_count == 0 Alors
//                 alert("Perdu")
//             Sinon
//                 message_state = 1
//                 last_y = 380
//                 ParametrerMinuteur(fonction()
//                     frog.initPos()
//                     last_y = 380
//                     ParametrerMinuteur()
//                     message_state = 0
//                 Fin fonction, 2000)
//             Fin Si
//         Fin Si
//     Fin Fonction

//     /         Fonction pour afficher un message
//     Fonction EcrireMessage()
//         /      À compléter si nécessaire
//     Fin Fonction

//     /          Lignes de la route
//     Déclarer line1, line2, line3, line4, line5, line6, line7, line8, line9, line10 comme objets Line
//     line1 = Nouvelle Line(Math.floor((Math.random() * 3) + 1), -1, 34, 1)
//     line2 = Nouvelle Line(Math.floor((Math.random() * 3) + 1), 1, 28, 2)
//     line3 = Nouvelle Line(Math.floor((Math.random() * 3) + 1), -1, 33, 3)
//     line4 = Nouvelle Line(Math.floor((Math.random() * 3) + 1), 1, 34, 4)
//     line5 = Nouvelle Line(Math.floor((Math.random() * 3) + 1), -1, 54, 5)
//     line6 = Nouvelle Line(Math.floor((Math.random() * 3) + 1), 1, 117, 6)
//     line7 = Nouvelle Line(Math.floor((Math.random() * 3) + 1), -1, 180, 7)
//     line8 = Nouvelle Line(Math.floor((Math.random() * 3) + 1), 1, 84, 8)
//     line9 = Nouvelle Line(Math.floor((Math.random() * 3) + 1), -1, 180, 7)
//     line10 = Nouvelle Line(Math.floor((Math.random() * 3) + 1), 1, 117, 8)

//     /           Objets en mouvement sur la route
//     Déclarer enms comme tableau d'objets
//     enms[0] = Nouvel Obj(50, 350, line1)
//     /        ... (répéter pour les autres objets)

//     /        Objets en mouvement sur les bûches
//     Déclarer plts comme tableau d'objets
//     plts[0] = Nouvel Obj(50, 170, line6)
//     /        ... (répéter pour les autres objets)

//     /         Nénuphars
//     Déclarer wls comme tableau d'objets
//     wls[0] = Nouveau WaterLily(42, 0)
//     /           ... (répéter pour les autres nénuphars)

//     /          Grenouille
//     Déclarer frog comme objet Frog
//     frog = Nouvelle Frog()
//     loading = loading + 17

//     /            Boucle principale du jeu
//     Fonction BouclePrincipale()
//         Si begin == faux Alors
//             ctx.lineJoin = "round"                           
//             ctx.lineNum = 7                   
//             ctx.strokeStyle = "#fff"   
//             ctx.strokeRect(175, 235, 300, 28)    
//             ctx.fillStyle = "#000"               
//             ctx.fillRect(175, 235, 300, 28)
//             ctx.fillStyle = "#2E6730"
//             ctx.fillRect(175, 235, (loading * 3), 28)

// Les lignes de code CTX font référence à la configuration du contexte de rendu 2D (ctx) d'un élément canvas en HTML5:

                            //ctx.lineWidth = une valeur en chiffre :
        // Cela définit l'épaisseur de la ligne lors du dessin sur le contexte 2D en pixel.

                            // ctx.font = "00pt nom de la police" :
        // Cela définit la police et la taille de la police du texte lors du dessin sur le contexte 2D. 
    
                            // ctx.strokeStyle = "code couleur en héxadécimal" :
        // Ceci définit la couleur du trait lors du dessin de contours. 
    
                            // ctx.fillStyle = "code couleur en héxadécimal" :
        // Cela définit la couleur de remplissage lors du dessin de formes remplies. 
    
                            // ctx.strokeText("loading" + loading + "%", 275, 255) :
        // Cela dessine un texte en mode contour sur le contexte 2D. Le texte est "loading" suivi de la variable loading et de "%" à la position (275, 255) du canvas. La couleur du contour est celle définie dans la précédente ctx.
    
                            // ctx.fillText("loading" + loading + "%", 275, 255) :
        // Ceci dessine le même texte que la ligne précédente, mais cette fois-ci en mode remplissage. Le texte est rempli avec la couleur définie précédemment.



//             ctx.lineWidth = 3
//             ctx.font = "12pt comic sans ms"
//             ctx.strokeStyle = "#F2f2f2"
//             ctx.fillStyle = "#000"
//             ctx.strokeText("loading" + loading + "%", 275, 255)
//             ctx.fillText("loading" + loading + "%", 275, 255)
//             Si loading == 100 Alors
//                 ctx.lineWidth = 5
//                 ctx.strokeStyle = ("#819AAB")
//                 ctx.fillStyle = ("#fff")
//                 ctx.font = ("18pt comic sans ms")
//                 ctx.strokeText("press \"ENTER\" to start", 184, 220)
//                 ctx.fillText("press \"ENTER\" to start", 184, 220)
//             Fin Si
//         Sinon
            /////////////////////////////////////////////////////////////////
// COMENTAIRE PERSO LE JEU EST NUL !!!!!!!!!!!!!!

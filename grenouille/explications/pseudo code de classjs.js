// Structure Line
// vitesse
// direction
// largeur
// type
// Fin Structure

// Structure Obj
// x
// y
// ligne

// Fonction enCollision(frog)
//     Si frog.x + 25 >= this.x ET frog.x + 5 <= (this.x + this.ligne.largeur) Alors
//         Retourner Vrai
//     Sinon
//         Retourner Faux
//     Fin Si
// Fin Fonction

// Fonction deplacement()
//     Si this.ligne.direction == 1 Alors
//         Si this.x > 650 Alors
//             this.x = -(this.ligne.largeur * 3)
//         Sinon
//             this.x = this.x + (this.ligne.vitesse * this.ligne.direction)
//         Fin Si
//     Sinon
//         Si this.x < -this.ligne.largeur Alors
//             this.x = 650 + (this.ligne.largeur * 3)
//         Sinon
//             this.x = this.x + (this.ligne.vitesse * this.ligne.direction)
//         Fin Si
//     Fin Si
// Fin Fonction
// Fin Structure

// Structure Frog
// x
// y
// etat
// degre

// Fonction blocage()
//     this.etat = Faux
// Fin Fonction

// Fonction deblocage()
//     this.etat = Vrai
// Fin Fonction

// Fonction nEstPasBloque()
//     Retourner this.etat
// Fin Fonction

// Fonction monter()
//     Si this.etat == Vrai Alors
//         Si this.y > 20 Alors
//             this.y = this.y - 30
//         Fin Si
//         this.degre = 0
//     Fin Si
// Fin Fonction

// Fonction descendre()
//     Si this.etat == Vrai Alors
//         Si this.y == 170 Alors
//             Si this.x > 310 Alors
//                 Tant que (this.x - 10) % 30 != 0 Faire
//                     this.x--
//                 Fin Tant que
//             Sinon
      

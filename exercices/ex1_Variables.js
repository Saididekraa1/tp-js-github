function infoEtudiants(nom, note) {
    if (note >= 10) {
        console.log(nom + ":" +note + "/20" + "-->" + "Admis");
    } else {
        console.log(nom + ":" + note + "/20" + "-->" + "Ajourné");
    }
} 
//test de la fonction
infoEtudiants("Salma", 12);
infoEtudiants("Yassine", 8);

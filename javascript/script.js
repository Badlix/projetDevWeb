function switchTo(sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
}

// function getNote(form) {
//     if (form.getElementById("score-5")).
// }

function updateEmail(form) {
    sujet = "Avis : " + form.getElementById("prenom") + " " + form.getElementById("nom");
    texte = form.getElementById("commentaire");
    complet = "mailto:alice.leroux@gmail.com?subject=" + sujet + "&body=" + texte;
    console.log(complet);
    document.getElementById("jsp").href = complet;
}
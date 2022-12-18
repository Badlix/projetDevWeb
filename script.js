function switchTo(sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
}

// function sendEmail() {
//     var prenom = document.getElementById("prenom").value;
//     var nom = document.getElementById("nom").value;
//     var commentaire = document.getElementById("commentaire").value;
//     var note = " / ";
//     if (document.getElementById("score-5").value) {
//         note = "5/5";
//     } else if (document.getElementById("score-4").value) {
//         note = "4/5";
//     } else if (document.getElementById("score-3").value) {
//         note = "3/5";
//     } else if (document.getElementById("score-2").value) {
//         note = "2/5";
//     } else if (document.getElementById("score-1").value) {
//         note = "1/5";
//     }
//     return "mailto:alice.leroux@gmail.com";
// }

function sendEmail() {
    document.getElementById('form').action = "mailto:alice.leroux@gmail.com?subject=Avis";
}
function temp() {
    document.getElementById('form1').action = "mailto:alice.leroux@gmail.com?subject=Avissss";
}
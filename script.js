function switchTo(sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
}

function sendEmail() {
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var commentaire = document.getElementById("commentaire").value;
    var notreAdresseMail = "alice.leroux@gmail.com";
    // window.location.href("mailto:" + notreAdresseMail + '&subject=Avis de ' + prenom + ' ' + nom + '&body=' + emailBody);
    window.open("mailto:alice.leroux@gmail.com");
}
/*ADDITION*/
function addition() {
    var nombre1 = parseFloat(document.getElementById("nombre1").value);
    var nombre2 = parseFloat(document.getElementById("nombre2").value);
    var resultat = nombre1 + nombre2;
    document.getElementById("resultat").value=resultat;
    document.getElementById("opera").value = "+";
}
/*ADDITION SECONDE SYNTAXE: la fonction est affectée à la variable addition qui, devient une fonction */
var addition1=function() {
    var nombre1 = parseFloat(document.getElementById("nombre1").value);
    var nombre2 = parseFloat(document.getElementById("nombre2").value);
    var resultat = nombre1 + nombre2;
    document.getElementById("resultat").value=resultat;
    document.getElementById("opera").value = "+";
}
/*SOUSTRACTION*/
function soustraction() {
    var nombre1 = parseFloat(document.getElementById("nombre1").value);
    var nombre2 = parseFloat(document.getElementById("nombre2").value);
    var resultat = nombre1 - nombre2;
    document.getElementById("resultat").value=resultat;
    document.getElementById("opera").value = "-";
}
/*MULTIPLICATION*/
function multiplication() {
    var nombre1 = parseFloat(document.getElementById("nombre1").value);
    var nombre2 = parseFloat(document.getElementById("nombre2").value);
    var resultat = nombre1 * nombre2;
    document.getElementById("resultat").value=resultat;
    document.getElementById("opera").value = "*";
}
/*DIVISION*/
function division() {
    var nombre1 = parseFloat(document.getElementById("nombre1").value);
    var nombre2 = parseFloat(document.getElementById("nombre2").value);
    if(nombre2==0){
        document.getElementById("resultat").value="Division par 0 impossible";
        document.getElementById("opera").value = "/";
    }
    else{
        var resultat = nombre1 / nombre2;
        document.getElementById("resultat").value=resultat;
        document.getElementById("opera").value = "/";
    }
}
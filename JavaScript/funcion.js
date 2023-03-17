function mostrar(art) {
    let artic = art ;
    document.getElementById("dato1").style.display= "none";
    document.getElementById("dato2").style.display= "none";
    document.getElementById("dato3").style.display= "none";
    document.getElementById("dato4").style.display= "none";
    if (Number(artic) == 1) {
        document.getElementById("dato1").style.display= "block";
    }
    if (Number(artic) == 2) {
        document.getElementById("dato2").style.display= "block";
    }
    if (Number(artic) == 3) {
        document.getElementById("dato3").style.display= "block";
    }
    if (Number(artic) == 4) {
        document.getElementById("dato4").style.display= "block";
    }
}

function imprimir() {
    document.getElementById("dato1").style.display= "block";
    document.getElementById("dato2").style.display= "block";
    document.getElementById("dato3").style.display= "block";
    document.getElementById("dato4").style.display= "block";
    window.print();
}

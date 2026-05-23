function abrirPopup(){
    document.getElementById("popup").style.display = "block";
}

function cerrarPopup(){
    document.getElementById("popup").style.display = "none";
}

// cerrar haciendo clic fuera de la caja
function cerrarPopupFondo(event) {
    if (event.target.id === "popup") {
        cerrarPopup();
    }
}

function abrirPopup2(){
    document.getElementById("popup2").style.display = "block";
}

function cerrarPopup2(){
    document.getElementById("popup2").style.display = "none";
}

// cerrar haciendo clic fuera de la caja
function cerrarPopupFondo2(event) {
    if (event.target.id === "popup2") {
        cerrarPopup2();
    }
}

function abrirPopup3(){
    document.getElementById("popup3").style.display = "block";
}

function cerrarPopup3(){
    document.getElementById("popup3").style.display = "none";
}

// cerrar haciendo clic fuera de la caja
function cerrarPopupFondo3(event) {
    if (event.target.id === "popup3") {
        cerrarPopup3();
    }
}

function abrirPopup4(){
    document.getElementById("popup4").style.display = "block";
}

function cerrarPopup4(){
    document.getElementById("popup4").style.display = "none";
}

// cerrar haciendo clic fuera de la caja
function cerrarPopupFondo4(event) {
    if (event.target.id === "popup4") {
        cerrarPopup4();
    }
}
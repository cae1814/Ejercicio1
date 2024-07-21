main();

function main() {
     // Agregando evento al boton Limpiar 
    btonLimpiar.addEventListener("click", limpiar);

     // Agregando evento al boton Calcular 
     btonCalcular.addEventListener("click", calcular);
}

function limpiar() {
    document.getElementById("inputBase").value = 0;
    document.getElementById("inputAltura").value = 0;
}

function calcular() {
    let b = parseInt(document.getElementById("inputBase").value);
    let a = parseInt(document.getElementById("inputAltura").value);
    document.getElementById("inputArea").value = b * a;
}
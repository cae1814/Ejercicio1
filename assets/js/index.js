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
    let b = document.getElementById("inputBase").value;
    let a = document.getElementById("inputBase").value;
    document.getElementById("area").value = b * a;
}
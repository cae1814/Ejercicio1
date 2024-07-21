main();

function main() {
     // Agregando evento al boton Limpiar 
     eje1_btonLimpiar.addEventListener("click", eje1_limpiar);

     // Agregando evento al boton Calcular 
     eje1_btonCalcular.addEventListener("click",eje1_calcular);
}

function eje1_limpiar() {
    document.getElementById("eje1InputBase").value = 0;
    document.getElementById("eje1InputAltura").value = 0;
    document.getElementById("eje1InputArea").value = "";
}

function eje1_calcular() {
    document.getElementById("eje1InputArea").value = "";
    let base = document.getElementById("eje1InputBase").value;
    let altura = document.getElementById("eje1InputAltura").value;

    if (eje1_validaciones(altura, base)) {
        document.getElementById("eje1InputArea").value = parseInt(base) * parseInt(altura);
    } else {
       //alert("Los datos ingresados son incorrectos");
    }
}

function eje1_validaciones(pa, pb){
    if (!isNumber(pa) || pa.length == 0 ) {
        
        document.getElementById("error-eje1InputAltura").removeAttribute('hidden');
        return false;
    } else {
        document.getElementById("error-eje1InputAltura").setAttribute('hidden', '');
    }
    
    if (!isNumber(pb) || pb.length == 0 ) {
        document.getElementById("error-eje1InputBase").removeAttribute('hidden');
        return false;
    } else {
        document.getElementById("error-eje1InputBase").setAttribute('hidden', '');
    }

    return true;
};

function isNumber(pnum) {
    if (isNaN(pnum)) {
        return false;
    } else {
        return true;
    }
}
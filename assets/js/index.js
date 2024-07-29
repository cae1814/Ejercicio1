main();
loadTableFetch1();

function main() {
     // Agregando evento al boton Limpiar 
     eje1_btonLimpiar.addEventListener("click", eje1_limpiar);

     // Agregando evento al boton Calcular 
     eje1_btonCalcular.addEventListener("click",eje1_calcular);

     // Agregando evento para carga de tabla usuarios
     ejeFetch1_btonCargar.addEventListener("click",loadTableFetch1);
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
        if (parseInt(altura) == 0 || parseInt(base) == 0){
            //alert("La base y/o altura no puede ser igual a cero.");
            Swal.fire();
            Swal.fire({position: "top-end", icon: "error", title: "Oops...", text: "La base y/o altura no puede ser igual a cero.", showConfirmButton: false, timer: 1500});
            showAlert("La base y/o altura no puede ser igual a cero.");
            return;
        } else {

            document.getElementById("eje1InputArea").value = parseInt(base) * parseInt(altura);
            Swal.fire({position: "top-end", icon: "success", title: "Calculo de una 'area exitosa.", showConfirmButton: false, timer: 1500});
        }
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

function showAlert(msg){
    alertify.defaults = {
        // dialogs defaults
        autoReset:true,
        basic:false,
        closable:true,
        closableByDimmer:true,
        invokeOnCloseOff:false,
        frameless:false,
        defaultFocusOff:false,
        maintainFocus:true, // <== global default not per instance, applies to all dialogs
        maximizable:true,
        modal:true,
        movable:true,
        moveBounded:false,
        overflow:true,
        padding: true,
        pinnable:true,
        pinned:true,
        preventBodyShift:false, // <== global default not per instance, applies to all dialogs
        resizable:true,
        startMaximized:false,
        transition:'pulse',
        transitionOff:false,
        tabbable:'button:not(:disabled):not(.ajs-reset),[href]:not(:disabled):not(.ajs-reset),input:not(:disabled):not(.ajs-reset),select:not(:disabled):not(.ajs-reset),textarea:not(:disabled):not(.ajs-reset),[tabindex]:not([tabindex^="-"]):not(:disabled):not(.ajs-reset)',  // <== global default not per instance, applies to all dialogs

        // notifier defaults
        notifier:{
        // auto-dismiss wait time (in seconds)  
            delay:5,
        // default position
            position:'bottom-right',
        // adds a close button to notifier messages
            closeButton: false,
        // provides the ability to rename notifier classes
            classes : {
                base: 'alertify-notifier',
                prefix:'ajs-',
                message: 'ajs-message',
                top: 'ajs-top',
                right: 'ajs-right',
                bottom: 'ajs-bottom',
                left: 'ajs-left',
                center: 'ajs-center',
                visible: 'ajs-visible',
                hidden: 'ajs-hidden',
                close: 'ajs-close'
            }
        },

        // language resources 
        glossary:{
            // dialogs default title
            title: 'Claro Honduras',
            // ok button text
            ok: 'OK',
            // cancel button text
            cancel: 'Cancel'            
        },

        // theme settings
        theme:{
            // class name attached to prompt dialog input textbox.
            input:'ajs-input',
            // class name attached to ok button
            ok:'ajs-ok',
            // class name attached to cancel button 
            cancel:'ajs-cancel'
        },
        // global hooks
        hooks:{
            // invoked before initializing any dialog
            preinit:function(instance){},
            // invoked after initializing any dialog
            postinit:function(instance){},
        },
    };

    alertify.alert(msg, function(){alertify.message('OK');});
}

function loadTableFetch1(){
    let i = 0; 
    fetch("https://api.escuelajs.co/api/v1/users").then(response => response.json()).then(data => {
        let tabla = '<tr><th>Id</th><th></th><th>Name</th><th>Email</th><th>Rol</th><th>CreationDate</th><th>Updated</th></tr>';
         
        for (let user of data) {
            i++;
            tabla += `<tr>
                          <td scope='row'>${user.id}</td>
                          <td><div class="text-center"><img src="${user.avatar}" width="40px" class="rounded" alt="..." onclick="loadTableFetch1Verimage(this.src, '${user.name}', '${user.updatedAt}')" style="cursor:pointer;"></div></td>
                          <td>${user.name}</td>
                          <td>${user.email}</td>
                          <td>${user.role}</td>
                          <td>${user.creationAt}</td>
                          <td>${user.updatedAt}</td> 
                     </tr>`
        }

        document.getElementById("userstable").innerHTML = tabla;
    });
}


function loadTableFetch1Verimage(url, name, lastUpdate){
    document.getElementById("imgModal").src = url;
    document.getElementById("staticBackdropLabel").innerHTML = name;
    document.getElementById("staticBackdropFooter").innerHTML = "<br><b>Date</b>: "+lastUpdate;
    $("#ejercicioFetch1ModalImg").modal('show');
}
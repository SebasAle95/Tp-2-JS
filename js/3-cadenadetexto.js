let resultado = "";

do {
    var cadena = prompt("introduce una cadena de texto");

    if (resultado == ""){
        resultado = resultado + cadena;
    }

    else {
    resultado = resultrado + "-" +cadena;
    }

}while (confirm("desea seguir")); 

document.write(resultado);

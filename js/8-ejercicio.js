let repeticiones = prompt("introduce numero de repeticiones");

if (Number(repeticiones)== repeticiones){

    if (repeticiones > 0 && repeticiones <= 50){
        let rep,i;

        for (i=0; i <= repeticiones; i++){

            for (rep = 1;rep <= i;rep++){
                document.write(rep);
            }
            document.write("<br>");
        }

    }else {
        alert("el numero introducido no es valido");
    }
}

else {
    alert("no has introducido un numero")
}
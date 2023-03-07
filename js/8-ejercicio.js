let numerorep = prompt("introduce numero de repeticiones");

if (Number(numerorep)== numerorep){

    if (numerorep > 0 && numerorep <= 50){
        let rep,i;

        for (i=0; i <= numerorep; i++){

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
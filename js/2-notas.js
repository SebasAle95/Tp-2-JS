do{

let nota = prompt('ingrese una nota');

if (Number(nota)==nota){
    
    if (nota > 0 && nota <= 10){
        if (nota <= 2){
            alert("muy deficiente");
        }
        else if (nota <= 4){
            alert("insuficiente")
        }
        else if (nota <= 6){
            alert("suficiente");
        }
        else if (nota <= 7){
            alert("bien");
        }
        else if (nota <= 9){
            alert("notable");
        }
        else if (nota >= 9){
            alert("sobresaliente")
        }
    }
}else {
    if (nota != undefined){
        alert("introduce un numero valido")
    }
}

}while (nota != undefined);
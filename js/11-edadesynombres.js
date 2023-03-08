let nombre1 = prompt("nombre1");
let edad1 = prompt("edad1");

let nombre2 = prompt("nombre2");
let edad2 = prompt("edad2");

let nombre3 = prompt("nombre3");
let edad3 = prompt("edad3");


let maximo = Math.max(edad1, edad2, edad3);


if (maximo == edad1){
    document.write("el mayor es" +nombre1,nombre1);
}

if (maximo == edad2){
    document.write("el mayor es" +edad2,nombre2);
}

if (maximo == edad3){
    document.write("el mayor es" +edad3,nombre3);
}

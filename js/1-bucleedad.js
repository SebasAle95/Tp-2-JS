let edad = prompt('ingrese su edad');

while (edad != "fin"){
    if(edad >= 18){
        document.write('puede conducir');
        
    }else {
        document.write('no puede conducir')
        
    } edad = prompt('escriba fin para finalizar');
    
}


while (true) {
    chose_beverage = prompt(`Scegli una bevanda: 
    \n 1 - acqua 
    \n 2 - coca cola 
    \n 3 - birra`);

if (chose_beverage == 1 || chose_beverage == "acqua"){

console.log(`è stata selezionata l'acqua`);

}else if (chose_beverage == 2 || chose_beverage == "coca cola"){

console.log(`è stata selezionata la coca cola`);

}else if (chose_beverage == 3|| chose_beverage == "birra"){

console.log(`è stata selezionata la birra`);

}else{
    alert("Input non valido. Inserisci 1, 2, 3 o il nome della bevanda.")
}
}

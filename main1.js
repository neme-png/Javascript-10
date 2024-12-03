
let bibita; 
do {
    bibita = prompt(`Scegli una bevanda: 
        //         \n 1 - acqua 
        //         \n 2 - coca cola 
        //         \n 3 - birra`)
        
        // blocco di codice da eseguire almeno una volta   
        
    } while (bibita != 1 && bibita != 2 && bibita != 3);
    
    if (bevandaScelta == 1){
    
    console.log(`è stata selezionata l'acqua`);
    
    }else if (bevandaScelta == 2){
    
    console.log(`è stata selezionata la coca cola`);
    
    }else if (bevandaScelta == 3){
    
    console.log(`è stata selezionata la birra`);
    
    }else{
        alert("Input non valido. Inserisci 1, 2, 3 o il nome della bevanda.")
    }
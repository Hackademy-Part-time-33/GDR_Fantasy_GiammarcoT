let startgame = prompt("GDR FANTASY \n 1 = START\n 2 = ESCI");
let pgname = 0;
let hpmax= 10;
let hp = 10;
let pgarmor = 0;
let pgdamage = 4;
let potion = 0;
let torcia = 0;
let money = 100;
let shop1 = "";



while (startgame != 1 && startgame != 2) {
    startgame = prompt("GDR FANTASY \n 1 = START\n 2 = ESCI");
}

if (startgame == 1) {
    alert("Sei un mercenario ingaggiato per proteggere la figlia del duca nel suo lungo viaggio verso la contea di Orosil dove andrà in sposa al principe degli elfi");
    pgname = prompt("Qual'è il tuo nome?");
    
    alert(pgname + " prima di partire decidi di visitare l'emporio per rifornirti di provviste");
    
    while (shop1.toLowerCase() !== "fine") {
        shop1 = prompt("hai " + money + " monete \n" + "Mercante: Salve " + pgname +  " di cosa hai bisogno? \n (digita il nome dell'oggetto che vuoi acquistare) \n POZIONE = 30 monete \n TORCIA = 20 monete \n SPADA DI FERRO = 60 monete  \n ARMATURA IN CUOIO = 40 MONETE \n digita 'FINE' per andare via");
        
        if (shop1.toLowerCase() === "pozione") {
            if(money < 30){
                alert("Mi spiace ma non hai abbastanza denaro");
            }
            else{
                alert("Mercante: grazie! Desideri altro?");
                potion++;
                money -= 30;
            }
        } else if (shop1.toLowerCase() === "torcia") {
            if(money < 20){
                alert("Mi spiace" + pgname + "ma non hai abbastanza denaro");
            }
            else{
                alert("grazie! Desideri altro?");
                torcia++;
                money -= 20;
            }
        } else if (shop1.toLowerCase() === "spada di ferro") {
            if(money < 60){
                alert("Mi spiace" + pgname + "ma non hai abbastanza denaro");
            }
            else{
                alert("grazie! Desideri altro?");
                pgdamage += 2;
                money -= 60;
            }
        } else if (shop1.toLowerCase() === "armatura in cuoio") {
            if(money < 40){
                alert("Mi spiace" + pgname + "ma non hai abbastanza denaro");
            }
            else{
                alert("grazie! Desideri altro?");
                pgarmor++;
                money -= 40;
            }
        }
        else if (shop1.toLowerCase() === "fine") {
            alert("Mercante: A presto! " +pgname);
        }
    }
    
    alert("Finiti i preparativi, il vostro viaggio inizia. Alle spalle la città non è che un puntino lontano, mentre davanti a voi si apre un mondo di avventure e pericoli sconosciuti");
    
    alert("Vi accampate per la notte in una radura cullata da un tiepido vento, ma prima di abbandonarvi al sonno notate svariati occhi che vi fissano dall'oscurità")
    
    alert("Lupi! Pronti a combattere!");
    
    let wolfhp = 12;
    let wolfdamage = 2;
    
    while (wolfhp > 0) {
        let fight = prompt(pgname + "  [HP = " + hp + "/" + hpmax + "  Danni = " + pgdamage + "  armatura = " + pgarmor + "]" + "\nLupo [HP = " + wolfhp + "]" + "\n 1 = ATTACCA   2 = POZIONE   3 =  FUGA");
        
        if (fight == 1) {
            let hit = Math.random();
            let miss = 0.2;
            if(hit > miss){
                alert("Hai inflitto " + pgdamage + " danni al Lupo");
                wolfhp -= 0;
            }
            else{
                alert("hai mancato il bersaglio");
            }
            hit = Math.random();
            miss = 0.5;
            if(hit > miss){
                alert("Lupo ti attacca infliggendoti " + wolfdamage + " danni");
                hp-= wolfdamage
            }
            else{
                alert("Lupo ha mancato il bersaglio");
            }
            if(wolfhp <= 0){ alert("Hai sconfitto il lupo!");
            break;
        }
        if (hp <= 0) {
            alert("GAME OVER");
            break;
        }
    }
    else if (fight ==2){
        hp += 3;
    }
    else if (fight ==3){
        let runaway = Math.random();
        let missrunaway = 0.5;
        if(runaway < missrunaway){
            alert("I lupi vi sbarrano la strada");
        }
        else{
            alert("Siete riusciti a fuggire");
            break;
        }
    }
    else {     
    }
}
alert("Siete riusciti ad avere la meglio sui lupi. Dopo una tranquilla notte di riposo vi rimettete in cammino")
}
else {
    alert("Riposa guerriero...ma ricorda che il regno ha bisogno di te!");
}


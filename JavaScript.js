/* ID */
let Rouge = document.getElementById("Rouge");
let Cyan = document.getElementById("Cyan");
let Vert = document.getElementById("Vert");
let Jaune = document.getElementById("Jaune");
let Violet = document.getElementById("Violet");
let Gris = document.getElementById("Gris");

let Test = document.getElementById("Test");
let PV = document.getElementById("pv-chasseur");
let Alea = document.getElementById("alea");

let nbPV = 5;
let couleur = ["Rouge","Cyan","Vert","Jaune","Violet","Gris"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/* 
Couleur Noir = #000000
Couleur Blanc = #FFFFFF

*/

function alea(){
    let nb = getRandomInt(couleur.length-1);
    let c = couleur[nb];
    switch(c) {
        case "Rouge":
            Test.style.backgroundColor = "red";
            break;
        case "Cyan":
            Test.style.backgroundColor = "cyan";
            break;
        case "Vert":
            Test.style.backgroundColor = "greenyellow";
            break;
        case "Jaune":
            Test.style.backgroundColor = "yellow";
            break;
        case "Violet":
            Test.style.backgroundColor = "plum";
            break;
        case "Gris":
            Test.style.backgroundColor = "grey";
            break;
        default:
            Test.style.backgroundColor = "white";
    }
}

Alea.addEventListener('click', function() {
    if(couleur.length > 0 && nbPV > 0 && Test.style.backgroundColor == "white"){
        let val = alea();
        Test.style.backgroundColor = val;
    }
    if(couleur.length == 0) {
        alert("Le chat à gagner !!!");
    }
    if(nbPV == 0){
        alert("Les souris ont gagner !!!");
    }
})

/* Click de la souris */

Rouge.addEventListener('click', function() {
    if(Test.style.backgroundColor == "red"){
        Test.style.backgroundColor = "white";
        Rouge.style.backgroundColor = "black";
        Rouge.style.color = "red";
    }
    else {
        if(nbPV > 0 && Test.style.backgroundColor != "white" && Rouge.style.backgroundColor != "black"){
            nbPV--;
            PV.innerHTML = "Nombre de vie : "+nbPV;
            Test.style.backgroundColor = "white";
        }
        Test.style.backgroundColor = "white";
    }
});

Cyan.addEventListener('click', function() {
    if(Test.style.backgroundColor == "cyan"){
        Test.style.backgroundColor = "white";
        Cyan.style.backgroundColor = "black";
        Cyan.style.color = "cyan";
    }
    else {
        if(nbPV > 0 && Test.style.backgroundColor != "white" && Cyan.style.backgroundColor != "black"){
            nbPV--;
            PV.innerHTML = "Nombre de vie : "+nbPV;
            Test.style.backgroundColor = "white";
        }
        Test.style.backgroundColor = "white";
    }
});

Vert.addEventListener('click', function() {
    if(Test.style.backgroundColor == "greenyellow"){
        Test.style.backgroundColor = "white";
        Vert.style.backgroundColor = "black";
        Vert.style.color = "greenyellow";
    }
    else {
        if(nbPV > 0 && Test.style.backgroundColor != "white" && Vert.style.backgroundColor != "black"){
            nbPV--;
            PV.innerHTML = "Nombre de vie : "+nbPV;
            Test.style.backgroundColor = "white";
        }
        Test.style.backgroundColor = "white";
    }
});

Jaune.addEventListener('click', function() {
    if(Test.style.backgroundColor == "yellow"){
        Test.style.backgroundColor = "white";
        Jaune.style.backgroundColor = "black";
        Jaune.style.color = "yellow";
        
    }
    else {
        if(nbPV > 0 && Test.style.backgroundColor != "white" && Jaune.style.backgroundColor != "black"){
            nbPV--;
            PV.innerHTML = "Nombre de vie : "+nbPV;
            Test.style.backgroundColor = "white";
        }
        Test.style.backgroundColor = "white";
    }
});

Violet.addEventListener('click', function() {
    if(Test.style.backgroundColor == "plum"){
        Test.style.backgroundColor = "white";
        Violet.style.backgroundColor = "black";
        Violet.style.color = "plum";
    }
    else {
        if(nbPV > 0 && Test.style.backgroundColor != "white" && Violet.style.backgroundColor != "black"){
            nbPV--;
            PV.innerHTML = "Nombre de vie : "+nbPV;
            Test.style.backgroundColor = "white";
        }
        Test.style.backgroundColor = "white";
    }
});

Gris.addEventListener('click', function() {
    if(Test.style.backgroundColor == "grey"){
        Test.style.backgroundColor = "white";
        Gris.style.backgroundColor = "black";
        Gris.style.color = "grey";
    }
    else {
        if(nbPV > 0 && Test.style.backgroundColor != "white" && Gris.style.backgroundColor != "black"){
            nbPV--;
            PV.innerHTML = "Nombre de vie : "+nbPV;
            Test.style.backgroundColor = "white";
        }
        Test.style.backgroundColor = "white";
    }
});


/* Pour la touche du clavier */
/* Revoir les else car ils sont mal fait */

/* Rouge */
document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    if (nomTouche === 'a' && Test.style.backgroundColor == "red") {
        if(Rouge.style.backgroundColor == "red"){
            nbPV--;
            PV.innerHTML = "Nombre de vie : "+nbPV;
        }
        Test.style.backgroundColor = "white";
    }
    else {
        if(nomTouche === 'a' && Test.style.backgroundColor != "red"){
            Test.style.backgroundColor = "white";
            Rouge.style.backgroundColor = "black";
            Rouge.style.color = "red";
        }
    }
}, false);

/**
 * Cyan
 */
document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    if (nomTouche === 'q' && Test.style.backgroundColor == "cyan") {
        if(Cyan.style.backgroundColor == "cyan"){
            nbPV--;
            PV.innerHTML = "Nombre de vie : "+nbPV;
        }
        Test.style.backgroundColor = "white";
    }
    else {
        if(nomTouche === 'q' && Test.style.backgroundColor != "cyan"){
            Test.style.backgroundColor = "white";
            Cyan.style.backgroundColor = "black";
            Cyan.style.color = "cyan";
        }
    }
}, false);

/**
 * Vert
 */
document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    if (nomTouche === 's' && Test.style.backgroundColor == "greenyellow") {
        if(Vert.style.backgroundColor == "greenyellow"){
            nbPV--;
            PV.innerHTML = "Nombre de vie : "+nbPV;
        }
        Test.style.backgroundColor = "white";
    }
    else {
        if(nomTouche === 's' && Test.style.backgroundColor != "greenyellow"){
            Test.style.backgroundColor = "white";
            Vert.style.backgroundColor = "black";
            Vert.style.color = "greenyellow";
        }
    }
}, false);

/**
 * Jaune
 */
document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    if (nomTouche === 'l' && Test.style.backgroundColor == "yellow") {
        if(Jaune.style.backgroundColor == "yellow"){
            nbPV--;
            PV.innerHTML = "Nombre de vie : "+nbPV;
        }
        Test.style.backgroundColor = "white";
    }
    else {
        if(nomTouche === 'l' && Test.style.backgroundColor != "yellow"){
            Test.style.backgroundColor = "white";
            Jaune.style.backgroundColor = "black";
            Jaune.style.color = "yellow";
        }
    }
}, false);


/**
 * Violet
 */
document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    if (nomTouche === 'p' && Test.style.backgroundColor == "plum") {
        if(Violet.style.backgroundColor == "plum"){
            nbPV--;
            PV.innerHTML = "Nombre de vie : "+nbPV;
        }
        Test.style.backgroundColor = "white";
    }
    else {
        if(nomTouche === 'p' && Test.style.backgroundColor != "plum"){
            Test.style.backgroundColor = "white";
            Violet.style.backgroundColor = "black";
            Violet.style.color = "plum";
        }
    }
}, false);

/**
 * Gris
 */
document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    if (nomTouche === 'm' && Test.style.backgroundColor == "grey") {
        if(Gris.style.backgroundColor == "grey"){
            nbPV--;
            PV.innerHTML = "Nombre de vie : "+nbPV;
        }
        Test.style.backgroundColor = "white";
    }
    else {
        if(nomTouche === 'm' && Test.style.backgroundColor != "grey"){
            Test.style.backgroundColor = "white";
            Gris.style.backgroundColor = "black";
            Gris.style.color = "grey";
        }
    }
}, false);
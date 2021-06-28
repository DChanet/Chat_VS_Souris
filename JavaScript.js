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
        for (let i = couleur.length-1; i>=0; i--){
            if(couleur[i] == "Rouge"){
                couleur.splice(i,1);
            }
        }
        Test.style.backgroundColor = "white";
        Rouge.style.backgroundColor = "black";
    }
});

Cyan.addEventListener('click', function() {
    if(Test.style.backgroundColor == "cyan"){
        for (let i = couleur.length-1; i>=0; i--){
            if(couleur[i] == "Cyan"){
                couleur.splice(i,1);
            }
        }
        Test.style.backgroundColor = "white";
        Cyan.style.backgroundColor = "black";
    }
});

Vert.addEventListener('click', function() {
    if(Test.style.backgroundColor == "greenyellow"){
        for (let i = couleur.length-1; i>=0; i--){
            if(couleur[i] == "Vert"){
                couleur.splice(i,1);
            }
        }
        Test.style.backgroundColor = "white";
        Vert.style.backgroundColor = "black";
    }
});

Jaune.addEventListener('click', function() {
    if(Test.style.backgroundColor == "yellow"){
        for (let i = couleur.length-1; i>=0; i--){
            if(couleur[i] == "Jaune"){
                couleur.splice(i,1);
            }
        }
        Test.style.backgroundColor = "white";
        Jaune.style.backgroundColor = "black";
    }
});

Violet.addEventListener('click', function() {
    if(Test.style.backgroundColor == "plum"){
        for (let i = couleur.length-1; i>=0; i--){
            if(couleur[i] == "Violet"){
                couleur.splice(i,1);
            }
        }
        Test.style.backgroundColor = "white";
        Violet.style.backgroundColor = "black";
    }
});

Gris.addEventListener('click', function() {
    if(Test.style.backgroundColor == "grey"){
        for (let i = couleur.length-1; i>=0; i--){
            if(couleur[i] == "Gris"){
                couleur.splice(i,1);
            }
        }
        Test.style.backgroundColor = "white";
        Gris.style.backgroundColor = "black";
    }
});


/* Pour la touche du clavier */
/* Rouge */
document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    if (nomTouche === 'a' && Test.style.backgroundColor == "red") {
        nbPV--;
        PV.innerHTML = "Nombre de vie : "+nbPV;
        Test.style.backgroundColor = "white";
    }
}, false);

/**
 * Cyan
 */
document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    if (nomTouche === 'q' && Test.style.backgroundColor == "cyan") {
        nbPV--;
        PV.innerHTML = "Nombre de vie : "+nbPV;
        Test.style.backgroundColor = "white";
    }
}, false);

/**
 * Vert
 */
document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    if (nomTouche === 's' && Test.style.backgroundColor == "greenyellow") {
        nbPV--;
        PV.innerHTML = "Nombre de vie : "+nbPV;
        Test.style.backgroundColor = "white";
    }
}, false);

/**
 * Jaune
 */
document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    if (nomTouche === 'l' && Test.style.backgroundColor == "yellow") {
        nbPV--;
        PV.innerHTML = "Nombre de vie : "+nbPV;
        Test.style.backgroundColor = "white";
    }
}, false);


/**
 * Violet
 */
document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    if (nomTouche === 'p' && Test.style.backgroundColor == "plum") {
        nbPV--;
        PV.innerHTML = "Nombre de vie : "+nbPV;
        Test.style.backgroundColor = "white";
    }
}, false);

/**
 * Gris
 */
document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    if (nomTouche === 'm' && Test.style.backgroundColor == "grey") {
        nbPV--;
        PV.innerHTML = "Nombre de vie : "+nbPV;
        Test.style.backgroundColor = "white";
    }
}, false);
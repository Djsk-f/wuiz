// ----- déclaration de nos balises sur javascript -----

const quest = document.getElementById('question');
const vrai = document.getElementById('vrai');
const faux = document.getElementById('faux');
const point = document.getElementById('point');

// Nos variables javascript

let answer = [
    {question:"1 est plus grand que 2", response:"faux"},
    {question:"ma tante est la soeur de ma mère", response:"vrai"},
    {question:"la terre tourne autour de la lune", response:"faux"},
    {question:"Yaounde est la capitale du cameroun", response:"vrai"},
    {question:"la france se trouve en Asie", response:'faux'},

];

let nbr_point = 0;
let nombre = 0;
const je_joue = true;


// FONCTION du JEU 

function games() {
    if (je_joue == true) {
        
        nombre = parseInt(Math.random() * (5 - 0) + 0);
        console.log(nombre);
        quest.textContent = answer[nombre].question;
       
    }
}

// EVENEMENTS SUR LES BOUTONS 

// click sur vrai

vrai.addEventListener("click", ()=>{

    if (vrai.textContent === answer[nombre].response) {
        
        games();
        nbr_point++;
        point.textContent = nbr_point
    }
    else{

        alert('Vous avez perdu !!!');
    }
})

// click sur faux

faux.addEventListener("click", ()=>{

    if (faux.textContent === answer[nombre].response) {
        
        games();
        nbr_point++;
        point.textContent = nbr_point
    }
    else{

        alert('Vous avez perdu !!!');
        window.addEventListener("load", games());
    }
})





// notre fonction doit etre charger au chargement de notre page web

window.addEventListener("load", games());
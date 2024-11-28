let counterPc = document.querySelector('#counterPc')
let counterUser = document.querySelector('#counterUser')
let StartBtn = document.querySelector('#StartBtn')
let resetBtn = document.querySelector('#resetBtn')

let cardPlayer = document.querySelectorAll("#wrapperCardUser > .card")
let cardPc = document.querySelectorAll("#wrapperCardPc > .card")

// let sassoUser = document.querySelector('#sassoUser')
// let cartaUser = document.querySelector('#cartaUser')
// let forbiceUser = document.querySelector('#forbiceUser')

// let sassoPc = document.querySelector('#sassopc')
// let cartaPc = document.querySelector('#cartaPc')
// let forbiciPc = document.querySelector('#forbiciPc')


//! MODAL FUNCTION
// let userNameDisplay = document.querySelector('div.d-flex > h5:nth-of-type(2)'); // Selettore per il display del nome
let userNameDisplay = document.querySelector('#userNameDisplay');
let nameModal = new bootstrap.Modal(document.getElementById('nameModal')); // Crea una nuova istanza della modale di Bootstrap
let userNameInputModal = document.querySelector('#userNameInputModal'); // Selettore per l'input nella modale
let confirmNameBtn = document.querySelector('#confirmNameBtn'); // Bottone di conferma nella modale

// Funzione per aprire la modale quando viene cliccato "NUOVA PARTITA"
resetBtn.addEventListener("click", () => {
    if (selectedCardUser != "") {
        return;
    }
    // Apre la modale
    nameModal.show();
});

// Funzione per confermare il nome utente
confirmNameBtn.addEventListener('click', () => {
    // Prendi il nome inserito nella modale
    let userName = userNameInputModal.value.trim();
    
    // Se il nome non è vuoto, aggiorna il display con il nuovo nome
    if (userName !== "") {
        userNameDisplay.innerText = `Score ${userName}`;
    }

    // Nasconde la modale
    nameModal.hide();
    
    // Reset del gioco
    resetGame();
});

// Funzione per resettare il punteggio e ripartire
function resetGame() {
    counterPc.innerText = "0";
    scorePc = 0;
    counterUser.innerText = "0";
    scoreUser = 0;
}

//! fine modal function















let selectedCardPc = ""
let selectedCardUser = ""


//todo RANDOMIZZAZIONE SCELTA USER
function selectCard(){
    cardPlayer.forEach((el)=>{
        el.addEventListener("click",()=>{
            selectedCardUser=el.id;
            cardPlayer.forEach((card)=>{
                if (card.id !== selectedCardUser) {
                    card.classList.add("d-none")
                }
            })
        })
    })
}
selectCard()



//todo RANDOMIZZAZIONE SCELTA PC
function randomCardpc(){

    let random = Math.floor(Math.random()*cardPc.length);
    selectedCardPc= cardPc[random].id
    cardPc.forEach((card)=>{
        if (card.id !== selectedCardPc) {
            card.classList.add("d-none")
        }
        if (card.id == selectedCardPc) {
            card.children[0].classList.remove("d-none")
            card.children[1].classList.remove("d-none")
        }
    })
}



let scorePc = 0 
let scoreUser = 0

// todo SET WINNER

timout=false

StartBtn.addEventListener('click', ()=>{
    
    StartBtn.disabled = true;

  setTimeout(() => {
    StartBtn.disabled = false;
  }, 1500);

    if(selectedCardUser == ""){
        return
    }

    randomCardpc();
    if(selectedCardUser === selectedCardPc){
        console.log(`Pareggio: ${selectedCardUser} contro: ${selectedCardPc}`)
        
    }else if( 
        selectedCardUser === "sasso" && selectedCardPc === "forbice" ||
        selectedCardUser === "carta" && selectedCardPc === "sasso" ||
        selectedCardUser === "forbice" && selectedCardPc === "carta"
    ) {
        console.log(`Utente vince con ${selectedCardUser} contro: ${selectedCardPc}`);
        scoreUser++;
        counterUser.innerText=scoreUser;

    }else{
        console.log(`PC vince con ${selectedCardPc} contro ${selectedCardUser}`);
        scorePc++;
        counterPc.innerText=scorePc;
    }
    resetCardsWithTimeout()
});

function resetCardsWithTimeout() {
    setTimeout(() => {
      resetcards();
    }, 1500);
  }




//todo FUNZIONE PER PULIRE E RESETTARE LE CARD

function resetcards() {
    selectedCardUser = ""
    cardPlayer.forEach((el)=>{
        el.classList.remove("d-none")
    })
    cardPc.forEach((el)=>{
        el.children[0].classList.add("d-none")
        el.children[1].classList.add("d-none")
        el.classList.remove("d-none")
    })
}




function resetGame() {
    counterPc.innerText = "0"
    scorePc = 0
    counterUser.innerText = "0"
    scoreUser = 0
}
resetBtn.addEventListener("click", ()=>{
    if (selectedCardUser != "") {
        return
    }
    resetGame();
})












// sassoUser.addEventListener("click", scegliSasso, true);
// cartaUser.addEventListener("click", scegliCarta, true);
// forbiceUser.addEventListener("click", scegliForbice, true);

// let scelta;


// function scegliSasso() 
// {
//     scelta = "sasso";
// }

// function scegliCarta() 
// {
//     scelta = "carta";
// }

// function scegliForbice() 
// {
//     scelta = "forbice";
// }





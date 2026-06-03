// --- QUIZ ---
const quiz = [
    { question: "Qual prática ajuda a cuidar do planeta?", options: ["Plantar árvores", "Jogar lixo na rua", "Poluir rios"], answer: 0 },
];

let quizIndex = 0;

function loadQuiz() {
    document.getElementById("quiz-question").textContent = quiz[quizIndex].question;
    document.getElementById("quiz-feedback").textContent = "";
}

function checkAnswer(option) {
    const feedback = document.getElementById("quiz-feedback");
    if(option === quiz[quizIndex].answer){
        feedback.textContent = "✅ Correto!";
    } else {
        feedback.textContent = "❌ Tente novamente!";
    }
}

loadQuiz();

// --- MEMORY GAME ---
const memoryValues = ["🌳","🌿","🍀","🌼","🌳","🌿","🍀","🌼"];
let memoryBoard = document.getElementById("memory-board");
let firstCard = null, secondCard = null;
let lockBoard = false;

memoryValues.sort(() => 0.5 - Math.random());

memoryValues.forEach(symbol => {
    let card = document.createElement("div");
    card.classList.add("memory-card");
    card.dataset.symbol = symbol;
    card.textContent = "";
    card.addEventListener("click", flipCard);
    memoryBoard.appendChild(card);
});

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;
    this.textContent = this.dataset.symbol;

    if(!firstCard){
        firstCard = this;
        return;
    }
    secondCard = this;
    if(firstCard.dataset.symbol === secondCard.dataset.symbol){
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        firstCard = null;
        secondCard = null;
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.textContent = "";
            secondCard.textContent = "";
            firstCard = null;
            secondCard = null;
            lockBoard = false;
        }, 1000);
    }
}

// --- TRASH GAME ---
const items = document.querySelectorAll(".item");
const bins = document.querySelectorAll(".bin");
let correctCount = 0;

items.forEach(item => {
    item.addEventListener("dragstart", dragStart);
});

bins.forEach(bin => {
    bin.addEventListener("dragover", dragOver);
    bin.addEventListener("drop", dropItem);
});

let dragged;

function dragStart(e){
    dragged = e.target;
}

function dragOver(e){
    e.preventDefault();
}

function dropItem(e){
    const type = e.target.dataset.type;
    if(dragged.dataset.type === type){
        e.target.appendChild(dragged);
        correctCount++;
        document.getElementById("trash-feedback").textContent = "✅ Corretamente reciclado!";
    } else {
        document.getElementById("trash-feedback").textContent = "❌ Coloque no lugar correto!";
    }
}

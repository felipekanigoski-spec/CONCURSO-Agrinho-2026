/* ==========================
   CONTADOR ANIMADO
========================== */

const counters = document.querySelectorAll(".number");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

let target = +entry.target.dataset.target;
let count = 0;

let update = () => {

let increment = target / 100;

count += increment;

if(count < target){

entry.target.innerText =
Math.floor(count);

requestAnimationFrame(update);

}else{

entry.target.innerText = target;
}

};

update();

observer.unobserve(entry.target);

}

});

});

counters.forEach(counter=>{
observer.observe(counter);
});


/* ==========================
   FLAPPY SPACE AGRINHO
========================== */

const canvas =
document.getElementById("gameCanvas");

const ctx =
canvas.getContext("2d");

let bird;
let pipes;
let score;
let bestScore = localStorage.getItem("recorde") || 0;
let gameRunning = false;

function resetGame(){

bird = {
x:80,
y:250,
radius:16,
velocity:0
};

pipes = [];
score = 0;

document.getElementById("score").innerHTML =
`Pontuação: ${score} | Recorde: ${bestScore}`;
}

function startGame(){

resetGame();
gameRunning = true;

requestAnimationFrame(gameLoop);
}

function jump(){

if(gameRunning){
bird.velocity = -8;
}

}

document.addEventListener("keydown", e=>{

if(e.code === "Space"){
jump();
}

});

canvas.addEventListener("click", jump);

function createPipe(){

let gap = 180;

let topHeight =
Math.random() * 250 + 50;

pipes.push({
x:canvas.width,
top:topHeight,
bottom:topHeight + gap,
passed:false
});

}

setInterval(()=>{

if(gameRunning){

createPipe();

}

},1800);

function update(){

bird.velocity += 0.45;
bird.y += bird.velocity;

if(
bird.y > canvas.height ||
bird.y < 0
){
endGame();
}

pipes.forEach(pipe=>{

pipe.x -= 4;

if(

bird.x + bird.radius > pipe.x &&
bird.x - bird.radius < pipe.x + 60 &&

(
bird.y - bird.radius < pipe.top ||
bird.y + bird.radius > pipe.bottom
)

){

endGame();

}

if(
!pipe.passed &&
pipe.x < bird.x
){

pipe.passed = true;
score++;

if(score > bestScore){

bestScore = score;
localStorage.setItem(
"recorde",
bestScore
);

}

document.getElementById("score").innerHTML =
`Pontuação: ${score} | Recorde: ${bestScore}`;
}

});

pipes =
pipes.filter(pipe => pipe.x > -60);

}

function draw(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

/* Nave */

ctx.fillStyle="#00ffcc";

ctx.beginPath();

ctx.arc(
bird.x,
bird.y,
bird.radius,
0,
Math.PI*2
);

ctx.fill();

/* Brilho */

ctx.shadowColor="#00ffcc";
ctx.shadowBlur=20;

ctx.fill();

/* Obstáculos */

ctx.shadowBlur=0;
ctx.fillStyle="#4ade80";

pipes.forEach(pipe=>{

ctx.fillRect(
pipe.x,
0,
60,
pipe.top
);

ctx.fillRect(
pipe.x,
pipe.bottom,
60,
canvas.height
);

});

}

function endGame(){

gameRunning = false;

ctx.fillStyle="white";
ctx.font="32px Arial";

ctx.fillText(
"Fim de Jogo",
105,
280
);

ctx.font="20px Arial";

ctx.fillText(
"Clique em Iniciar",
110,
320
);

}

function gameLoop(){

if(!gameRunning){
return;
}

update();
draw();

requestAnimationFrame(gameLoop);

}

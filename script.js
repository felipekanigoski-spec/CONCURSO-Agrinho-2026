const c = document.getElementById("game");
const ctx = c.getContext("2d");

let bird = { y: 200, v: 0 };
let pipes = [];
let score = 0;
let game = true;

function createPipe(){
pipes.push({ x: 300, h: Math.random()*200+50 });
}

setInterval(()=>{
if(game) createPipe();
},1500);

document.addEventListener("keydown", e=>{
if(e.code === "Space"){
bird.v = -6;
}
});

function loop(){

ctx.clearRect(0,0,300,500);

/* gravidade */
bird.v += 0.3;
bird.y += bird.v;

/* jogador */
ctx.fillStyle="#00ffcc";
ctx.fillRect(50,bird.y,20,20);

/* tubos */
pipes.forEach(p=>{
p.x -= 2;

ctx.fillStyle="#4ade80";
ctx.fillRect(p.x,0,40,p.h);
ctx.fillRect(p.x,p.h+100,40,500);

/* pontuação */
if(p.x === 50) score++;

/* colisão */
if(
50 > p.x && 50 < p.x+40 &&
(bird.y < p.h || bird.y > p.h+100)
){
game = false;
}
});

/* score */
document.getElementById("score").innerText = score;

/* loop */
if(game) requestAnimationFrame(loop);
else ctx.fillText("Game Over",100,250);
}

loop();

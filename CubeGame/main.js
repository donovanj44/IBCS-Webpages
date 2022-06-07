const canvas = document. getelementByLd ('game');
const ctx = canvas .getContext ('2d');
let score;
let highScore;
let player;
let gravity;
let obstacles = [];
let gamespeed;
let keys = [];
let scoreText;
let highScoreText;
class Player{
    constructor (x, y, w, h, c){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.c=c;
    this.dy=0;
    this.jumpForce=15;
    this.originalHeight = h;
    }
Draw(){
    ctx.beginPath ()
    ctx.fillStyle = this.c
    ctx. fillRect (this .x, this . y, this .W, this .h) ;
    ctx.closePath () ;
    }
}
function Start (){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.font = "20px sans-serif";
    gameSpeed = 3;
    gravity = 1;
    score = 0;
    highscore = 0;
    player = new Player(25, canvas . height-150, 50, 50, '#FF5858');
    player.Draw();
}
Start();

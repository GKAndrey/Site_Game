import Game from "./modules/Game.js";
const receivedData = localStorage.getItem('playerInfo');

const game = new Game();
 
game.giveMap("1")

document.addEventListener('keydown', (event) => {
    if (event.code == "KeyW" || event.code == "ArrowUp") {
        game.up = 1
    };
    if (event.code == "KeyS" || event.code == "ArrowDown") {
        game.down = 1
    };
    if (event.code == "KeyA" || event.code == "ArrowLeft") {
        game.left = 1
    };
    if (event.code == "KeyD" || event.code == "ArrowRight") {
        game.right = 1
    };
    if (event.code == "Escape"){
        game.exit = 1
    }
    // game.walkMap()
});
document.addEventListener('keyup', (event) => {
    console.log(event)
    if (event.code == "KeyW" || event.code == "ArrowUp") {
        game.up = 0
    };
    if (event.code == "KeyS" || event.code == "ArrowDown") {
        game.down = 0
    };
    if (event.code == "KeyA" || event.code == "ArrowLeft") {
        game.left = 0
    };
    if (event.code == "KeyD" || event.code == "ArrowRight") {
        game.right = 0
    };
    if (event.code == "Escape"){
        game.exit = 0
    }
    // game.walkMap()
});

  window.addEventListener('beforeunload', (event) => {
    game.restartMap()
    event.preventDefault();
    event.returnValue = '';
  });

window.addEventListener("mousewheel", function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
        return false;
    }
}); 

function mainLoop(){
    game.walkMap()
    if (game.exit == 1) { 
        setTimeout(mainLoop, 200);
    } else{
        setTimeout(mainLoop, 10);
    }
}
mainLoop()
import Sprite from './sprite.js';
class Game{
    constructor(){
        this.hero = {
            x: 0,
            y: 0,
            heals: 3,
            speed: 2,
            collision: [0,0,0,0],
            imgPath: "../../../static/sprite/hero/hero.png"
        }

        this.pause = false

        let body = document.querySelector('body')
        this.yBody = body.getBoundingClientRect().bottom
        this.xBody = body.getBoundingClientRect().right
        console.log(this.xBody, this.yBody)

        this.menu = document.querySelector(".menu");
        this.menu.classList.add("hide");
        let obgMenuTxt = document.createElement("p");
        obgMenuTxt.textContent  = "Пауза";
        obgMenuTxt.classList.add("mainP", "txt");
        this.menu.appendChild(obgMenuTxt);

        this.game = document.querySelector(".game");
        this.maps = document.createElement("div");
        this.maps.classList.add("map");
        this.game.appendChild(this.maps);

        this.map1 = ["2222222222222222222221111111111111111111111".split(''),
                    "1111111111111111111111000000000001000000001".split(''), 
                    "1011110000010000000001010000000101000000001".split(''),
                    "1000000111010000000001000000000001000000001".split(''),
                    "1011101101011111110001000000000001001110001".split(''),
                    "1000100001010000000001010000000101000010001".split(''),
                    "1011110111111111110001000000000001000010001".split(''),
                    "1010000000000100030001111113111111110010001".split(''),
                    "1011111111110101111001000000000000000010001".split(''),
                    "1010000000010100001001000000000000000010001".split(''),
                    "1000010111010111011001000000000000000010001".split(''),
                    "1101110001010100001001111111111111111111311".split(''),
                    "1101011111010100001000000000000000000000001".split(''),
                    "1001000000010000001000000000000000000000001".split(''),
                    "1111113111111111111111111111111111111110001".split(''),
                    "1000000001010000001222222222222222222210001".split(''),
                    "1000000001010000001222222222222222222210001".split(''),
                    "1000001111010000001222222222222222222210001".split(''),
                    "1000000000011311131111111111111111111111101".split(''),
                    "1000001111110001000000000001000000000000101".split(''),
                    "1000000000000001000000000003010000000000101".split(''),
                    "1000000000000001000000000001011111111110101".split(''),
                    "1111111111111111131113111111010001100010101".split(''),
                    "1000000000000000000100010000010000000000101".split(''),
                    "1000000000000000000100010111111111111110101".split(''),
                    "100000000000000000010p010000000000000000101".split(''),
                    "1111111111111111111111111111111111111111111".split(''),];
                    
        this.map2 = ["222222222222222222111111111111111111112222222222222222".split(''),
                    "222222222222222222100000000000000000012222222222222222".split(''),
                    "222222222222222222100000000000000000012222222222222222".split(''),
                    "222222222222222222100000000000000000012222222222222222".split(''),
                    "222222221111111111100000000000000000012222222222222222".split(''),
                    "222222221000000000100000000000000000012222222222222222".split(''),
                    "222222221000000000100000000000000000012222222222222222".split(''),
                    "222222221000000000100000000000000000012222222222222222".split(''),
                    "222222221000000000100000000000000000012222222222222222".split(''),
                    "222222221000000000100000000000000000012222222222222222".split(''),
                    "222222221000000000000000000000000000012222222222222222".split(''),
                    "222222221000000000000000000000000000012222222222222222".split(''),
                    "222222221000000000000000000000000000012222222222222222".split(''),
                    "222222221000000000100000000000000000011111111111222222".split(''),
                    "222222221000000000100000000000000000010000000001222222".split(''),
                    "222222221000000000100000000000000000010000000001222222".split(''),
                    "222222221111111111100000000000000000010000000001111111".split(''),
                    "222222221000000000111100000000000000010000000001000001".split(''),
                    "222222221000000000000100000000000000010000000011000001".split(''),
                    "222211111000000000000100000000000000010000000010000001".split(''),
                    "221100001000000000000100000000000000111000000010000001".split(''),
                    "110000001000000000000100000000000001000100000111000001".split(''),
                    "100000001000000000000010000000000000000000000000000001".split(''),
                    "100000001000000000000010000000000000000000000000000001".split(''),
                    "100000001000000000000000000000000001000100000111000001".split(''),
                    "100000000100000000000000000000000000111000000010000001".split(''),
                    "100000000000000000000000000000000000010000000010000001".split(''),
                    "100000000100000000000010000000000000010000000011001111".split(''),
                    "100000001000000000000010000000000000010000000001001222".split(''),
                    "100000001000000000000100000000000000010000000001001222".split(''),
                    "111000001000000000000100000000000000010000000001001222".split(''),
                    "221100001000000000000100000000000000010000000001001222".split(''),
                    "222211111000000000000100000000000000010000000001111222".split(''),
                    "222222221000000000111100000000000000011111111111222222".split(''),
                    "222222221111111111100000000000000000012222222222222222".split(''),
                    "222222221000000000000000000000000000012222222222222222".split(''),
                    "222222221000000000000000000000000000012222222222222222".split(''),
                    "222222221000000000000000000000000000012222222222222222".split(''),
                    "222222221000000000001111111111111111112222222222222222".split(''),
                    "222222221000000011112222222222222222222222222222222222".split(''),
                    "222222221111111122222222222222222222222222222222222222".split(''),]
    };
    restartMap(){
        this.maps.style.top = this.hero.y + "px";
        this.maps.style.left = this.hero.x + "px";
    };
    giveMap(map){
        if (map == "1"){
            this.listMap = this.map1;
            document.querySelector(".map").id = "map1"
        }else if(map == "2"){
            this.listMap = this.map2;
            document.querySelector(".map").id = "map2"
        }else if(map == "3"){
            this.listMap = this.map3;
            document.querySelector(".map").id = "map3"
        };
        let x = 0;
        let y = 0;
        let cellProver;
        for(let row of this.listMap){
            x = 0;
            for(let cell of row){
                if (cell == "1"){
                    if (map == "1"){
                        let sprt = new Sprite(x,y,"../../../static/sprite/levels/minotaur/wals.png", "wall")
                        sprt.addingSprite("map")
                    }
                }else if (cell == "0"){
                    if (map == "1"){
                        
                        let sprt = new Sprite(x,y,"../../../static/sprite/levels/minotaur/baseGround.png")
                        sprt.addingSprite("map")
                    }
                }else if (cell == "3"){
                    if (map == "1"){
                        if (cellProver == "1"){
                            let sprt = new Sprite(x,y,"../../../static/sprite/levels/minotaur/door.png")
                            sprt.addingSprite("map")
                        }else{
                            let sprt = new Sprite(x,y,"../../../static/sprite/levels/minotaur/door.png", "rotate90")
                            sprt.addingSprite("map")
                        }
                    }
                }else if (cell == "p"){
                    if (map == "1"){
                        let sprt = new Sprite(x,y,"../../../static/sprite/levels/minotaur/baseGround.png")
                        sprt.addingSprite("map")
                        this.hero.sprite = new Sprite(this.xBody / 2 - 32,this.yBody / 2 - 32,this.hero.imgPath)
                        this.hero.sprite.addingHero("game")
                        this.hero.element = document.querySelector(".hero")
                        this.hero.body = this.hero.element.getBoundingClientRect()
                        this.hero.x = Math.round(-x + this.xBody / 2 - 32)
                        this.hero.y = Math.round(-y + this.yBody / 2 - 32)
                    }
                };
                x+=64
                cellProver = cell
            };
            y += 64
        };
        this.restartMap()
        console.log(this.hero);
    };
    walkMap(){
        console.log(1)
        if (this.exit == 1){
            console.log("Pause")
            if (this.pause == false){
                this.pause = true ;
                this.game.classList.add("hide")
                this.menu.classList.remove("hide")
            } else if(this.pause == true ){
                this.pause = false;
                this.game.classList.remove("hide")
                this.menu.classList.add("hide")
            };
        };
        if (this.pause == false){
            let wallsList = document.querySelectorAll(".wall")
            if (this.up == 1) {
                for (let i of wallsList) {
                    let elementRect = i.getBoundingClientRect()

                }
                this.hero.y += this.hero.speed
                this.maps.style.top = `${this.hero.y}px`
            };
            if (this.down == 1) {
                this.hero.y -= this.hero.speed
                this.maps.style.top = `${this.hero.y}px`
                
            };
            if (this.left == 1) {
                    this.hero.x += this.hero.speed
                    this.maps.style.left = `${this.hero.x}px`
            };
            if (this.right == 1) {
                this.hero.x -= this.hero.speed
                this.maps.style.left = `${this.hero.x}px`
            }
        }
    };
};

export default Game;
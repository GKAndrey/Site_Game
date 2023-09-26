class Sprite{
    constructor(x = undefined, y = undefined, imgPath, classNames = undefined, width = 64, height = 64, animState = false){
        this.imgPath = imgPath
        this.width = width
        this.height = height
        this.y = y
        this.x = x
        this.animState = animState
        this.classNames = classNames
    };
    addingSprite(className){
        this.newImg = document.createElement("img")
        this.newImg.className = "imgScale"
        this.newImg.src = this.imgPath
        this.newImg.style.top = this.y + "px"
        this.newImg.style.left = this.x + "px"
        this.newImg.alt = "Map"
        if (this.classNames){
            this.newImg.classList.add(this.classNames)
        }
        document.querySelector(`.${className}`).appendChild(this.newImg)
        // addSprite.classList.add('imgScale')
    };
    addingHero(className){
        this.newImg = document.createElement("img")
        this.newImg.className = "imgScale"
        this.newImg.src = this.imgPath
        this.newImg.classList.add("hero")
        this.newImg.alt = "hero"
        if (this.classNames){
            this.newImg.classList.add(this.classNames)
        }
        this.newImg.style.top = this.y + "px"
        this.newImg.style.left = this.x + "px"
        document.querySelector(`.${className}`).appendChild(this.newImg)
    }
};

export default Sprite;
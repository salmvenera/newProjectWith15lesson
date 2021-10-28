'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector,
    this.height = height,
    this.width = width,
    this.bg = bg,
    this.fontSize = fontSize
}

DomElement.prototype.elemCreate = function () {
    if (this.selector[0] == ".") {
        let onediv = document.createElement("div")
        onediv.classList = this.selector.substring(0, this.selector.length)
        onediv.textContent = "Ну!"
        onediv.style.cssText = 
            "display: inline-block;" +
            "height: " + this.height + "px;" +
            "width: " + this.width + "px;" +
            "background: " + this.bg + ";" +
            "fontSize: " + this.fontSize + "px;" +
            "border: 10px solid;" +
            "padding-top: 100px;" +
            "margin-right: 100px;";
        document.body.append(onediv)   
    } else if (this.selector[0] == "#") {
        let paragraph = document.createElement("p");
        paragraph.id = this.selector.substring(0, this.selector.length);
        paragraph.textContent = "Ага!";
        paragraph.style.cssText = 
            "display: inline-block;" +
            "height: " + this.height + "px;" +
            "width: " + this.width + "px;" +
            "background: " + this.bg + ";" +
            "font-size: " + this.fontSize + "px;" +
            "border: 10px solid;" +
            "padding-top: 100px;";
        document.body.append(paragraph);
    }
}

const color1 = 'green';
const color2 = "red";

const onediv = new DomElement(".div", 100, 150, color1, 70);
const paragraph = new DomElement ("#p", 205, 250, '#ce0085', 40);
onediv.elemCreate();
paragraph.elemCreate();
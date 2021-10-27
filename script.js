'use strict'

const DomElement = function (sel, height, width, bg, fontSize) {
    this.selector = sel,
    this.height = height,
    this.width = width,
    this.bg = bg,
    this.fontSize = fontSize
}

DomElement.prototype.elemCreate = function () {
    
  if (this.selector[0] == ".") {
      let onediv = document.createElement("div")
          onediv.classList = this.selector.substring(0, this.selector.lenght)
          onediv.textContent = "Ну!"
          onediv.style.cssText = 
          "display: inline-block;" +
          "height: 800px;"  + this.height +
          "width: 400px;" + this.width +
          "backgroung: red;" + this.bg +
          "fontSize: " + this.fontSize + "30px;" +
          "border: 10px solid;" +
          "padding-top: 100px;" +
          "margin-right: 100px;" +
          "background-color: blue;" +
           document.body.append(onediv)   
  }
      else if (this.selector[0] == "#") {
          let paragraph = document.createElement("p");
          paragraph.id = this.selector.substring(0, this.selector.length);
          paragraph.textContent = "Ага!";
          paragraph.style.cssText = 
          "display: inline-block;" +
          "height: 800px;"  + this.height +
          "width: 400px;" + this.width +
          "backgroung: red;" + this.bg +
          "fontSize: " + this.fontSize + "30px;" +
          "border: 10px solid;" +
          "padding-top: 100px;" +
          "background-color: yellow;" +
          document.body.append(paragraph);
      }
}
const onediv = new DomElement(".div");
const paragraph = new DomElement ("#p");
onediv.elemCreate();
paragraph.elemCreate();
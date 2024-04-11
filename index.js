const myText = document.getElementById("text");
myText.style.cssText = `height: ${myText.scrollHeight}px; overflow-y: hidden`;

myText.addEventListener("input", function(){
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
});
function clickme(){
let colors = document.querySelector("#color").value;
let hexcode = document.querySelector("#code");
let fontsize = document.querySelector("#text").value;
let messagebox = document.querySelector("#message");

hexcode.textContent = colors;
messagebox.style.color = colors;
messagebox.style.fontSize = fontsize  + "px";

}

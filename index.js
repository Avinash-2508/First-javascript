var randomNumber1 = Math.round(Math.random()*6)
if(randomNumber1 ===0){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src","./images/dice2.png")
}
else if(randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src","./images/dice3.png")
}
else if(randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src","./images/dice4.png")
}
else if(randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src","./images/dice5.png")
}
else if(randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src","./images/dice6.png")
}

// for second image to cahange the picture

var randomNumber2 = Math.round(Math.random()*6)
if(randomNumber2 ===0){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if(randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src","./images/dice2.png")
}
else if(randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src","./images/dice3.png")
}
else if(randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src","./images/dice4.png")
}
else if(randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src","./images/dice5.png")
}
else if(randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src","./images/dice6.png")
}

// To chek who win the game

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins🚩"
}
else if(randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML = "Draw"
}
else{
        document.querySelector("h1").innerHTML = "player 2 wins🚩"
}

var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomImage1 = "./image/dice" + randomNumber1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src", randomImage1)

var randomNumber2 = Math.floor(Math.random() * 6) + 1
var randomImage2 = "./image/dice" + randomNumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src", randomImage2)

if (randomImage1>randomImage2) {
  // document.querySelector("h1").innerHTML = "Player 1 WINS!"
  document.querySelector("h1").innerHTML="Player1 WINS!"

}
else if (randomImage1<randomImage2) {
  document.querySelector("h1").innerHTML = "Player2 WINS!"
}
else {
  document.querySelector("h1").innerHTML="DRAW!"
  
}
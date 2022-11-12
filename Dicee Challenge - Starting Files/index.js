const randomNumber1 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
const randomNumber2 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
document.querySelector(".img1").setAttribute("src", randomNumber1);
document.querySelector(".img2").setAttribute("src", randomNumber2);
if (randomNumber1===randomNumber2){
  document.querySelector('h1').innerHTML='Draw!';
}
else if (randomNumber1>randomNumber2) {
  document.querySelector('h1').innerHTML='player1wins!💲';
}
else {
  document.querySelector('h1').innerHTML='palyer2wins!';
}

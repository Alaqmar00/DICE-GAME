var randomNumber1 = Math.floor(Math.random()* 6) + 1;
var randomNumber2 = Math.floor(Math.random()* 6) + 1;
var image1 = "./images/dice" + randomNumber1 +".png";
var image2 = "./images/dice" + randomNumber2 +".png";
var leftdiceimage = document.querySelector('#leftdice img ');
var rightdiceimage = document.querySelector('#rightdice img');
leftdiceimage.setAttribute("src" , image1);
rightdiceimage.setAttribute("src" , image2);

var heading = document.querySelector("h1");

if(randomNumber1 > randomNumber2)
{
  heading.innerHTML="PLayer 1 Win";
}
else if ( randomNumber2 > randomNumber1) {
  heading.innerHTML="Player 2 Win";
}
else{
  heading.innerHTML="Draw";
}

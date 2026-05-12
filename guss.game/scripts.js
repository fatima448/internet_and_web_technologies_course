"use strict";
const headerContent = document.querySelector(".headercontent");
const refreshField =document.querySelector(".refreshfield");
const refreshBtn =document.querySelector(".refresh")
const hintField = document.querySelector(".hint");
const randomNumberField = document.querySelector(".randomnumber")
const guessNumberField = document.querySelector("#guess");
const guessBtm =document.querySelector(".hint");
const tryField = document.querySelector(".try");
const highScoreField = document.querySelector(".highscore");
const bodyPage = document.querySelector("body");

let randomNumber=Math.floor(Math.random()* 99 +1);
console.log (randomNumber);
let highscore= 0;
let tryNamber =0;
let guessNumber;
guessBtm.addEventListener("click", (event) => {
    event.preventDefault();
    guessNumber =Number(guessNumberField.value);
    tryNamber++;
    tryField.textContent=`Try : ${tryNamber}`;
    if (guessNumber> randomNumber){
        hintField.textContent ="Too High";
    }
    else if (guessNumber< randomNumber){
        hintField.textContent =" Too low";
    }
    else {
        hintField.textContent =" Match";
        headerContent.textContent =" You win";
        bodyPage.style.backgroundColor="green";
        guessBtm.style.backgroundColor " green";
        refreshBtn.style.backgroundColor="green";
        guessBtm.disabled= true;
        if (highscore ==0 || tryNamber < highscore){
            highscore =tryNamber;
            highScoreField.textContent=`Highscore: ${highscore}`
        }
    }
    refreshBtn.addEventListener("click" ,(event) => {
        event.preventDefault();
        randomNumber =Mat.floor(Math.random()*99 + 1);
        console.log(randomNumber);
        tryNamber=0;
        tryField.textContent =`Try: 0`;
        headerContent.textContent=`Can you guess the number between 1-100?`;
        hintField.textContent="...";
        randomNumberField.textContent="?";
        bodyPage.style.backgroundColor = "blueviolet";
        guessBtm.style.backgroundColor="blueviolet";
        refreshBtn.style.backgroundColor="blueviolet";
        guessBtm.disabled=false;
        guessNumberField.value="";
    })
})
const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector(".input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");
let message = document.querySelector(".message");
let scoreContainer = document.querySelector(".score-container"); 
let correctWord, timer;
let score = 0;

const initGame = () => { 
    let randomObj = words [Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for(let i=wordArray.length-1; i>0; i--) {
        // console.log(`i is ${i}`)
        let j = Math.floor(Math.random() * (i+1));
        // console.log(`j is ${j}`)
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLocaleLowerCase();
    inputField.value = "";
    inputField.setAttribute("Maxlength", correctWord.length )
    message.innerHTML = "";
    refreshBtn.classList.add("hide");
    inputField.focus();
}

initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(userWord.length < correctWord.length) {
        message.classList.add("incorrect");
        message.innerHTML = `The word you entered is not long enough - please try again!`;
        inputField.value ="";
        inputField.focus();
        
    }
    else if(userWord !== correctWord) {
        message.classList.add("incorrect");
        message.innerHTML = `The correct spelling is '${correctWord}' - please try again!`;
        inputField.value ="";   
        inputField.focus();
    }
    else{
        message.classList.remove("incorrect");
        message.classList.add("correct");
        message.innerHTML = `Well done - you spelt '${correctWord}' correctly!`;
        refreshBtn.classList.remove("hide");
        score++;
        scoreContainer.innerHTML = score;
    } 
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
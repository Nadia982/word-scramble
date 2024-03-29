const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector(".input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");
message = document.querySelector(".message");

let correctWord, timer;

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
    console.log(randomObj);
}

initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(userWord.length < correctWord.length) {
        message.classList.add("incorrect");
        message.innerHTML = `The word you entered is not long enough - please try again.`;
    }
    else if(userWord !== correctWord) {
        message.classList.add("incorrect");
        message.innerHTML = `The correct spelling is '${correctWord}'`;
    }
    else{
        message.classList.remove("incorrect");
        message.classList.add("correct");
        message.innerHTML = `Well done - you spelled '${correctWord}' correctly.`;
    } 
}

// refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
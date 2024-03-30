const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector(".input"),
readWordBtn = document.querySelector("#read-word-btn"),
readDefBtn = document.querySelector("#read-definition-btn"),
refreshBtn = document.querySelector(".refresh-word"),
voiceSelect = document.querySelector("#voice-select"),
body = document.querySelector("body"),
checkBtn = document.querySelector(".check-word");
let message = document.querySelector(".message");
let scoreContainer = document.querySelector(".score-container"); 
let correctWord, timer, wordDefinition;
let score = 0;

const initGame = () => { 
    
    let randomObj = words [Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for(let i=wordArray.length-1; i>0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.definition;
    correctWord = randomObj.word.toLocaleLowerCase();
    wordDefinition = randomObj.definition.toLocaleLowerCase();
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
        refreshBtn.focus();
        score++;
        scoreContainer.innerHTML = score;
    } 
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

//Initialise SpeechSynthesis API
const synth = window.speechSynthesis;

//Initialise the voices array
let voices = [];

const getVoices = () => {
  voices = synth.getVoices();

  //Loop through voices and create an option for each one
  voices.forEach((voice) => {
    //Create option element for each voice
    const option = document.createElement("option");
    //Fill option with voice and language
    option.textContent = voice.lang + " (" + voice.name + ")";
    //Set required option attributes
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
    option.style.fontSize = "0.9rem";
  });
};

getVoices();

//the following code is required in order to get the voices.
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

//Speak
const speak = (whatToSay) => {
  //Check if already speaking
  if (synth.speaking) {
    // console.log(synth.speaking)
    console.error("Already speaking...");
    return;
  }
  if (correctWord !== "") {
    //Get text to speak
    const speakText = new SpeechSynthesisUtterance(whatToSay);
  
    // speakText.onstart = (e) => {
    //     console.log("Started speaking");
    //   };
    // //Speak end
    // speakText.onend = (e) => {
    //   console.log("Finished speaking");
    // };
    //Speak error
    speakText.onerror = (e) => {
      console.error("Something went wrong");
    };
    //Determining which voice to use to speak
    const selectedVoice = "en-US";

    //Speak
    synth.speak(speakText);
  }
};

//Event listeners
// Text form submission
readWordBtn.addEventListener("click", (e) => {
  speak(correctWord);
});

readDefBtn.addEventListener("click", (e) => {
    speak(wordDefinition);
  });
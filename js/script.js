let maxVolume = 0.4;
let stepSize = 0.05;
const slider = document.querySelector(".volume-input");
const progressBar = document.querySelector(".slider progress");
let sliderValue = document.querySelector(".slider-value");
window.onload = function () {
  slider.oninput = function () {
    progressBar.value = slider.value;
    sliderValue.innerText = `${Math.round(slider.value /maxVolume *100)}%`;
  };

  
};

const scrambledWordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector(".text-input"),
  readWordBtn = document.querySelector("#read-word-btn"),
  readDefBtn = document.querySelector("#read-definition-btn"),
  newWordBtn = document.querySelector(".new-word"),
  voiceSelect = document.querySelector("#voice-select"),
  body = document.querySelector("body"),
  checkBtn = document.querySelector(".check-word"),
  form = document.getElementById("form"),
  homophone = document.querySelector(".homophone"), 
  decreaseVolume = document.querySelector(".decrease-volume"),
  increaseVolume = document.querySelector(".increase-volume");
inputSpan = document.querySelector(".input-span");
let message = document.querySelector(".message");
let resultsSoFar = document.querySelector(".results-so-far");
let totalWords = document.querySelector(".total-words");
let correctWord, timer, wordDefinition;
let score = 0;
let emoji = document.querySelector(".emoji");
let triesLeft = 3;
let userWord;

//***************************** Speech synthesis ********************************** */
//Initialise SpeechSynthesis API
const synth = window.speechSynthesis;

//Initialise the voices array
let voices = [];

const getVoices = () => {
  voices = synth.getVoices();
};

getVoices();

//the following code is required in order to get the voices.
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

//***************************** Speak function ********************************** */
const speak = (whatToSay, whatToSayNext) => {
  //Check if already speaking
  if (synth.speaking) {
    // console.error("Already speaking...");
    return;
  }
  if (correctWord !== "") {
    //Get text to speak
    const speakText = new SpeechSynthesisUtterance(whatToSay, whatToSayNext);

    speakText.onend = () => {
      speak(whatToSayNext);
    };

     speakText.volume = slider.value;
    speakText.rate = 0.8;

  //   decreaseVolume.addEventListener("click", function(e) {
  //     slider.value -= 0.05;
  //     progressBar.value = slider.value;
  //   sliderValue.innerText = `${Math.round(slider.value /maxVolume *100)}%`;
  //   console.log(slider.value);  
  // })
    
  //   increaseVolume.addEventListener("click", function(e) {
  //     slider.value += 0.05;
  //     progressBar.value = slider.value;
  //   sliderValue.innerText = `${Math.round(slider.value /maxVolume *100)}%`;
  //   console.log(slider.value);  
  // })

    //Speak
    slider.addEventListener("change", (e) => {
      synth.cancel();
      speakText.volume = e.target.value;
      synth.speak(speakText);
    });
    synth.speak(speakText);
  }
};

const speakButton = (whatToSay) => {
  //Check if already speaking
  if (synth.speaking) {
    console.error("Already speaking...");
    return;
  }
  if (correctWord !== "") {
    //Get text to speak
    const speakText = new SpeechSynthesisUtterance(whatToSay);
    speakText.volume = slider.value;
    speakText.rate = 0.8;

    //Speak
    slider.addEventListener("change", (e) => {
      synth.cancel();
      speakText.volume = e.target.value;
      synth.speak(speakText);
    });
    synth.speak(speakText);
    // speakText.addEventListener("change", (e) => {speakText.volume = e.target.value;});
  }
};

const initGame = () => {
 
  triesLeft = 3;
  totalWords.innerText = `${words.length}`;
  let randomObj = words[Math.floor(Math.random() * words.length)];

  const scrambleWord = (randomObj) => {
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    if (randomObj.word !== wordArray.join("")) {
      scrambledWordText.innerText = wordArray.join("");
    } else {
      scrambleWord(randomObj);
    }
  };
  scrambleWord(randomObj);

  hintText.innerText = randomObj.definition;
  correctWord = randomObj.word;
  wordDefinition = randomObj.definition;
  inputField.value = "";
  inputSpan.innerText = `Type the correctly spelt word here`;
  inputField.classList.remove("correct");
  inputSpan.classList.remove("correct");
  inputField.setAttribute("Maxlength", correctWord.length + 5);
  message.innerText = "";
  emoji.innerText = "";
  newWordBtn.classList.add("hide");
  inputField.focus();
  checkBtn.classList.remove("hide");
  if (randomObj.spelling_rule === 61) {
    homophone.innerText = `This word is a homophone or near-homophone`;
    homophone.classList.add("highlight");
  } else {
    homophone.innerText = ``;
    homophone.classList.remove("highlight");
  }

  setTimeout(() => {
    speak(correctWord, wordDefinition);
  }, 500);

  //Event listeners
  readWordBtn.addEventListener("click", (e) => {
    readWordBtn.disabled = true;
    setTimeout("readWordBtn.disabled=false", 2000);
    synth.cancel();
    speakButton(correctWord);
  });
  readDefBtn.addEventListener("click", (e) => {
    readDefBtn.disabled = true;
    setTimeout("readDefBtn.disabled=false", 2000);
    synth.cancel();
    speakButton(wordDefinition);
  });
  // speak(correctWord).onend = (event) => {
  //   setTimeout(()=>{speak(wordDefinition)}, event.elapsedTime+1000 );
  // };
};

inputField.addEventListener("input", function () {
  if (inputField.value.length > correctWord.length) {
    message.classList.add("incorrect");
    inputSpan.innerText = `The word contains only ${correctWord.length} letters`;
    inputSpan.classList.add("incorrect");
    inputField.classList.add("incorrect");
  } else if (inputField.value.length <= correctWord.length && triesLeft > 0) {
    message.innerText = ``;
    inputSpan.classList.remove("incorrect");
    inputSpan.innerText = `Type the correctly spelt word here`;
    inputField.classList.remove("incorrect");
  } else {
    inputSpan.classList.remove("incorrect");
    inputField.classList.remove("incorrect");
    inputSpan.innerText = `The word is '${correctWord}' - please type it below to continue.`
  }
});

initGame();

const checkWord = () => {
  synth.cancel();
  // if(randomObj.caseSensitive === true) {
  let userWord = inputField.value.toLowerCase().replace("’","'");
  // } else {
    // let userWord = inputField.value.replace("’","'")
  // }
  if (userWord === ""){return}
  else if (userWord !== correctWord.toLowerCase()) {
    message.classList.add("incorrect");
    triesLeft--;
    if (triesLeft > 1) {
      inputSpan.innerText = `Not quite - please try again! You have ${triesLeft} guesses left.`;
    } else if (triesLeft === 1) {
      inputSpan.innerText = `Not quite - please try again! You have one guess left.`;
    } else {
      inputSpan.innerText = `The word is '${correctWord}' - please type it below to continue.`;
    }

    inputField.classList.add("incorrect");
    inputSpan.classList.add("incorrect");
    inputField.value = "";
    inputField.focus();
  } else {
    let emojis = [
      "&#128175",
      "&#127881",
      "&#127775",
      "&#129504",
      "&#128378",
      "&#128512",
      "&#128513",
      "&#128515",
      "&#128522",
      "&#128526",
      "&#129321",
      "&#129395",
      "&#128570",
      "&#128142",
      "&#128171",
      "&#9971",
      "&#128640",
      "&#128008",
      "&#129351",
      "&#128176",
    ];

    let randomEmojiIndex = Math.floor(Math.random() * emojis.length);
    message.classList.remove("incorrect");
    message.classList.add("correct");
    inputField.classList.add("correct");
    emoji.innerHTML = `${emojis[randomEmojiIndex]}`;
    inputSpan.innerText = `Well done - you spelt '${correctWord}' correctly!`;
    inputSpan.classList.add("correct");
    newWordBtn.classList.remove("hide");
    newWordBtn.focus();
    score++;
    checkBtn.classList.add("hide");
    resultsSoFar.innerText = `${score}`;
  }
};

newWordBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

function processKey(e) {
  if (e.keyCode == 13) {
    checkBtn.click();
    return false;
  }
}
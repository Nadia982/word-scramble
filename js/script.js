const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector(".input"),
  readWordBtn = document.querySelector("#read-word-btn"),
  readDefBtn = document.querySelector("#read-definition-btn"),
  newWordBtn = document.querySelector(".new-word"),
  voiceSelect = document.querySelector("#voice-select"),
  body = document.querySelector("body"),
  checkBtn = document.querySelector(".check-word"),
  form = document.getElementById("form"), 
  homophone = document.querySelector(".homophone");
let message = document.querySelector(".message");
let scoreContainer = document.querySelector(".score-container");
let correctWord, timer, wordDefinition;
let score = 0;
let emoji = document.querySelector(".emoji");

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

const initGame = () => {
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.definition;
  correctWord = randomObj.word;
  wordDefinition = randomObj.definition;
  // correctWord = randomObj.word.toLocaleLowerCase();
  // wordDefinition = randomObj.definition.toLocaleLowerCase();
  inputField.value = "";
  inputField.setAttribute("Maxlength", correctWord.length + 5);
  message.innerHTML = "";
  emoji.innerHTML = "";
  newWordBtn.classList.add("hide");
  inputField.focus();
  checkBtn.classList.remove("hide");
  if (randomObj.spelling_rule === 61){
    homophone.innerHTML = `This word is a homophone`;
    homophone.classList.add("highlight");
  } else {
    homophone.innerHTML = ``;
    homophone.classList.remove("highlight");
  }

  setTimeout(() => {
    speak(correctWord);
  }, 500);
  //speak definition

  if (correctWord.length < 6) {
    setTimeout(() => {
      speak(wordDefinition);
    }, 1800);
  } else if (correctWord.length < 9) {
    setTimeout(() => {
      speak(wordDefinition);
    }, 2400);
  } else {
    setTimeout(() => {
      speak(wordDefinition);
    }, 2800);
  }
};


inputField.addEventListener("input", function () {
  if (inputField.value.length > correctWord.length) {
    message.classList.add("incorrect");
    message.innerHTML = `The word contains only ${correctWord.length} letters`;
  } else if (inputField.value.length <= correctWord.length) {
    message.innerHTML = ``;
  }
});

initGame();

const checkWord = () => {
  synth.cancel();
  let userWord = inputField.value;
  // let userWord = inputField.value.toLocaleLowerCase();
  if (userWord.length < correctWord.length) {
    message.classList.add("incorrect");
    message.innerHTML = `The word you entered is not long enough - please try again!`;
    inputField.value = "";
    inputField.focus();
  }
  else if (userWord !== correctWord) {
    message.classList.add("incorrect");
    message.innerHTML = `Not quite - please try again!`;
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
      "&#127882",
      "&#128176",
    ];
    // emojisVisible = emojis.forEach((emoji) =>(<p>emoji</p>))
    // console.log(emojisVisible);
    let randomEmojiIndex = Math.floor(Math.random() * emojis.length);
    message.classList.remove("incorrect");
    message.classList.add("correct");
    emoji.innerHTML = `${emojis[randomEmojiIndex]}`;
    message.innerHTML = `Well done - you spelt '${correctWord}' correctly!`;
    newWordBtn.classList.remove("hide");
    newWordBtn.focus();
    score++;
    scoreContainer.innerHTML = score;
    checkBtn.classList.add("hide");
  }
};

newWordBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

function processKey(e) {
    // if (null == e)
    //     e = window.e ;
    if (e.keyCode == 13)  {
        checkBtn.click();
        return false;
    }
}
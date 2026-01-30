const statusText = document.getElementById("status");
const resultDiv = document.getElementById("result");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;

function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}

function startListening() {
  statusText.innerText = "Listening...";
  recognition.start();
}

recognition.onresult = (event) => {
  const command = event.results[0][0].transcript.toLowerCase();
  resultDiv.innerText = `You said: "${command}"`;
  handleCommand(command);
};

recognition.onend = () => {
  statusText.innerText = "Click to talk";
};

function handleCommand(command) {
  if (command.includes("hello")) {
    speak("Hello sir, how can I help you?");
  } 
  else if (command.includes("time")) {
    speak(`The time is ${new Date().toLocaleTimeString()}`);
  } 
  else if (command.includes("your name")) {
    speak("I am Jarvis, your voice assistant.");
  } 
  else {
    speak("Sorry, I did not understand that.");
  }
}

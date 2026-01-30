const statusText = document.getElementById("status");
const output = document.getElementById("output");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Use Google Chrome. Speech not supported.");
}

const recognition = new SpeechRecognition();
recognition.lang = "en-US";

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-US";
  window.speechSynthesis.speak(msg);
}

function startListening() {
  statusText.innerText = "Listening...";
  recognition.start();
}

recognition.onresult = (event) => {
  const command = event.results[0][0].transcript.toLowerCase();
  output.innerText = `You said: ${command}`;
  handleCommand(command);
};

recognition.onend = () => {
  statusText.innerText = "Tap and speak";
};

function handleCommand(command) {
  if (command.startsWith("open")) {
    let site = command.replace("open", "").trim();

    if (!site.includes(".")) site += ".com";

    const url = `https://${site}`;
    speak(`Opening ${site}`);
    window.open(url, "_blank");
    return;
  }

  if (command.includes("time")) {
    speak(new Date().toLocaleTimeString());
    return;
  }

  speak("Sorry, I did not understand");
}

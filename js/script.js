function handleCommand(command) {
  if (command.includes("hello")) {
    speak("Hello sir, how can I help you?");
  }

  else if (command.includes("time")) {
    speak(`The time is ${new Date().toLocaleTimeString()}`);
  }

  else if (command.includes("open google")) {
    speak("Opening Google");
    window.open("https://www.google.com", "_blank");
  }

  else if (command.includes("open youtube")) {
    speak("Opening YouTube");
    window.open("https://www.youtube.com", "_blank");
  }

  else if (command.includes("open facebook")) {
    speak("Opening Facebook");
    window.open("https://www.facebook.com", "_blank");
  }

  else if (command.includes("open github")) {
    speak("Opening GitHub");
    window.open("https://www.github.com", "_blank");
  }

  else if (command.includes("open website")) {
    speak("Please say the website name");
  }

  else {
    speak("Sorry, I did not understand that.");
  }
}

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

voices = window.speechSynthesis.getVoices();
voiceSelect.innerHTML = "";
if (voices.length > 0) {
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
} else {
  voiceSelect.innerHTML = '<option value="-1">No voices available</option>';
}

window.speechSynthesis.onvoiceschanged = function () {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";
  if (voices.length > 0) {
    voices.forEach((voice, i) => {
      voiceSelect.options[i] = new Option(voice.name, i);
    });
  } else {
    voiceSelect.innerHTML = '<option value="-1">No voices available</option>';
  }
};

document.querySelector("button").addEventListener("click", function () {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});

voiceSelect.addEventListener("change", function () {
  speech.voice = voices[voiceSelect.value];
});

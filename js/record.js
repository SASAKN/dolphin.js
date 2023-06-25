var recognition = new webkitSpeechRecognition();
recognition.lang = 'ja';

recognition.addEventListener('result', function(event) {
    var text = event.results.item(0).item(0).transcript;
    document.getElementById('recordtext').value = text;
}, false);

function record() {
    recognition.start();
}
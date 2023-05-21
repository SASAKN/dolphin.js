window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
var recognition = new webkitSpeechRecognition();
recognition.lang = 'ja';

recognition.addEventListener('result', function(event) {
    var text = event.results.item(0).item(0).transcript;
    $("#recordtext").val(text);
}, false);

//開始
function record() {
    recognition.start();
}
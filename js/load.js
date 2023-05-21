function fini() {

        
        const spinner = document.getElementById('screen');
        spinner.classList.add('loaded');
        var a = new Audio('../start.wav');
        a.play();
}
setTimeout(fini,5000);

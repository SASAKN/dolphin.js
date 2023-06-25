setTimeout(function () {
        const spinner = document.getElementById('screen');
        spinner.classList.add('loaded');
}, 5000);
//読み込みされたら、動くべき関数
window.onload = function () {
        setupAnimations();
        setupMenu();
}


function musicstart() {
    document.getElementById('kyleimagevideo').innerHTML = '<img src="anime/5/5.gif" class="anim5">';
  
    var play2 = new Audio('anime/5/5.mp3');
    play2.play();
  
  }
  function katakata() {
    document.getElementById('kyleimagevideo').innerHTML = '<img src="anime/33/33.gif" class="anim33">';
  
    var play2 = new Audio('anime/33/33.mp3');
  
    play2.play();
    setTimeout('play2.pause', 35000);
  }
  
  function oyogu() {
    document.getElementById("outbox").innerHTML = '<link rel="stylesheet" href="css/anim.css">';
  }
  function setting() {
var playwii = new Audio('../popan.mp3');
playwii.play();
document.getElementById('menu').classList.remove('hide');
}
function showcha() {
  document.getElementById('chamenu').classList.remove('hide');
}
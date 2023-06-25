function katakata() {
    document.getElementById('kyleimagevideo').innerHTML = '<img src="anime/33/33.gif" class="anim33">';
  
    var play2 = new Audio('anime/33/33.mp3');
  
    play2.play();
    setTimeout('play2.pause', 35000);
  }
function setupMenu(){
  if (navigator.userAgent.indexOf('like Mac OS X') !== -1) {
  }
  let con = document.getElementById('conmenu');  
  let rightclick = document.getElementById('rightclick');     
  let body = document.body;                    
  rightclick.addEventListener('contextmenu', function (e) {
    con.style.left = e.pageX + 'px';
    con.style.top = e.pageY + 'px';
    con.classList.add('show');
  });
  body.addEventListener('click', function () {
    if (con.classList.contains('show')) {
      con.classList.remove('show');
    }
  });
}
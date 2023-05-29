window.onload = function () {
    let con = document.getElementById('conmenu');  
    let rightclick = document.getElementById('rightclick');     
    let body = document.body;
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      rightclick.addEventListener('click', function () {
        con.style.left = '183px';
        con.style.top = '100px';
        con.classList.add('show');
      });
    }                       
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
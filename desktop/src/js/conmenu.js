window.onload = function () {
   
    //オリジナル コンテキストメニュー
    let con = document.getElementById('conmenu');  
    //対象エリア
    let rightclick = document.getElementById('rightclick');     
    //body部
    let body = document.body;                       
 
    //コンテキストメニューを表示する
    rightclick.addEventListener('contextmenu', function (e) {
      //マウスの位置を使ってスタイルを設定する
      con.style.left = e.pageX + 'px';
      con.style.top = e.pageY + 'px';
      //メニューをblockで表示
      con.classList.add('show');

    });
 
    //左クリックで非表示に変更
    body.addEventListener('click', function () {
      if (con.classList.contains('show')) {
        //非表示に戻す
        con.classList.remove('show');
      }
    });
  }
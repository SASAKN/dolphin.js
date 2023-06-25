//このスクリプトは、参考にしてください。MOD開発が簡単になります。
//古いスクリプトは、使用不可能になっています。
//MOD開発には、新しいスクリプトも見てください。
function musicstart() {
  document.getElementById('kyleimagevideo').innerHTML = '<img src="anime/5/5.gif" class="anim5">';

  var play2 = new Audio('anime/5/5.mp3');
  play2.play();

}
function oregakesu() {
  document.write('<img src="anime/bukkowasu.jpg" alt="今度は、俺が消します。"><img src="anime/bukkowasu.png" alt="今度は、俺が消します。">');
  
  var play1 = new Audio ('anime/bukkowasu.mp3');
  play1.play();
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
function check() {
  if (kairi_form.q.value == "") {

  } else if (kairi_form.q.value == "東京の天気") {

    const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=35.689487&lon=139.691706&name=Tokyo&units=si"></iframe>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "札幌の天気") {

    const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=43.062689&lon=141.352887&name=Sapporo&units=si"></iframe>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "名古屋の天気") {

    const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=35.18666062167876&lon=136.90622145435813&name=Nagoya&units=si"></iframe>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "奥多摩の天気") {

    const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=35.85550700430961&lon=138.94395907239146&name=Okutama&units=si"></iframe>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "横浜の天気") {

    const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=35.442745136855144&lon=139.64626734418175&name=Yokohama&units=si"></iframe>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "まなびポケット") {

    const output = '<h1>読み込み中です。</h1>';
    window.location.href = 'http://ed-cl.com/';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "6年チャンネル") {

    const output = '<h1>読み込み中です。</h1>';
    window.location.href = 'https://ed-cl.com/timelines';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "コルタナ") {

    const output = '<h1>コルタナではありませんカイルです。</h1>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "６年チャンネル") {

    const output = '<h1>読み込み中です。</h1>';
    window.location.href = 'https://ed-cl.com/timelines';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "ヤフー") {

    const output = '<h1>Microsoftなので、ヤフーは、開けません。ｗｗ！Bingを開きます。</h1>';
    window.location.href = 'https://www.bing.com/';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "グーグル") {

    const output = '<h1>Microsoftなので、グーグルは、開けませんｗｗビングを開きます。</h1>';
    window.location.href = 'https://www.bing.com/';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "音楽") {
    const output = '<h1>何を聞きますか？</h1>(例)NCS';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "スリープ") {

    document.getElementById('kyleimagevideo').innerHTML = '<video src="anime/oyasumi.mp4" autoplay controols  id="lightclick" width="500" loop></video>';
    const output = '<h1>スリープ中スリープ解除というとスリープが解除されます。</h1>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "スリープ解除") {
    document.getElementById('kyleimagevideo').innerHTML = '<video src="anime/okiru.mp4" autoplay controols  id="lightclick" width="500"></video>';
    const output = 'スリープの解除が完了しました。元気100倍カイル君ｗｗ';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "NKSアカウント") {
    const output = 'ロード中';
    location.href = 'http://localhost/testlogin';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "持っているPCは何？") {
    const output = '<h3>iBook G3 SE</h3>1999年のPC<img src="pc.png" width="50"><h3>Mac OS X 10.4 Tiger 2005年のOSを使っているよ</h3>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "カイル君") {
    const output = '<h1>何の御用ですか？</h1>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "学習ページへ") {
    const output = '<h1>お待ちください。</h1>';
    location.href = 'https://sites.google.com/edu.ota-school.ed.jp/higashi-gakusyu-site/%E3%83%9B%E3%83%BC%E3%83%A0';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "動画") {
    const output = '<h1>Youtubeに移動しています。</h1>';
    location.href = 'https://www.youtube.com/';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "ドコムス") {
    const output = '<h3>ドコムスを開いています。</h3>';
    location.href = 'https://www.youtube.com/channel/UCc-PPk-lNe34JaWCcJQCL0g';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "Heyカイル") {
    const output = 'カイルは、、Siriでは、ありません。Siriみたいな呼び方しないでください。';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "NCS") {
    const output = '再生中';
    const music = new Audio('ncs.mp3');
    music.play();
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "泳ぐ") {
    const output = '歩くをONにしました。';

    document.getElementById("outbox").innerHTML = output;
    document.getElementById("outbox").innerHTML = '<link rel="stylesheet" href="css/anim.css">';
    return false;
  } else if (kairi_form.q.value == "縦に泳ぐ") {
    const output = '歩くをONにしました。';

    document.getElementById("outbox").innerHTML = output;
    document.getElementById("outbox").innerHTML = '<link rel="stylesheet" href="css/tateanim.css">';
    return false;
  } else if (kairi_form.q.value == "回転") {
    const output = '歩くをONにしました。';

    document.getElementById("outbox").innerHTML = output;
    document.getElementById("outbox").innerHTML = '<link rel="stylesheet" href="css/ugoku.css">';

    return false;
  } else if (kairi_form.q.value == "端末の切り替え") {
    function kirikae() {
      const audio = new Audio('anime/pc.mp3');
      audio.play();
      const output = '端末を切り替えました。<img src="pc2.png" width="200" height="100">  <progress value="100"> データ移行完了 </progress>';
      document.getElementById("outbox").innerHTML = output;
    }
    setTimeout(kirikae, 10000);
    const output = '端末を切り替え中<img src="pc.png" width="100" height="100"><h3>データや設定を新しいPCに移行しています。</h3><progress max="100"> データ移行中 </progress>';

    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (kairi_form.q.value == "スマホ持っている?") {
    const output = 'スマホならiphoneを持っているよ<img src="phone.png" width="100" height="100">';

    document.getElementById("outbox").innerHTML = output;

    return false;
  } else if (kairi_form.q.value == "終了") {
    const output = '自分で閉じて';

    document.getElementById("outbox").innerHTML = output;

    return false;
  } else if (kairi_form.q.value == "AppleMusic") {
    const output = 'AppleMusicを使っているアカウントにログインしてから行ってください。';

    document.getElementById("outbox").innerHTML = output;

    location.href = 'https://music.apple.com/ja/browse';

    return false;
  }
  else if (kairi_form.q.value == "お前を消す方法") {
      oregakesu();
    return false;
  } else if (kairi_form.q.value == "このカイルについて") {
    const output = 'このカイルは、カイル君JS版3.0で、ビルドは、K3BGC1です。コードネームは、卒業です。';

    document.getElementById("outbox").innerHTML = output;

    return false;
  } else if (kairi_form.q.value == "It's My Life") {

    document.getElementById("outbox").innerHTML = '<iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/its-my-life/1440813234?i=1440813250"></iframe>';
    document.getElementById('kyleimagevideo').innerHTML = '<img src="./kyle.png" alt="カイル君の画像" id="rightclick" class="image_kyle animk" width="500">';

    return false;
  } else if (kairi_form.q.value == "Livin on a Player") {

    document.getElementById("outbox").innerHTML = '<iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/livin-on-a-prayer/1422954626?i=1422955211"></iframe>';
    document.getElementById('kyleimagevideo').innerHTML = '<img src="./kyle.png" alt="カイル君の画像" id="rightclick" class="image_kyle animk" width="500">';

    return false;
  }else if (kairi_form.q.value == "マエスケ") {

    document.getElementById("outbox").innerHTML = '<iframe width="200" height="200" src="https://www.youtube.com/embed/ueQbVYYlrIc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    document.getElementById('kyleimagevideo').innerHTML = '<img src="./kyle.png" alt="カイル君の画像" id="rightclick" class="image_kyle animk" width="500">';

    return false;
  } else if (kairi_form.q.value == "禁じられた愛") {

    document.getElementById("outbox").innerHTML = '<iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/jp/album/%E7%A6%81%E3%81%98%E3%82%89%E3%82%8C%E3%81%9F%E6%84%9B/1422954626?i=1422954999"></iframe>';
    document.getElementById('kyleimagevideo').innerHTML = '<img src="./kyle.png" alt="カイル君の画像" id="rightclick" class="image_kyle animk" width="500">';

    return false;
  } else if (kairi_form.q.value == "夜にかける") {

    document.getElementById("outbox").innerHTML = '<iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/jp/album/%E5%A4%9C%E3%81%AB%E9%A7%86%E3%81%91%E3%82%8B/1490256978?i=1490256995"></iframe>';
    document.getElementById('kyleimagevideo').innerHTML = '<img src="./kyle.png" alt="カイル君の画像" id="rightclick" class="image_kyle animk" width="500">';

    return false;
  }
}
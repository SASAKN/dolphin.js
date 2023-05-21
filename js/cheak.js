function check() {
  var string = document.getElementById('recordtext').value;
  if (string.indexOf('東京') > -1) {
    if (string.indexOf('天気') > -1) {
      const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=35.689487&lon=139.691706&name=Tokyo&units=si"></iframe>';
      document.getElementById("outbox").innerHTML = output;
      return false;

    }
  } else if (string.indexOf('札幌') > -1) {
    if (string.indexOf('天気') > -1) {
      const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=43.062689&lon=141.352887&name=Sapporo&units=si"></iframe>';
      document.getElementById("outbox").innerHTML = output;
      return false;
    }
  } else if (string.indexOf('名古屋') > -1) {
    if (string.indexOf('天気') > -1) {
      const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=35.18666062167876&lon=136.90622145435813&name=Nagoya&units=si"></iframe>';
      document.getElementById("outbox").innerHTML = output;
      return false;
    }
  } else if (string.indexOf('奥多摩') > -1) {
    if (string.indexOf('天気') > -1) {
      const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=35.85550700430961&lon=138.94395907239146&name=Okutama&units=si"></iframe>';
      document.getElementById("outbox").innerHTML = output;
      return false;
    }
  } else if (string.indexOf('横浜') > -1) {
    if (string.indexOf('天気') > -1) {
      const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=35.442745136855144&lon=139.64626734418175&name=Yokohama&units=si"></iframe>';
      document.getElementById("outbox").innerHTML = output;
      return false;
    }
  } else if (string.indexOf('まなび') > -1) {
    if (string.indexOf('ポケット') > -1) {
      document.write('<h1>Loading...</h1>')
      location.href = 'http://ed-cl.com/';
      return false;
    }
  } else if (string.indexOf('コルタナ') > -1) {
    const output = '<h1>コルタナではありませんカイルです。</h1>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (string.indexOf('音楽') > -1) {
    const output = '<h1>AppleMusicと連携してください。</h1>';
    // 発言を設定
    const uttr = new SpeechSynthesisUtterance()
    uttr.text = 'カイルで使える音楽サービスは、AppleMusicです。連携したいのであればAppleMusicと連携とカイルに検索してください。';
    // 発言を再生
    window.speechSynthesis.speak(uttr)
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else if (string.indexOf('持っているPC') > -1) {
    const output = '<h3>iBook G3 SE</h3>1999年のPC<img src="pc.png" width="50"><h3>Mac OS X 10.4 Tiger 2005年のOSを使っているよ</h3>';
    document.getElementById("outbox").innerHTML = output;
     // 発言を設定
     const uttr = new SpeechSynthesisUtterance()
     uttr.text = 'ウィキペディアによると、iBook（アイブック）は、iMacの成功から約1年後の1999年10月に発売された、Apple（旧Apple Computer）の廉価版ノートパソコン。iMacと同じデザインコンセプトを踏襲し、半透明で丸みを帯びた筐体、ポップなカラーと、それまでのノートパソコンのイメージを払拭するものだった。初心者向けの入門機種という位置付けながら、当時としては珍しく、無線LANカードの内蔵スロットが装備されるなど、先進的な試みも見られた。インテルアーキテクチャへの移行に伴い、MacBookに後継されることとなる。2006年5月に、PowerBookと共に販売終了となった。';
     // 発言を再生
     window.speechSynthesis.speak(uttr)
    return false;
  } else if(string.indexOf("It's My Life") > -1) {
    document.getElementById("outbox").innerHTML = '<iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/its-my-life/1440813234?i=1440813250"></iframe>';
    document.getElementById('kyleimagevideo').innerHTML = '<img src="./kyle.png" alt="カイル君の画像" id="rightclick" class="image_kyle animk" width="500">';
    return false;
  } else {
    return true;
  }

}
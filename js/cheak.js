function check() {
  var string = document.getElementById('recordtext').value;
  if (string.indexOf('') > -1) {
    if (string.indexOf('天気') > -1) {
      const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=35.689487&lon=139.691706&name=Tokyo&units=si"></iframe>';
      document.getElementById("outbox").innerHTML = output;
      return false;

    }
  } else if (string.indexOf('コルタナ') > -1) {
    const output = '<h1>コルタナではありませんカイルです。</h1>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } else {
    return true;
  }

}
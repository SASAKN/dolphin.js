function check() {
  var string = document.getElementById('recordtext').value;
  
  if (string.indexOf('札幌') > -1 && string.indexOf('天気') > -1) {
    const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=43.062689&lon=141.352887&name=Sapporo&units=si"></iframe>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } 
  
  if (string.indexOf('名古屋') > -1 && string.indexOf('天気') > -1) {
    const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=35.18666062167876&lon=136.90622145435813&name=Nagoya&units=si"></iframe>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } 
  
  if (string.indexOf('奥多摩') > -1 && string.indexOf('天気') > -1) {
    const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=35.85550700430961&lon=138.94395907239146&name=Okutama&units=si"></iframe>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } 
  
  if (string.indexOf('横浜') > -1 && string.indexOf('天気') > -1) {
    const output = '<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=35.442745136855144&lon=139.64626734418175&name=Yokohama&units=si"></iframe>';
    document.getElementById("outbox").innerHTML = output;
    return false;
  } 
  
  return true;
}

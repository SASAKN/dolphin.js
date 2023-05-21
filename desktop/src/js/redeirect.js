// iPhone
if ( navigator.userAgent.indexOf('iPhone') > 0 ){
    location.href = 'sumaho/index.html';
    // iPad
    } else if( navigator.userAgent.indexOf('iPad') > 0 ){
        location.href = 'sumaho/index.html';
    // iPod
    } else if( navigator.userAgent.indexOf('iPod') > 0 ){
        location.href = 'sumaho/index.html';
    // Android
    } else if( navigator.userAgent.indexOf('Android') > 0 ){
        document.write('<title>iPhoneに機種変更してください。</title><h1>Androidは、非対応です。</h1>');
     function iphokae() {
         location.href = 'https://www.apple.com/jp/iphone/';
     }
   
     setTimeout(iphokae,5000);
    }

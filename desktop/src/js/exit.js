//window.addEventListener('beforeunload', function(e) {
    e.returnValue = 'あ';
    console.log('終了確認処理実行!!終了するには、このページを離れるをクリックしてください。');
//}, false);
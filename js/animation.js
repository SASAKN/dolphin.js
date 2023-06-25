//アニメーションのテンプレート
function template(i) {
  return `<img src="${animations[i].gif}" class="${animations[i].class}"> `;
}

//変数の設定
var element;
var audio = [];
var safariaudio;

//アニメーションの配列
var animations = [
  { gif: 'anime/1/1.gif', audio: 'anime/1/1.mp3', duration: 5000, class: 'anim1' },
  { gif: 'anime/2/2.gif', audio: 'anime/2/2.mp3', duration: 28000, class: 'anim2' },
  { gif: 'anime/3/3.gif', audio: 'anime/3/3.mp3', duration: 4000, class: 'anim3' },
  { gif: 'anime/4/4.gif', audio: 'anime/4/4.mp3', duration: 7000, class: 'anim4' },
  { gif: 'anime/5/5.gif', audio: 'anime/5/5.mp3', duration: 5000, class: 'anim5' },
  { gif: 'anime/6/6.gif', audio: 'anime/6/6.mp3', duration: 3000, class: 'anim6' },
  { gif: 'anime/7/7.gif', audio: 'anime/7/7.mp3', duration: 3000, class: 'anim7' },
  { gif: 'anime/8/8.gif', audio: 'anime/8/8.mp3', duration: 2000, class: 'anim8' },
  { gif: 'anime/9/9.gif', audio: 'anime/9/9.mp3', duration: 2000, class: 'anim9' },
  { gif: 'anime/10/10.gif', audio: 'anime/10/10.mp3', duration: 22000, class: 'anim10' },
  { gif: 'anime/11/11.gif', audio: 'anime/11/11.mp3', duration: 5000, class: 'anim11' },
  { gif: 'anime/12/12.gif', audio: 'anime/12/12.mp3', duration: 20000, class: 'anim12' },
  { gif: 'anime/13/13.gif', audio: 'anime/13/13.mp3', duration: 3000, class: 'anim13' },
  { gif: 'anime/14/14.gif', audio: 'anime/14/14.mp3', duration: 3000, class: 'anim14' },
  { gif: 'anime/15/15.gif', audio: 'anime/15/15.mp3', duration: 3000, class: 'anim15' },
  { gif: 'anime/16/16si.gif', audio: 'anime/16/16.mp3', duration: 15000, class: 'anim16' },
  { gif: 'anime/17/17.gif', audio: 'anime/17/17.mp3', duration: 3000, class: 'anim17' },
  { gif: 'anime/18/18.gif', audio: 'anime/18/18.mp3', duration: 5000, class: 'anim18' },
  { gif: 'anime/19/19.gif', audio: 'anime/19/19.mp3', duration: 5000, class: 'anim19' },
  { gif: 'anime/20/20.gif', audio: 'anime/20/20.mp3', duration: 5000, class: 'anim20' },
  { gif: 'anime/21/21.gif', audio: 'anime/21/21.mp3', duration: 5000, class: 'anim21' },
  { gif: 'anime/22/22.gif', audio: 'anime/22/22.mp3', duration: 5000, class: 'anim22' },
  { gif: 'anime/23/23.gif', audio: 'anime/23/23.mp3', duration: 5000, class: 'anim23' },
  { gif: 'anime/24/24.gif', audio: 'anime/24/24.mp3', duration: 5000, class: 'anim24' },
  { gif: 'anime/25/25.gif', audio: 'anime/25/25.mp3', duration: 5000, class: 'anim25' },
  { gif: 'anime/26/26.gif', audio: 'anime/26/26.mp3', duration: 9000, class: 'anim26' },
  { gif: 'anime/27/27.gif', audio: 'anime/27/27.mp3', duration: 11000, class: 'anim27' },
  { gif: 'anime/28/28.gif', audio: 'anime/28/28.mp3', duration: 28000, class: 'anim28' },
  { gif: 'anime/29/29.gif', audio: 'anime/29/29.mp3', duration: 30000, class: 'anim29' },
  { gif: 'anime/30/30si.gif', audio: 'anime/30/30.mp3', duration: 10000, class: 'anim20' },
  { gif: 'anime/31/31.gif', audio: 'anime/31/31.mp3', duration: 30000, class: 'anim31' },
  { gif: 'anime/32/32.gif', audio: 'anime/32/32.mp3', duration: 2000, class: 'anim32' },
  { gif: 'anime/33/33.gif', audio: 'anime/33/33.mp3', duration: 35000, class: 'anim12' }
];

//アニメーションのセットアップ
function setupAnimations() {
  for (var i = 0; i < animations.length; i++) {
    var a = animations[i];
    audio.push(new Audio(a.audio));
    safariaudio = new Audio('anime/safari.mp3');
    element = document.getElementById('kyleimagevideo');
  }
};

//アニメーションの再生
function playAnimations(i) {
  //もしWebkitを使用していれば、さらに自動的なアニメーションとして定義されない0かどうか
  if (navigator.userAgent.indexOf('iPhone') !== -1 || navigator.userAgent.indexOf('iPad') !== -1 && i === 0) {
    playAnimationSafari(i);
  } else {
    if (i < animations.length) {
      element.innerHTML = template(i);
      audio[i].play();
      setTimeout(function () {
        playAnimations(i + 1);
      }, animations[i].duration);
    }
  }
};

//Safariの場合
function playAnimationSafari(i) {
  if (i < animations.length) {
    element.innerHTML = template(i);
    safariaudio.play();
    setTimeout(function () {
      safariaudio.pause();
      playAnimations(i + 1);
    }, animations[i].duration);
  }
};
const image01src = 'url("img/image01.jpg")';
const image02src = 'url("img/image02.jpg")';
const image03src = 'url("img/image03.jpg")';
const header = document.getElementById('top');

// 次の画像を指定する関数
function nextImage() {
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == image01src) {
    // 今1枚め
    header.style.backgroundImage = image02src;
  } else if (nowBg == image02src) {
    // 今2枚め
    header.style.backgroundImage = image03src;
  } else {
    // 今3枚め
    header.style.backgroundImage = image01src;
  }
}

// 前の画像を指定する関数
function prevImage() {
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == image01src) {
    // 今1枚め
    header.style.backgroundImage = image03src;
  } else if (nowBg == image02src) {
    // 今2枚め
    header.style.backgroundImage = image01src;
  } else {
    // 今3枚め
    header.style.backgroundImage = image02src;
  }
}

// ページが表示されたタイミングで実行したい処理を書く
document.getElementById('top').style.backgroundImage = image01src;
document.getElementById('sc-to-left').addEventListener('click', prevImage);
document.getElementById('sc-to-right').addEventListener('click', nextImage);
// タイマーセット(5秒ごとに次の画像)
setInterval(nextImage, 5000);

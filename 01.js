particlesJS("particles-js", {
  "particles":{
    "number":{
      "value":1046,//この数値を変更すると星の数が増減できる
      "density":{
        "enable":true,
        "value_area":900
      }
    },
    "color":{
      "value":"#ffffff"
    },
    "shape":{
      "type":"circle",//形状はcircleを指定
      "stroke":{
        "width":0
      },
      },
    "opacity":{
      "value":1,//シェイプの透明度
      "random":true,//シェイプの透明度をランダムにする
      "anim":{
        "enable":true,//シェイプの透明度をアニメーションさせる
        "speed":3,//シェイプの透明度をアニメーションさせる
        "opacity_min":0,//透明度の最小値０
        "sync":false//全てを同時にアニメーションさせない
      }
    },
    "size":{
      "value":2,
      "random":true,
      "anim":{
        "enable":false,
        "speed":4,
        "size_min":0.3,
        "sync":false
      }
    },
    "line_linked":{
      "enable":false,
    },
    "move":{
      "enable":true,
      "speed":120,//この数値を小さくするとゆっくりな動きになる
    "direction":"none",//方向指定なし
    "random":true,//動きはランダムに
    "straight":true,//動きをとどめる
      "out_mode":"out",
      "bounce":false,
      "attract":{
        "enable":false,
        "rotateX":600,
        "rotateY":600
      }
    }
  },
  "interactivity":{
    "detect_on":"canvas",
    "events":{
      "onhover":{
        "enable":false,
      },
      "onclick":{
        "enable":false,
      },
      "resize":true
    }
  },
  "retina_detect":true
});
window.addEventListener("load", function() {
  const target = document.querySelectorAll('.scr-target')
  const targetArray = Array.prototype.slice.call(target);
  const options = {
      root: null,
      rootMargin: '0px 0px',
      threshold: 0.2
  };
  
  const observer = new IntersectionObserver(callback, options)
  targetArray.forEach(function (tgt) {
    observer.observe(tgt)
  });
  
  function callback(entries) {
    entries.forEach(function(entry) {
      const target = entry.target;
      if (entry.isIntersecting && !target.classList.contains('is-active')) {
        target.classList.add('is-active');
      }
    });
  };
  });

  const bar = new ProgressBar.Line(load_text, {
    easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
    duration: 2000,//時間指定(1000＝1秒)
    strokeWidth: 0.2,//進捗ゲージの太さ
    color: '#FF0',//進捗ゲージのカラー
    trailWidth: 0.2,//ゲージベースの線の太さ
    trailColor: '#FFF',//ゲージベースの線のカラー
    text: {//テキストの形状を直接指定
        style: {//天地中央に配置
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '-30px 0 0 0',//バーより上に配置
            transform: 'translate(-50%,-50%)',
            'font-size': '3rem',
            color: '#FFF',
        },
        autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function (state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
});
//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#load").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});



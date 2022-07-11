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

    $.scrollify({
        section : ".box",//1ページスクロールさせたいエリアクラス名
        scrollbars:"false",//スクロールバー表示・非表示設定
        interstitialSection : "#header,#footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
        easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
          scrollSpeed: 300, // スクロール時の速度
        
        //以下、ページネーション設定
        before:function(i,panels) {
          var ref = panels[i].attr("data-section-name");
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
          },
          afterRender:function() {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
              activeClass = "";
              if(i===$.scrollify.currentIndex()) {
                activeClass = "active";
              }
              pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });
            pagination += "</ul>";
      
            $("#box1").append(pagination);//はじめのエリアにページネーションを表示
            $(".pagination a").on("click",$.scrollify.move);
          }
      
        });
      
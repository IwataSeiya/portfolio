particlesJS("particles-js", {
  "particles":{
    "number":{
      "value":1046,
      "density":{
        "enable":true,
        "value_area":900
      }
    },
    "color":{
      "value":"#ffffff"
    },
    "shape":{
      "type":"circle",
      "stroke":{
        "width":0
      },
      },
    "opacity":{
      "value":1,
      "random":true,
      "anim":{
        "enable":true,
        "speed":3,
        "opacity_min":0,
        "sync":false
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
      "speed":120,
    "direction":"none",
    "random":true,
    "straight":true,
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
    easing: 'easeInOut',
    duration: 2000,
    strokeWidth: 0.2,
    color: '#FF0',
    trailWidth: 0.2,
    trailColor: '#FFF',
    text: {
        style: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '-30px 0 0 0',
            transform: 'translate(-50%,-50%)',
            'font-size': '3rem',
            color: '#FFF',
        },
        autoStyleContainer: false 
    },
    step: function (state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %'); 
    }
});

bar.animate(1.0, function () {
  $("#load").delay(500).fadeOut(800);
});




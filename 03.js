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
  
  const image01src = 'url("img/image04.jpg")';
  const image02src = 'url("img/imgage101.jpg")';
  const image03src = 'url("img/image111.jpg")';
  const head = document.getElementById('top');
  
  
  function nextImage() {
    const nowBg = head.style.backgroundImage;
    console.log(nowBg);
  
    if (nowBg == image01src) {
  
      head.style.backgroundImage = image02src;
    } else if (nowBg == image02src) {
  
      head.style.backgroundImage = image03src;
    } else {
  
      head.style.backgroundImage = image01src;
    }
  }
  
  
  function prevImage() {
    const nowBg = head.style.backgroundImage;
    console.log(nowBg);
  
    if (nowBg == image01src) {
  
      head.style.backgroundImage = image03src;
    } else if (nowBg == image02src) {
  
      head.style.backgroundImage = image01src;
    } else {
  
      head.style.backgroundImage = image02src;
    }
  }
  
  document.getElementById('top').style.backgroundImage = image01src;
  document.getElementById('sc-to-left').addEventListener('click', prevImage);
  document.getElementById('sc-to-right').addEventListener('click', nextImage);
  setInterval(nextImage, 5000);
  
  
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
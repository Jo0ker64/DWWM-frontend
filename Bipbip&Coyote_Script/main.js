bip.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      bip.style.left = timePassed / 3 + 'px';

      if (timePassed > 5000) clearInterval(timer);

    }, 20);
  }

  will.onclick = function(){
    let start = Date.now();
    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      will.style.left = timePassed / 5 + 'px';

      if (timePassed > 8000) clearInterval(timer);

    }, 20);
  }
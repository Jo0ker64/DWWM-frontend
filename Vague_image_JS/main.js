document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.getElementById("waveCanvas");
    let ctx = canvas.getContext("2d");

    let img = new Image();
    img.src = 'ironman2.jpg'; 

    img.onload = function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      applyWaveEffect();
    };

    function applyWaveEffect() {
      let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let data = imageData.data;

      let frequency = 0.1; 
      let amplitude = 10;  

      for (let i = 0; i < data.length; i += 4) {
        let y = Math.sin((i / 4) * frequency) * amplitude;
        let offset = Math.round(y) * canvas.width * 4;

        data[i] = data[i + offset];
        data[i + 1] = data[i + 1 + offset];
        data[i + 2] = data[i + 2 + offset];
      }
      ctx.putImageData(imageData, 0, 0);
    }
  });
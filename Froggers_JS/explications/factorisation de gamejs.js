function LaunchGame() {
    let life_count, time, score, wl_full, loading, begin, anim_time, last_y, interval, message_state, ctx, line, grad, pat1, pat2, pat3, pat4, pat5;
    let canvas = document.getElementById("board");

    initializeGame();
            // LOAD DES SONS 
    let frog_sound = createAudio("sounds/frog.wav");
    let water_sound = createAudio("sounds/water.wav");
    let hit_sound = createAudio("sounds/hit.wav");
    let boing_sound = createAudio("sounds/boing.wav");
    let bell_sound = createAudio("sounds/bell.wav");
// const sounds = { frog : loadSounds(src"...."), }
    loadAudioFiles([frog_sound, water_sound, hit_sound, boing_sound, bell_sound]);

    let imgs = loadImages();
    let line1 = new Line(Math.floor((Math.random() * 3) + 1), -1, 34, 1);
    let line2 = new Line(Math.floor((Math.random() * 3) + 1), 1, 28, 2);
    let line3 = new Line(Math.floor((Math.random() * 3) + 1), -1, 33, 3);
    let line4 = new Line(Math.floor((Math.random() * 3) + 1), 1, 34, 4);
    let line5 = new Line(Math.floor((Math.random() * 3) + 1), -1, 54, 5);

    let line6 = new Line(Math.floor((Math.random() * 3) + 1), 1, 117, 6);
    let line7 = new Line(Math.floor((Math.random() * 3) + 1), -1, 180, 7);
    let line8 = new Line(Math.floor((Math.random() * 3) + 1), 1, 84, 8);
    let line9 = new Line(Math.floor((Math.random() * 3) + 1), -1, 180, 7);
    let line10 = new Line(Math.floor((Math.random() * 3) + 1), 1, 117, 8);

    let enms = createObjects(14, 350, [line1, line1, line1, line2, line2, line2, line3, line3, line3, line4, line4, line4, line5, line5]);
    let plts = createObjects(15, 170, [line6, line6, line6, line7, line7, line7, line8, line8, line8, line9, line9, line9, line10, line10, line10]);
    let wls = createWaterLilies([42, 162, 282, 402, 522]);
    let frog = new Frog();

    loading += 17;

    function initializeGame() {
        life_count = 3;
        time = 60;
        score = 0;
        wl_full = 0;
        loading = 0;
        begin = false;
        anim_time = 0;
        last_y = 380;
        interval;
        message_state = 0;
        ctx, line, grad, pat1, pat2, pat3, pat4, pat5;
    }

    function createAudio(src) {
        let audio = new Audio(src);
        audio.oncanplaythrough = function () {
            loading += 3;
        };
        return audio;
    }

    function loadAudioFiles(audios) {
        for (let audio of audios) {
            audio.load();
        }
    }

    function loadImages() {
        let imgs = new Array(21);
        for (i = 0; i < imgs.length; i++) {
            imgs[i] = new Image();
            imgs[i].onload = function () {
                loading += 3;
            };
            imgs[i].src = "imgs/img_" + i + ".gif";
        }
        return imgs;
    }

    function createObjects(count, y, lines) {
        let objects = new Array(count);
        for (let i = 0; i < count; i++) {
            objects[i] = new Obj(120 * i, y, lines[i % lines.length]);
        }
        return objects;
    }

    function createWaterLilies(xPositions) {
        return xPositions.map((x) => new WaterLily(x, 0));
    }

    function main_loop() {
        if (begin == false) {
            ctx.lineJoin = "round";
            ctx.lineNum = 7;
            ctx.strokeStyle = "#fff";
            ctx.strokeRect(175, 235, 300, 28);
            ctx.fillStyle = "#000";
            ctx.fillRect(175, 235, 300, 28);
            ctx.fillStyle = "#2E6730"
            ctx.fillRect(175, 235, (loading * 3), 28);
            ctx.lineWidth = 3;
            ctx.font = "12pt comic sans ms";
            ctx.strokeStyle = "#F2f2f2";
            ctx.fillStyle = "#000";
            ctx.strokeText("loading" + loading + "%", 275, 255);
            ctx.fillText("loading" + loading + "%", 275, 255);
            if (loading == 100) {
                ctx.lineWidth = 5;
                ctx.strokeStyle = ("#819AAB");
                ctx.fillStyle = ("#fff");
                ctx.font = ("18pt comic sans ms");
                ctx.strokeText("press \"ENTER\" to start", 184, 220);
                ctx.fillText("press \"ENTER\" to start", 184, 220);
            }
        }
        else {
            //gestion des collisions
            if (frog.y <= 350 && frog.y > 230) {
                for (let i = 0; i < enms.length; i++) {
                    if (enms[i].y == frog.y) {
                        if (enms[i].inCollision(frog)) {
                            playSound(hit_sound);
                            loseLife();

                        }
                    }
                }
            }
            else if (frog.y <= 170 && frog.y >= 50){
                line = null;
                for (let i = 0; i < plts.length; i++){
                    if (plts[i].y == frog.y){
                        if (plts[i].inCollision(frog)){
                            line = plts[i].line
                        }
                    }
                }
                if (line != null) {
                    frog.move(line.speed, line.dir);
                    if (frog.isOut()) {
                        playSound(water_sound);
                        loseLife();
                    }
                }
                else {
                    playSound(water_sound);
                    loseLife();
                }
            }
            else if (frog.y == 20) {
                let flag = false;
                for (let i = 0; i < wls.length; i++) {
                    if (wls[i].contains(frog)) {
                        wls[i].setUsed();
                        flag = true;
                    }
                }
                if (flag == false) {
                    playSound(hit_sound);
                    loseLife();
                }
                else {
                    boing_sound.pause();
                    playSound(frog_sound);
                    wl_full++;
                    score = score + (time * 10);
                    if (wl_full == 5) {
                        clearInterval(interval);
                        frog.hide();
                        score = score + (life_count * 1000);
                        message_state = 3;
                    }
                    else {
                        frog.initPos();
                        time = 60;
                    }
                }
            }
            if (grad == null) {
                grad = ctx.createLinearGradient(460, 421, 640, 451);
                grad.addColorStop(0, 'red');
                grad.addColorStop(0.3, 'yellow');
                grad.addColorStop(1, 'green');
                pat1 = ctx.createPattern(imgs[16], "repeat");
                pat2 = ctx.createPattern(imgs[15], "repeat");
                pat3 = ctx.createPattern(imgs[17], "repeat");
                pat4 = ctx.createPattern(imgs[14], "repeat");
                pat5 = ctx.createPattern(imgs[13], "repeat");
            }
            ctx.fillStyle = pat1;
            ctx.fillRect(0, 0, 650, 50);
            ctx.fillStyle = pat2;
            ctx.fillRect(0, 50, 650, 150);
            ctx.fillStyle = pat3;
            ctx.fillRect(0, 200, 650, 30);
            ctx.fillStyle = pat4;
            ctx.fillRect(0, 380, 650, 70);
            ctx.fillStyle = pat5;
            ctx.fillRect(0, 230, 650, 150);

            ctx.lineJoin = "round";
            ctx.lineWidth = 7;
            ctx.strokeStyle = "#fff";
            ctx.strokeRect(460, 421, 180, 18);
            ctx.fillStyle = "#000";
            ctx.fillRect(460, 421, 180, 18);
            ctx.fillStyle = grad;
            ctx.fillRect(460, 421, (time * 3), 18);
            ctx.lineWidth = 3;
            ctx.font = "10pt Comic Sans MS";
            ctx.strokeStyle = "#f2f2f2";
            ctx.fillStyle = "#000";
            ctx.strokeText("time : " + time + " s", 520, 435);
            ctx.fillText("time : " + time + " s", 520, 435);

            ctx.strokeStyle = "#a83f00";
            ctx.fillStyle = "#ecd729";
            ctx.font = "12pt comic sans ms";
            ctx.strokeText("life :", 40, 435);
            ctx.fillText("life :", 40, 435);
                for (let i =0; i < life_count; i++){
                    ctx.drawImage(imgs [20], 110 + (i*30), 417);
                }
        
            ctx.strokeText("score:", 274, 435);   
            ctx.fillText("score:", 274, 435); 
            ctx.fill = "#3eb8800";
            ctx.strokeStyle = "#102300";
            ctx.lineWidth = 5;
            ctx.font = "14pt comic sans ms";
            ctx.strokeText(score, 335, 437);
            ctx.fillText(score, 335, 437);

            //les voitures
            for (let i = 0; i < enms.length; i++){
                enms[i].move();
                ctx.drawImage(imgs[enms[i].line.type], enms[i].x, enms[i].y)
            }
             
            // les buches
            for (let i = 0; i < plts.length; i++){
                plts[i].move();
                ctx.drawImage(imgs[plts[i].line.type], plts[i].x, plts[i].y)
            }
            for (let i = 0; i <wls.length; i++){
                if (wls[i].isUsed()){
                    ctx.drawImage(imgs[10], wls[i].x, wls[i].y);   
                } else {
                    ctx.drawImage(imgs[9], wls[i].x, wls[i].y);
                }
            }
            if (!frog.isNotBlocked()){
                if (frog.y <=170 && frog >= 50 && time > 0){
                    ctx.drawImage(imgs[18], frog.x, frog.y);
                } else if (frog.y <= 350 && frog.y >= 230 && time >0){
                    ctx.drawImage(imgs[19], frog.x, frog.y);
                }else {
                    ctx.drawImage(imgs[11], frog.x, frog.y);
                }
            }
            if (frog.isNotBlocked()){
                ctx.save();
                ctx.translate(frog.x + 15, frog.y + 15);
                ctx.rotate(frog.deg * Math.PI  / 180);
                if(anim_time == 0){
                    ctx.drawImage(imgs[0], -15, -15);
                } else {
                    ctx.drawImage(imgs[12], -15, -15);
                    anim_time --;
                }
                ctx.restore();
            }
        }
    };
    

    function whatKey(evt) {
        switch (evt.keyCode) {
            case 37:
                frog.goLeft();
                playSound(boing_sound);
                anim_time = 8;
                break;
            case 39:
                frog.goRight();
                playSound(boing_sound);
                anim_time = 8;
                break;
            case 40:
                frog.goDown();
                playSound(boing_sound);
                anim_time = 8;
                break;
            case 38:
                frog.goUp();
                playSound(boing_sound);
                anim_time = 8;
                if (frog.y < last_y && frog.state == true) {
                    last_y = frog.y;
                    score = score + 50;
                }
                break;
            case 82:
                if (message_state == 2 || message_state == 3) {
                    life_count = 3;
                    score = 0;
                    last_y = 380;
                    wl_full = 0;
                    for (i = 0; i < wls.length; i++) {
                        wls[i].setUnused();
                    }
                    message_state = 0;
                    frog.initPos();
                    setTimer();
                }
                break;
            case 13:
                if (loading == 100) {
                    loading = 0;
                    frog.unBlock();
                    begin = true;
                    setTimer();
                }
                break;
        };
    }

    function playSound(sound) {
        if (frog.isNotBlocked()) {
            sound.play();
        }    }

    function loseLife() {
        anim_time = 0;
        if( frog.isNotBlocked()){
            frog.block(); 
            life_count --;
            clearInterval(interval);
            if(life_count == 0){
                alert ("perdu");
            }
            else {
                message_state = 1;
                last_y = 380; 
                setTimer(function (){
                    frog.initPos();
                    last_y = 380; 
                    setTimer();
                    message_state = 0;
                }, 2000)
            }
        }    }

    function writeMessage() {
        // ... (rest of the code remains unchanged)
    }

    function setTimer() {
        time = 60;
        interval = setInterval(function(){
            if (time == 0) {
                playSound(bell_sound);
                loseLife();
            }
        }, 1000);    }

    // ... (rest of the code remains unchanged)
}

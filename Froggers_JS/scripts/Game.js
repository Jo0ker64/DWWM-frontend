function LaunchGame() {
    let life_count = 3;
    let time = 60;
    let score = 0;
    let wl_full = 0;
    let loading = 0;
    let begin = false;
    let anim_time = 0;
    let last_y = 380;
    let interval;
    let message_state = 0;
    let ctx, line, grad, pat1, pat2, pat3, pat4, pat5;


    let canvas = document.getElementById("board");

    if (canvas.getContext) {
        ctx = canvas.getContext("2d");
        setInterval(main_loop, 16);
        window.addEventListener("keydown", whatKey, true);
        loading = loading + 5;
    }

    let frog_sound = new Audio("sounds/frog.wav");
    let water_sound = new Audio("sounds/water.wav");
    let hit_sound = new Audio("sounds/hit.wav");
    let boing_sound = new Audio("sounds/boing.wav");
    let bell_sound = new Audio("sounds/bell.wav");
    frog_sound.oncanplaythrough = loading = loading + 3;
    water_sound.oncanplaythrough = loading = loading + 3;
    hit_sound.oncanplaythrough = loading = loading + 3;
    boing_sound.oncanplaythrough = loading = loading + 3;
    bell_sound.oncanplaythrough = loading = loading + 3;

    let imgs = new Array(21);
    for (i = 0; i < imgs.length; i++) {
        imgs[i] = new Image();
        imgs[i].onload = function () {
            loading = loading + 3;

        };
        imgs[i].src = "imgs/img_" + i + ".gif";
    }
    function setTimer(){
        time = 60;
        interval = setInterval(function(){
            if (time == 0) {
                playSound(bell_sound);
                loseLife();
            }
        }, 1000);
    };

    function playSound(sound) {
        if (frog.isNotBlocked()) {
            sound.play();
        }
    };

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
        }

    };

    function writeMessage() {

    };

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

    let enms = new Array;
    enms[0] = new Obj(50, 350, line1);
    enms[1] = new Obj(250, 350, line1);
    enms[2] = new Obj(450, 350, line1);
    enms[3] = new Obj(120, 320, line2);
    enms[4] = new Obj(250, 320, line2);
    enms[5] = new Obj(380, 320, line2);
    enms[6] = new Obj(120, 290, line3);
    enms[7] = new Obj(250, 290, line3);
    enms[8] = new Obj(380, 290, line3);
    enms[9] = new Obj(120, 260, line4);
    enms[10] = new Obj(250, 260, line4);
    enms[11] = new Obj(380, 260, line4);
    enms[12] = new Obj(120, 230, line5);
    enms[13] = new Obj(250, 230, line5);

    let plts = new Array;
    plts[0] = new Obj(50, 170, line6);
    plts[1] = new Obj(450, 170, line6);
    plts[2] = new Obj(850, 170, line6);
    plts[3] = new Obj(120, 140, line7);
    plts[4] = new Obj(450, 140, line7);
    plts[5] = new Obj(790, 140, line7);
    plts[6] = new Obj(320, 110, line8);
    plts[7] = new Obj(620, 110, line8);
    plts[8] = new Obj(920, 110, line8);
    plts[9] = new Obj(120, 80, line9);
    plts[10] = new Obj(420, 80, line9);
    plts[11] = new Obj(720, 80, line9);
    plts[12] = new Obj(120, 50, line10);
    plts[13] = new Obj(320, 50, line10);
    plts[14] = new Obj(520, 50, line10);

    let wls = new Array;
    wls[0] = new WaterLily(42, 0);
    wls[1] = new WaterLily(162, 0);
    wls[2] = new WaterLily(282, 0);
    wls[3] = new WaterLily(402, 0);
    wls[4] = new WaterLily(522, 0);

    let frog = new Frog();
    loading = loading + 17;


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
}
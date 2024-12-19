function LaunchGame() {
    let life_count, time, score, wl_full, loading, begin, anim_time, last_y, interval, message_state, ctx, line, grad, pat1, pat2, pat3, pat4, pat5;
    let canvas = document.getElementById("board");

    initializeGame();

    let frog_sound = createAudio("sounds/frog.wav");
    let water_sound = createAudio("sounds/water.wav");
    let hit_sound = createAudio("sounds/hit.wav");
    let boing_sound = createAudio("sounds/boing.wav");
    let bell_sound = createAudio("sounds/bell.wav");

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
        // ... (rest of the code remains unchanged)
    }

    function whatKey(evt) {
        // ... (rest of the code remains unchanged)
    }

    function playSound(sound) {
        // ... (rest of the code remains unchanged)
    }

    function loseLife() {
        // ... (rest of the code remains unchanged)
    }

    function writeMessage() {
        // ... (rest of the code remains unchanged)
    }

    function setTimer() {
        // ... (rest of the code remains unchanged)
    }

    // ... (rest of the code remains unchanged)
}

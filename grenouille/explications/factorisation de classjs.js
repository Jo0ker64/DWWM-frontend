class Line {
    constructor(speed, dir, width, type) {
        this.speed = speed;
        this.dir = dir;
        this.width = width;
        this.type = type;
    }
}
class Obj {
    constructor(x, y, line) {
        this.x = x;
        this.y = y;
        this.line = line;
    }
    inCollision(frog) {
        return frog.x + 25 >= this.x && frog.x + 5 <= this.x + this.line.width;
    }
    move() {
        if (this.line.dir == 1) {
            this.x = (this.x > 650) ? -(this.line.width * 3) : this.x + (this.line.speed * this.line.dir);
        } else {
            this.x = (this.x < -this.line.width) ? 650 + (this.line.width * 3) : this.x + (this.line.speed * this.line.dir);
        }
    }
}
class Frog {
    constructor() {
        this.x = 310;
        this.y = 380;
        this.state = false;
        this.deg = 0;
    }
    block() {
        this.state = false;
    }
    unBlock() {
        this.state = true;
    }
    isNotBlocked() {
        return this.state;
    }
    goUp() {
        if (this.state && this.y > 20) {
            this.y -= 30;
            this.deg = 0;
        }
    }
    goDown() {
        if (this.state && this.y < 380) {
            this.y += 30;
            this.deg = 180;
        }
    }
    goLeft() {
        if (this.state && this.x > 10) {
            this.x -= 30;
            this.deg = -90;
        }
    }
    goRight() {
        if (this.state && this.x < 610) {
            this.x += 30;
            this.deg = 90;
        }
    }
    initPos() {
        this.unBlock();
        this.x = 310;
        this.y = 380;
        this.deg = 0;
    }
    isOut() {
        return this.x <= 0 || this.x >= 620;
    }
    move(speed, dir) {
        if (this.state) {
            this.x += speed * dir;
        }
    }
    hide() {
        this.block();
        this.x = -30;
        this.y = -30;
    }
}
class WaterLily {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.state = false;
    }
    isUsed() {
        return this.state;
    }
    contains(frog) {
        return frog.x >= this.x && frog.x + 30 <= this.x + 86 && !this.isUsed();
    }
    setUsed() {
        this.state = true;
    }
    setUnused() {
        this.state = false;
    }
}

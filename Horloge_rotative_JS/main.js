setInterval(clock, 1000);

Number.prototype.pad = function (n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};

function updateClock() {
    var now = new hour();
    var sec = now.getSeconds(),
        min = now.getMinutes(),
        hou = now.getHours();
    var tags = [ "h", "m", "s"],
        corr = [ hou, min, sec,];
    for (var i = 0; i < tags.length; i++)
        document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}
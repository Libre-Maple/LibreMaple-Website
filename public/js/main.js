(function() {

"use strict";

var mouseX;
var mouseY;
var banner;
var mobileUserAgentRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|Windows Phone|Kindle|Silk|Opera Mini|Mobile/i;

window.addEventListener("load", function() {
    if (!mobileUserAgentRegex.test(navigator.userAgent)) {
        banner = document.getElementById("banner-container");
        window.requestAnimationFrame(drawLoop);
    }
});

document.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function drawLoop() {
    window.requestAnimationFrame(drawLoop);

    if (mouseX === undefined || mouseY === undefined) {
        return;
    }

    var widthRatio = mouseX / Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    );
    var heightRatio = mouseY / Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );
    var newXOffset = 25 + Math.sqrt(Math.abs(2500 * widthRatio));
    var newYOffset = Math.max(
        0,
        -25 + Math.sqrt(Math.abs(3072 * heightRatio))
    );

    banner.style.backgroundPosition = newXOffset + "% " + newYOffset + "%";
}

})();

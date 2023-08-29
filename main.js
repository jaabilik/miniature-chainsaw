video = "";

function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.position(400, 430);
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function start() {
    objectDecetor = ml5.objectDetector('cocosd', modelLoaded);
    document.getElementById("status").innerHTML = "Ststus -- Detecting something or whatever or maybe or i guess";
}

function modelLoaded() {
    console.log("Model exploded");
    status = true;
    video.loop();
    video.speed(1.75);
    video.volume(0);
}
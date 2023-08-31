objects = [];
status = "";
video = "";

function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.position(400, 400);
}

function gotResult(error, results) {
 if (error) {
    console.log("You oopsie doopsied a bit too much | "+error);
 }
 console.log("You *didn't* fail?? Somehow?? | "+results);
 objects = results;
}

function draw() {
    image(video, 0, 0, 480, 380);
    //why is coding so ugh
    if(status != ""){
        objectDecetor.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status - why am I alive (object detected)";
        document.getElementById("noo").innerHTML = "NOO (number of objects) - "+objects.length;

        fill("#26c0e1")
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label+" "+percent+"%". objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#26c0e1");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function start() {
    objectDecetor = ml5.objectDetector('cocosd', modelLoaded);
    document.getElementById("status").innerHTML = "Ststus -- Detecting something or whatever or maybe or i guess";
}

function modelLoaded() {
    console.log("Model exploded");
    status = true;
    video.loop();
    video.speed(0.75);
    video.volume(0);
}

//meow
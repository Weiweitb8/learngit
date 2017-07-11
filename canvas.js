var canvas, stage, txt,count = 0;
window.onload = function() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    txt = new createjs.Text("hello", "20px", "#ff0000");
    stage.addChild(txt);
    createjs.Ticker.setFPS(3);
    createjs.Ticker.addEventListener("tick", tick);
}
function tick(){
    count++;
    txt.text = "hi"+ count+"!";
    stage.update();
}
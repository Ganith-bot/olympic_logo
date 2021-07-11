canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(300,200,50,0,2*Math.PI);
ctx.arc(250,265,50,0,2*Math.PI);
ctx.arc(200,200,50,0,2*Math.PI);
ctx.arc(150,265,50,0,2*Math.PI);
ctx.arc(100,200,50,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",logo1);

function logo(e){
    color=document.getElementById("color").value;
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    circle(mousex,mousey);
}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mousex,mousey,50,0,2*Math.PI);
    ctx.stroke();
}
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
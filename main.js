var mouseEvent="empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
   var screenWidth=screen.width;
   var newCanvasWidth=screen.width-70;
   var newCanvasHeight=screen.height-300;
   if (screenWidth < 992){
       document.getElementById("myCanvas").width=newCanvasWidth;
       document.getElementById("myCanvas").height=newCanvasHeight;
       document.body.style.overflow="hidden";

   }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {

        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;
       
        console.log("my_touchstart");
        last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("my_touchmove");

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

    canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",myMouseMove);

function myMouseMove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("last position of x and y coordinates = ");
        console.log("X = " + lastPositionX +",Y= " + lastPositionY);
        ctx.moveTo(lastPositionX,lastPositionY);
        
        console.log("current position of x and y coordinates = ");
        console.log( "X = " + current_position_of_mouse_x +",Y= " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
        
       }

    lastPositionX=current_position_of_mouse_x;
    lastPositionY=current_position_of_mouse_y;
}

canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e){
    mouseEvent="mouseleave";
}

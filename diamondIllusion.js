function setup() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
   var slider1 = document.getElementById('slider1');
    slider1.value = -25;
    var posX = -10;
    var posY = -5;
  

    function draw() {
 
	canvas.width = canvas.width;
	
	var theta1 = slider1.value*0.005*Math.PI;
	
    var stack = [ mat3.create() ];
      
	 function moveToTx(x,y)  {
       var res=vec2.create(); 
       vec2.transformMat3(res,[x,y],stack[0]);
       context.moveTo(res[0],res[1]);
     }

	function lineToTx(x,y){
      var res=vec2.create();
      vec2.transformMat3(res,[x,y],stack[0]); 
      context.lineTo(res[0],res[1]);
    }
	
//draws an outline of a diamond
  function drawDiamond(context, x, y, width, height, color){
   context.save();
   context.beginPath();
   moveToTx(x, y);
                
    // draws top left edge
   lineToTx(x - width / 2, y + height / 2);
                
  // draws bottom left edge
   lineToTx(x, y + height);
                
  // draws bottom right edge
   lineToTx(x + width / 2, y + height / 2);
                
  // draws closing the path automatically creates
   context.closePath();
                
   context.strokeStyle = color;
   context.stroke();
   context.restore();
  }
      
      
   function drawDiamondFill(context, x, y, width, height, color){
   context.save();
   context.beginPath();
   moveToTx(x, y);
                
    // draws top left edge
   lineToTx(x - width / 2, y + height / 2);
                
  // draws bottom left edge
   lineToTx(x, y + height);
                
  // draws bottom right edge
   lineToTx(x + width / 2, y + height / 2);
                
  
  // draws the top right edge
   context.closePath();
                
   context.fillStyle = color;
   context.fill();
   context.restore();
  }
  
  function drawLine(x, y, height, width, color){ 
    context.beginPath();
    moveToTx(10, 30);
    context.rect(x ,y ,height ,width, color);  
    context.fillStyle = color;  
    context.closePath();
    context.fill();
  }   
      
      function update() {
        posX += 1;
        if (posX >= 550) {
            posX = -85;
        }

       
    }
      
      function updateAgain() {
        posY -= 1;
        if (posX >= 550) {
            posX = -85;
        }
    }
 
 var innerDiamondCanvas = mat3.create();
  mat3.fromTranslation(innerDiamondCanvas,[posX,posY]);
//mat3.rotate(Tgreen_to_blue,Tgreen_to_blue,theta1);
  mat3.scale(innerDiamondCanvas,innerDiamondCanvas, [0.75,0.75]);
  mat3.multiply(stack[0],stack[0],innerDiamondCanvas);
  drawDiamondFill(context, canvas.width * 0.8, 200, 100, 100, "#B537F2");
   
   //draw middle diamond      
 stack.unshift(mat3.clone(stack[0]));        
  var bluDiamondCanvas = mat3.create();
  mat3.fromTranslation(bluDiamondCanvas,[-320,-250]);
  mat3.scale(bluDiamondCanvas,bluDiamondCanvas, [2,2]);
  mat3.multiply(stack[0], stack[0], bluDiamondCanvas);
  drawDiamond(context, canvas.width * 0.8, 200, 100, 100, "#3CB9FC");
  stack.shift();
      
  //draw first diamond on right  
  stack.unshift(mat3.clone(stack[0]));     
  var purpDiamondCanvas = mat3.create();
  mat3.fromTranslation(purpDiamondCanvas,[-285,-250]);
  mat3.scale(purpDiamondCanvas,purpDiamondCanvas, [2,2]);
  mat3.multiply(stack[0], stack[0], purpDiamondCanvas);
  drawDiamond(context, canvas.width * 0.8, 200, 100, 100, "#B537F2");
  stack.shift();  
      
  //draw first diamond on left
  stack.unshift(mat3.clone(stack[0]));   
  var drkpurpDiamondCanvas = mat3.create();
  mat3.fromTranslation(drkpurpDiamondCanvas,[-355,-250]);
  mat3.scale(drkpurpDiamondCanvas,drkpurpDiamondCanvas, [2,2]);
  mat3.multiply(stack[0],stack[0],drkpurpDiamondCanvas);
  drawDiamond(context, canvas.width * 0.8, 200, 100, 100, "#120052");
  stack.shift();  
      
 //draw second diamond on left
 stack.unshift(mat3.clone(stack[0]));   
  var lilacDiamondCanvas = mat3.create();
  mat3.fromTranslation(lilacDiamondCanvas,[-395,-250]);
  mat3.scale(lilacDiamondCanvas,lilacDiamondCanvas, [2,2]);
  mat3.multiply(stack[0],stack[0],lilacDiamondCanvas);
  drawDiamond(context, canvas.width * 0.8, 200, 100, 100, "#8A2BE2");
  stack.shift();
      
  //draw second diamond on Right
  stack.unshift(mat3.clone(stack[0]));   
  var gldDiamondCanvas = mat3.create();
  mat3.fromTranslation(gldDiamondCanvas,[-250,-250]);
  mat3.scale(gldDiamondCanvas,gldDiamondCanvas, [2,2]);
  mat3.multiply(stack[0],stack[0],gldDiamondCanvas);
  drawDiamond(context, canvas.width * 0.8, 200, 100, 100, "#FFD300");
  stack.shift();
      
  //draw second diamond on left
  stack.unshift(mat3.clone(stack[0]));   
  var greenDiamondCanvas = mat3.create();
  mat3.fromTranslation(greenDiamondCanvas,[-430,-250]);
  mat3.scale(greenDiamondCanvas,greenDiamondCanvas, [2,2]);
  mat3.multiply(stack[0],stack[0],greenDiamondCanvas);
  drawDiamond(context, canvas.width * 0.8, 200, 100, 100, "#00FECA");
  stack.shift();  
      
 //draw second diamond on right
  stack.unshift(mat3.clone(stack[0]));   
  var pinkDiamondCanvas = mat3.create();
  mat3.fromTranslation(pinkDiamondCanvas,[-215,-250]);
  mat3.scale(pinkDiamondCanvas,pinkDiamondCanvas, [2,2]);
  mat3.multiply(stack[0],stack[0],pinkDiamondCanvas);
  drawDiamond(context, canvas.width * 0.8, 200, 100, 100, "#FF2281");
   stack.shift();
      
 stack.unshift(mat3.clone(stack[0]));       
 var topLineToCanvas = mat3.create();
  mat3.fromTranslation(topLineToCanvas,[20,0]);
  //doesn't work :(
  mat3.rotate(topLineToCanvas, topLineToCanvas, theta1);
   mat3.multiply(stack[0],stack[0],topLineToCanvas);
  drawLine(330, 80, 100, 4, "black");
 stack.shift();
      
  stack.unshift(mat3.clone(stack[0]));   
 var btmLineToCanvas = mat3.create();
  mat3.fromTranslation(btmLineToCanvas,[20,0]);
  //doesn't work :(
  mat3.rotate(btmLineToCanvas, btmLineToCanvas, theta1);
   mat3.multiply(stack[0],stack[0],btmLineToCanvas);
  drawLine(330, 300, 100, 4, "black");   
     stack.shift();
      
  stack.unshift(mat3.clone(stack[0]));   
  var topLineToCanvasLft = mat3.create();
  mat3.fromTranslation(topLineToCanvasLft,[-20,0]);
  //doesn't work :(
  mat3.rotate(topLineToCanvasLft, topLineToCanvasLft, theta1);
   mat3.multiply(stack[0],stack[0],topLineToCanvasLft);
  drawLine(20, 80, 70, 4, "black");   
     stack.shift(); 
      
      
   stack.unshift(mat3.clone(stack[0]));   
  var btmLineToCanvasLft = mat3.create();
  mat3.fromTranslation(btmLineToCanvasLft,[posX,posY]);
  //doesn't work :(
 //btmLineToCanvasLft.rotate(btmLineToCanvasLft, btmLineToCanvasLft, theta1);
   mat3.multiply(stack[0],stack[0],btmLineToCanvasLft);
  drawLine(20, 300, 70, 4, "black");   
  stack.shift();
      
      update();
      //updateAgain();
    window.requestAnimationFrame(draw);
   
    }
  window.requestAnimationFrame(draw);  
 slider1.addEventListener("input",draw);
   
    draw();
}
window.onload = setup;

function setup() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var slider1 = document.getElementById('slider1');
    slider1.value = -25;
    

    function draw() {
	canvas.width = canvas.width;
	// use the sliders to get the angles
	var theta1 = slider1.value*0.005*Math.PI;
	
	function moveToTx(x,y,Tx)
	{var res=vec2.create(); vec2.transformMat3(res,[x,y],Tx); context.moveTo(res[0],res[1]);}

	function lineToTx(x,y,Tx)
	{var res=vec2.create(); vec2.transformMat3(res,[x,y],Tx); context.lineTo(res[0],res[1]);}

      
  function drawDiamond(context, x, y, width, height, color,  Tx){
   context.save();
   context.beginPath();
   moveToTx(x, y, Tx);
                
    // top left edge
   lineToTx(x - width / 2, y + height / 2, Tx);
                
  // bottom left edge
   lineToTx(x, y + height,Tx);
                
  // bottom right edge
   lineToTx(x + width / 2, y + height / 2, Tx);
                
  // closing the path automatically creates
  // the top right edge
   context.closePath();
                
   context.strokeStyle = color;
   context.stroke();
   context.restore();
  }
      
      
   function drawDiamondFill(context, x, y, width, height, color,  Tx){
   context.save();
   context.beginPath();
   moveToTx(x, y, Tx);
                
    // top left edge
   lineToTx(x - width / 2, y + height / 2, Tx);
                
  // bottom left edge
   lineToTx(x, y + height,Tx);
                
  // bottom right edge
   lineToTx(x + width / 2, y + height / 2, Tx);
                
  // closing the path automatically creates
  // the top right edge
   context.closePath();
                
   context.fillStyle = color;
   context.fill();
   context.restore();
  }
  
  function drawLine(x, y, height, width, color, Tx){ 
    context.beginPath();
    moveToTx(10, 30, Tx);
    context.rect(x ,y ,height ,width, color);  
    context.fillStyle = color;  
    context.closePath();
    context.fill();
  }   
      
      
 
 var innerDiamondCanvas = mat3.create();
  mat3.fromTranslation(innerDiamondCanvas,[-10,37]);
//mat3.rotate(Tgreen_to_blue,Tgreen_to_blue,theta1);
  mat3.scale(innerDiamondCanvas,innerDiamondCanvas, [0.75,0.75]);
  drawDiamondFill(context, canvas.width * 0.8, 200, 100, 100, "#B537F2", innerDiamondCanvas);
    
  //draw middle diamond     
  var blueToInnerDiamond = mat3.create();
 mat3.fromTranslation(blueToInnerDiamond,[-320,-250]);
  var bluDiamondCanvas = mat3.create();
  mat3.scale(blueToInnerDiamond,blueToInnerDiamond, [2,2]);
  mat3.multiply(bluDiamondCanvas, innerDiamondCanvas, blueToInnerDiamond);
  drawDiamond(context, canvas.width * 0.8, 200, 100, 100, "#3CB9FC", bluDiamondCanvas);
 
    //draw first diamond on right  
  var purpToBlueDiamond = mat3.create();
  mat3.fromTranslation(purpToBlueDiamond,[20,0]);
	//mat3.rotate(Tgreen_to_blue,Tgreen_to_blue,theta1);
  var purpDiamondCanvas = mat3.create();
  mat3.multiply(purpDiamondCanvas, bluDiamondCanvas, purpToBlueDiamond);
  drawDiamond(context, canvas.width * 0.8, 200, 100, 100, "#B537F2", purpDiamondCanvas);
    
  //draw first diamond on left
  var drkpurpToBlueDiamond = mat3.create();
  mat3.fromTranslation(drkpurpToBlueDiamond,[-20,0]);
  //mat3.rotate(Tred_to_green,Tred_to_green,phi1);
  var drkpurpDiamondCanvas = mat3.create();
  //mat3.scale(drkpurpToBlueDiamond,drkpurpToBlueDiamond, [1.5,1.5]);
  mat3.multiply(drkpurpDiamondCanvas,bluDiamondCanvas,drkpurpToBlueDiamond);
  drawDiamond(context, canvas.width * 0.8, 200, 100, 100, "#120052", drkpurpDiamondCanvas);
   
 //draw second diamond on left
  var lilacTodrkpurpDiamond = mat3.create();
  mat3.fromTranslation(lilacTodrkpurpDiamond,[-20,0]);
  //mat3.rotate(Tred_to_green,Tred_to_green,phi1);
  var lilacDiamondCanvas = mat3.create();
  //mat3.scale(drkpurpToBlueDiamond,drkpurpToBlueDiamond, [1.5,1.5]);
  mat3.multiply(lilacDiamondCanvas,drkpurpDiamondCanvas,lilacTodrkpurpDiamond);
  drawDiamond(context, canvas.width * 0.8, 200, 100, 100, "#8A2BE2", lilacDiamondCanvas);
   
  //draw second diamond on Right
  var gldTopurpDiamond = mat3.create();
  mat3.fromTranslation(gldTopurpDiamond,[20,0]);
  //mat3.rotate(Tred_to_green,Tred_to_green,phi1);
  var gldDiamondCanvas = mat3.create();
  //mat3.scale(drkpurpToBlueDiamond,drkpurpToBlueDiamond, [1.5,1.5]);
  mat3.multiply(gldDiamondCanvas,purpDiamondCanvas,gldTopurpDiamond);
  drawDiamond(context, canvas.width * 0.8, 200, 100, 100, "#FFD300", gldDiamondCanvas);
   
  //draw second diamond on left
  var greenTolilacDiamond = mat3.create();
  mat3.fromTranslation(greenTolilacDiamond,[-20,0]);
  //mat3.rotate(Tred_to_green,Tred_to_green,phi1);
  var greenDiamondCanvas = mat3.create();
  //mat3.scale(drkpurpToBlueDiamond,drkpurpToBlueDiamond, [1.5,1.5]);
  mat3.multiply(greenDiamondCanvas,lilacDiamondCanvas,greenTolilacDiamond);
  drawDiamond(context, canvas.width * 0.8, 200, 100, 100, "#00FECA", greenDiamondCanvas);
       
      
 //draw second diamond on right
  var pinkToGldDiamond = mat3.create();
  mat3.fromTranslation(pinkToGldDiamond,[20,0]);
  //mat3.rotate(Tred_to_green,Tred_to_green,phi1);
  var pinkDiamondCanvas = mat3.create();
  //mat3.scale(drkpurpToBlueDiamond,drkpurpToBlueDiamond, [1.5,1.5]);
  mat3.multiply(pinkDiamondCanvas,gldDiamondCanvas,pinkToGldDiamond);
  drawDiamond(context, canvas.width * 0.8, 200, 100, 100, "#FF2281", pinkDiamondCanvas);
       
 var topLineToPink = mat3.create();
  mat3.fromTranslation(topLineToPink,[20,0]);
  //doesn't work :(
  mat3.rotate(topLineToPink, topLineToPink, theta1);
  //mat3.rotate(Tred_to_green,Tred_to_green,phi1);
  var topLineToCanvas = mat3.create();
   mat3.multiply(topLineToCanvas,pinkDiamondCanvas,topLineToPink);
  drawLine(330, 80, 100, 4, "black", topLineToCanvas);
 
 var btmLineToPink = mat3.create();
  mat3.fromTranslation(btmLineToPink,[20,0]);
  //doesn't work :(
  mat3.rotate(btmLineToPink, btmLineToPink, theta1);
  //mat3.rotate(Tred_to_green,Tred_to_green,phi1);
  var btmLineToCanvas = mat3.create();
   mat3.multiply(btmLineToCanvas,pinkDiamondCanvas,btmLineToPink);
  drawLine(330, 300, 100, 4, "black", topLineToCanvas);   
      
  var topLineToGreen = mat3.create();
  mat3.fromTranslation(topLineToGreen,[-20,0]);
  //doesn't work :(
  mat3.rotate(topLineToGreen, topLineToGreen, theta1);
  //mat3.rotate(Tred_to_green,Tred_to_green,phi1);
  var topLineToCanvasLft = mat3.create();
   mat3.multiply(topLineToCanvasLft,greenDiamondCanvas,topLineToGreen);
  drawLine(20, 80, 70, 4, "black", topLineToCanvasLft);   
      
      
  var btmLineToGreen = mat3.create();
  mat3.fromTranslation(btmLineToGreen,[-20,0]);
  //doesn't work :(
  mat3.rotate(topLineToGreen, topLineToGreen, theta1);
  //mat3.rotate(Tred_to_green,Tred_to_green,phi1);
  var btmLineToCanvasLft = mat3.create();
   mat3.multiply(btmLineToCanvasLft,greenDiamondCanvas,btmLineToGreen);
  drawLine(20, 300, 70, 4, "black", btmLineToCanvasLft);   
          
      
   
    }
    slider1.addEventListener("input",draw);
   
    draw();
}
window.onload = setup;

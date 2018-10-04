function setup() {
    var canvas = createCanvas(900, 500);
    canvas.parent('sketch-holder');
    background('#fff');
    noCursor();
}

function draw() {

    /* Color */
    var sketchBackground = color('#f0eeee');
    var darkRed = color('#B70123');
    var black = color('black');
    
    /*Width*/
    var rectWidth1 = 1;
    var rectWidth2 = 485;
    var rectWidth3 = 525;
    var rectWidth4 = 100;
    var rectWidth5 = 250;
    var rectWidth6 = 385;
    var rectWidth7 = 315;
    var rectWidth8 = 135;
    var rectWidth9 = 211;
    var rectWidth10 = 280;
    var rectWidth11 = 350;
    var rectWidth12 = 550;
    var rectWidth13 = 570;
    var rectWidth14 = 642;
    var rectWidth15 = 630;
    var rectWidth16 = 670;

    /*Height*/
    var rectHeight1 = 1;
    var rectHeight2 = 30;
    var rectHeight3 = 50;
    var rectHeight4 = 85;
    var rectHeight5 = 100;
    var rectHeight6 = 90;
    var rectHeight7 = 134;
    var rectHeight8 = 160;
    var rectHeight9 = 195;
    var rectHeight10 = 295;
    var rectHeight11 = 320;
    var rectHeight12 = 390;

    /* Instructions */
    var startHereX = 270;
    var startHereY = 25;
    var finishX = 750;
    var finishY = 375;
    var useMouseX = 50;
    var useMouseY = 60;
    var pressKeyX = 50;
    var pressKeyY = 90;
    
    /* Ellipse */
    redEllipse = 3;
    blackEllipse = 10;

    /*Cursor*/
    strokeWeight(2);
    fill(darkRed);
	line(mouseX, mouseY, pmouseX, pmouseY);
	ellipse(pmouseX, pmouseY, redEllipse, redEllipse);
    fill(black)
	ellipse(pmouseX, pmouseY, blackEllipse, blackEllipse);

    /* Text */
    noStroke()
    textSize(25);
    fill(black);
    text("Start Here", startHereX, startHereY);
    text("Finish", finishX, finishY);

    /* Instructions */
    textSize(20);
    text('Use Mouse to Move', useMouseX, useMouseY);
    text('Press Any Key to Retry', pressKeyX, pressKeyY);

    /* Maze Layout */
    stroke(darkRed)
    rect(300, 50, rectWidth1, rectHeight3);
    rect(335, 50, rectWidth1, rectHeight4);
    rect(300, 226, rectWidth2, rectHeight1);
    rect(260, 260, rectWidth3, rectHeight1);
    rect(177, 169, rectWidth1, rectHeight8);
    rect(220, 136, rectWidth1, rectHeight8);
    rect(300, 136, rectWidth1, rectHeight6);
    rect(260, 170, rectWidth1, rectHeight6);
    rect(300, 200, rectWidth4, rectHeight1);
    rect(51, 100, rectWidth5, rectHeight1);
    rect(51, 100, rectWidth1, rectHeight12);
    rect(335, 135, rectWidth4, rectHeight1);
    rect(435, 36, rectWidth1, rectHeight5);
    rect(435, 36, rectWidth6, rectHeight1);
    rect(505, 105, rectWidth7, rectHeight1);
    rect(820, 36, rectWidth1, rectHeight10);
    rect(336, 170, rectWidth8, rectHeight1);
    rect(505, 105, rectWidth1, rectHeight2);
    rect(90, 134, rectWidth9, rectHeight1);
    rect(90, 134, rectWidth1, rectHeight11);
    rect(135, 134, rectWidth1, rectHeight9);
    rect(505, 135, rectWidth10, rectHeight1);
    rect(505, 165, rectWidth10, rectHeight1);
    rect(505, 195, rectWidth10, rectHeight1);
    rect(785, 135, rectWidth1, rectHeight2);
    rect(505, 165, rectWidth1, rectHeight2);
    rect(470, 70, rectWidth1, rectHeight5);
    rect(435, 70, rectWidth11, rectHeight1);
    rect(90, 415, rectWidth12, rectHeight1);
    rect(135, 375, rectWidth12, rectHeight1);
    rect(220, 295, rectWidth13, rectHeight1);
    rect(177, 330, rectWidth14, rectHeight1);
    rect(90, 455, rectWidth15, rectHeight1); 
    rect(51, 490, rectWidth16, rectHeight1);
    rect(685, 356, rectWidth1, rectHeight5);
    rect(720, 356, rectWidth1, rectHeight7);
}

function keyPressed() {

    var sketchBackground = color ('#fff')
	background(sketchBackground);
}
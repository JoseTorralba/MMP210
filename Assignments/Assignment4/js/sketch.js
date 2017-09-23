function setup() {
    var canvas = createCanvas(900, 500);
    canvas.parent('sketch-holder');
    background('#f0eeee');
    noCursor();
}

function draw() {

    /*Cursor*/
    strokeWeight(2);
    fill("#B70123");
	line(mouseX, mouseY, pmouseX, pmouseY);
	ellipse(pmouseX, pmouseY, 3, 3);

    /* Still Working on */
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
    var rectheight1 = 1;
    var rectheight2 = 30;
    var rectheight3 = 50;
    var rectheight4 = 85;
    var rectheight5 = 100;
    var rectheight6 = 90;
    var rectheight7 = 134;
    var rectheight8 = 160;
    var rectheight9 = 195;
    var rectheight10 = 295;
    var rectheight11 = 320;
    var rectheight12 = 390;

    /* Text */
    noStroke()
    textSize(25);
    fill('black');
    text("Start Here", 270, 25);
    text("Finish", 750, 375);

    /* Instructions */
    textSize(20);
    text('Use Mouse to Move', 50, 60);
    text('Press Any Key to Retry', 50, 90);

    /* Maze Layout */
    stroke('#B70123')
    rect(300, 50, rectWidth1, rectheight3);
    rect(335, 50, rectWidth1, rectheight4);
    rect(300, 226, rectWidth2, rectheight1);
    rect(260, 260, rectWidth3, rectheight1);
    rect(177, 169, rectWidth1, rectheight8);
    rect(220, 136, rectWidth1, rectheight8);
    rect(300, 136, rectWidth1, rectheight6);
    rect(260, 170, rectWidth1, rectheight6);
    rect(300, 200, rectWidth4, rectheight1);
    rect(51, 100, rectWidth5, rectheight1);
    rect(51, 100, rectWidth1, rectheight12);
    rect(335, 135, rectWidth4, rectheight1);
    rect(435, 36, rectWidth1, rectheight5);
    rect(435, 36, rectWidth6, rectheight1);
    rect(505, 105, rectWidth7, rectheight1);
    rect(820, 36, rectWidth1, rectheight10);
    rect(336, 170, rectWidth8, rectheight1);
    rect(505, 105, rectWidth1, rectheight2);
    rect(90, 134, rectWidth9, rectheight1);
    rect(90, 134, rectWidth1, rectheight11);
    rect(135, 134, rectWidth1, rectheight9);
    rect(505, 135, rectWidth10, rectheight1);
    rect(505, 165, rectWidth10, rectheight1);
    rect(505, 195, rectWidth10, rectheight1);
    rect(785, 135, rectWidth1, rectheight2);
    rect(505, 165, rectWidth1, rectheight2);
    rect(470, 70, rectWidth1, rectheight5);
    rect(435, 70, rectWidth11, rectheight1);
    rect(90, 415, rectWidth12, rectheight1);
    rect(135, 375, rectWidth12, rectheight1);
    rect(220, 295, rectWidth13, rectheight1);
    rect(177, 330, rectWidth14, rectheight1);
    rect(90, 455, rectWidth15, rectheight1); 
    rect(51, 490, rectWidth16, rectheight1);
    rect(685, 356, rectWidth1, rectheight5);
    rect(720, 356, rectWidth1, rectheight7);
}

function keyPressed() {
	background("#f0eeee");
}



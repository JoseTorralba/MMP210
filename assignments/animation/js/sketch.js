/* Text */
var x = -1215;      // 'Jose Torralba'
var x2 = 1950;      // 'Graphic Design'
var y = 900;        // '|'

/* Left Side Rects */
var x3 = -225;      // redRect1
var x4 = -220;      // blackRect1

/*Right Side Rects */
var x5 = 1060;      // redRect2
var x6 = 1030;      // blackRect2

/* Speed */
var xSpeed1 = 8;
var xSpeed2 = 4;
var ySpeed = 4;

function setup() {
    var canvas = createCanvas(900, 500);
    canvas.parent('sketch-holder');
}
function draw() {
    var backgroundColor = color('white');
    var black = color('black');
    var white = color('white');
    var red = color('red');

    var redRect1 = {
        y: 170,
        width: 61,
        height: 120
    };

    var redRect2 = {
        y: 170,
        width: 61,
        height: 120
    };

    var blackRect1 = {
        y: 175,
        width: 85,
        height: 100
    };

    var blackRect2 = {
        y: 175,
        width: 85,
        height: 100
    };

    var whiteArc = {
        x: 395,
        y: 237,
        width: 100,
        height: 70,
        angle: 0
    };

    var rotatedRect1 = {
        x: -58,
        y: -75,
        width: 40,
        height: 100
    };

    var rotatedRect2 = {
        x: 10,
        y: -75,
        width: 40,
        height: 125
    };

    var rotatedRect3 = {
        x: -100,
        y: -100,
        width: 180,
        height: 40
    };

    var blackEllipse = {
        xy: 0,
        width: 100,
        height: 300
    };

    var redEllipse = {
        x: 155,
        y: 0,
        width: 10,
        height: 40
    };
    
    var backgroundRect1 = {
        x: 0,
        y: 400,
        height: 100
    };

    var backgroundRect2 = {
        x: 0,
        y: 170,
        width: 280,
        height: 120
    };

    var backgroundRect3 = {
        x: 640,
        y: 170,
        width: 280,
        height: 120
    };

    var thinRect = {
        x: 225,
        y: 395,
        width: 450,
        height: 1
    };

    /* Thin line between Logo & Text */

    fill(black);
    rect(thinRect.x, thinRect.y, thinRect.width, thinRect.height);

    /* Prevents Text Doing Weird Effect */

    fill(backgroundColor);
    rect(backgroundRect1.x, backgroundRect1.y, width, backgroundRect1.height);
    fill(black);

    /* Text Animation */

    textFont('Arial');
    textSize(25);

    text("Jose Torralba", x, 430);
    x = x + xSpeed1;

    if (x > 280) {
        x = 280;
    }
    

    text("|", 440, y);
    y = y - ySpeed;
    
    if (y < 430) {
        y = 430;
    }
    

    text("Graphic Designer", x2, 430);
    x2 = x2 - xSpeed1;

    if (x2 < 450) {
        x2 = 450;
    }

    /* Logo Shape Animation */

    /* Prevents Rects doing weird effect */

    noStroke();
    fill(backgroundColor);
    rect(backgroundRect2.x, backgroundRect2.y, backgroundRect2.width, backgroundRect2.height);
    rect(backgroundRect3.x, backgroundRect3.y, backgroundRect3.width, backgroundRect3.height);

    /* Red & Black Rects Left Side */


    fill(red);
    rect(x3, redRect1.y, redRect1.width, redRect1.height);

    x3 = x3 + xSpeed2;
    
    if (x3 > 245) {
        x3 = 245;
    }

    fill(black);
    rect(x4, blackRect1.y, blackRect1.width, blackRect1.height);

    x4 = x4 + xSpeed2;
    
    if (x4 > 250) {
        x4 = 250;
    }

    /* Red & Black Rects Right Side */

    fill(red);
    rect(x5, redRect2.y, redRect2.width, redRect2.height);

    x5 = x5 - xSpeed2;

    if (x5 < 594) {
        x5 = 594;
    }

    fill(black);
    rect(x6, blackRect2.y, blackRect2.width, blackRect2.height);

    x6 = x6 - xSpeed2;
    if (x6 < 565) {
        x6 = 565;
    }

    /* Black Ellipse Rotating */

	fill(black);

	push();

	translate(width / 2, 220);
	rotate(frameCount * PI / 100);
	ellipse(blackEllipse.xy, blackEllipse.xy, blackEllipse.width, blackEllipse.height);

	pop();

    /* Red Ellipse Rotating */

	fill(red);
	push();

	translate(width / 2, 220);
	rotate(frameCount * PI / 55);
	ellipse(redEllipse.x, redEllipse.y, redEllipse.width, redEllipse.height);

	pop();

    /* 'JT' Logo */

    fill(white);
    arc(whiteArc.x, whiteArc.y, whiteArc.height, whiteArc.width, whiteArc.angle, PI + QUARTER_PI, PIE);

    translate(width / 2, height / 2);
    rotate(PI / 8.0);

    rect(rotatedRect1.x, rotatedRect1.y, rotatedRect1.width, rotatedRect1.height);
    rect(rotatedRect2.x, rotatedRect2.y, rotatedRect2.width, rotatedRect2.height);
    rect(rotatedRect3.x, rotatedRect3.y, rotatedRect3.width, rotatedRect3.height);
}
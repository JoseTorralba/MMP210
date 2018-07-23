function setup() {
    var canvas = createCanvas(900, 500);
    canvas.parent('sketch-holder');
    background('white');

    var black = color('black');
    var white = color('white');
    var red = color('red');
    var redEllipsewidth = 275;
    var redEllipseheight = 275;
    var redRectwidth = 410;
    var redRectheight = 120;
    var blackRectwidth = 400;
    var blackRectheight = 100;
    var blackEllipsewidth = 260;
    var blackEllipseheight = 260;
    var whiteArcwidth = 100;
    var whiteArcheight = 80;
    var whiteArcangle = 0;
    var rotatedRect1widht = 40;
    var rotatedRect1height = 100;
    var rotatedRect2widht = 40;
    var rotatedRect2height = 125;
    var rotatedRect3widht = 180;
    var rotatedRect3height = 40;
    var thinRectwidth = 400;
    var thinRectheight = 1;

    /* Text */
    textSize(25);
    fill(black);
    text("Jose Torralba | Graphic Designer", 270, 395);
    rect(250, 365, thinRectwidth, thinRectheight);

    /* Logo Background*/

    noStroke();
    fill(red);
    ellipse(450, 215, redEllipsewidth, redEllipseheight);
    rect(245, 170, redRectwidth, redRectheight);

    fill(black);
    rect(250, 175, blackRectwidth, blackRectheight);
    ellipse(450, 215, blackEllipsewidth, blackEllipseheight);

    /* Logo */

    fill(white);
    arc(391, 237, whiteArcheight, whiteArcwidth, whiteArcangle, PI + QUARTER_PI, PIE);

    translate(width / 2, height / 2);
    rotate(PI / 8.0);

    rect(-58, -75, rotatedRect1widht, rotatedRect1height);
    rect(10, -75, rotatedRect2widht, rotatedRect2height);
    rect(-100, -100, rotatedRect3widht, rotatedRect3height);
}
function draw() {
}
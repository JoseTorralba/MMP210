function setup() {
    var canvas = createCanvas(350, 600);
    canvas.parent('sketch-holder');
}
function draw() {
    background('#f0eeee');

    var backgroundColor = color('#f0eeee');
    var black = color('black');
    var blue = color('blue');
    var lightGray = color('#dfebda');
    var gray = color('#96a193');

    var curtainColor = {
        space: 30,
        x: 80,
        width: 80,
        height: 30
    };

    var backgroundRect = {
        x: 15,
        y: 40,
        width: 60,
        height: 420
    };

    var leftCurtain = {
        space: 30,
        x: 160,
        width: 5,
        height: 30
    };

    var lampBase = {
        x: 210,
        y: 355,
        width: 35,
        height: 10,
        radius: 3
    };

    var lampStick = {
        x: 227,
        y: 340,
        width: 10,
        height: 50
    };

    var lampHead = {
        //Top Left
        x1: 215,
        y1: 290,
        // Bottom Left
        x2: 200,
        y2: 320,
        // Bottom Right
        x3: 255,
        y3: 320,
        // Top Right
        x4: 240,
        y4: 290
    };

    var outlineUpper = {
        space: 5,
        x: 47,
        width: 260,
        height: 5
    };

    var outlineLower = {
        space: 5,
        x: 55,
        width: 240,
        height: 5
    };

    var windowHorizontal = {
        space: 100,
        x: 75,
        width: 200,
        height: 5
    };

    var windowVertical = {
        space: 100,
        y: 40,
        width: 5,
        height: 400
    };

    var airConditioner1 = {
        x: 180,
        y: 365,
        width: 95,
        height: 75
    };

    var airConditioner2 = {
        x: 185,
        y: 370,
        width: 85,
        height: 65
    };

    var verticalAC = {
        space: 3,
        y: 370,
        width: 1,
        height: 65
    };

    var horizontalAC = {
        space: 2,
        x: 185,
        width: 85,
        height: 1
    };

    /* Curtain Color */
    fill(blue);

    for (var y = 40; y < 431; y += curtainColor.space) {

        rect(curtainColor.x, y, curtainColor.width, curtainColor.height);

        curtainColor.x = curtainColor.x - 5
    }

    /* Hides Curtain Color Sticking Out */

    fill(backgroundColor);

    rect(backgroundRect.x, backgroundRect.y, backgroundRect.width, backgroundRect.height);


    /* Left Curtain */

    fill(black);

    for (var y = 40; y < 431; y += leftCurtain.space) {

        rect(leftCurtain.x, y, leftCurtain.width, leftCurtain.height);

        leftCurtain.x = leftCurtain.x - 5
    }

    /* Lamp */

    quad(lampHead.x1, lampHead.y1, lampHead.x2, lampHead.y2, lampHead.x3, lampHead.y3, lampHead.x4, lampHead.y4);

    ellipse(lampStick.x, lampStick.y, lampStick.width, lampStick.height);

    rect(lampBase.x, lampBase.y, lampBase.width, lampBase.height, lampBase.radius);


    /* mouseX Color */

    fill(mouseX);

    var columnNum = 100;
    var columnSize = width/columnNum;

    for (var x = 80; x <= 275; x += columnSize) {


        // Right
        if (x < mouseX) {
            fill(mouseX - x, 220, 20, 100);


        // Left
        } else {
            fill(x - mouseX, 100, 303, 100);
        }

        rect(x, 40, columnSize, 400);
    }

    /* Window Outline */

    /* Horizontal Upper */

    fill(black);

    for (var y = 15; y < 36; y += outlineUpper.space) {
        rect(outlineUpper.x, y, outlineUpper.width, outlineUpper.height);
        
        outlineUpper.width = outlineUpper.width - 10
        outlineUpper.x = outlineUpper.x + 5
    }

    /* Horizontal Lower*/

    for (var y = 440; y < 501; y += outlineLower.space) {
        rect(outlineLower.x, y, outlineLower.width, outlineLower.height);

        outlineLower.x = outlineLower.x + 5
        outlineLower.width = outlineLower.width - 10
    }

    /* Window Grid */

    /* Horizontal Lines */

    for (var y = 140; y < 341; y += windowHorizontal.space) {
        rect(windowHorizontal.x, y, windowHorizontal.width, windowHorizontal.height);
    }

    /* Vertical Lines */

    for (var x = 75; x < 551; x += windowVertical.space) {
        rect(x, windowVertical.y, windowVertical.width, windowVertical.height);
    }

    /* Air Conditioner */

    noStroke();
    fill(lightGray);
    rect(airConditioner1.x, airConditioner1.y, airConditioner1.width, airConditioner1.height);
    
    fill(gray);
    rect(airConditioner2.x, airConditioner2.y, airConditioner2.width, airConditioner2.height);

    /* Vertical Lines in Back of Air Conditioner */

    fill(black);
    for (var x = 185; x < 271; x += verticalAC.space) {
        rect(x, verticalAC.y, verticalAC.width, verticalAC.height);
    }

    /* Horizontal Lines in Air Conditioner */

    for (var y = 370; y < 436; y += horizontalAC.space) {
        rect(horizontalAC.x, y, horizontalAC.width, horizontalAC.height);
    }
}
function setup() {
    var canvas = createCanvas(900, 500);
    canvas.parent('sketch-holder');
    design();
}
function design() {

  //  var backgroundColor = color('#f0eeee');

    background('#00CC00');

    var ornamentCap = {
        diameter: 20,
        xOffset: 6,
        yOffset: 6
    };

    var ornamentHanger = {
        width: 1,
        height: 10,
        offSet: 14
    };

    var ornament = {
        diameter: 30
    };

    var snowmanHead = {
        yOffset: 20,
        diameter: 25
    };

    var snowmanBody = {
        diameter: 30
    };

    var snowmanEyes = {
        diameter: 4,
        xOffset: 5,
        yOffset: 20
    };

    var gingerbreadHead = {
        diameter: 30,
    };

    var gingerbreadEyes = {
        diameter: 5,
        xOffset: 6,
        yOffset: 2
    };

    var gingerbreadMouth = {
        xOffset: 5,
        yOffset: 3,
        width: 10,
        height: 5,
        radius: 14
    };

    var christmasPresent = {
        width: 30,
        height: 30,
        radius: 2
    };

    var presentTop = {
        xOffset: 4,
        width: 38,
        height: 10,
        radius: 2
    };

     var presentRibbon = {
        xOffset: 7.5,
        width: 15,
        height: 30,

    };

     var presentShadow = {
        xOffset: 4,
        yOffset: 5,
        width: 38,
        height: 5,
        radius: 2
    };

    var columnNum = 40;
    var rowNum = 30;
    var columnSize = 60;
    var rowSize = 60;
            
    var outcome = random(4);

    for (var x = 25; x <= width; x += columnSize) {
        for (var y = 0; y <= height; y += rowSize) {

            if (outcome < 1) {

                var r = random(255, 230);
                var g = random(255, 10);
                var b = random(255, 10);

                /* Ornament Cap */
                noStroke();
                fill('gray');
                ellipse(x - ornamentCap.xOffset, y - ornamentCap.yOffset, ornamentCap.diameter);

                /* Ornament Hanger */
                noFill();
                stroke('gray');
                ellipse(x - ornamentHanger.offSet, y - ornamentHanger.offSet, ornamentHanger.width, ornamentHanger.height);

                /* Ornament */
                fill(r, g ,b);
                noStroke();
                ellipse(x, y, ornament.diameter);

            } else if (outcome < 2) {

                /* Snowman Body */
                fill('white');
                noStroke();
                ellipse(x, y - snowmanHead.yOffset, snowmanHead.diameter);
                ellipse(x, y, snowmanBody.diameter);

                /* Snowman Eyes*/
                fill('black');
                ellipse(x - snowmanEyes.xOffset, y - snowmanEyes.yOffset, snowmanEyes.diameter);    // Left Eye
                ellipse(x + snowmanEyes.xOffset, y - snowmanEyes.yOffset, snowmanEyes.diameter);    // Right Eye

                //Will Add a Hat to show that it's changing

            } else if (outcome < 3) {

                // Still working on color!!

                var r = random(255, 238);
                var g = random(255, 10);
                var b = random(0, 14);

                /* Ginger Bread Head */
                fill(r, g, b);
                noStroke();
                ellipse(x, y, gingerbreadHead.diameter);

                /* Ginger Bread Eyes */
                fill('black')
                ellipse(x - gingerbreadEyes.xOffset, y - gingerbreadEyes.yOffset, gingerbreadEyes.diameter);    // Left
                ellipse(x + gingerbreadEyes.xOffset, y - gingerbreadEyes.yOffset , gingerbreadEyes.diameter);   // Right

                /* Ginger Bread Mouth */
                fill('red');
                rect(x - gingerbreadMouth.xOffset, y + gingerbreadMouth.yOffset, gingerbreadMouth.width, gingerbreadMouth.height, gingerbreadMouth.radius);

            } else {

                var r = random(155, 255);
                var g = random(10, 50);
                var b = random(100, 50);

                /* Christmas Present */
                fill(r, g, b);
                noStroke();
                rect(x, y, christmasPresent.width, christmasPresent.height, christmasPresent.radius);

                /* Present Top */
                fill('white')
                rect(x - presentTop.xOffset, y, presentTop.width, presentTop.height, presentTop.radius);

                /* Ribbon */
                fill('#fdd340');
                rect(x + presentRibbon.xOffset, y, presentRibbon.width, presentRibbon.height);

                /* Shadow */
                fill(0, 40);
                rect(x - presentShadow.xOffset, y + presentShadow.yOffset, presentShadow.width, presentShadow.height, presentShadow.radius);

            }
        } // for var (y)
    } // for var (x)
}
function mouseClicked() {
	design();
}
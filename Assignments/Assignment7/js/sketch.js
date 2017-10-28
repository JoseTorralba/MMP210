function setup() {
    var canvas = createCanvas(900, 500);
    canvas.parent('sketch-holder');
    background('#f0eeee');
    noStroke();
}
function draw() {

    var halfEllipse = {
        xOffset: 32.5,
        width: 65,
        height: 80
    };

    var yellowBackground = {
        xOffset: 5,
        width: 55,
        height: 120
    };

    var leftCurtain = {
        width: 5,
        height: 15
    };

    var rightCurtain = {
        width: 5,
        height: 15
    };

    var verticalLines = {
        width: 5,
        height: 120
    };

    var horizontalLines = {
        width: 60,
        height: 5
    };

    var columnNum = 5;
    var rowNum = 2;
    var columnSize = width / columnNum;
    var rowSize = height / rowNum;

    for (var x = 50; x <= width; x += columnSize) {
        for (var y = 70; y <= height; y += rowSize) {

            /* Top of Window */
            fill('black');
            ellipse(x + halfEllipse.xOffset, y, halfEllipse.width, halfEllipse.height);

            /* Yellow Background */
            fill('yellow');
            rect(x + yellowBackground.xOffset, y, yellowBackground.width, yellowBackground.height);

            /* Left Curtain */
            fill('purple');
            rect(x + 20, y, leftCurtain.width, leftCurtain.height);
            rect(x + 15, y, leftCurtain.width, leftCurtain.height + 10);
            rect(x + 10, y, leftCurtain.width, leftCurtain.height + 20);
            rect(x + 5, y, leftCurtain.width, leftCurtain.height + 45);

            /* Right Curtain */
            rect(x + 40, y, rightCurtain.width, rightCurtain.height);
            rect(x + 45, y, rightCurtain.width, rightCurtain.height + 10);
            rect(x + 50, y, rightCurtain.width, rightCurtain.height + 20);
            rect(x + 55, y, rightCurtain.width, rightCurtain.height + 45);

            /* Vertical Lines on Window Left - Right */
            fill('black');
            rect(x, y, verticalLines.width, verticalLines.height);
            rect(x + 30, y, verticalLines.width, verticalLines.height);
            rect(x + 60, y, verticalLines.width, verticalLines.height);

            /* Horizontal Lines on Window Top - Bottom */
            rect(x, y + 30, horizontalLines.width, horizontalLines.height);
            rect(x, y + 70, horizontalLines.width, horizontalLines.height);

            /* Horizontal Lines for Bottom of Window */
            rect(x - 5, y + 120, horizontalLines.width + 15, horizontalLines.height);
            rect(x - 10, y + 125, horizontalLines.width + 25, horizontalLines.height);
            rect(x - 10, y + 130, horizontalLines.width + 25, horizontalLines.height);
            rect(x - 10, y + 135, horizontalLines.width + 25, horizontalLines.height);
        }  // var x
    }   // var y
}
function setup() {
    var canvas = createCanvas(900, 500);
    canvas.parent('sketch-holder');
    background('#f0eeee');
    noStroke();

    textSize(20);
    text(" Function in a Loop", 30, 30);

    var columnNum = 5;
    var rowNum = 1;
    var columnSize = width / columnNum;
    var rowSize = height / rowNum;

    for (var x = 35; x <= width; x += columnSize) {
        for (var y = 70; y <= height; y += rowSize) {

		  myWindow(x, y, 50, 50, 5);

        }   // var y
    }   // var x

    textSize(20);
    text(" Function Size Variations", 30, height/2);

    myWindow(60, 300, 10, 10, 1);

    myWindow(100, 300, 20, 20, 1);

    myWindow(160, 300, 30, 30, 2);

    myWindow(220, 300, 40, 40, 2);

    myWindow(300, 300, 50, 50, 5);

    myWindow(400, 300, 300, 50, 5);

    myWindow(760, 300, 50, 80, 5);
}

function myWindow(x, y, w, h, m) {
    /* Black Ellipse */
    ellipse(x + m / 2 + w / 2,
         y,
         w + m * 1,
         h);

    /* Black Background */
    rect(x,
         y,
         w + m * 1,
         h + h);

    /* Yellow Background For Windows */
    fill('yellow');

    /* Top Left Window */
	rect(x + m / 2,
         y + m,
         w / 2 - m / 2,
         h / 2 - m / 2);

    /* Top Right Window */
	rect(x + m + w / 2,
         y + m,
         w / 2 - m / 2,
         h / 2 - m / 2);

    /* Bottom Left Window */
	rect(x + m / 2,
         y + m + h / 2,
         w / 2 - m / 2,
         h / 2 - m / 2);

    /* Bottom Right Window */
	rect(x + m + w / 2,
         y + m + h / 2,
         w / 2 - m / 2,
         h / 2 - m / 2);

    /* 2nd Bottom Left Window */
	rect(x + m / 2,
         y + m + h,
         w / 2 - m / 2,
         h - m / 2);

    /* 2nd Bottom Right Window */
	rect(x + m + w / 2,
         y + m + h,
         w / 2 - m / 2,
         h - m / 2);

    /* Bottom of Window - work on */
    fill('black');
    rect(x - m / 2,
         y + h * 2,
         w + m * 2,
         h / 4);

    rect(x - m / 1,
         y + h * 2.2,
         w + m * 3,
         h / 4);
}
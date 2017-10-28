function setup() {
    var canvas = createCanvas(900, 500);
    canvas.parent('sketch-holder');
    background('white');
    noStroke();

    var columnNum = 5;
    var rowNum = 1;
    var columnSize = width / columnNum;
    var rowSize = height / rowNum;

    for (var x = 35; x <= width; x += columnSize) {
        for (var y = 80; y <= height; y += rowSize) {


		  myWindow(x, y, 100, 100, 10);


        }   // var y
    }   // var x
}

function myWindow(x, y, w, h, m) {

    /* Black Ellipse - work on */
    ellipse(x + 55,
            y,
            w + 10,
            h + 30)

    /* Black Background */
    rect(x,
         y,
         w + 10,
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
    rect(x - 5,
         y + 200,
         w + 20,
         h - 90);

    rect(x - 10,
         y + 210,
         w + 30,
         h - 80);
}
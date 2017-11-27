function setup() {
    var canvas = createCanvas(900, 500);
    canvas.parent('sketch-holder');
    background('white');

    var white = color('white');
    var black = color('black');
    var darkbrown = color('#5C4535');
    var lightbrown = color('#7B622A');
    var darkishorange = color('#C78419');
    var lightblue = color('#7592CA');
    var blue = color('#2160AF');
    var lightpink = color('#F5CDC7');
    var brightyellow = color('#FFFD9F');
    var gray = color('#565656');
    var ps4Blue = color('#003791');
    var darkGray = color('#2C2C30');
    var lightGray = color('#969696');

/* TV */

    fill(black);
    ellipse(450, 260, 20, 50);
    rect(250, 20, 400, 230);
    rect(250, 275, 400, 10);

    fill(white);
    rect(260, 30, 380, 210);

/* Furniture */

    fill(gray);
    rect(170, 286, 550, 160);

    fill(lightGray);
    rect(190, 300, 510, 75);

    fill(gray);
    rect(440, 300, 20, 75);

/*PS4*/

    fill(gray);
    quad(515, 373, 625, 373, 620, 360, 520, 360);
    quad(520, 357, 620, 357, 615, 345, 525, 345);

    fill(darkGray);
    rect(525, 357, 90, 2);
    quad(520, 357, 560, 357, 560, 345, 525, 345);

    textSize(9);
    fill(black);
    text("PS4", 595, 354);

/* Game Box */

    fill(ps4Blue);
    rect(190, 300, 10, 75, 3);
    rect(200, 300, 10, 75, 3);
    rect(210, 300, 10, 75, 3);
    rect(220, 300, 10, 75, 3);
    rect(230, 300, 10, 75, 3);
    rect(240, 300, 10, 75, 3);
    rect(250, 300, 10, 75, 3);
    rect(260, 300, 10, 75, 3);
    rect(270, 300, 10, 75, 3);
    rect(280, 300, 10, 75, 3);
    rect(290, 300, 10, 75, 3);
    rect(300, 300, 10, 75, 3);
    rect(310, 300, 10, 75, 3);
    rect(320, 300, 10, 75, 3);
    rect(330, 300, 10, 75, 3);
    rect(340, 300, 10, 75, 3);
    rect(350, 300, 10, 75, 3);

    fill(white);
    rect(190, 318, 10, 50);
    rect(200, 318, 10, 50);
    rect(210, 318, 10, 50);
    rect(220, 318, 10, 50);
    rect(230, 318, 10, 50);
    rect(240, 318, 10, 50);
    rect(250, 318, 10, 50);
    rect(260, 318, 10, 50);
    rect(270, 318, 10, 50);
    rect(280, 318, 10, 50);
    rect(290, 318, 10, 50);
    rect(300, 318, 10, 50);
    rect(310, 318, 10, 50);
    rect(320, 318, 10, 50);
    rect(330, 318, 10, 50);
    rect(340, 318, 10, 50);
    rect(350, 318, 10, 50);

/* Menu Screen */

    fill(black);
    rect(270, 180, 20, 20);
    rect(270, 210, 20, 20);
    rect(270, 198, 240, 2);
    rect(270, 228, 240, 2);

    fill(brightyellow);
    rect(273.5, 183.5, 13, 13);
    rect(273.5, 213.5, 13, 13);

/* Kingdom Hearts Title/Options */

    textSize(30);
    fill(black);
    text("Kingdom Hearts", 270, 110);

    textSize(18);
    text("NEW GAME", 295, 196);
    text("LOAD", 295, 226);

/* Sora (CoM Sprite) */

    noStroke();
    fill(black);
    rect(550, 50, 5, 5);
    rect(550, 55, 5, 5);
    rect(550, 60, 5, 5);
    rect(555, 50, 5, 5);
    rect(545, 55, 5, 5);
    rect(540, 55, 5, 5);
    rect(560, 55, 5, 5);
    rect(535, 60, 5, 5);
    rect(530, 55, 5, 5);
    rect(585, 100, 5, 5);
    rect(580, 100, 5, 5);
    rect(575, 100, 5, 5);
    rect(530, 55, 5, 5);
    rect(570, 60, 5, 5);
    rect(570, 65, 5, 5);
    rect(605, 95, 5, 5);
    rect(605, 100, 5, 5);
    rect(600, 100, 5, 5);
    rect(595, 100, 5, 5);
    rect(520, 115, 5, 5);
    rect(520, 105, 5, 5);
    rect(520, 100, 5, 5);
    rect(515, 100, 5, 5);
    rect(510, 100, 5, 5);
    rect(580, 65, 5, 5);
    rect(585, 70, 5, 5);
    rect(590, 75, 5, 5);
    rect(590, 80, 5, 5);
    rect(590, 75, 5, 5);
    rect(590, 80, 5, 5);
    rect(595, 85, 5, 5);
    rect(600, 90, 5, 5);
    rect(590, 105, 5, 5);
    rect(590, 110, 5, 5);
    rect(590, 115, 5, 5);
    rect(585, 110, 5, 5);
    rect(580, 110, 5, 5);
    rect(580, 115, 5, 5);
    rect(580, 120, 5, 5);
    rect(565, 130, 5, 5);
    rect(545, 130, 5, 5);
    rect(540, 125, 5, 5);
    rect(535, 120, 5, 5);
    rect(530, 115, 5, 5);
    rect(530, 110, 5, 5);
    rect(525, 110, 5, 5);
    rect(505, 95, 5, 5);
    rect(510, 90, 5, 5);
    rect(515, 85, 5, 5);
    rect(520, 85, 5, 5);
    rect(520, 80, 5, 5);
    rect(525, 75, 5, 5);
    rect(520, 70, 5, 5);
    rect(530, 65, 5, 5);
    rect(535, 65, 5, 5);
    rect(540, 65, 5, 5);
    rect(545, 65, 5, 5);
    rect(555, 65, 5, 5);
    rect(560, 75, 5, 5);
    rect(560, 80, 5, 5);
    rect(570, 70, 5, 5);
    rect(560, 70, 5, 5);
    rect(555, 70, 5, 5);
    rect(550, 70, 5, 5);
    rect(535, 80, 5, 5);
    rect(530, 80, 5, 5);
    rect(530, 85, 5, 5);
    rect(540, 85, 5, 5);
    rect(545, 85, 5, 5);
    rect(550, 85, 5, 5);
    rect(575, 85, 5, 5);
    rect(580, 90, 5, 5);
    rect(565, 90, 5, 5);
    rect(545, 90, 5, 5);
    rect(525, 90, 5, 5);
    rect(520, 95, 5, 5);
    rect(540, 95, 5, 5);
    rect(545, 95, 5, 5);
    rect(560, 95, 5, 5);
    rect(570, 95, 5, 5);
    rect(585, 95, 5, 5);
    rect(555, 100, 5, 5);
    rect(545, 100, 5, 5);
    rect(535, 100, 5, 5);
    rect(530, 105, 5, 5);
    rect(540, 105, 5, 5);
    rect(545, 105, 5, 5);
    rect(555, 105, 5, 5);
    rect(565, 105, 5, 5);
    rect(570, 105, 5, 5);
    rect(580, 105, 5, 5);
    rect(565, 110, 5, 5);
    rect(550, 110, 5, 5);
    rect(545, 110, 5, 5);

    fill(darkbrown);
    rect(535, 55, 5, 5);
    rect(540, 60, 5, 5);
    rect(545, 60, 5, 5);
    rect(555, 60, 5, 5);
    rect(565, 60, 5, 5);
    rect(575, 65, 5, 5);
    rect(580, 70, 5, 5);
    rect(585, 75, 5, 5);
    rect(590, 100, 5, 5);
    rect(575, 120, 5, 5);
    rect(570, 125, 5, 5);
    rect(560, 130, 5, 5);
    rect(550, 130, 5, 5);
    rect(520, 110, 5, 5);
    rect(510, 95, 5, 5);
    rect(515, 90, 5, 5);
    rect(525, 80, 5, 5);
    rect(525, 70, 5, 5);
    rect(550, 65, 5, 5);
    rect(560, 65, 5, 5);
    rect(575, 70, 5, 5);
    rect(545, 70, 5, 5);
    rect(530, 75, 5, 5);
    rect(550, 75, 5, 5);
    rect(555, 75, 5, 5);
    rect(565, 75, 5, 5);
    rect(570, 75, 5, 5);
    rect(575, 75, 5, 5);
    rect(580, 75, 5, 5);
    rect(580, 80, 5, 5);
    rect(575, 80, 5, 5);
    rect(570, 80, 5, 5);
    rect(565, 80, 5, 5);
    rect(555, 80, 5, 5);
    rect(545, 80, 5, 5);
    rect(540, 80, 5, 5);
    rect(525, 85, 5, 5);
    rect(535, 85, 5, 5);
    rect(555, 85, 5, 5);
    rect(560, 85, 5, 5);
    rect(565, 85, 5, 5);
    rect(580, 85, 5, 5);
    rect(585, 85, 5, 5);
    rect(560, 90, 5, 5);
    rect(550, 90, 5, 5);
    rect(540, 90, 5, 5);
    rect(525, 95, 5, 5);
    rect(535, 95, 5, 5);
    rect(590, 95, 5, 5);
    rect(570, 100, 5, 5);
    rect(575, 95, 5, 5);
    rect(530, 100, 5, 5);
    rect(550, 105, 5, 5);
    rect(575, 110, 5, 5);
    rect(535, 110, 5, 5);

    fill(lightbrown);
    rect(555, 55, 5, 5);
    rect(560, 60, 5, 5);
    rect(590, 85, 5, 5);
    rect(595, 90, 5, 5);
    rect(600, 95, 5, 5);
    rect(565, 125, 5, 5);
    rect(555, 130, 5, 5);
    rect(545, 125, 5, 5);
    rect(535, 115, 5, 5);
    rect(530, 70, 5, 5);
    rect(565, 65, 5, 5);
    rect(565, 70, 5, 5);
    rect(540, 70, 5, 5);
    rect(535, 70, 5, 5);
    rect(535, 75, 5, 5);
    rect(540, 75, 5, 5);
    rect(545, 75, 5, 5);
    rect(585, 80, 5, 5);
    rect(550, 80, 5, 5);
    rect(570, 85, 5, 5);
    rect(590, 90, 5, 5);
    rect(585, 90, 5, 5);
    rect(575, 90, 5, 5);
    rect(570, 90, 5, 5);
    rect(555, 90, 5, 5);
    rect(535, 90, 5, 5);
    rect(530, 90, 5, 5);
    rect(520, 90, 5, 5);
    rect(515, 95, 5, 5);
    rect(530, 95, 5, 5);
    rect(550, 95, 5, 5);
    rect(555, 95, 5, 5);
    rect(565, 95, 5, 5);
    rect(580, 95, 5, 5);
    rect(595, 95, 5, 5);
    rect(560, 100, 5, 5);
    rect(550, 100, 5, 5);
    rect(525, 100, 5, 5);
    rect(525, 105, 5, 5);
    rect(535, 105, 5, 5);
    rect(575, 105, 5, 5);
    rect(585, 105, 5, 5);
    rect(555, 110, 5, 5);

    fill(lightpink);
    rect(555, 125, 5, 5);
    rect(555, 115, 5, 5);
    rect(560, 115, 5, 5);
    rect(565, 120, 5, 5);
    rect(560, 120, 5, 5);
    rect(555, 120, 5, 5);
    rect(550, 120, 5, 5);
    rect(545, 120, 5, 5);
    rect(560, 110, 5, 5);

    fill(darkishorange);
    rect(570, 120, 5, 5);
    rect(540, 120, 5, 5);
    rect(565, 100, 5, 5);
    rect(540, 100, 5, 5);
    rect(560, 105, 5, 5);
    rect(575, 115, 5, 5);
    rect(550, 125, 5, 5);
    rect(560, 125, 5, 5);
    rect(550, 115, 5, 5);

    fill(white);
    rect(570, 110, 5, 5);
    rect(540, 110, 5, 5);

    fill(blue);
    rect(545, 115, 5, 5);
    rect(565, 115, 5, 5);

    fill(lightblue);
    rect(570, 115, 5, 5);
    rect(540, 115, 5, 5);

/* Rotated Titles of Games */

    translate(width / 2, height / 2);
    rotate(PI / 2.0);
    
    textSize(6);
    fill(black);

    text("Kingdom Hearts", 72, 257);
    text("Final Fantasy xv", 72, 247);
    text("Persona 5", 80, 237);
    text("Fallout 4", 82, 227);
    text("NieR: Automata", 72, 217);
    text("Skyrim", 85, 207);
    text("Resident Evil", 76, 197);
    text("Resident Evil 4", 72, 187);
    text("Resident Evil 5", 72, 177);
    text("Resident Evil 6", 72, 167);
    text("Resident Evil 7", 72, 157);
    text("The Evil Within", 72, 147);
    text("Bloodborne", 72, 137);
    text("Dark Souls III", 76, 127);
    text("Black Ops III", 77, 117);
    text("Uncharted 4", 78, 107);
    text("Final Fantasy X", 72, 97);

    textSize(6);
    fill(white);
    text("PS4", 55, 257);
    text("PS4", 55, 247);
    text("PS4", 55, 237);
    text("PS4", 55, 227);
    text("PS4", 55, 217);
    text("PS4", 55, 207);
    text("PS4", 55, 197);
    text("PS4", 55, 187);
    text("PS4", 55, 177);
    text("PS4", 55, 167);
    text("PS4", 55, 157);
    text("PS4", 55, 147);
    text("PS4", 55, 137);
    text("PS4", 55, 127);
    text("PS4", 55, 117);
    text("PS4", 55, 107);
    text("PS4", 55, 97);
}
function draw() {
}
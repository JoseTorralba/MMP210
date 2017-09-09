var myFont;
function preload() {
    myFont = loadFont('font/Kingdom_Hearts_Font.ttf');
    myFont2 = loadFont('font/KH2_menu_font.ttf')
}

function setup() {
    var canvas = createCanvas(900, 500);
    
    canvas.parent('sketch-holder');
    background('#f5f5dc');

    var white = color ('white');
    var black = color ('black');
    var darkbrown = color('#5c4535');
    var lightbrown = color ('#7b622a');
    var darkishorange = color('#c78419');
    var lightblue = color ('#7592ca');
    var blue = color ('#2160af');
    var lightpink = color ('#f5cdc7');
    var brightyellow = color('#FFFD9F');




/* TV */

    fill(black);
    ellipse(450, 260, 20, 50);

    fill(black);
    rect(250, 20, 400, 230);

    fill(white);
    rect(260, 30, 380, 210);

    fill(black);
    rect(250, 275, 400, 10);


    
    
/* Menu Screen */

    fill(black);
    rect(270, 180, 20, 20);

    fill(black);
    rect(270, 210, 20, 20);

    fill(brightyellow);
    rect(273.5, 183.5, 13, 13);

    fill(brightyellow);
    rect(273.5, 213.5, 13, 13);

    fill(black);
    rect(270, 198, 240, 2);

    fill(black);
    rect(270, 228, 240, 2);




/* Kingdom Hearts Title/Options Font */

    textFont(myFont);
    textSize(55);
    fill('black');
    text("Kingdom Hearts", 270, 110);

    textSize(40)
    text("/", 385, 135);
    
    textFont(myFont2)
    textSize(15)
    text("NEW GAME", 295, 195)
    
    textFont(myFont2)
    textSize(15)
    text("LOAD GAME", 295, 225)


/* Sora (CoM Sprite) */

    noStroke()

    fill(black);
    rect(550, 50, 5, 5);
    
    fill(black);
    rect(550, 55, 5, 5);

    fill(black);
    rect(550, 60, 5, 5);
    
    fill(black);
    rect(555, 50, 5, 5);

    fill(black);
    rect(545, 55, 5, 5);
    
    fill(black);
    rect(540, 55, 5, 5);
    
    fill(darkbrown);
    rect(535, 55, 5, 5);

    fill(black);
    rect(530, 55, 5, 5);

    fill(lightbrown);
    rect(555, 55, 5, 5);

    fill(black);
    rect(560, 55, 5, 5);

    fill(black);
    rect(535, 60, 5, 5);

    fill(darkbrown);
    rect(540, 60, 5, 5);
    
    fill(darkbrown);
    rect(545, 60, 5, 5);

    fill(darkbrown);
    rect(555, 60, 5, 5);

    fill(lightbrown);
    rect(560, 60, 5, 5);

    fill(darkbrown);
    rect(565, 60, 5, 5);
    
    fill(black);
    rect(570, 60, 5, 5);

    fill(black);
    rect(570, 65, 5, 5);

    fill(darkbrown);
    rect(575, 65, 5, 5);
    
    fill(black);
    rect(580, 65, 5, 5);

    fill(darkbrown);
    rect(580, 70, 5, 5);

    fill(black);
    rect(585, 70, 5, 5);

    fill(darkbrown);
    rect(585, 75, 5, 5);

    fill(black);
    rect(590, 75, 5, 5);

    fill(black);
    rect(590, 80, 5, 5);
    
    fill(lightbrown);
    rect(590, 85, 5, 5);

    fill(black);
    rect(595, 85, 5, 5);

    fill(lightbrown);
    rect(595, 90, 5, 5);

    fill(black);
    rect(600, 90, 5, 5);

    fill(lightbrown);
    rect(600, 95, 5, 5);
    
    fill(black);
    rect(605, 95, 5, 5);

    fill(black);
    rect(605, 100, 5, 5);
    
    fill(black);
    rect(600, 100, 5, 5);

    fill(black);
    rect(595, 100, 5, 5);

    fill(darkbrown);
    rect(590, 100, 5, 5);

    fill(black);
    rect(590, 105, 5, 5);
    
    fill(black);
    rect(590, 110, 5, 5);

    fill(black);
    rect(590, 115, 5, 5);

    fill(black);
    rect(585, 110, 5, 5);

    fill(black);
    rect(580, 110, 5, 5);

    fill(black);
    rect(580, 115, 5, 5);

    fill(black);
    rect(580, 120, 5, 5);

    fill(darkbrown);
    rect(575, 120, 5, 5);

    fill(darkishorange);
    rect(570, 120, 5, 5);

    fill(darkbrown);
    rect(570, 125, 5, 5);

    fill(lightbrown);
    rect(565, 125, 5, 5);
    
    fill(black);
    rect(565, 130, 5, 5);
    
    fill(darkbrown);
    rect(560, 130, 5, 5);

    fill(lightbrown);
    rect(555, 130, 5, 5);

    fill(darkbrown);
    rect(550, 130, 5, 5);
    
    fill(black);
    rect(545, 130, 5, 5);

    fill(lightbrown);
    rect(545, 125, 5, 5);

    fill(black);
    rect(540, 125, 5, 5);

    fill(darkishorange);
    rect(540, 120, 5, 5);

    fill(black);
    rect(535, 120, 5, 5);

    fill(lightbrown);
    rect(535, 115, 5, 5);

    fill(black);
    rect(530, 115, 5, 5);

    fill(black);
    rect(530, 110, 5, 5);

    fill(black);
    rect(525, 110, 5, 5);

    fill(darkbrown);
    rect(520, 110, 5, 5);

    fill(black);
    rect(520, 115, 5, 5);

    fill(black);
    rect(520, 105, 5, 5);

    fill(black);
    rect(520, 100, 5, 5);

    fill(black);
    rect(515, 100, 5, 5);

    fill(black);
    rect(510, 100, 5, 5);

    fill(darkbrown);
    rect(510, 95, 5, 5);

    fill(black);
    rect(505, 95, 5, 5);

    fill(black);
    rect(510, 90, 5, 5);

    fill(darkbrown);
    rect(515, 90, 5, 5);

    fill(black);
    rect(515, 85, 5, 5);

    fill(black);
    rect(520, 85, 5, 5);

    fill(black);
    rect(520, 80, 5, 5);

    fill(darkbrown);
    rect(525, 80, 5, 5);

    fill(black);
    rect(525, 75, 5, 5);

    fill(darkbrown);
    rect(525, 70, 5, 5);

    fill(black);
    rect(520, 70, 5, 5);

    fill(lightbrown);
    rect(530, 70, 5, 5);

    fill(black);
    rect(530, 65, 5, 5);

    fill(black);
    rect(535, 65, 5, 5);

    fill(black);
    rect(540, 65, 5, 5);

    fill(black);
    rect(545, 65, 5, 5);

    fill(black);
    rect(555, 65, 5, 5);

    fill(darkbrown);
    rect(550, 65, 5, 5);

    fill(darkbrown);
    rect(560, 65, 5, 5);

    fill(lightbrown);
    rect(565, 65, 5, 5);

    fill(lightbrown);
    rect(565, 70, 5, 5);

    fill(black);
    rect(570, 70, 5, 5);

    fill(darkbrown);
    rect(575, 70, 5, 5);

    fill(black);
    rect(560, 70, 5, 5);

    fill(black);
    rect(555, 70, 5, 5);

    fill(black);
    rect(550, 70, 5, 5);

    fill(darkbrown);
    rect(545, 70, 5, 5);

    fill(lightbrown);
    rect(540, 70, 5, 5);

    fill(lightbrown);
    rect(535, 70, 5, 5);

    fill(darkbrown);
    rect(530, 75, 5, 5);

    fill(lightbrown);
    rect(535, 75, 5, 5);

    fill(lightbrown);
    rect(540, 75, 5, 5);

    fill(lightbrown);
    rect(545, 75, 5, 5);

    fill(darkbrown);
    rect(550, 75, 5, 5);

    fill(darkbrown);
    rect(555, 75, 5, 5);

    fill(black);
    rect(560, 75, 5, 5);

    fill(darkbrown);
    rect(565, 75, 5, 5);

    fill(darkbrown);
    rect(570, 75, 5, 5);

    fill(darkbrown);
    rect(575, 75, 5, 5);

    fill(darkbrown);
    rect(580, 75, 5, 5);

    fill(lightbrown);
    rect(585, 80, 5, 5);

    fill(darkbrown);
    rect(580, 80, 5, 5);

    fill(darkbrown);
    rect(575, 80, 5, 5);

    fill(darkbrown);
    rect(570, 80, 5, 5);

    fill(darkbrown);
    rect(565, 80, 5, 5);

    fill(black);
    rect(560, 80, 5, 5);

    fill(darkbrown);
    rect(555, 80, 5, 5);

    fill(lightbrown);
    rect(550, 80, 5, 5);

    fill(darkbrown);
    rect(545, 80, 5, 5);

    fill(darkbrown);
    rect(540, 80, 5, 5);

    fill(black);
    rect(535, 80, 5, 5);

    fill(black);
    rect(530, 80, 5, 5);

    fill(darkbrown);
    rect(525, 85, 5, 5);

    fill(black);
    rect(530, 85, 5, 5);

    fill(darkbrown);
    rect(535, 85, 5, 5);

    fill(black);
    rect(540, 85, 5, 5);

    fill(black);
    rect(545, 85, 5, 5);

    fill(black);
    rect(550, 85, 5, 5);

    fill(darkbrown);
    rect(555, 85, 5, 5);

    fill(darkbrown);
    rect(560, 85, 5, 5);

    fill(darkbrown);
    rect(565, 85, 5, 5);

    fill(lightbrown);
    rect(570, 85, 5, 5);

    fill(black);
    rect(575, 85, 5, 5);

    fill(darkbrown);
    rect(580, 85, 5, 5);

    fill(darkbrown);
    rect(585, 85, 5, 5);

    fill(lightbrown);
    rect(590, 90, 5, 5);

    fill(lightbrown);
    rect(585, 90, 5, 5);

    fill(black);
    rect(580, 90, 5, 5);

    fill(lightbrown);
    rect(575, 90, 5, 5);

    fill(lightbrown);
    rect(570, 90, 5, 5);

    fill(black);
    rect(565, 90, 5, 5);

    fill(darkbrown);
    rect(560, 90, 5, 5);

    fill(lightbrown);
    rect(555, 90, 5, 5);

    fill(darkbrown);
    rect(550, 90, 5, 5);

    fill(black);
    rect(545, 90, 5, 5);

    fill(darkbrown);
    rect(540, 90, 5, 5);

    fill(lightbrown);
    rect(535, 90, 5, 5);

    fill(lightbrown);
    rect(530, 90, 5, 5);

    fill(black);
    rect(525, 90, 5, 5);

    fill(lightbrown);
    rect(520, 90, 5, 5);

    fill(lightbrown);
    rect(515, 95, 5, 5);

    fill(black);
    rect(520, 95, 5, 5);

    fill(darkbrown);
    rect(525, 95, 5, 5);

    fill(lightbrown);
    rect(530, 95, 5, 5);

    fill(darkbrown);
    rect(535, 95, 5, 5);

    fill(black);
    rect(540, 95, 5, 5);

    fill(black);
    rect(545, 95, 5, 5);

    fill(lightbrown);
    rect(550, 95, 5, 5);

    fill(lightbrown);
    rect(555, 95, 5, 5);

    fill(black);
    rect(560, 95, 5, 5);

    fill(lightbrown);
    rect(565, 95, 5, 5);

    fill(black);
    rect(570, 95, 5, 5);

    fill(darkbrown);
    rect(575, 95, 5, 5);

    fill(lightbrown);
    rect(580, 95, 5, 5);

    fill(black);
    rect(585, 95, 5, 5);

    fill(darkbrown);
    rect(590, 95, 5, 5);

    fill(lightbrown);
    rect(595, 95, 5, 5);

    fill(black);
    rect(585, 100, 5, 5);

    fill(black);
    rect(580, 100, 5, 5);

    fill(black);
    rect(575, 100, 5, 5);

    fill(darkbrown);
    rect(570, 100, 5, 5);

    fill(darkishorange);
    rect(565, 100, 5, 5);

    fill(lightbrown);
    rect(560, 100, 5, 5);

    fill(black);
    rect(555, 100, 5, 5);

    fill(lightbrown);
    rect(550, 100, 5, 5);

    fill(black);
    rect(545, 100, 5, 5);

    fill(darkishorange);
    rect(540, 100, 5, 5);

    fill(black);
    rect(535, 100, 5, 5);

    fill(darkbrown);
    rect(530, 100, 5, 5);

    fill(lightbrown);
    rect(525, 100, 5, 5);

    fill(darkbrown);
    rect(525, 105, 5, 5);

    fill(black);
    rect(530, 105, 5, 5);

    fill(lightbrown);
    rect(535, 105, 5, 5);

    fill(black);
    rect(540, 105, 5, 5);

    fill(black);
    rect(545, 105, 5, 5);

    fill(darkbrown);
    rect(550, 105, 5, 5);

    fill(black);
    rect(555, 105, 5, 5);

    fill(darkishorange);
    rect(560, 105, 5, 5);

    fill(black);
    rect(565, 105, 5, 5);

    fill(black);
    rect(570, 105, 5, 5);

    fill(lightbrown);
    rect(575, 105, 5, 5);

    fill(black);
    rect(580, 105, 5, 5);

    fill(lightbrown);
    rect(585, 105, 5, 5);

    fill(darkbrown);
    rect(575, 110, 5, 5);

    fill(white);
    rect(570, 110, 5, 5);

    fill(black);
    rect(565, 110, 5, 5);

    fill(lightpink);
    rect(560, 110, 5, 5);

    fill(lightbrown);
    rect(555, 110, 5, 5);

    fill(black);
    rect(550, 110, 5, 5);

    fill(black);
    rect(545, 110, 5, 5);

    fill(white);
    rect(540, 110, 5, 5);

    fill(darkbrown);
    rect(535, 110, 5, 5);

    fill(lightblue);
    rect(540, 115, 5, 5);

    fill(blue);
    rect(545, 115, 5, 5);

    fill(darkishorange);
    rect(550, 115, 5, 5);

    fill(lightpink);
    rect(555, 115, 5, 5);

    fill(lightpink);
    rect(560, 115, 5, 5);

    fill(blue);
    rect(565, 115, 5, 5);

    fill(lightblue);
    rect(570, 115, 5, 5);

    fill(darkishorange);
    rect(575, 115, 5, 5);

    fill(lightpink);
    rect(565, 120, 5, 5);

    fill(lightpink);
    rect(560, 120, 5, 5);

    fill(lightpink);
    rect(555, 120, 5, 5);

    fill(lightpink);
    rect(550, 120, 5, 5);

    fill(lightpink);
    rect(545, 120, 5, 5);

    fill(darkishorange);
    rect(550, 125, 5, 5);

    fill(darkishorange);
    rect(560, 125, 5, 5);

    fill(lightpink);
    rect(555, 125, 5, 5);
}


function draw() {

   

}
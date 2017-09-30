function setup() {
    var canvas = createCanvas(900, 500);
    canvas.parent('sketch-holder');
    background('white');

}

function draw() {

	background("black");
	
    var black = color('black') 
    var white = color('white')
    var red = color('#fd3b11');
    var yellow = color('#f7c217')
    var darkYellow = color ('#a98204')
    var skinColor = color('#edcdba');
   
    textSize(30)
    text("Warrior", 170, 125);
    text("White Mage", 600, 125);
    text("Black Mage", 150, 370);
    text("Red Mage", 600, 370);

	/* Quandrant */

	strokeWeight(1);
	stroke("white");
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);

    /* No Stroke For Characters */
    noStroke();
	fill("#3838d8");




    /* Quadrant Hover */

    /* Bottom Right */	
	if (mouseX > width/2 && mouseY > height/2) {
		rect(width/2, height/2, width, height);

        /* Red Mage Outline */
        fill(white)
        rect(700, 275, 5, 5)

        /* Red Mage Hate */

        /* Red Mage Hair */
        
        /* Red Mage Skin Color */




    /* Bottom Left */
	} else if (mouseX < width/2 && mouseY > height/2) {
		rect(0, height/2, width/2, height);

        /* Black Mage Outline */
        fill(white)
        rect(180, 275, 5, 5);

        /* Black Mage Hat */

        /* Black Mage Face*/


































    /* Upper Right */
	} else if (mouseX > width/2 && mouseY < height/2) {
		rect(width/2, 0, width, height/2);

        /* White Mage Outline */

        fill(black)
        rect(700, 25, 30, 5);
        rect(685, 30, 20, 5);
        rect(725, 30, 10, 5);
        rect(675, 35, 15, 5);
        rect(730, 35, 5, 25);
        rect(665, 40, 15, 5);
        rect(665, 45, 5, 5);
        rect(660, 45, 5, 5);
        rect(715, 45, 5, 5);     
        rect(660, 50, 5, 5);
        rect(655, 50, 5, 5);
        rect(720, 50, 5, 5);
        rect(655, 55, 5, 5);
        rect(650, 55, 5, 20);
        rect(665, 55, 30, 5);
        rect(725, 55, 5, 25);
        rect(660, 60, 10, 5);
        rect(695, 60, 5, 5);
        rect(660, 65, 5, 5);
        rect(670, 65, 5, 5);
        rect(700, 65, 5, 5);
        rect(655, 70, 5, 5);
        rect(665, 70, 5, 5);
        rect(675, 70, 15, 5);
        rect(655, 75, 5, 5);
        rect(660, 75, 5, 5);
        rect(670, 75, 5, 5);
        rect(680, 75, 5, 5);
        rect(720, 75, 5, 5);
        rect(660, 80, 15, 5);
        rect(680, 80, 5, 5);
        rect(700, 80, 5, 5);
        rect(720, 80, 5, 5);
        rect(670, 85, 40, 5);
        rect(710, 90, 5, 5);
        rect(715, 85, 5, 5);

        /* White Mage Hood */

        fill(white);
        rect(705, 30, 20, 5);
        rect(690, 35, 40, 5);
        rect(680, 40, 50, 5);
        rect(670, 45, 45, 5);
        rect(720, 45, 10, 5);
        rect(665, 50, 55, 5);
        rect(725, 50, 5, 5);
        rect(660, 55, 5, 5);
        rect(695, 55, 30, 5);
        rect(655, 60, 5, 5);
        rect(700, 60, 25, 5);
        rect(655, 65, 5, 5);
        rect(705, 65, 20, 5);
        rect(660, 70, 5, 5);
        rect(705, 70, 20, 5);
        rect(665, 75, 5, 5);
        rect(705, 75, 15, 5);
        rect(705, 80, 15, 5);
        rect(710, 85, 5, 5);

        /* White Mage Hair */

        fill(red);
        rect(670, 60, 25, 5);
        rect(665, 65, 5, 5);
        rect(680, 65, 20, 5);
        rect(670, 70, 5, 5);
        rect(695, 70, 10, 5);
        rect(700, 75, 5, 5);

        /* White Mage Skin Color*/

        fill(skinColor);
        rect(675, 65, 5, 5);
        rect(690, 70, 5, 5);
        rect(675, 75, 5, 5);
        rect(685, 75, 15, 5);
        rect(675, 80, 5, 5);
        rect(685, 80, 15, 5);


    /* Upper Left */
	} else {
		rect(0, 0, width/2, height/2);

        /* Warrior Outline */

        fill(black)
        rect(180, 25, 70, 5)        
        rect(175, 30, 10, 5)        
        rect(190, 30, 5, 5) 
        rect(200, 30, 5, 5)  
        rect(245, 30, 5, 5)  
        rect(175, 35, 5, 5)  
        rect(185, 35, 5, 5) 
        rect(235, 35, 25, 5) 
        rect(175, 40, 5, 5) 
        rect(255, 40, 5, 5) 
        rect(175, 45, 10, 5) 
        rect(245, 45, 15, 5) 
        rect(175, 50, 5, 5) 
        rect(250, 50, 10, 5) 
        rect(175, 55, 5, 5) 
        rect(185, 55, 5, 5)
        rect(205, 55, 10, 5) 
        rect(255, 55, 5, 5)
        rect(175, 60, 5, 5) 
        rect(185, 60, 5, 5)
        rect(195, 60, 15, 5)
        rect(245, 60, 15, 5)
        rect(175, 65, 20, 5) 
        rect(200, 65, 5, 5) 
        rect(250, 65, 5, 5) 
        rect(190, 70, 5, 5) 
        rect(200, 70, 5, 5) 
        rect(245, 70, 10, 5) 
        rect(190, 75, 5, 5) 
        rect(235, 75, 20, 5) 
        rect(190, 80, 5, 5)
        rect(220, 80, 10, 5) 
        rect(195, 85, 5, 5)
        rect(215, 85, 5, 5) 
        rect(200, 90, 15, 5)   

        /* Warrior Hair */

        fill(red);
        rect(185, 30, 5, 5);     
        rect(195, 30, 5, 5);  
        rect(205, 30, 40, 5);  
        rect(180, 35, 5, 5);  
        rect(190, 35, 45, 5);  
        rect(180, 40, 75, 5);
        rect(185, 45, 60, 5);
        rect(180, 50, 70, 5);
        rect(180, 55, 5, 5); 
        rect(190, 55, 5, 5); 
        rect(200, 55, 5, 5);
        rect(215, 55, 40, 5); 
        rect(180, 60, 5, 5); 
        rect(190, 60, 5, 5); 
        rect(215, 60, 30, 5);
        rect(215, 65, 10, 5);
        rect(235, 65, 15, 5); 
        rect(220, 70, 5, 5); 
        rect(235, 70, 10, 5); 
        rect(225, 75, 10, 5);

        /* Warrior Skin Color */

        fill(skinColor);
        rect(195, 55, 5, 5); 
        rect(210, 60, 5, 5);
        rect(195, 65, 5, 5); 
        rect(205, 65, 10, 5); 
        rect(225, 65, 10, 5); 
        rect(195, 70, 5, 5); 
        rect(205, 70, 15, 5); 
        rect(225, 70, 10, 5); 
        rect(195, 75, 30, 5);
        rect(195, 80, 25, 5);
        rect(200, 85, 15, 5);
	}
}
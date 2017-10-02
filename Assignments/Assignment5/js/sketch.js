function setup() {
    var canvas = createCanvas(900, 500);
    canvas.parent('sketch-holder');
}

function draw() {
	background("black");
    
	/* Colors */
    var backgroundColor = color('#f0eeee');
    var blueBackground = color('#3838d8');
    var black = color('black');
    var white = color('white');
    var red = color('#fd3b11');
    var yellow = color('#f7c217');
    var darkYellow = color('#a98204');
    var skinColor = color('#edcdba');

    /* Default Width and Height For Rects in Characters */
    var defaultWidth = 5;
    var defaultHeight = 5;

    /* Widths For Rects in Characters */
    var width0 = 10;
    var width1 = 15;
    var width2 = 20;
    var width3 = 25;
    var width4 = 30;
    var width5 = 35;
    var width6 = 40;
    var width7 = 45;
    var width8 = 50;
    var width9 = 55;
    var width10 = 60;
    var width11 = 70;
    var width12 = 75;

    /* Width, Height and Radius for Rects Containing Instructions */
    var whiteWidth = 400;
    var whiteHeight = 100;
    var blueWidth = 390;
    var blueHeight = 90;
    var boxRadius = 5;

    /* Text for Instructions, Classes, and Description */
    var charSelect = 'Character Select';
    var moveMouse = '(Move Mouse)';

    var warrior = 'Warrior';
    var warriorText1 = 'It takes quite a blow or spell to injure a well equipped warrior';
    var warriorText2 = 'The warrior is best fit for swords, hammers and other large weapons';

    var whiteMage = 'White Mage';
    var whiteText1 = 'Although lacking in offensive power';
    var whiteText2 = 'White Mages are valuable due to their healing abilities';

    var blackMage = 'Black Mage';
    var blackText1 = 'Black mages keep you sane when fighting groups of small enemies';
    var blackText2 = 'With his multiple-target attack spells, you can win tough battles with ease';

    var redMage = 'Red Mage';
    var redText1 = 'Red Mages are capable of using both black and white magic';
    var redText2 = 'They can also equip some heavy armor and some heavy weapons';
    var redText3 = 'They are perfect for the all-around type people';

    /* Classes */
    textSize(30);
    fill(white);
    text(warrior, 170, 125);
    text(whiteMage, 600, 125);
    text(blackMage, 150, 370);
    text(redMage, 600, 370);

	/* Quandrant */
	strokeWeight(6);
	stroke(backgroundColor);
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);

    /* No Stroke For Characters */
    noStroke();
	fill(blueBackground);

    /* Bottom Right Quadrant */
	if (mouseX > width/2 && mouseY > height/2) {
		rect(width/2, height/2, width/2, height/2);

        /* Red Mage Outline */
        fill(black);
        rect(660, 275, width9, defaultHeight);
        rect(650, 280, width1, defaultHeight);
        rect(685, 280, defaultWidth, defaultHeight);
        rect(710, 280, defaultWidth, defaultHeight);
        rect(650, 285, defaultWidth, defaultHeight);
        rect(695, 285, width2, defaultHeight);
        rect(650, 290, defaultWidth, defaultHeight);
        rect(700, 290, width2, defaultHeight);
        rect(650, 295, defaultWidth, defaultHeight);
        rect(695, 295, width0, defaultHeight);
        rect(715, 295, defaultWidth, defaultHeight);
        rect(645, 300, width0, defaultHeight);
        rect(710, 300, width0, defaultHeight);
        rect(640, 305, width0, defaultHeight);
        rect(705, 305, width0, defaultHeight);
        rect(630, 310, width1, defaultHeight);
        rect(695, 310, width1, defaultHeight);
        rect(630, 315, defaultWidth, defaultHeight);
        rect(665, 315, width0, defaultHeight);
        rect(695, 315, width0, defaultHeight);
        rect(630, 320, width5, defaultHeight);
        rect(700, 320, width0, defaultHeight);
        rect(650, 325, defaultWidth, defaultHeight);
        rect(660, 325, defaultWidth, defaultHeight);
        rect(705, 325, width0, defaultHeight);
        rect(650, 330, defaultWidth, defaultHeight);
        rect(710, 330, defaultWidth, defaultHeight);
        rect(650, 335, defaultWidth, defaultHeight);
        rect(710, 335, defaultWidth, defaultHeight);
        rect(655, 340, defaultWidth, defaultHeight);
        rect(710, 340, defaultWidth, defaultHeight);
        rect(660, 345, width9, defaultHeight);

        /* Red Mage Hat */
        fill(red);
        rect(665, 280, width2, defaultHeight);
        rect(655, 285, width4, defaultHeight);
        rect(655, 290, width3, defaultHeight);
        rect(655, 295, width3, defaultHeight);
        rect(690, 295, defaultWidth, defaultHeight);
        rect(705, 295, width0, defaultHeight);
        rect(655, 300, width2, defaultHeight);
        rect(680, 300, width4, defaultHeight);
        rect(650, 305, width9, defaultHeight);
        rect(645, 310, width7, defaultHeight);
        rect(635, 315, width4, defaultHeight);
        rect(655, 335, width2, defaultHeight);
        rect(660, 340, width1, defaultHeight);

        /* Red Mage Feather and Hair */
        fill(white);
        rect(690, 280, width2, defaultHeight);
        rect(685, 285, width0, defaultHeight);
        rect(680, 290, width2, defaultHeight);
        rect(680, 295, width0, defaultHeight);
        rect(675, 300, defaultWidth, defaultHeight);
        rect(690, 310, defaultWidth, defaultHeight);
        rect(675, 315, width2, defaultHeight);
        rect(675, 320, width3, defaultHeight);
        rect(675, 325, width4, defaultHeight);
        rect(675, 330, width5, defaultHeight);
        rect(675, 335, width5, defaultHeight);
        rect(675, 340, width5, defaultHeight);

        /* Red Mage Skin Color */
        fill(skinColor);
        rect(665, 320, width0, defaultHeight);
        rect(655, 325, defaultWidth, defaultHeight);
        rect(665, 325, width0, defaultHeight);
        rect(655, 330, width2, defaultHeight);

        /* Red Mage Description */
        textSize(12);
        fill(white);
        text(redText1, 525, 390);
        text(redText2, 505, 410);
        text(redText3, 550, 430);

    /* Bottom Left Quadrant */
	} else if (mouseX < width/2 && mouseY > height/2) {
		rect(0, height/2, width/2, height);

        /* Black Mage Outline and Face */
        fill(black);
        rect(230, 275, width2, defaultHeight);
        rect(220, 280, width1, defaultHeight);
        rect(245, 280, defaultWidth, defaultHeight);
        rect(215, 285, width0, defaultHeight);
        rect(245, 285, defaultWidth, defaultHeight);
        rect(205, 290, width1, defaultHeight);
        rect(240, 290, width0, defaultHeight);
        rect(195, 295, width1, defaultHeight);
        rect(240, 295, defaultWidth, defaultHeight);
        rect(165, 300, width5, defaultHeight);
        rect(235, 300, width0, defaultHeight);
        rect(165, 305, defaultWidth, defaultHeight);
        rect(235, 305, defaultWidth, defaultHeight);
        rect(165, 310, width0, defaultHeight);
        rect(235, 310, defaultHeight, defaultHeight);
        rect(170, 315, width2, defaultHeight);
        rect(230, 315, width0, defaultHeight);
        rect(180, 320, width3, defaultHeight);
        rect(235, 320, width0, defaultHeight);
        rect(180, 325, width0, defaultHeight);
        rect(195, 325, width3, defaultHeight);
        rect(240, 325, width0, defaultHeight);
        rect(180, 330, width0, defaultHeight);
        rect(195, 330, width0, defaultHeight);
        rect(210, 330, width2, defaultHeight);
        rect(245, 330, width0, defaultHeight);
        rect(180, 335, width3, defaultHeight);
        rect(210, 335, width4, defaultHeight);
        rect(250, 335, defaultWidth, defaultHeight);
        rect(185, 340, width11, defaultHeight);
        rect(190, 345, width5, defaultHeight);

        /* Black Mage Hat and Eyes */
        fill(yellow);
        rect(235, 280, width0, defaultHeight);
        rect(225, 285, width1, defaultHeight);
        rect(220, 290, width1, defaultHeight);
        rect(210, 295, width2, defaultHeight);
        rect(200, 300, width2, defaultHeight);
        rect(170, 305, width6, defaultHeight);
        rect(195, 310, width2, defaultHeight);
        rect(210, 315, width1, defaultHeight);
        rect(190, 325, defaultWidth, defaultHeight);
        rect(190, 330, defaultWidth, defaultHeight);
        rect(205, 330, defaultWidth, defaultHeight);
        rect(205, 335, defaultWidth, defaultHeight);

        /* Black Mage Hat Shade */
        fill(darkYellow);
        rect(240, 285, defaultWidth, defaultHeight);
        rect(235, 290, defaultWidth, defaultHeight);
        rect(230, 295, width0, defaultHeight);
        rect(220, 300, width1, defaultHeight);
        rect(210, 305, width3, defaultHeight);
        rect(175, 310, width2, defaultHeight);
        rect(215, 310, width2, defaultHeight);
        rect(190, 315, width2, defaultHeight);
        rect(225, 315, defaultWidth, defaultHeight);
        rect(205, 320, width4, defaultHeight);
        rect(220, 325, width2, defaultHeight);
        rect(230, 330, width1, defaultHeight);
        rect(240, 335, width0, defaultHeight);

        /* Black Mage Description */
        textSize(12);
        fill(white);
        text(blackText1, 45, 390);
        text(blackText2, 30, 410);

    /* Upper Right Quadrant */
	} else if (mouseX > width/2 && mouseY < height/2) {
		rect(width/2, 0, width, height/2);

        /* White Mage Outline */
        fill(black)
        rect(700, 25, width4, defaultHeight);
        rect(685, 30, width2, defaultHeight);
        rect(725, 30, width0, defaultHeight);
        rect(675, 35, width3, defaultHeight);
        rect(730, 35, defaultWidth, defaultHeight);
        rect(730, 40, defaultWidth, defaultHeight);
        rect(730, 45, defaultWidth, defaultHeight);
        rect(730, 50, defaultWidth, defaultHeight);
        rect(665, 40, width1, defaultHeight);
        rect(665, 45, defaultWidth, defaultHeight);
        rect(660, 45, defaultWidth, defaultHeight);
        rect(715, 45, defaultWidth, defaultHeight);
        rect(660, 50, defaultWidth, defaultHeight);
        rect(655, 50, defaultWidth, defaultHeight);
        rect(720, 50, defaultWidth, defaultHeight);
        rect(655, 55, defaultWidth, defaultHeight);
        rect(650, 55, defaultWidth, defaultHeight);
        rect(650, 60, defaultWidth, defaultHeight);
        rect(650, 65, defaultWidth, defaultHeight);
        rect(650, 70, defaultWidth, defaultHeight);
        rect(665, 55, width4, defaultHeight);
        rect(725, 55, defaultWidth, defaultHeight);
        rect(725, 60, defaultWidth, defaultHeight);
        rect(725, 65, defaultWidth, defaultHeight);
        rect(725, 70, defaultWidth, defaultHeight);
        rect(725, 75, defaultWidth, defaultHeight);
        rect(660, 60, width0, defaultHeight);
        rect(695, 60, defaultWidth, defaultHeight);
        rect(660, 65, defaultWidth, defaultHeight);
        rect(670, 65, defaultWidth, defaultHeight);
        rect(700, 65, defaultWidth, defaultHeight);
        rect(655, 70, defaultWidth, defaultHeight);
        rect(665, 70, defaultWidth, defaultHeight);
        rect(675, 70, width1, defaultHeight);
        rect(655, 75, defaultWidth, defaultHeight);
        rect(660, 75, defaultWidth, defaultHeight);
        rect(670, 75, defaultWidth, defaultHeight);
        rect(680, 75, defaultWidth, defaultHeight);
        rect(720, 75, defaultWidth, defaultHeight);
        rect(660, 80, width1, defaultHeight);
        rect(680, 80, defaultWidth, defaultHeight);
        rect(700, 80, defaultWidth, defaultHeight);
        rect(720, 80, defaultWidth, defaultHeight);
        rect(670, 85, defaultWidth, defaultHeight);
        rect(710, 90, defaultWidth, defaultHeight);
        rect(670, 90, defaultWidth, defaultHeight);
        rect(675, 95, defaultWidth, defaultHeight);
        rect(680, 100, width1, defaultHeight);
        rect(695, 95, defaultWidth, defaultHeight);
        rect(700, 90, defaultWidth, defaultHeight);
        rect(705, 90, defaultWidth, defaultHeight);
        rect(705, 85, defaultWidth, defaultHeight);
        rect(715, 85, defaultWidth, defaultHeight);

        /* White Mage Hood */
        fill(white);
        rect(705, 30, width2, defaultHeight);
        rect(690, 35, width6, defaultHeight);
        rect(680, 40, width8, defaultHeight);
        rect(670, 45, width7, defaultHeight);
        rect(720, 45, width0, defaultHeight);
        rect(665, 50, width9, defaultHeight);
        rect(725, 50, defaultWidth, defaultHeight);
        rect(660, 55, defaultWidth, defaultHeight);
        rect(695, 55, width4, defaultHeight);
        rect(655, 60, defaultWidth, defaultHeight);
        rect(700, 60, width3, defaultHeight);
        rect(655, 65, defaultWidth, defaultHeight);
        rect(705, 65, width2, defaultHeight);
        rect(660, 70, defaultWidth, defaultHeight);
        rect(705, 70, width2, defaultHeight);
        rect(665, 75, defaultWidth, defaultHeight);
        rect(705, 75, width1, defaultHeight);
        rect(705, 80, width1, defaultHeight);
        rect(710, 85, defaultWidth, defaultHeight);

        /* White Mage Hair */
        fill(red);
        rect(670, 60, width3, defaultHeight);
        rect(665, 65, defaultWidth, defaultHeight);
        rect(680, 65, width2, defaultHeight);
        rect(670, 70, defaultWidth, defaultHeight);
        rect(695, 70, width0, defaultHeight);
        rect(700, 75, defaultWidth, defaultHeight);

        /* White Mage Skin Color*/
        fill(skinColor);
        rect(675, 65, defaultWidth, defaultHeight);
        rect(690, 70, defaultWidth, defaultHeight);
        rect(675, 75, defaultWidth, defaultHeight);
        rect(685, 75, width1, defaultHeight);
        rect(675, 80, defaultWidth, defaultHeight);
        rect(685, 80, width1, defaultHeight);
        rect(675, 85, width4, defaultHeight);
        rect(675, 90, width3, defaultHeight);
        rect(680, 95, width1, defaultHeight);

        /* White Mage Description */
        textSize(12);
        fill(white);
        text(whiteText1, 580, 140);
        text(whiteText2, 530, 160);

    /* Upper Left Quadrant */
	} else {
        rect(0, 0, width/2, height/2);

        /* Warrior Outline */
        fill(black)
        rect(180, 25, width11, defaultHeight);        
        rect(175, 30, width0, defaultHeight);      
        rect(190, 30, defaultWidth, defaultHeight); 
        rect(200, 30, defaultWidth, defaultHeight)  
        rect(245, 30, defaultWidth, defaultHeight)
        rect(175, 35, defaultWidth, defaultHeight)  
        rect(185, 35, defaultWidth, defaultHeight) 
        rect(235, 35, width3, defaultHeight) 
        rect(175, 40, defaultWidth, defaultHeight) 
        rect(255, 40, defaultWidth, defaultHeight) 
        rect(175, 45, width0, defaultHeight) 
        rect(245, 45, width1, defaultHeight) 
        rect(175, 50, defaultWidth, defaultHeight) 
        rect(250, 50, width0, defaultHeight) 
        rect(175, 55, defaultWidth, defaultHeight) 
        rect(185, 55, defaultWidth, defaultHeight)
        rect(205, 55, width0, defaultHeight) 
        rect(255, 55, defaultWidth, defaultHeight)
        rect(175, 60, defaultWidth, defaultHeight) 
        rect(185, 60, defaultWidth, defaultHeight)
        rect(195, 60, width1, defaultHeight)
        rect(245, 60, width1, defaultHeight)
        rect(175, 65, width2, defaultHeight) 
        rect(200, 65, defaultWidth, defaultHeight) 
        rect(250, 65, defaultWidth, defaultHeight) 
        rect(190, 70, defaultWidth, defaultHeight) 
        rect(200, 70, defaultWidth, defaultHeight) 
        rect(245, 70, width0, defaultHeight) 
        rect(190, 75, defaultWidth, defaultHeight) 
        rect(235, 75, width2, defaultHeight) 
        rect(190, 80, defaultWidth, defaultHeight)
        rect(220, 80, width0, defaultHeight) 
        rect(195, 85, defaultWidth, defaultHeight)
        rect(215, 85, defaultWidth, defaultHeight) 
        rect(200, 90, width1, defaultHeight)   

        /* Warrior Hair */
        fill(red);
        rect(185, 30, defaultWidth, defaultHeight);   
        rect(195, 30, defaultWidth, defaultHeight);  
        rect(205, 30, width6, defaultHeight);  
        rect(180, 35, defaultWidth, defaultHeight);  
        rect(190, 35, width7, defaultHeight);  
        rect(180, 40, width12, defaultHeight);
        rect(185, 45, width10, defaultHeight);
        rect(180, 50, width11, defaultHeight);
        rect(180, 55, defaultWidth, defaultHeight); 
        rect(190, 55, defaultWidth, defaultHeight); 
        rect(200, 55, defaultWidth, defaultHeight);
        rect(215, 55, width6, defaultHeight); 
        rect(180, 60, defaultWidth, defaultHeight); 
        rect(190, 60, defaultWidth, defaultHeight); 
        rect(215, 60, width4, defaultHeight);
        rect(215, 65, width0, defaultHeight);
        rect(235, 65, width1, defaultHeight); 
        rect(220, 70, defaultWidth, defaultHeight); 
        rect(235, 70, width0, defaultHeight); 
        rect(225, 75, width0, defaultHeight);

        /* Warrior Skin Color */
        fill(skinColor);
        rect(195, 55, defaultWidth, defaultHeight); 
        rect(210, 60, defaultWidth, defaultHeight);
        rect(195, 65, defaultWidth, defaultHeight); 
        rect(205, 65, width0, defaultHeight); 
        rect(225, 65, width0, defaultHeight); 
        rect(195, 70, defaultWidth, defaultHeight); 
        rect(205, 70, width1, defaultHeight); 
        rect(225, 70, width0, defaultHeight); 
        rect(195, 75, width4, defaultHeight);
        rect(195, 80, width3, defaultHeight);
        rect(200, 85, width1, defaultHeight);

        /* Warrior Description */
        textSize(12);
        fill(white);
        text(warriorText1, 70, 140);
        text(warriorText2, 45, 160);

    /* else/if Ends Here */
	}

    /* Instructions */
    fill(backgroundColor);
    rect(250, 200, whiteWidth, whiteHeight, boxRadius);
    fill(blueBackground);
    rect(255, 205, blueWidth, blueHeight, boxRadius)

    fill(white);
    textSize(40);
    text(charSelect, 300, 250);

    textSize(20);
    text(moveMouse, 380, 280);
}
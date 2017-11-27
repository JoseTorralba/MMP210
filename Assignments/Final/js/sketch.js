// Buttons
//var buttonA;
//var buttonI;
//var buttonU;
//var buttonE;
//var buttonO;

function preload() {

	a = loadSound("audio/a.mp3");
	i = loadSound("audio/i.mp3");
	u = loadSound("audio/u.mp3");
	e = loadSound("audio/e.mp3");
	o = loadSound("audio/o.mp3");


	ka = loadSound("audio/ka.mp3");
	ki = loadSound("audio/ki.mp3");
	ku = loadSound("audio/ku.mp3");
	ke = loadSound("audio/ke.mp3");
	ko = loadSound("audio/ko.mp3");


	sa = loadSound("audio/sa.mp3");
	shi = loadSound("audio/shi.mp3");
	su = loadSound("audio/su.mp3");
	se = loadSound("audio/se.mp3");
	so = loadSound("audio/so.mp3");




}

function setup() {
    var canvas = createCanvas(900, 600);
    canvas.parent('sketch-holder');
    background(50);

/* 
=============================================
First Row of Buttons
=============================================
*/

    //Button 1
  
    buttonA = createButton('あ');
    buttonA.position(275, 300);
    buttonA.mousePressed(soundA);


    //Button 2

    buttonI = createButton('い');
    buttonI.position(325, 300);
    buttonI.mousePressed(soundI);


    //Button 3

    buttonU = createButton('う');
    buttonU.position(375, 300);
    buttonU.mousePressed(soundU);


    //Button 4

    buttonE = createButton('え');
    buttonE.position(425, 300);
    buttonE.mousePressed(soundE);


    //Button 5

    buttonO = createButton('お');
    buttonO.position(475, 300);
    buttonO.mousePressed(soundO);

/* 
=============================================
Second Row of Buttons
=============================================
*/


    //Button 6
  
    buttonKa = createButton('か');
    buttonKa.position(275, 350);
    buttonKa.mousePressed(soundKa);


    //Button 7

    buttonKi = createButton('き');
    buttonKi.position(325, 350);
    buttonKi.mousePressed(soundKi);


    //Button 8

    buttonKu = createButton('く');
    buttonKu.position(375, 350);
    buttonKu.mousePressed(soundKu);


    //Button 9

    buttonKe = createButton('け');
    buttonKe.position(425, 350);
    buttonKe.mousePressed(soundKe);


    //Button 10

    buttonKo = createButton('こ');
    buttonKo.position(475, 350);
    buttonKo.mousePressed(soundKo);

/* 
=============================================
Third Row of Buttons
=============================================
*/




    //Button 6
  
    buttonKa = createButton('さ');
    buttonKa.position(275, 400);
    buttonKa.mousePressed(soundSa);


    //Button 7

    buttonKi = createButton('し');
    buttonKi.position(325, 400);
    buttonKi.mousePressed(soundShi);


    //Button 8

    buttonKu = createButton('す');
    buttonKu.position(375, 400);
    buttonKu.mousePressed(soundSu);


    //Button 9

    buttonKe = createButton('せ');
    buttonKe.position(425, 400);
    buttonKe.mousePressed(soundSe);


    //Button 10

    buttonKo = createButton('そ');
    buttonKo.position(475, 400);
    buttonKo.mousePressed(soundSo);









}


/* 
=============================================
First Row
=============================================
*/

function soundA() {

	a.play();
}
function soundI() {

	i.play();
}

function soundU() {

	u.play();
}
function soundE() {

	e.play();
}

function soundO() {

	o.play();
}

/* 
=============================================
Second Row
=============================================
*/

function soundKa() {

	ka.play();
}
function soundKi() {

	ki.play();
}

function soundKu() {

	ku.play();
}
function soundKe() {

	ke.play();
}

function soundKo() {

	ko.play();
}

/* 
=============================================
Third Row
=============================================
*/

function soundSa() {

	sa.play();
}
function soundShi() {

	shi.play();
}

function soundSu() {

	su.play();
}
function soundSe() {

	se.play();
}

function soundSo() {

	so.play();
}
























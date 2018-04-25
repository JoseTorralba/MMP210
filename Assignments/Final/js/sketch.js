function Button(characters, x, y, audio) {
    this.button = createButton(characters);
    this.button.position(x, y);
    this.sound = loadSound(audio);
    this.button.mousePressed(() => {
        this.sound.play();
    });
}

/* Hiragana Audio */
const audio = [
    "audio/a.mp3",
    "audio/i.mp3",
    "audio/u.mp3",
    "audio/e.mp3",
    "audio/o.mp3",
    "audio/ka.mp3",
    "audio/ki.mp3",
    "audio/ku.mp3",
    "audio/ke.mp3",
    "audio/ko.mp3",
    "audio/sa.mp3",
    "audio/shi.mp3",
    "audio/su.mp3",
    "audio/se.mp3",
    "audio/so.mp3",
    "audio/ta.mp3",
    "audio/chi.mp3",
    "audio/tsu.mp3",
    "audio/te.mp3",
    "audio/to.mp3",
    "audio/na.mp3",
    "audio/ni.mp3",
    "audio/nu.mp3",
    "audio/ne.mp3",
    "audio/no.mp3",
    "audio/ha.mp3",
    "audio/hi.mp3",
    "audio/fu.mp3",
    "audio/he.mp3",
    "audio/ho.mp3",
    "audio/ma.mp3",
    "audio/mi.mp3",
    "audio/mu.mp3",
    "audio/me.mp3",
    "audio/mo.mp3",
    "audio/ya.mp3",
    "audio/hiccup.mp3",
    "audio/yu.mp3",
    "audio/hiccup.mp3",
    "audio/yo.mp3",
    "audio/ra.mp3",
    "audio/ri.mp3",
    "audio/ru.mp3",
    "audio/re.mp3",
    "audio/ro.mp3",
    "audio/wa.mp3",
    "audio/hiccup.mp3",
    "audio/hiccup.mp3",
    "audio/hiccup.mp3",
    "audio/o.mp3",
    "audio/n.mp3"
];

/* Hiragana Characters */
const characters = [
    'あ',
    'い',
    'う',
    'え',
    'お',
    'か',
    'き',
    'く',
    'け',
    'こ',
    'さ',
    'し',
    'す',
    'せ',
    'そ',
    'た',
    'ち',
    'つ',
    'て',
    'と',
    'な',
    'に',
    'ぬ',
    'ね',
    'の',
    'は',
    'ひ',
    'ふ',
    'へ',
    'ほ',
    'ま',
    'み',
    'む',
    'め',
    'も',
    'や',
    '///',
    'ゆ',
    '///',
    'よ',
    'ら',
    'り',
    'る',
    'れ',
    'ろ',
    'わ',
    '///',
    '///',
    '///',
    'を',
    'ん'
];

const buttons = [];

/* Buttons */
var phrase1;
var phrase2;
var phrase3;
var phrase4;
var phrase5;
var phrase6;

/* Hiragana Definition */
var hiragana = "Hiragana is one of three character sets used in the Japanese language. Each Hiragana character represents particular syllable. Hiragana is used widely to form a sentence by putting them together.";

/* Text Next to Character Chart */
var upperText = {
    x: 710,
    y: 80
};

var sideText = {
    x: 660,
    y: 170
};

function setup() {
    createCanvas(1400, 640);

    fill('white');
    /* Text Above Character Chart */
    textSize(25);
    text("a", upperText.x, upperText.y);
    text("i", upperText.x + 70, upperText.y);
    text("u", upperText.x + 140 , upperText.y);
    text("e", upperText.x + 210, upperText.y);
    text("o", upperText.x + 280, upperText.y);

    /* Text Side by Character Chart */
    text("k-", sideText.x, sideText.y);
    text("s-", sideText.x, sideText.y + 50);
    text("t-", sideText.x, sideText.y + 100);
    text("n-", sideText.x, sideText.y + 150);
    text("h-", sideText.x, sideText.y + 200);
    text("m-", sideText.x, sideText.y + 250);
    text("y-", sideText.x, sideText.y + 300);
    text("r-", sideText.x, sideText.y + 350);
    text("w-", sideText.x, sideText.y + 400);
    text("n-", sideText.x, sideText.y + 450);

    /* Text */
    textSize(30);
    text("Hiragana", 100, 50);

    textSize(20);
    text("*/// = No Character Given", 350, 50);

    textSize(20);
	text(hiragana, 100, 100, 450, 300);

    /* Phrases */
    text("Basic Phrases", 100, 270);

  	phrase1 = new Button('おはよう (Good Morning)', 100, 460, "audio/goodmorning.mp3");
  	phrase2 = new Button('ありがとうございます (Thank You)', 100, 520, "audio/thankyou.mp3");
  	phrase3 = new Button('ごめんなさい (Sorry)', 100, 580, "audio/sorry.mp3");
  	phrase4 = new Button('すみません (Excuse Me)', 100, 640, "audio/excuseme.mp3");
  	phrase5 = new Button('さようなら (Goodbye)', 100, 700, "audio/goodbye.mp3");
  	phrase6 = new Button('おやすみなさい (Goodnight)', 100, 760, "audio/goodnight.mp3");

    /* Chart of Characters */
    var x = 700;
    var y = 250;

    for (let i = 0; i < characters.length; i++){

        buttons[i] = new Button(characters[i], x, y, audio[i]);

        x += 70;

        if (x > 990) {
            x = 700;
            y += 50;
        }

        if (y > 900) 
            y = 300;        
    } 
}
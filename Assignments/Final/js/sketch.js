function Button(characters, x, y, audio) {
    this.button = createButton(characters);
    this.button.position(x, y);
    this.sound = loadSound(audio);
    this.button.mousePressed(() => {
        this.sound.play();
    });
}

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

var phrase1;
var phrase2;
var phrase3;
var phrase4;
var phrase5;
var phrase6;

var hiragana = "Hiragana is the basic Japanese phonetic alphabet. It represents every sound in the Japanese language. Therefore, you can theoretically write everything in hiragana. However, because Japanese is written with no spaces, this will create nearly indecipherable text.";

function setup() {
    createCanvas(1400, 900);
    background(220);

    /* Text Above Character Chart */
    textSize(25);
    text("a", 710, 80);
    text("i", 780, 80);
    text("u", 850, 80);
    text("e", 920, 80);
    text("o", 990, 80);

    /* Text Side by Character Chart */
    text("k-", 660, 170);
    text("s-", 660, 220);
    text("t-", 660, 270);
    text("n-", 660, 320);
    text("h-", 660, 370);
    text("m-", 660, 420);
    text("y-", 660, 470);
    text("r-", 660, 520);
    text("w-", 660, 570);
    text("n-", 660, 620);

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

    /* Text */
    textSize(30);
    fill('black');

    text("Hiragana", 100, 50);

    textSize(25);
	text(hiragana, 100, 100, 450, 300);

    /* Phrases */
    text("Basic Phrases", 100, 425);

  	phrase1 = new Button('おはよう (Good Morning)', 100, 600, "audio/goodmorning.mp3");
  	phrase2 = new Button('ありがとうございます (Thank You)', 100, 650, "audio/thankyou.mp3");
  	phrase3 = new Button('ごめんなさい (Sorry)', 100, 700, "audio/sorry.mp3");
  	phrase4 = new Button('すみません (Excuse Me)', 100, 750, "audio/excuseme.mp3");
  	phrase5 = new Button('さようなら (Goodbye)', 100, 800, "audio/goodbye.mp3");
  	phrase6 = new Button('おやすみなさい (Goodnight)', 100, 850, "audio/Goodnight.mp3");



}
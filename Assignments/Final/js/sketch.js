var hiragana = "Hiragana is the basic Japanese phonetic alphabet. It represents every sound in the Japanese language. Therefore, you can theoretically write everything in hiragana. However, because Japanese is written with no spaces, this will create nearly indecipherable text.";

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
    "audio/yu.mp3",
    "audio/yo.mp3",

    "audio/ra.mp3",
    "audio/ri.mp3",
    "audio/ru.mp3",
    "audio/re.mp3",
    "audio/ro.mp3",

    "audio/wa.mp3",
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
    'ゆ',
    'よ',

    'ら',
    'り',
    'る',
    'れ',
    'ろ',

    'わ',
    'を',

    'ん'
];

const buttons = [];

function setup() {
    var canvas = createCanvas(900, 800);
    canvas.parent('sketch-holder');
    background(220);

    var x = 300;
    var y = 400;
    for (let i = 0; i < characters.length; i++){
        

        buttons[i] = new Button(characters[i], x, y, audio[i]);
        x += 70;

        if (x > 600) {
            x = 300;
            y += 50;
        }

        if (y > 900) 
            y = 300;        
    }

    textSize(30);
    fill('black');

    text("Hiragana", 400, 50);

    textSize(25);
	text(hiragana, 450, 120, 450, 300);


}
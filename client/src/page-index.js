import { signin } from "./chat-api";

let spriteList = [];

const langs = [
	"Hello World",
	"مرحبا بالعالم",
	"Salam Dünya",
	"Прывітанне Сусвет",
	"Здравей свят",
	"ওহে বিশ্ব",
	"Zdravo svijete",
	"Hola món",
	"Kumusta Kalibutan",
	"Ahoj světe",
	"Helo Byd",
	"Hej Verden",
	"Hallo Welt",
	"Γειά σου Κόσμε",
	"Hello World",
	"Hello World",
	"Hola Mundo",
	"Tere, Maailm",
	"Kaixo Mundua",
	"سلام دنیا",
	"Hei maailma",
	"Bonjour le monde",
	"Dia duit an Domhan",
	"Ola mundo",
	"હેલો વર્લ્ડ",
	"Sannu Duniya",
	"नमस्ते दुनिया",
	"Hello World",
	"Pozdrav svijete",
	"Bonjou Mondyal la",
	"Helló Világ",
	"Բարեւ աշխարհ",
	"Halo Dunia",
	"Ndewo Ụwa",
	"Halló heimur",
	"Ciao mondo",
	"שלום עולם",
	"こんにちは世界",
	"Hello World",
	"Გამარჯობა მსოფლიო",
	"Сәлем Әлем",
	"សួស្តី​ពិភពលោក",
	"ಹಲೋ ವರ್ಲ್ಡ್",
	"안녕하세요 월드",
	"Ciao mondo",
	"ສະ​ບາຍ​ດີ​ຊາວ​ໂລກ",
	"Labas pasauli",
	"Sveika pasaule",
	"Hello World",
	"Kia Ora",
	"Здраво свету",
	"ഹലോ വേൾഡ്",
	"Сайн уу",
	"हॅलो वर्ल्ड",
	"Hai dunia",
	"Hello dinja",
	"မင်္ဂလာပါကမ္ဘာလောက",
	"नमस्कार संसार",
	"Hallo Wereld",
	"Hei Verden",
	"Moni Dziko Lapansi",
	"ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ",
	"Witaj świecie",
	"Olá Mundo",
	"Salut Lume",
	"Привет, мир",
	"හෙලෝ වර්ල්ඩ්",
	"Ahoj svet",
	"Pozdravljen, svet",
	"Waad salaaman tihiin",
	"Përshendetje Botë",
	"Здраво Свете",
	"Lefatše Lumela",
	"Halo Dunya",
	"Hej världen",
	"Salamu, Dunia",
	"ஹலோ வேர்ல்ட்",
	"హలో వరల్డ్",
	"Салом Ҷаҳон",
	"สวัสดีชาวโลก",
	"Kamusta Mundo",
	"Selam Dünya",
	"Привіт Світ",
	"ہیلو ورلڈ",
	"Salom Dunyo",
	"Chào thế giới",
	"העלא וועלט",
	"Mo ki O Ile Aiye",
	"你好，世界",
	"你好，世界",
	"你好，世界",
	"Sawubona Mhlaba"
];

document.onmousemove = event =>{
  spriteList.push(new Char(event.x,event.y));
  console.log("yes");
}

window.addEventListener("load", () => {
  document.querySelector("form").onsubmit = function () {
    return signin(this);
  };
});

class Char{
  constructor(x,y);
}
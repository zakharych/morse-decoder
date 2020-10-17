const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    let n;
    let world = "";
    let dot = 10;
    let dashes = 11;
    for (let i = 0; i < expr.length; i += 10) {
        let strSimnol = expr.slice(i, (n = i + 10));
        if (strSimnol[1] == "*") {
            space = " ";
            world += space;
        } else {
            let s;
            let letter = "";
            for (let k = 0; k < strSimnol.length; k += 2) {
                let key = strSimnol.slice(k, (s = k + 2));
                switch (key) {
                    case "00":
                        letter = letter;
                        break;
                    case "10":
                        letter += ".";
                        break;
                    case "11":
                        letter += "-";
                        break;

                    default:
                        break;
                }
            }

            for (var code in MORSE_TABLE) {
                var value = MORSE_TABLE[code];
                if (code == letter) {
                    world += value;
                    break;
                }
            }
        }
    }
    return world
}

module.exports = {
    decode
}
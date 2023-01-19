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
    let res = '';
    for (let i = 0; i < expr.length; i += 10) {
        switch (expr.slice(i, i + 10)) {
        case '**********': res += ' '; break;
        case '0000001011': res += 'a'; break;
        case '0011101010': res += 'b'; break;
        case '0011101110': res += 'c'; break;
        case '0000111010': res += 'd'; break;
        case '0000000010': res += 'e'; break;
        case '0010101110': res += 'f'; break;
        case '0000111110': res += 'g'; break;
        case '0010101010': res += 'h'; break;
        case '0000001010': res += 'i'; break;
        case '0010111111': res += 'j'; break;
        case '0000111011': res += 'k'; break;
        case '0010111010': res += 'l'; break;
        case '0000001111': res += 'm'; break;
        case '0000001110': res += 'n'; break;
        case '0000111111': res += 'o'; break;
        case '0010111110': res += 'p'; break;
        case '0011111011': res += 'q'; break;
        case '0000101110': res += 'r'; break;
        case '0000101010': res += 's'; break;
        case '0000000011': res += 't'; break;
        case '0000101011': res += 'u'; break;
        case '0010101011': res += 'v'; break;
        case '0000101111': res += 'w'; break;
        case '0011101011': res += 'x'; break;
        case '0011101111': res += 'y'; break;
        case '0011111010': res += 'z'; break;
        case '1011111111': res += '1'; break;
        case '1010111111': res += '2'; break;
        case '1010101111': res += '3'; break;
        case '1010101011': res += '4'; break;
        case '1010101010': res += '5'; break;
        case '1110101010': res += '6'; break;
        case '1111101010': res += '7'; break;
        case '1111111010': res += '8'; break;
        case '1111111110': res += '9'; break;
        case '1111111111': res += '0'; break;
        }
    }
    return res;
            
        // write your solution here
}

module.exports = {
    decode
}
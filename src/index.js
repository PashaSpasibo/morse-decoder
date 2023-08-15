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
        let symbolCode = expr.substring(i, i+10);
        if (symbolCode === '**********'){res += ' '}
        else{
            let symbol = '';
            for( let j = 0; j<symbolCode.length; j += 2){
                if (symbolCode.substring(j,j+2) === '11'){symbol += '-'}
                else if (symbolCode.substring(j,j+2) === '10'){symbol += '.'}
            }
            res += MORSE_TABLE[symbol]
        }
    }
    return res
}

module.exports = {
    decode
}
 console.log(decode('0000101010000000101100101010110000000010**********00000011110000000010'))
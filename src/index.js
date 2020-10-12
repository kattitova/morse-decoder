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
      let arr = expr.match(/.{1,10}/g);
  let letter = [];
  let elem = [];
  let j = 0;
  let decodeLetter = [];
  for (item of arr){
    letter = item.match(/.{1,2}/g);
      for (i = letter.length - 1; i>=0 ; i-- ){
        switch(letter[i]){
          case '10': elem[i] = '.'; break;
          case '11': elem[i] = '-'; break;
          case '**': elem[i] = ' '; break;
          default: break;
        }
      }
      decodeLetter[j] = elem.join('');
      elem = [];
      j++;
  }
  let word = decodeLetter.map(function(x){
    return (x == '     ') ? ' ' : MORSE_TABLE[x];
  });

  return word.join('');
}

module.exports = {
    decode
}
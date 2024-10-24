const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let res = '';
  let str = '';
  const arr = expr.match(/.{2}/g);
  for (let i = 0; i < arr.length; i += 5) {
    str = '';
    const partArr = arr.slice(i, i + 5);
    partArr.forEach((el) => {
      switch (el) {
        case '00':
          return;
        case '10':
          str += '.';
          return;
        case '11':
          str += '-';
          return;
        case '**':
          str += '**';
          return;
      }
    });

    if (MORSE_TABLE.hasOwnProperty(str)) {
      res += MORSE_TABLE[str];
    } else {
      res += ' ';
    }
  }

  return res;
}

module.exports = {
  decode,
};

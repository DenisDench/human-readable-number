const digits = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
}
const tens = {
    0: '',
    1: '',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
}

module.exports = function toReadable (number) {
  let result = '';
  let twoLastDigits = Number(String(number).substr(-2, 2));
  let lessThen100 = '';
  
  if (twoLastDigits < 20) {
    lessThen100 = digits[twoLastDigits];
  };
  
  if (20 <= twoLastDigits && twoLastDigits < 100) {
    for (let key in tens) {
      if (key == Number(String(twoLastDigits)[0])) {
        lessThen100 += tens[key];
      }
    }
    for (let key in digits) {
      if (key == Number(String(twoLastDigits)[1])) {
        lessThen100 += ' ' + digits[key];
      }
    }
  }
  if (number == 0) return 'zero';
  if (number < 100) return lessThen100.trim();
  if (number >= 100) {
    for (let key in digits) {
      if (key == Number(String(number)[0])) {
        result += digits[key] + ' hundred ';
      }
    }
    return (result + lessThen100).trim();
  }
}

module.exports = function toReadable(number) {
    // let number = 909;
    let result = '';
    let numberToString = number.toString();
    const digits = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    const doubleFigures = {
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen'
    };
    const doubleFigures2 = {
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    const tens = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };
  
    if (number in digits) {
        result = digits[number];
    }
    
    if (number in doubleFigures2) {
        result = doubleFigures2[number];
    }
    
    if (number == 10) {
        result = 'ten';
    }
    if (number >= 20 && number <= 99) {
        if (numberToString[1] !== '0') {
            result = (tens[numberToString[0]] + ' ' + digits[numberToString[1]]);
        } else if (numberToString[1] == '0') {
            result = tens[numberToString[0]];
        }
    }
    if (number >= 100 && number <= 999) {
        if (numberToString[1] === '0' && numberToString[2] === '0') result = (digits[numberToString[0]] + ' ' + 'hundred'); // 100, 200, 300 ...
        else if (numberToString[1] === '0') result = digits[numberToString[0]] + ' ' + 'hundred' + ' ' + digits[numberToString[2]]; // 609, 708 ...
        else if (numberToString[2] === '0') result = (digits[numberToString[0]] + ' ' + 'hundred' + ' ' + tens[numberToString[1]]);
        // 690, 770, 810, 930...
        else if (numberToString[1] && numberToString[2] !== '0' && numberToString[1] !== '1') result = (digits[numberToString[0]] + ' ' + 'hundred' + ' ' + tens[numberToString[1]] + ' ' + digits[numberToString[2]]);
        // ..., 520, 528, ..., 999.
        else if (numberToString[1] === '1') result = (digits[numberToString[0]] + ' ' + 'hundred' + ' ' + doubleFigures[numberToString[2]]);
        //..., 611, 612,... 619, ..., 717,...
    }
    return result;
};
// console.log(result)


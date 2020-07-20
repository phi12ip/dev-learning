const numerals = { '1000': ['M','R','Q'], '100': ['C','D','M'], '10': ['X','L','C'], '1': ['I','V','X'] }
const toNumeralStr = (number,[one,five,ten]) => {
    switch (number) {
        case 9: return one + ten;
        case 8: return five + one + one + one;
        case 7: return five + one + one;
        case 6: return five + one;
        case 5: return five;
        case 4: return one + five;
        case 3: return one + one + one;
        case 2: return one + one;
        case 1: return one;
    }
}
const convertToRoman = (num) => {
    let str = '';
    for (let n = 1000; n>=1;n = n/10) {
        if (n>num) continue;
        let mult = Math.floor(num/n);
        str += toNumeralStr(mult,numerals[n.toString()]);
        num -= n * mult;
    }
    return str;
}
let x = 2344;
let string = `${x}: ${convertToRoman(x)}`;
console.log(string);
function add (a, b) {
    let aLen = a.length;
    let bLen = b.length;
    let length;

    if (aLen > bLen) {
        length = aLen;
        b = b.padStart(length, '0');
    } else {
        length = bLen;
        a = a.padStart(length, '0')
    }

    let x = a.split('');
    let y = b.split('');
    let tmp = 0;
    let result = [];

    for (let i = 0; i < length; i ++) {
        let digitSum = Number(x.pop()) + Number(y.pop()) + tmp;

        if (isNaN(digitSum)) {
            return NaN;
        }

        if (digitSum > 9) {
            tmp = 1;
            digitSum = digitSum % 10;
        } else {
            tmp = 0;
        }
        result.unshift(digitSum.toString());
    }
    
    return result.join('');
}


module.exports = { add };
module.exports = function toReadable (number) {
    let numName = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let dozen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tenName = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let newArr = [];

    let Arr = number.toString().split('');

    let countNumber = Arr.length;
    for(let i = 0; i < countNumber; i++) {
        if(Arr.length === 3) {
            newArr.push(numName[Arr[0]] + ' hundred');
            Arr.shift();
        } else if (Arr.length === 2) {
            if (Arr[0] === '1') {
                newArr.push(dozen[Arr[1]]);
                break;
            } else if (Arr[0] === '0') {
                Arr.shift();
            } else {
                newArr.push(tenName[Arr[0]]);
                Arr.shift();
            }

        } else if (Arr.length === 1) {
            if(Arr[0] === '0' && countNumber > 1) {
                newArr.push();
            } else {
                newArr.push(numName[Arr[0]]);
            }
        }
    }
    return newArr.join(' ').trim();
}
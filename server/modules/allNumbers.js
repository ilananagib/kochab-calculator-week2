function calc() {
   const addingNumbers;
   const subtractingNumbers;
   const dividingNumbers;
   const multiplyingNumbers;
    let oper = $('#operators').val();

    if (oper === '+') {
        $('#result').val(x + y);
    }
    if (oper === '-') {
        $('#result').val(x - y);
    }
    else if (oper === '/') {
        $('#result').val(x / y);
    }
    else if (oper === '*') {
        $('#result').val(x * y);
    }

}
module.exports = calc;


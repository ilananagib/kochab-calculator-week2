console.log('Client is loaded!');

$(document).ready(onReady);

function onReady(){
    console.log('jQuery is loaded!');
    $('#equalSign').on('click', addNumbers);
}
function addNumbers(){ //Do I need one for each operation?
    const addingNumbers = {
        x : $("#inputOne").val(),
        y : $("#inputTwo").val(),
        type : 'Add'
}
$.ajax({
    type: 'POST',
    url: '/add-numbers',
})
.then(function(response){
    console.log(response);

});

function subtractNumbers(){
    const subtractingNumbers = {
        x : $("#inputOne").val(),
        y : $("#inputTwo").val(),
        type : 'Subtract'
}
$.ajax({
    type: 'POST',
    url: '/subtract-numbers',
})
.then(function(response){
    console.log(response);

});

}
function divideNumbers(){
    const dividingNumbers = {
        x : $("#inputOne").val(),
        y : $("#inputTwo").val(),
        type : 'Divide'
}
$.ajax({
    type: 'POST',
    url: '/divide-numbers',
})
.then(function(response){
    console.log(response);

});
}

function multiplyNumbers(){
    const multiplyingNumbers = {
        x : $("#inputOne").val(),
        y : $("#inputTwo").val(),
        type : 'Multiply'
}
$.ajax({
    type: 'POST',
    url: '/multiply-numbers',
})
.then(function(response){
    console.log(response);

});
}

function calc() {

    let oper = $('#operators').val();
 
     if (oper === 'Add') {
         $('#result').val(x + y);
     }
     if (oper === 'Subtract') {
         $('#result').val(x - y);
     }
     else if (oper === 'Divide') {
         $('#result').val(x / y);
     }
     else if (oper === 'Multiply') {
         $('#result').val(x * y);
     }
 
 }
}
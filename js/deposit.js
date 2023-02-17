
// function for reading input value
function getInputFieldValueByID(inputFieldID){
    const inputField = document.getElementById(inputFieldID);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';

    return inputFieldValue;
}

// function for reading element
function getElemenValuetById(elementID){
    const element = document.getElementById(elementID);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);

    return elementValue;
}

// function for setting new value to element
function setTextElementByID(elementID, newValue){
    const textElement = document.getElementById(elementID);
    textElement.innerText = newValue;
}

// for deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueByID('deposit-field');

    const previousDepositTotal = getElemenValuetById('deposit-total');
    // console.log(newDepositAmount);

    const newDepositTotal = previousDepositTotal + newDepositAmount;

    const previousBalanceTotal =  getElemenValuetById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementByID('deposit-total', newDepositTotal);
    setTextElementByID('balance-total', newBalanceTotal);
})


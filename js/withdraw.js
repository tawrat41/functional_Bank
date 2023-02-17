// for withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueByID('withdraw-field');

    const previousWithdrawTotal = getElemenValuetById('withdraw-total');
    // console.log(newWithdrawAmount);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;


    const previousBalanceTotal =  getElemenValuetById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    setTextElementByID('withdraw-total', newWithdrawTotal)
    setTextElementByID('balance-total', newBalanceTotal);
})
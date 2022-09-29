/**
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw_field');
    const newWihdrawFieldString = withdrawField.value ;
    const newwithdrawFieldNumber = parseFloat(newWihdrawFieldString);
    withdrawField.value = '';

    if (isNaN(newwithdrawFieldNumber)) {
        alert('please type a valid Number')
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw_total');
    const previouswithdrawTotalString = withdrawTotalElement.innerText;
    const previouswithdrawTotalNumber = parseFloat(previouswithdrawTotalString);   
    const newwithdrawTotal = newwithdrawFieldNumber + previouswithdrawTotalNumber;
    withdrawTotalElement.innerText = newwithdrawTotal ;

    const totalBlance = document.getElementById('blance_total');
    const totalBlanceString = totalBlance.innerText;
    const newTotalBlanceNumber = parseFloat(totalBlanceString)

    const currentTotalBlance = newTotalBlanceNumber - newwithdrawFieldNumber  ;
    totalBlance.innerText = currentTotalBlance;


})
Recap Now-----------------------------!!!

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFeild = document.getElementById('withdraw_field');
    const newWithdrawFieldString = withdrawFeild.value;
    const newWithdrawFieldNumber = parseFloat(newWithdrawFieldString);
    withdrawFeild.value = '';

    if(isNaN(newWithdrawFieldNumber)){
        alert('Please type a Correct Number')
        return;
    }

    const totalWithdraw = document.getElementById('withdraw_total');
    const totalWithdrawString = totalWithdraw.innerText;
    const totalWithdrawNumber = parseFloat(totalWithdrawString);
    totalWithdraw.innerText =  totalWithdrawNumber + newWithdrawFieldNumber ;

    const totalBlance = document.getElementById('blance_total');
    const totalBlanceString = totalBlance.innerText;
    const totalBlanceNumber = parseFloat(totalBlanceString);
    
    const currentTotalBlance =totalBlanceNumber - newWithdrawFieldNumber;
    totalBlance.innerText = currentTotalBlance;
})
Recap Now-----------------------------!!!
 */
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputField = document.getElementById('withdraw_field');
    const newInputFieldValueStyring = inputField.value
    const newInputFieldValueNumber = parseFloat(newInputFieldValueStyring);
    inputField.value = '';

    if (isNaN(newInputFieldValueNumber)) {
        alert('Please Provide a Valid Number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw_total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotalNumber = parseFloat(previousWithdrawTotalString);
    withdrawTotalElement.innerText = previousWithdrawTotalNumber + newInputFieldValueNumber;

    const blanceTotalElement = document.getElementById('blance_total')
    const previousBlanceTotalVlueString = blanceTotalElement.innerText;
    const previousBlanceTotalVlueNumber = parseFloat(previousBlanceTotalVlueString) ;

    blanceTotalElement.innerText = previousBlanceTotalVlueNumber - newInputFieldValueNumber ;

})
/**
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit_field');
    const newDepositFieldString = depositField.value ;
    const newDepositFieldNumber = parseFloat(newDepositFieldString);
    depositField.value = '';

    if (isNaN(newDepositFieldNumber)) {
        alert('please type a valid Number')
        return;
    }
    const depositTotalElement = document.getElementById('deposit_total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotalNumber = parseFloat(previousDepositTotalString);   
    const newDepositTotal = newDepositFieldNumber + previousDepositTotalNumber;
    depositTotalElement.innerText = newDepositTotal ;

    const totalBlance = document.getElementById('blance_total');
    const totalBlanceString = totalBlance.innerText;
    const newTotalBlanceNumber = parseFloat(totalBlanceString)

    const currentTotalBlance = newTotalBlanceNumber + newDepositFieldNumber  ;
    totalBlance.innerText = currentTotalBlance;


})
Recap Now--------------------------!!!

document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositFeild = document.getElementById('deposit_field');
    const newDepositFieldString = depositFeild.value;
    const newDepositFieldNumber = parseFloat(newDepositFieldString);
    depositFeild.value = '';

    if(isNaN(newDepositFieldNumber)){
        alert('Please type a Correct Number')
        return;
    }

    const totalDeposit = document.getElementById('deposit_total');
    const totalDepositString = totalDeposit.innerText;
    const totalDepositNumber = parseFloat(totalDepositString);
    totalDeposit.innerText =  totalDepositNumber + newDepositFieldNumber ;

    const totalBlance = document.getElementById('blance_total');
    const totalBlanceString = totalBlance.innerText;
    const totalBlanceNumber = parseFloat(totalBlanceString);
    
    const currentTotalBlance =totalBlanceNumber + newDepositFieldNumber;
    totalBlance.innerText = currentTotalBlance;
})
Recap Now--------------------------!!!
 **/
document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputField = document.getElementById('deposit_field');
    const newInputFieldValueStyring = inputField.value
    const newInputFieldValueNumber = parseFloat(newInputFieldValueStyring);
    inputField.value = '';

    if (isNaN(newInputFieldValueNumber)) {
        alert('Please Provide a Valid Number');
        return;
    }

    const depositTotalElement = document.getElementById('deposit_total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotalNumber = parseFloat(previousDepositTotalString);
    depositTotalElement.innerText = previousDepositTotalNumber + newInputFieldValueNumber;

    const blanceTotalElement = document.getElementById('blance_total')
    const previousBlanceTotalVlueString = blanceTotalElement.innerText;
    const previousBlanceTotalVlueNumber = parseFloat(previousBlanceTotalVlueString) ;

    blanceTotalElement.innerText = previousBlanceTotalVlueNumber + newInputFieldValueNumber ;

})
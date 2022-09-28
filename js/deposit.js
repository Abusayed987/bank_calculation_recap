document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit_field');
    const newDepositFieldString = depositField.value ;
    const newDepositFieldNumber = parseFloat(newDepositFieldString);
    depositField.value = '';

    //if else  > isNAN 
    const depositTotalElement = document.getElementById('deposit_total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotalNumber = parseFloat(previousDepositTotalString);
    
    const newDepositTotal = newDepositFieldNumber + previousDepositTotalNumber;

    depositTotalElement.innerText = newDepositTotal ;



})
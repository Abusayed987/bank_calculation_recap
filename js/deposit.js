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
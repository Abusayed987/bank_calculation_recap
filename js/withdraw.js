document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw_field');
    const newWihdrawFieldString = withdrawField.value ;
    const newDepositFieldNumber = parseFloat(newWihdrawFieldString);
    withdrawField.value = '';

    if (isNaN(newDepositFieldNumber)) {
        alert('please type a valid Number')
        return;
    }
    const depositTotalElement = document.getElementById('withdraw_total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotalNumber = parseFloat(previousDepositTotalString);   
    const newDepositTotal = newDepositFieldNumber + previousDepositTotalNumber;
    depositTotalElement.innerText = newDepositTotal ;

    const totalBlance = document.getElementById('blance_total');
    const totalBlanceString = totalBlance.innerText;
    const newTotalBlanceNumber = parseFloat(totalBlanceString)

    const currentTotalBlance = newTotalBlanceNumber - newDepositFieldNumber  ;
    totalBlance.innerText = currentTotalBlance;


})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInputValue = getInputValue('withdraw-input');
    const previousWithdrawAmount = getPreviousValue('withdraw');
    const totalWithdrawAmount = withdrawInputValue + previousWithdrawAmount;
    if (totalWithdrawAmount >= 0) {
        displayNewAmount('withdraw', totalWithdrawAmount);
    }

    const netBalance = getPreviousValue('net-balance');
    if (netBalance >= withdrawInputValue) {
        const afterWithdrawTotalAmount = netBalance - withdrawInputValue;
        displayNewAmount('net-balance', afterWithdrawTotalAmount);
    }
    else {
        alert('Insufficient Balance');
    }


});
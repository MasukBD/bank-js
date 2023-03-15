document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositInputValue = depositInput.value;
    const depositDisplay = document.getElementById('deposit');
    const currentAmont = depositDisplay.innerText;
    const NetBalance = document.getElementById('net-balance');
    const previousBalance = NetBalance.innerText;
    if (depositInputValue === '') {
        alert('Please Input correct Amount');
        return;
    }
    else {
        // deposit Amount 
        const newTotalDeposit = parseFloat(currentAmont) + parseFloat(depositInputValue);
        depositDisplay.innerText = newTotalDeposit;
        // net balance Amount 
        const AfterDepositTotal = parseFloat(previousBalance) + parseFloat(depositInputValue);
        NetBalance.innerText = AfterDepositTotal;
    }

    depositInput.value = '';
});

// withdraw section 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;
    const withdrawDisplay = document.getElementById('withdraw');
    const currentAmont = withdrawDisplay.innerText;
    const NetBalance = document.getElementById('net-balance');
    const previousBalance = NetBalance.innerText;
    if (withdrawInputValue === '') {
        alert('Please Input Correct Value');
    }
    else {
        if (parseFloat(previousBalance) >= parseFloat(withdrawInputValue)) {
            const withdrawAmount = parseFloat(withdrawInputValue) + parseFloat(currentAmont);
            withdrawDisplay.innerText = withdrawAmount;
            const afterWithdrawNetBalance = parseFloat(previousBalance) - parseFloat(withdrawInputValue);
            NetBalance.innerText = afterWithdrawNetBalance;
        }
        else {
            alert('Insufficient Balance');
        }

    }
    withdrawInput.value = '';
})

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInputValue = getInputValue('deposit-input');
    const previousDepositAmount = getPreviousValue('deposit');
    const newDepositTotal = depositInputValue + previousDepositAmount;
    if (newDepositTotal >= 0) {
        displayNewAmount('deposit', newDepositTotal);
    }
    const previousNetBalance = getPreviousValue('net-balance');
    const afterDepositNetBalance = previousNetBalance + depositInputValue;
    if (afterDepositNetBalance >= 0) {
        displayNewAmount('net-balance', afterDepositNetBalance);
    }
});

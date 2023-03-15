// common function 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    if (inputFieldValueString === '') {
        alert('please Input Valid Number');
    }
    else {
        const inputFieldValue = parseFloat(inputFieldValueString);
        inputField.value = '';
        return inputFieldValue;
    }

}

function getPreviousValue(elementId) {
    const previousAmount = document.getElementById(elementId);
    const previousAmountString = previousAmount.innerText;
    const previousAmountTotal = parseFloat(previousAmountString);
    return previousAmountTotal;
}

function displayNewAmount(Id, newValue) {
    const displayArea = document.getElementById(Id);
    displayArea.innerText = newValue;

}
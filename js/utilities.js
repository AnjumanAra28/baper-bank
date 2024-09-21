function getInputValueById(id){
    const inputFieldValue = document.getElementById(id).value;
    const inputFieldNumber = parseFloat(inputFieldValue);
    return inputFieldNumber;
}

function getAmountValueById(id){
    const balanceAmount = document.getElementById(id).innerText;
    const balanceAmountNumber = parseFloat(balanceAmount);
    return balanceAmountNumber;
}

function showSection(id){
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('withdraw-money-section').classList.add('hidden');
    document.getElementById('transactions-section').classList.add('hidden');
    const showSection = document.getElementById(id).classList.remove('hidden')
    return showSection;
}
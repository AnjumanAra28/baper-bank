document.getElementById('withdraw-btn').addEventListener('click',function(event){
    event.preventDefault();
    const withdrawInputValue = getInputValueById('withdraw-input-field');
    const withdrawPinValue = getInputValueById('withdraw-pin');
    const balance = getAmountValueById('account-balance');
    if(withdrawPinValue === 1234 && withdrawInputValue < balance){
        const newBalance = balance - withdrawInputValue;
        document.getElementById('account-balance').innerText = newBalance;
        
        const p = document.createElement('p');
        p.innerText = `Money Withdrawn: ${withdrawInputValue} | New balance: ${newBalance}`
        document.getElementById('transactions-section').appendChild(p)
    }
    else {
        alert('Invalid amount or pin')
        return;
    }
})

document.getElementById('cash-out-btn').addEventListener('click',function(){
    showSection('withdraw-money-section');
})
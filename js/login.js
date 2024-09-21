document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const getAddMoneyValue =  getInputValueById('add-money-field');
    const getPinValue = getInputValueById('pin-number-field')

    if (getPinValue === 1234){
        const balance = getAmountValueById('account-balance');
        const newBalance = balance + getAddMoneyValue;
        document.getElementById('account-balance').innerText = newBalance;

        const p = document.createElement('p');
        p.innerText = `Money added: ${getAddMoneyValue} | New balance: ${newBalance}`
        document.getElementById('transactions-section').appendChild(p)
    }
    else{
        alert('Invalid input value or pin number')
        return;
    }
    
})
document.getElementById('add-btn').addEventListener('click',function(){
    showSection('add-money-section');
})
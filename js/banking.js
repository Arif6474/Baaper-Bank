document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount of deposit
   const depositInput = document.getElementById('deposit-input');
   const newDepositAmountText = depositInput.value;
   const newDepositAmount = parseFloat(newDepositAmountText);
   
   const depositTotal = document.getElementById('deposit-total');
   const previousDepositAmountText = depositTotal.innerText;
   const previousDepositAmount = parseFloat(previousDepositAmountText);
   const newDepositTotal = previousDepositAmount + newDepositAmount;

   depositTotal.innerText = newDepositTotal;

// update balance
   const tolalBalance =document.getElementById('total-balance');
   const tolalBalanceText = tolalBalance.innerText;
   const previousTotalBalance = parseFloat(tolalBalanceText);

   const newTotalBalance = previousTotalBalance + newDepositAmount;

   tolalBalance.innerText = newTotalBalance;

  
  //clear the deposit input field
  depositInput.value = '';
})

 // handle withdraw balance
 document.getElementById('withdraw-button').addEventListener('click', function (){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
   

    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const tolalBalance = document.getElementById('total-balance');
    const previousTotalBalanceText = tolalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceText);

    const newTotalBalance = previousTotalBalance - newWithdrawAmount;
    tolalBalance.innerText = newTotalBalance;
    
    // clear the withdraw input field
    withdrawInput.value = '';

})
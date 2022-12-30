
document.getElementById('calculate-btn').addEventListener('click', function(){
   const playerCalculateTotal = document.getElementById('player-claculte-btn')
   const playerCalculateString = playerCalculateTotal.value;
   const playerCalculateNumber = parseFloat(playerCalculateString)
   // playerCalculateTotal.value = '';

   const displayPlayerExpense = document.getElementById('display-ply-expenses')
   const displayPlayerField = displayPlayerExpense.innerText;
   const displayPlayerNumber = parseFloat(displayPlayerField);
   const displayPlayerMultiple = playerCalculateNumber * 5;
   
   displayPlayerExpense.innerText = displayPlayerMultiple;

})

document.getElementById('total-amount-btn').addEventListener('click', function(){
   const managerInputField = document.getElementById('manager-input-field');
   const managerInputString = managerInputField.value;
   const managerInputNumber = parseFloat(managerInputString);
   
   const coachInputField = document.getElementById('coach-input-field');
   const coachInputString = coachInputField.value;
   const coachInputNumber = parseFloat(coachInputString);

   const managerCoachTotal = managerInputNumber + coachInputNumber;

   const playerExpenseField = document.getElementById('display-ply-expenses');
   const playerExpenseString = playerExpenseField.innerText;
   const playerExpenseNumber = parseFloat(playerExpenseString);

   const totalAmauntNumber = managerCoachTotal + playerExpenseNumber;

   const totalAmauntField = document.getElementById('total-amount-field')
   const totalAmauntString = totalAmauntField.innerText;
   totalAmauntField.innerText = totalAmauntNumber;

})
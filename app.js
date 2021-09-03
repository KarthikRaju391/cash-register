const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const doneBtn = document.querySelector('#done-btn');
const message = document.getElementById('message');
const numOfNotes = document.querySelectorAll('.no-of-notes');

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

const showMessage = (msg) => {
  message.innerText = msg;
  message.classList.replace('hide-message', 'show-message');
}

const hideMessage = () => {
  message.classList.replace('show-message', 'hide-message');
}

const calculateChange = (amount) => {
  for(let i = 0; i< availableNotes.length; i++){
    const numberOfNotes = Math.floor(amount / availableNotes[i]);
    amount = amount % availableNotes[i];
    numOfNotes[i].innerText = numberOfNotes;
  }
}

function validateBill(){
  hideMessage();
  if(Number(billAmount.value) < 0){
    showMessage("Bill amount must be more than 0!");
  }
  if(Number(billAmount.value) > 0){
    if(Number(cashGiven.value) > Number(billAmount.value)){
      const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
      calculateChange(amountToBeReturned);
    }
    if(Number(cashGiven.value) < Number(billAmount.value)){
      showMessage(`Let's wash the plates together!`);
    }
  }
}

doneBtn.addEventListener('click', validateBill);




